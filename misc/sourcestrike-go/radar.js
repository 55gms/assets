/** A cached overhead drawing of the actual walkable map, in game world units. */
export class TacticalRadar {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nav = null;
    this.map = null;
    this.cellSize = .5;
    this.mapPixelsPerUnit = 4;
  }

  rebuild(nav) {
    this.nav = nav;
    this.map = null;
    if (!nav?.length) return;
    let minX = Infinity, minZ = Infinity, maxX = -Infinity, maxZ = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    for (const node of nav) {
      const [x, y, z] = node.position;
      if (!Number.isFinite(x + y + z)) continue;
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
    if (!Number.isFinite(minX)) return;
    const cell = this.cellSize;
    const columns = Math.round((maxX - minX) / cell) + 1;
    const rows = Math.round((maxZ - minZ) / cell) + 1;
    // The imported map is about 206 × 176 cells. Bound allocation for bad input.
    if (columns * rows > 4_000_000) return;
    const heights = new Float32Array(columns * rows).fill(-Infinity);
    for (const node of nav) {
      const [x, y, z] = node.position;
      if (!Number.isFinite(x + y + z)) continue;
      const column = Math.round((x - minX) / cell);
      const row = Math.round((z - minZ) / cell);
      const index = row * columns + column;
      heights[index] = Math.max(heights[index], y);
    }
    const bitmap = typeof OffscreenCanvas !== 'undefined'
      ? new OffscreenCanvas(columns * 2 + 4, rows * 2 + 4)
      : this.canvas.ownerDocument.createElement('canvas');
    bitmap.width = columns * 2 + 4;
    bitmap.height = rows * 2 + 4;
    const ctx = bitmap.getContext('2d');
    const occupied = (column, row) => column >= 0 && row >= 0 && column < columns && row < rows && heights[row * columns + column] !== -Infinity;
    const heightRange = Math.max(1, maxY - minY);
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const height = heights[row * columns + column];
        if (height === -Infinity) continue;
        const elevation = (height - minY) / heightRange;
        const value = Math.round(57 + elevation * 28);
        const x = column * 2 + 2, z = row * 2 + 2;
        ctx.fillStyle = `rgb(${value},${value + 8},${value + 10})`;
        ctx.fillRect(x, z, 2, 2);
        // A thin wall edge makes narrow passages legible without widening them.
        ctx.fillStyle = '#a6afaa75';
        if (!occupied(column - 1, row)) ctx.fillRect(x, z, .6, 2);
        if (!occupied(column + 1, row)) ctx.fillRect(x + 1.4, z, .6, 2);
        if (!occupied(column, row - 1)) ctx.fillRect(x, z, 2, .6);
        if (!occupied(column, row + 1)) ctx.fillRect(x, z + 1.4, 2, .6);
      }
    }
    this.map = bitmap;
    this.originX = minX - cell / 2 - 2 / this.mapPixelsPerUnit;
    this.originZ = minZ - cell / 2 - 2 / this.mapPixelsPerUnit;
  }

  draw({nav, player, bots = [], yaw = 0, sites = [], mode = 'bomb'}) {
    if (!player?.pos || !this.ctx) return;
    if (nav !== this.nav) this.rebuild(nav);
    const ctx = this.ctx;
    const width = this.canvas.width, height = this.canvas.height;
    const radius = Math.min(width, height) / 2 - 1;
    const cx = width / 2, cy = height / 2;
    const uiScale = Math.min(width, height) / 220;
    const scale = 3 * uiScale;
    const angle = Number.isFinite(yaw) ? yaw : 0;
    const cosine = Math.cos(angle), sine = Math.sin(angle);
    const screen = position => {
      const x = (position.x - player.pos.x) * scale;
      const z = (position.z - player.pos.z) * scale;
      return [x * cosine - z * sine, x * sine + z * cosine];
    };
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath(); ctx.arc(0, 0, radius, 0, Math.PI * 2); ctx.clip();
    ctx.fillStyle = '#030607';
    ctx.fillRect(-cx, -cy, width, height);

    ctx.save();
    ctx.rotate(angle);
    // World-aligned grid stays continuous while the player moves and turns.
    const extent = radius * 1.45;
    const grid = 8 * scale;
    const startX = -((player.pos.x * scale) % grid);
    const startZ = -((player.pos.z * scale) % grid);
    ctx.strokeStyle = '#77878a14'; ctx.lineWidth = .6 * uiScale;
    ctx.beginPath();
    for (let x = startX - Math.ceil(extent / grid) * grid; x < extent; x += grid) {
      ctx.moveTo(x, -extent); ctx.lineTo(x, extent);
    }
    for (let z = startZ - Math.ceil(extent / grid) * grid; z < extent; z += grid) {
      ctx.moveTo(-extent, z); ctx.lineTo(extent, z);
    }
    ctx.stroke();
    if (this.map) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(this.map,
        (this.originX - player.pos.x) * scale,
        (this.originZ - player.pos.z) * scale,
        this.map.width * scale / this.mapPixelsPerUnit,
        this.map.height * scale / this.mapPixelsPerUnit);
    }
    ctx.restore();

    if (mode === 'bomb') {
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = `bold ${15 * uiScale}px Arial`;
      for (const site of sites) {
        if (!site.position) continue;
        let [x, y] = screen(site.position);
        const distance = Math.hypot(x, y);
        const limit = radius - 12 * uiScale;
        if (distance > limit) { x *= limit / distance; y *= limit / distance; }
        ctx.fillStyle = '#d0ba5730';
        ctx.beginPath(); ctx.arc(x, y, 10 * uiScale, 0, Math.PI * 2); ctx.fill();
        ctx.lineWidth = 2 * uiScale; ctx.strokeStyle = '#141c19';
        ctx.strokeText(site.name, x, y);
        ctx.fillStyle = '#e4d46d'; ctx.fillText(site.name, x, y);
      }
    }
    for (const bot of bots) {
      if (!bot.alive || bot === player || !bot.pos) continue;
      const friendly = bot.team === player.team;
      if (!friendly && !bot.visibleToPlayer) continue;
      let [x, y] = screen(bot.pos);
      const distance = Math.hypot(x, y);
      const limit = radius - 7 * uiScale;
      const edge = distance > limit;
      if (edge) {
        if (!friendly) continue;
        x *= limit / distance; y *= limit / distance;
      }
      ctx.fillStyle = friendly ? '#b5d2dd' : '#df6e5e';
      ctx.strokeStyle = '#112024'; ctx.lineWidth = 1.3 * uiScale;
      ctx.beginPath(); ctx.arc(x, y, (friendly ? 3.8 : 3.4) * uiScale, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      const elevation = bot.pos.y - player.pos.y;
      if (Math.abs(elevation) > 2 && !edge) {
        const direction = elevation > 0 ? -1 : 1;
        ctx.beginPath();
        ctx.moveTo(x - 2.7 * uiScale, y + direction * 6 * uiScale);
        ctx.lineTo(x, y + direction * 8.5 * uiScale);
        ctx.lineTo(x + 2.7 * uiScale, y + direction * 6 * uiScale);
        ctx.closePath(); ctx.fill();
      }
    }
    // Player stays centered and faces up; only the map rotates with view yaw.
    ctx.fillStyle = '#f0de77'; ctx.strokeStyle = '#202721'; ctx.lineWidth = 1.2 * uiScale;
    ctx.beginPath();
    ctx.moveTo(0, -8 * uiScale); ctx.lineTo(-5 * uiScale, 5 * uiScale);
    ctx.lineTo(0, 2.5 * uiScale); ctx.lineTo(5 * uiScale, 5 * uiScale);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = '#bfc8b950'; ctx.lineWidth = uiScale;
    ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.stroke();
  }

  dispose() {
    if (this.map) { this.map.width = 1; this.map.height = 1; }
    this.map = null;
    this.nav = null;
  }
}
