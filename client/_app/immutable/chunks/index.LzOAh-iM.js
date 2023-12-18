import{r as $,n as y,p as v,q as B,v as b,w as P,k as N,x as j,y as I,z as T,A as D,B as G,C as q}from"./scheduler.7mXBUu_C.js";let p=!1;function z(){p=!0}function O(){p=!1}function R(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const o=e[a];o.claim_order!==void 0&&r.push(o)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,o=(s>0&&e[n[s]].claim_order<=a?s+1:R(1,s,_=>e[n[_]].claim_order,a))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,s=Math.max(u,s)}const c=[],l=[];let f=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);f>=r;f--)l.push(e[f]);f--}for(;f>=0;f--)l.push(e[f]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const o=a<c.length?c[a]:null;t.insertBefore(l[r],o)}}function U(t,e){if(p){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function V(t,e,n){t.insertBefore(e,n||null)}function W(t,e,n){p&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function it(){return x(" ")}function st(){return x("")}function rt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function lt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function at(t){return function(e){e.target===this&&t.call(this,e)}}function ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return t.dataset.svelteH}function J(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,e,n,i,s=!1){L(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s||(t.claim_info.last_index=l),f}}for(let l=t.claim_info.last_index-1;l>=0;l--){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,f}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function M(t,e,n,i){return C(t,s=>s.nodeName===e,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(e))}function ut(t,e,n){return M(t,e,n,S)}function ot(t,e,n){return M(t,e,n,H)}function K(t,e){return C(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function dt(t){return K(t," ")}function E(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function _t(t,e){const n=E(t,"HTML_TAG_START",0),i=E(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new A(e);L(t);const s=t.splice(n,i-n+1);m(s[0]),m(s[s.length-1]);const c=s.slice(1,s.length-1);for(const l of c)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(e,c)}function ht(t,e){e=""+e,t.data!==e&&(t.data=e)}function mt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}class Q{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=H(n.nodeName):this.e=S(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}class A extends Q{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)W(this.t,this.n[n],e)}}function $t(t,e){return new t(e)}const h=new Set;let d;function pt(){d={r:0,c:[],p:d}}function yt(){d.r||$(d.c),d=d.p}function X(t,e){t&&t.i&&(h.delete(t),t.i(e))}function xt(t,e,n,i){if(t&&t.o){if(h.has(t))return;h.add(t),d.c.push(()=>{h.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function gt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function wt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function Y(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),N(()=>{const c=t.$$.on_mount.map(D).filter(b);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),s.forEach(N)}function Z(t,e){const n=t.$$;n.fragment!==null&&(j(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function k(t,e){t.$$.dirty[0]===-1&&(G.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Nt(t,e,n,i,s,c,l=null,f=[-1]){const r=I;T(t);const a=t.$$={fragment:null,ctx:[],props:c,update:y,not_equal:s,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:v(),dirty:f,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...g)=>{const w=g.length?g[0]:_;return a.ctx&&s(a.ctx[u],a.ctx[u]=w)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](w),o&&k(t,u)),_}):[],a.update(),o=!0,$(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){z();const u=J(e.target);a.fragment&&a.fragment.l(u),u.forEach(m)}else a.fragment&&a.fragment.c();e.intro&&X(t.$$.fragment),Y(t,e.target,e.anchor),O(),B()}T(r)}class Tt{$$=void 0;$$set=void 0;$destroy(){Z(this,1),this.$destroy=y}$on(e,n){if(!b(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!P(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(tt);export{H as A,ot as B,_t as C,rt as D,lt as E,at as F,gt as G,A as H,Tt as S,W as a,yt as b,dt as c,X as d,st as e,m as f,S as g,ut as h,Nt as i,J as j,ct as k,mt as l,x as m,K as n,ht as o,pt as p,$t as q,wt as r,it as s,xt as t,vt as u,Y as v,Z as w,nt as x,U as y,ft as z};
