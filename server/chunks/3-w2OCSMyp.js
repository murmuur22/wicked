const load = async ({ fetch }) => {
  let MAP_REFS = [
    "/WORK/easter_egg/MAP.json"
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

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte--J7hudYI.js')).default;
const universal_id = "src/routes/cgi/+page.js";
const imports = ["_app/immutable/nodes/3.8Y9Kv6M6.js","_app/immutable/chunks/scheduler.7mXBUu_C.js","_app/immutable/chunks/index.LzOAh-iM.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/WindowShortcut.14p5imFX.js","_app/immutable/chunks/index.g3sMKgk0.js","_app/immutable/chunks/Window.svelte_svelte_type_style_lang.iKML-Jua.js"];
const stylesheets = ["_app/immutable/assets/Window.aR4uyc8-.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-w2OCSMyp.js.map
