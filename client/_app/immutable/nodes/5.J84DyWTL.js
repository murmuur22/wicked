import{s as B,b as D,n as O}from"../chunks/scheduler.7mXBUu_C.js";import{S as N,i as q,r as d,s as S,e as h,u as w,c as P,v as b,a as m,d as u,b as R,t as _,f as $,w as k,x as y,p as K,m as z,n as C}from"../chunks/index.LzOAh-iM.js";import{e as g}from"../chunks/each.-oqiv04n.js";import{W as E,a as F,S as T}from"../chunks/WindowShortcut.14p5imFX.js";import{D as G}from"../chunks/Window.svelte_svelte_type_style_lang.iKML-Jua.js";const H=async({fetch:a})=>{let o=["/WORK/public_frenemy/MAP.json","/WORK/halloween_lighting_test/MAP.json","/WORK/bullet_time/MAP.json"],r=[],n;for(let e=0;e<o.length;e++)n=await a(o[e]),r.push(await n.json());return{MAPS:r}},ee=Object.freeze(Object.defineProperty({__proto__:null,load:H},Symbol.toStringTag,{value:"Module"}));function j(a,o,r){const n=a.slice();return n[4]=o[r],n[5]=o,n[6]=r,n}function A(a,o,r){const n=a.slice();return n[4]=o[r],n[6]=r,n}function I(a){let o=a[4].title+"",r,n;return{c(){r=z(o),n=S()},l(e){r=C(e,o),n=P(e)},m(e,f){m(e,r,f),m(e,n,f)},p:O,d(e){e&&($(r),$(n))}}}function W(a){let o,r;return o=new F({props:{ref:a[0][a[6]],src:a[4].icon,$$slots:{default:[I]},$$scope:{ctx:a}}}),{c(){d(o.$$.fragment)},l(n){w(o.$$.fragment,n)},m(n,e){b(o,n,e),r=!0},p(n,e){const f={};e&1&&(f.ref=n[0][n[6]]),e&256&&(f.$$scope={dirty:e,ctx:n}),o.$set(f)},i(n){r||(u(o.$$.fragment,n),r=!0)},o(n){_(o.$$.fragment,n),r=!1},d(n){k(o,n)}}}function J(a){let o,r,n=g(a[1]),e=[];for(let l=0;l<n.length;l+=1)e[l]=W(A(a,n,l));const f=l=>_(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();o=h()},l(l){for(let s=0;s<e.length;s+=1)e[s].l(l);o=h()},m(l,s){for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(l,s);m(l,o,s),r=!0},p(l,s){if(s&3){n=g(l[1]);let t;for(t=0;t<n.length;t+=1){const i=A(l,n,t);e[t]?(e[t].p(i,s),u(e[t],1)):(e[t]=W(i),e[t].c(),u(e[t],1),e[t].m(o.parentNode,o))}for(K(),t=n.length;t<e.length;t+=1)f(t);R()}},i(l){if(!r){for(let s=0;s<n.length;s+=1)u(e[s]);r=!0}},o(l){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)_(e[s]);r=!1},d(l){l&&$(o),y(e,l)}}}function L(a){let o,r,n;return o=new T({props:{type:a[4].type,content:a[4].content}}),{c(){d(o.$$.fragment),r=S()},l(e){w(o.$$.fragment,e),r=P(e)},m(e,f){b(o,e,f),m(e,r,f),n=!0},p:O,i(e){n||(u(o.$$.fragment,e),n=!0)},o(e){_(o.$$.fragment,e),n=!1},d(e){e&&$(r),k(o,e)}}}function v(a){let o,r=a[6],n;const e=()=>a[3](o,r),f=()=>a[3](null,r);let l={title:a[4].title,$$slots:{default:[L]},$$scope:{ctx:a}};return o=new E({props:l}),e(),{c(){d(o.$$.fragment)},l(s){w(o.$$.fragment,s)},m(s,t){b(o,s,t),n=!0},p(s,t){r!==s[6]&&(f(),r=s[6],e());const i={};t&256&&(i.$$scope={dirty:t,ctx:s}),o.$set(i)},i(s){n||(u(o.$$.fragment,s),n=!0)},o(s){_(o.$$.fragment,s),n=!1},d(s){f(),k(o,s)}}}function Q(a){let o,r,n,e;o=new G({props:{$$slots:{default:[J]},$$scope:{ctx:a}}});let f=g(a[1]),l=[];for(let t=0;t<f.length;t+=1)l[t]=v(j(a,f,t));const s=t=>_(l[t],1,1,()=>{l[t]=null});return{c(){d(o.$$.fragment),r=S();for(let t=0;t<l.length;t+=1)l[t].c();n=h()},l(t){w(o.$$.fragment,t),r=P(t);for(let i=0;i<l.length;i+=1)l[i].l(t);n=h()},m(t,i){b(o,t,i),m(t,r,i);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(t,i);m(t,n,i),e=!0},p(t,[i]){const p={};if(i&257&&(p.$$scope={dirty:i,ctx:t}),o.$set(p),i&3){f=g(t[1]);let c;for(c=0;c<f.length;c+=1){const M=j(t,f,c);l[c]?(l[c].p(M,i),u(l[c],1)):(l[c]=v(M),l[c].c(),u(l[c],1),l[c].m(n.parentNode,n))}for(K(),c=f.length;c<l.length;c+=1)s(c);R()}},i(t){if(!e){u(o.$$.fragment,t);for(let i=0;i<f.length;i+=1)u(l[i]);e=!0}},o(t){_(o.$$.fragment,t),l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)_(l[i]);e=!1},d(t){t&&($(r),$(n)),k(o,t),y(l,t)}}}function U(a,o,r){let{data:n}=o;const{MAPS:e}=n;let f=e.map(()=>"");function l(s,t){D[s?"unshift":"push"](()=>{f[t]=s,r(0,f)})}return a.$$set=s=>{"data"in s&&r(2,n=s.data)},[f,e,n,l]}class te extends N{constructor(o){super(),q(this,o,U,Q,B,{data:2})}}export{te as component,ee as universal};