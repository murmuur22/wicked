const load = async ({ fetch }) => {
  let MAP_REFS = [
    "/WORK/out_of_gas/MAP.json",
    "/WORK/masked_encounter/MAP.json",
    "/WORK/prince_tut/MAP.json"
  ];
  let MAPS = [];
  let res;
  for (let i = 0; i < MAP_REFS.length; i++) {
    res = await fetch(MAP_REFS[i]);
    MAPS.push(await res.json());
  }
  return {
    MAPS
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte--F_ejxxL.js')).default;
const universal_id = "src/routes/environmental/+page.js";
const imports = ["_app/immutable/nodes/4.-vDIj1x4.js","_app/immutable/chunks/scheduler.7mXBUu_C.js","_app/immutable/chunks/index.LzOAh-iM.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/WindowShortcut.14p5imFX.js","_app/immutable/chunks/index.g3sMKgk0.js","_app/immutable/chunks/Window.svelte_svelte_type_style_lang.iKML-Jua.js"];
const stylesheets = ["_app/immutable/assets/Window.aR4uyc8-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-sqDh9mNH.js.map
