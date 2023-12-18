import { c as create_ssr_component, v as validate_component, e as each, b as escape } from './ssr-BfCb-ShB.js';
import { W as WindowShortcut, a as Window, S as Showcase } from './WindowShortcut-EVabAmr0.js';
import { D as Desktop } from './Window.svelte_svelte_type_style_lang-y10MExq2.js';
import './index-fLhKcJju.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { MAPS } = data;
  let windowRefs = MAPS.map(() => "");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Desktop, "Desktop").$$render($$result, {}, {}, {
      default: () => {
        return `${each(MAPS, (MAP, i) => {
          return `${validate_component(WindowShortcut, "WindowShortcut").$$render($$result, { ref: windowRefs[i], src: MAP.icon }, {}, {
            default: () => {
              return `${escape(MAP.title)} `;
            }
          })}`;
        })}`;
      }
    })} ${each(MAPS, (MAP, i) => {
      return `${validate_component(Window, "Window").$$render(
        $$result,
        { title: MAP.title, this: windowRefs[i] },
        {
          this: ($$value) => {
            windowRefs[i] = $$value;
            $$settled = false;
          }
        },
        {
          default: () => {
            return `${validate_component(Showcase, "Showcase").$$render($$result, { type: MAP.type, content: MAP.content }, {}, {})} `;
          }
        }
      )}`;
    })}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-KVN-F1x_.js.map
