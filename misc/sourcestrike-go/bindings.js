export const ACTIONS = [
  ['forward','Move forward','KeyW'],['backward','Move backward','KeyS'],
  ['left','Move left','KeyA'],['right','Move right','KeyD'],
  ['jump','Jump','Space'],['crouch','Crouch','ControlLeft'],['walk','Walk slowly','ShiftLeft'],
  ['fire','Fire / throw','Mouse0'],['aim','Secondary attack / scope','Mouse2'],
  ['reload','Reload','KeyR'],['interact','Pick up / plant / defuse','KeyE'],
  ['inspect','Inspect weapon','KeyF'],['drop','Drop weapon / item','KeyG'],
  ['buy','Buy','KeyB'],['scoreboard','Scoreboard','Tab'],
  ['primary','Primary weapon','Digit1'],['secondary','Pistol','Digit2'],
  ['knife','Knife','Digit3'],['grenade','Cycle grenades','Digit4'],['bomb','C4','Digit5']
];
export const DEFAULT_BINDS = Object.fromEntries(ACTIONS.map(([id,,code])=>[id,code]));
export function allowedCode(code) {
  return typeof code==='string' && /^(Key[A-Z]|Digit[0-9]|Numpad[0-9]|Mouse[0-4]|Space|Tab|Enter|Backspace|CapsLock|Shift(Left|Right)|Control(Left|Right)|Alt(Left|Right)|Arrow(Up|Down|Left|Right)|Home|End|PageUp|PageDown|Insert|Delete|Bracket(Left|Right)|Semicolon|Quote|Comma|Period|Slash|Backslash|Minus|Equal|Backquote|F[1-4]|F[6-9]|F10)$/.test(code);
}
export function normalizeBinds(value) {
  const result={...DEFAULT_BINDS};
  // Apply swaps so saved or corrupted data can never leave duplicate bindings.
  for(const [action] of ACTIONS) if(allowedCode(value?.[action])) assignBind(result,action,value[action]);
  return result;
}
export function assignBind(binds,action,code) {
  if(!(action in DEFAULT_BINDS)||!allowedCode(code))return false;
  const other=Object.keys(DEFAULT_BINDS).find(key=>key!==action&&binds[key]===code);
  if(other) binds[other]=binds[action];
  binds[action]=code;return other||true;
}
export function canonicalCode(code,binds=DEFAULT_BINDS) {
  if(code==='Escape')return code;
  const action=Object.keys(DEFAULT_BINDS).find(key=>binds[key]===code);
  return action?DEFAULT_BINDS[action]:null;
}
export function keyLabel(code) {
  if(!code)return '—';
  if(code.startsWith('Key'))return code.slice(3);
  if(code.startsWith('Digit'))return code.slice(5);
  if(code.startsWith('Mouse'))return 'MOUSE '+({Mouse0:1,Mouse1:3,Mouse2:2,Mouse3:4,Mouse4:5}[code]);
  return ({ControlLeft:'L CTRL',ControlRight:'R CTRL',ShiftLeft:'L SHIFT',ShiftRight:'R SHIFT',AltLeft:'L ALT',AltRight:'R ALT',Space:'SPACE',Tab:'TAB',Escape:'ESC'})[code]||code.replace('Arrow','').replace('Numpad','NUM ').toUpperCase();
}
