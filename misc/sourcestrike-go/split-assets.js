// Reassemble map binaries split for CDN delivery before the game requests them.
const chunks = {"assets/de_dust2/props-indices.bin":["props-indices.bin.part1","props-indices.bin.part2","props-indices.bin.part3"],"assets/de_dust2/props-normals.bin":["props-normals.bin.part1","props-normals.bin.part2","props-normals.bin.part3"],"assets/de_dust2/props.bin":["props.bin.part1","props.bin.part2","props.bin.part3","props.bin.part4","props.bin.part5"],"assets/de_inferno/collision.bin":["collision.bin.part1","collision.bin.part2","collision.bin.part3"],"assets/de_inferno/props-indices.bin":["props-indices.bin.part1","props-indices.bin.part2","props-indices.bin.part3"],"assets/de_inferno/props-normals.bin":["props-normals.bin.part1","props-normals.bin.part2","props-normals.bin.part3"],"assets/de_inferno/props.bin":["props.bin.part1","props.bin.part2","props.bin.part3","props.bin.part4","props.bin.part5"]};
const originalFetch = window.fetch.bind(window);
window.fetch = async (input, init) => {
  const url = new URL(input instanceof Request ? input.url : input, document.baseURI);
  const marker = "/misc/sourcestrike-go/";
  const index = url.pathname.indexOf(marker);
  const file = index < 0 ? "" : decodeURIComponent(url.pathname.slice(index + marker.length));
  const parts = chunks[file];
  if (!parts) return originalFetch(input, init);
  const method = (init?.method || (input instanceof Request ? input.method : "GET")).toUpperCase();
  if (method === "HEAD") return new Response(null, {status: 200});
  if (method !== "GET") return originalFetch(input, init);
  const prefix = file.slice(0, file.lastIndexOf("/") + 1);
  const responses = await Promise.all(parts.map(part => originalFetch(new URL(prefix + part, document.baseURI))));
  for (const response of responses) if (!response.ok) return response;
  const buffers = await Promise.all(responses.map(response => response.arrayBuffer()));
  return new Response(new Blob(buffers, {type: "application/octet-stream"}), {status: 200});
};
