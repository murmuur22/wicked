import{a as t,F as v,j as c,r as u,u as M,l as O,s as R,b as $,L as V}from"./index-8e6e420c.js";import{N as k}from"./Navbar-cc9ea67e.js";const B=[{alt:"bennett face tats",imgRef:"/assets/portfolioimages/bennettFaceTats.jpg"},{alt:"me and jacob",imgRef:"/assets/portfolioimages/menjacob.jpg"},{alt:"clouds",imgRef:"/assets/portfolioimages/clouds.jpg"},{alt:"scary girl",imgRef:"/assets/portfolioimages/scarygirl.jpg"},{alt:"building 2",imgRef:"/assets/portfolioimages/building2.jpg"},{alt:"sister in greece",imgRef:"/assets/portfolioimages/sisteringreece.jpg"},{alt:"inside",imgRef:"/assets/portfolioimages/insidebuilding.jpg"},{alt:"princetut",imgRef:"/assets/portfolioimages/princetut.jpg"},{alt:"building 1",imgRef:"/assets/portfolioimages/building.jpg"},{alt:"scary me",imgRef:"/assets/portfolioimages/scaryme.jpg"},{alt:"jacob",imgRef:"/assets/portfolioimages/jacob.jpg"},{alt:"jacob n ben",imgRef:"/assets/portfolioimages/jacobnben.jpg"},{alt:"field",imgRef:"/assets/portfolioimages/field.jpg"}];function P({alt:e,imgRef:s}){return t(v,{children:t("img",{src:s,alt:e,className:""})})}function _(e){let s=[],i=new Set(s);function a(){return e&&i.size===0?e:typeof document>"u"?(console.error("do not run this on the server !!!!!!"),Array.from(i)):Array.from(i).filter(n=>document.contains(n))}function d(n){n!==null&&i.add(n)}return[a,d]}function I(e,s){return e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e}const L=[{title:"Am I Alive?",shorthand:"am_i_alive",type:"movie",dest:"https://www.youtube.com/watch?v=9B-WfoZXBKk",target:"_blank"}],U="/assets/icons/folder.png",F="/assets/icons/file.png",z="/assets/icons/mov.png";function G({title:e,shorthand:s,type:i,dest:a,target:d}){const n=()=>{window.open(a,d)};return t(v,{children:(()=>{switch(i){case"group":return c("button",{className:"cursor-pointer transition duration-300 hover:scale-125 group",onClick:n,children:[t("img",{src:U,alt:e,className:"w-36 h-36 object-cover"}),c("h3",{className:"text-lg md:text-xl font-body text-center group-hover:underline underline-offset-1 decoration-2",children:["/",s]})]});case"project":return c("button",{className:"cursor-pointer transition duration-300 hover:scale-125 group",onClick:n,children:[t("img",{src:F,alt:e,className:"w-36 h-36 object-cover"}),c("h3",{className:"text-lg md:text-xl font-body text-center group-hover:underline underline-offset-1 decoration-2",children:[s,".proj"]})]});case"movie":return c("button",{className:"cursor-pointer transition duration-300 hover:scale-125 group",onClick:n,children:[t("img",{src:z,alt:e,className:"w-36 h-36 object-cover"}),c("h3",{className:"text-lg md:text-xl font-body text-center group-hover:underline underline-offset-1 decoration-2",children:[s,".mov"]})]})}})()})}const S=new Map,b=new WeakMap;let E=0,H;function W(e){return e?(b.has(e)||(E+=1,b.set(e,E.toString())),b.get(e)):"0"}function Y(e){return Object.keys(e).sort().filter(s=>e[s]!==void 0).map(s=>`${s}_${s==="root"?W(e.root):e[s]}`).toString()}function K(e){let s=Y(e),i=S.get(s);if(!i){const a=new Map;let d;const n=new IntersectionObserver(l=>{l.forEach(r=>{var f;const o=r.isIntersecting&&d.some(m=>r.intersectionRatio>=m);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=o),(f=a.get(r.target))==null||f.forEach(m=>{m(o,r)})})},e);d=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:s,observer:n,elements:a},S.set(s,i)}return i}function X(e,s,i={},a=H){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const f=e.getBoundingClientRect();return s(a,{isIntersecting:a,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:d,observer:n,elements:l}=K(i);let r=l.get(e)||[];return l.has(e)||l.set(e,r),r.push(s),n.observe(e),function(){r.splice(r.indexOf(s),1),r.length===0&&(l.delete(e),n.unobserve(e)),l.size===0&&(n.disconnect(),S.delete(d))}}function Z({threshold:e,delay:s,trackVisibility:i,rootMargin:a,root:d,triggerOnce:n,skip:l,initialInView:r,fallbackInView:f,onChange:o}={}){var m;const[h,x]=u.useState(null),w=u.useRef(),[y,T]=u.useState({inView:!!r,entry:void 0});w.current=o,u.useEffect(()=>{if(l||!h)return;let p;return p=X(h,(C,j)=>{T({inView:C,entry:j}),w.current&&w.current(C,j),j.isIntersecting&&n&&p&&(p(),p=void 0)},{root:d,rootMargin:a,threshold:e,trackVisibility:i,delay:s},f),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,h,d,a,n,l,i,f,s]);const N=(m=y.entry)==null?void 0:m.target,A=u.useRef();!h&&N&&!n&&!l&&A.current!==N&&(A.current=N,T({inView:!!r,entry:void 0}));const g=[x,y.inView,y.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}function J(){const[e,s]=u.useState("loading"),[i,a]=_(),[d,n]=u.useState(!1),{ref:l,inView:r}=Z({threshold:0});return M(()=>{sessionStorage.setItem("view",e);const o=window.scrollY;sessionStorage.setItem("scrollPos",o)}),u.useEffect(()=>{sessionStorage.getItem("view")!==null?(console.log("resetting"),s(sessionStorage.getItem("view")),window.scrollTo(0,sessionStorage.getItem("scrollPos"))):setTimeout(()=>{s("verified"),setTimeout(()=>{s("view")},700)},I(100,2e3))},[]),u.useEffect(()=>{r==!1?n(!1):(n(!0),i().forEach(m=>{const h=I(10,80),x=I(10,90);m.style.top=h+"%",m.style.left=x+"%"}))},[r]),t(v,{children:(()=>{switch(e){case"loading":return t(v,{children:t(V,{})});case"verified":return t(v,{children:c("div",{className:"fixed inset-0 flex items-center justify-center flex-col text-center",children:[t("h1",{className:"text-2xl md:text-4xl pb-0 mb-0 font-display",children:"verification complete!"}),c("p",{className:"fixed inset-x-0 bottom-0 text-sm mb-3 font-terminal",children:[t("span",{children:R})," ",c("span",{children:["by ",$]})]})]})});case"view":return c("div",{className:"animate-fadeIn",children:[t("div",{className:`${r?"animate-fadeOut":"animate-fadeIn"}`,children:t("div",{className:"columns-1 md:columns-2 gap-0",children:t("div",{className:"",children:B.map(o=>t(P,{alt:o.alt,imgRef:o.imgRef}))})})}),t("div",{className:`${r?"animate-fadeOut pointer-events-none":"animate-fadeIn"}`,children:t("div",{className:`fixed inset-0 flex justify-center flex-col${r?"transition-transform duration-500 scale-125":"transition-transform duration-300 scale-100"}`,children:t("div",{className:"flex justify-center flex-col ",children:c("button",{className:`flex flex-col items-center text-center hover:cursor-pointer${d?"transition duration-300 scale-125":"transition duration-300 hover:scale-125"}`,onClick:()=>{n(!0),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},children:[t("img",{src:O,alt:"wicked logo",className:"w-24 md:w-48"}),t("h1",{className:"text-4xl md:text-7xl pb-0 mb-0 md:mb-0 font-sans font-bold",children:"wicked"}),t("h1",{className:"text-4xl md:text-7xl pt-0 mb-1 md:mb-3 font-light",children:".imaging"}),c("p",{className:"text-xs md:text-sm mb-3 font-terminal",children:[t("span",{children:R})," ",t("span",{children:"by robbie dyson"})]})]})})})}),t("div",{className:`h-screen w-full flex flex-col justify-center items-center ${r?"opacity-0 animation-delay-400 animate-fadeIn":"animate-fadeOut pointer-events-none"}`,children:c("div",{className:"flex flex-col justify-center items-center",children:[t("h1",{className:"mr-auto font-bold text-xl",children:"home > Imaging > Projects"}),t("div",{className:"h-[75vh] w-[80vw] relative border-black border-4 overflow-hidden",children:L.map(o=>t("div",{className:"absolute",ref:a,children:t(G,{title:o.title,shorthand:o.shorthand,type:o.type,dest:o.dest,target:o.target})}))}),c("p",{className:"text-md ml-auto font-terminal",children:[t("span",{children:R})," ",t("span",{children:"by robbie dyson"})]})]})}),t("div",{className:"h-px",ref:l}),t(k,{byLine:!1,left:[{name:"INSTAGRAM",event:"instagram"},{name:"YOUTUBE",event:"youtube"}],right:[{name:"RESUME",event:"resume"},{name:"CONTACT",event:"contact"},{name:"SIGN OUT",event:"signout"}]})]})}})()})}export{J as default};
