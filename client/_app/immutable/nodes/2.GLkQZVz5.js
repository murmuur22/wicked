import{s as D}from"../chunks/scheduler.7mXBUu_C.js";import{S as E,i as G,r as c,u as l,v as u,d as p,t as _,w as g,s as C,c as I,a as m,f,m as v,n as w}from"../chunks/index.LzOAh-iM.js";import{D as N}from"../chunks/Window.svelte_svelte_type_style_lang.iKML-Jua.js";import{N as d}from"../chunks/NavItem.cW2YkKrH.js";function q(o){let t;return{c(){t=v("Studio")},l(n){t=w(n,"Studio")},m(n,s){m(n,t,s)},d(n){n&&f(t)}}}function P(o){let t;return{c(){t=v("CGI")},l(n){t=w(n,"CGI")},m(n,s){m(n,t,s)},d(n){n&&f(t)}}}function b(o){let t;return{c(){t=v("Environmental")},l(n){t=w(n,"Environmental")},m(n,s){m(n,t,s)},d(n){n&&f(t)}}}function h(o){let t,n,s,r,$,i;return t=new d({props:{dest:"/studio",$$slots:{default:[q]},$$scope:{ctx:o}}}),s=new d({props:{dest:"/cgi",$$slots:{default:[P]},$$scope:{ctx:o}}}),$=new d({props:{dest:"/environmental",$$slots:{default:[b]},$$scope:{ctx:o}}}),{c(){c(t.$$.fragment),n=C(),c(s.$$.fragment),r=C(),c($.$$.fragment)},l(e){l(t.$$.fragment,e),n=I(e),l(s.$$.fragment,e),r=I(e),l($.$$.fragment,e)},m(e,a){u(t,e,a),m(e,n,a),u(s,e,a),m(e,r,a),u($,e,a),i=!0},p(e,a){const S={};a&1&&(S.$$scope={dirty:a,ctx:e}),t.$set(S);const k={};a&1&&(k.$$scope={dirty:a,ctx:e}),s.$set(k);const x={};a&1&&(x.$$scope={dirty:a,ctx:e}),$.$set(x)},i(e){i||(p(t.$$.fragment,e),p(s.$$.fragment,e),p($.$$.fragment,e),i=!0)},o(e){_(t.$$.fragment,e),_(s.$$.fragment,e),_($.$$.fragment,e),i=!1},d(e){e&&(f(n),f(r)),g(t,e),g(s,e),g($,e)}}}function j(o){let t,n;return t=new N({props:{$$slots:{default:[h]},$$scope:{ctx:o}}}),{c(){c(t.$$.fragment)},l(s){l(t.$$.fragment,s)},m(s,r){u(t,s,r),n=!0},p(s,[r]){const $={};r&1&&($.$$scope={dirty:r,ctx:s}),t.$set($)},i(s){n||(p(t.$$.fragment,s),n=!0)},o(s){_(t.$$.fragment,s),n=!1},d(s){g(t,s)}}}class H extends E{constructor(t){super(),G(this,t,null,j,D,{})}}export{H as component};
