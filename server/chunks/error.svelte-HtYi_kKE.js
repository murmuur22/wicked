import { c as create_ssr_component, a as subscribe, b as escape } from './ssr-BfCb-ShB.js';
import { p as page } from './stores-_1IFJcSK.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-HtYi_kKE.js.map
