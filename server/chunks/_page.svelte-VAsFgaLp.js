import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-BfCb-ShB.js';
import { D as Desktop } from './Window.svelte_svelte_type_style_lang-y10MExq2.js';

const NavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "folder" } = $$props;
  let { dest = "/" } = $$props;
  let { color = "light" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.dest === void 0 && $$bindings.dest && dest !== void 0)
    $$bindings.dest(dest);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${color == "light" ? `<a${add_attribute("href", dest, 0)} class="w-20 flex flex-col items-center justify-center gap-y-1 text-xs px-1 hover:bg-stone-700 text-stone-50"><svg class="stroke-0 w-full fill-stone-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.69 96"><path class="cls-1 " d="m89.48,15.9h-41.97v-.11s-7.51-7.31-7.51-7.31c-.68-.66-1.59-1.03-2.54-1.03H7.83C3.51,7.45,0,10.95,0,15.28v65.62C0,84.88,3.23,88.1,7.21,88.1h82.28c3.98,0,7.21-3.23,7.21-7.21V23.11c0-3.98-3.23-7.21-7.21-7.21Z"></path></svg> ${slots.default ? slots.default({}) : ``}</a>` : `${color == "dark" ? `<a${add_attribute("href", dest, 0)} class="w-20 first-letter:flex flex-col items-center justify-center gap-y-1 text-xs px-1 hover:bg-stone-400 text-stone-950"><svg class="stroke-0 fill-stone-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.69 96"><path class="cls-1 " d="m89.48,15.9h-41.97v-.11s-7.51-7.31-7.51-7.31c-.68-.66-1.59-1.03-2.54-1.03H7.83C3.51,7.45,0,10.95,0,15.28v65.62C0,84.88,3.23,88.1,7.21,88.1h82.28c3.98,0,7.21-3.23,7.21-7.21V23.11c0-3.98-3.23-7.21-7.21-7.21Z"></path></svg> ${slots.default ? slots.default({}) : ``}</a>` : ``}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Desktop, "Desktop").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(NavItem, "NavItem").$$render($$result, { dest: "/studio" }, {}, {
        default: () => {
          return `Studio`;
        }
      })} ${validate_component(NavItem, "NavItem").$$render($$result, { dest: "/cgi" }, {}, {
        default: () => {
          return `CGI`;
        }
      })} ${validate_component(NavItem, "NavItem").$$render($$result, { dest: "/environmental" }, {}, {
        default: () => {
          return `Environmental`;
        }
      })}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-VAsFgaLp.js.map
