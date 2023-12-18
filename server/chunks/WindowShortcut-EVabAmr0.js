import { c as create_ssr_component, a as subscribe, b as escape, v as validate_component, d as add_attribute, f as set_store_value, e as each } from './ssr-BfCb-ShB.js';
import { w as writable } from './index-fLhKcJju.js';

const windows = writable([]);
const css = {
  code: ".arrow.svelte-1nxafw1{border-left:6px solid transparent;border-top:6px solid transparent;border-bottom:6px solid rgb(250 250 249);border-right:6px solid rgb(250 250 249)}",
  map: null
};
const Window = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let zIndex;
  let $windows, $$unsubscribe_windows;
  $$unsubscribe_windows = subscribe(windows, (value) => $windows = value);
  let dimensions = { x: 100, y: 100, width: 100, height: 100 };
  let { title = "" } = $$props;
  let { left = dimensions.x } = $$props;
  let { top = dimensions.y } = $$props;
  let { width = dimensions.width } = $$props;
  let { height = dimensions.height } = $$props;
  let windowID;
  let display = "flex";
  function show() {
    display = "flex";
    set_store_value(windows, $windows = [...$windows.filter((item) => item !== windowID), windowID], $windows);
  }
  function hide() {
    display = "none";
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  $$result.css.add(css);
  zIndex = $windows.indexOf(windowID);
  $$unsubscribe_windows();
  return `  <div style="${"left: " + escape(left, true) + "px; top: " + escape(top, true) + "px; width: " + escape(width, true) + "px; height: " + escape(height, true) + "px; z-index: " + escape(zIndex, true) + "; display: " + escape(display, true) + ";"}" class="bg-stone-950 border-stone-50 border-2 rounded-sm absolute overflow-hidden flex flex-col justify-between "><div class="sticky flex justify-between items-center w-full bg-stone-950 border-stone-50 border-b-2 h-5 cursor-move select-none "><p class="text-stone-50 font-display px-1 pl-2">${escape(title)}</p> <div class="bg-stone-700 relative flex justify-around items-center border-l-2 w-6"><button class="text-stone-50 h-full w-full text-xs font-terminal" data-svelte-h="svelte-i5jknq">✖</button></div></div> <div class="overflow-y-auto overscroll-contain w-full h-full">${slots.default ? slots.default({}) : ``}</div> <button class="absolute bottom-0 right-0 arrow cursor-nwse-resize w-0 h-0  svelte-1nxafw1"></button> </div>`;
});
const Filmstrip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let curr_image = 0;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `<div class="flex flex-col gap-2"><img${add_attribute("src", content[curr_image].url, 0)}${add_attribute("alt", content[curr_image].title, 0)} class="rounded-sm pointer-events-none select-none pt-5 px-5"> <p class="text-stone-50 text-center border-b-2 border-stone-700 mb-4">${escape(content[curr_image].title)}</p> <ul class="flex overflow-x-auto gap-4 px-5">${each(content, ({ type, title, url }, i) => {
    return `${i == curr_image ? `<li class="shrink-0 w-1/4 scale-90" id="${"item-" + escape(i, true)}"><button class="opacity-60 border-2 border-stone-700 rounded-sm"><img${add_attribute("src", url, 0)}${add_attribute("alt", title, 0)} class="pointer-events-none select-none rounded-sm w-full"></button> </li>` : `<li class="shrink-0 w-1/4 rounded-sm" id="${"item-" + escape(i, true)}"><button class="hover:opacity-60 transition duration-100 ease-in-out w-full"><img${add_attribute("src", url, 0)}${add_attribute("alt", title, 0)} class="pointer-events-none select-none rounded-sm w-full"></button> </li>`}`;
  })}</ul></div>`;
});
const HoverPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let video = content[0];
  let vidref;
  let time;
  let duration;
  let mouseIsOver = false;
  function playing(time2) {
    if (time2 >= duration / 2 && mouseIsOver) {
      vidref.pause();
    }
  }
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  {
    playing(time);
  }
  return `  <div class="relative h-full w-full "><video${add_attribute("src", video.url, 0)} playsinline muted class="h-full w-full "${add_attribute("this", vidref, 0)}${add_attribute("currentTime", time, 0)}></video></div>`;
});
const Showcase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { type } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `${type == "filmstrip" ? `${validate_component(Filmstrip, "Filmstrip").$$render($$result, { content }, {}, {})}` : `${type == "hover_player" ? `${validate_component(HoverPlayer, "HoverPlayer").$$render($$result, { content }, {}, {})}` : ``}`}`;
});
const WindowShortcut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ref } = $$props;
  let { src = "" } = $$props;
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `<button class="w-28 flex flex-col items-center justify-center gap-y-1 text-xs px-1 hover:bg-stone-700 text-stone-50"><img${add_attribute("src", src, 0)} class="w-11/12 p-1"> <p class="truncate w-full">${slots.default ? slots.default({}) : ``}</p></button>`;
});

export { Showcase as S, WindowShortcut as W, Window as a };
//# sourceMappingURL=WindowShortcut-EVabAmr0.js.map
