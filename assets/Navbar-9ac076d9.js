import{r as o,a as n,F as l,j as c,s as f,e as m,c as h}from"./index-aa8d4f10.js";function b(e){const t=o.useRef([]),r=o.useRef([]),i=o.useRef(!0);typeof e.left<"u"&&(t.current=e.left),typeof e.right<"u"&&(r.current=e.right),typeof e.byLine<"u"&&(i.current=e.byLine);const u=()=>{if(i.current==!0)return n("div",{className:"flex items-center justify-center flex-col text-center",children:c("p",{className:"fixed left-2 lg:inset-x-0 bottom-0 text-sm mb-3 font-terminal",children:[n("span",{children:f})," ",n("span",{children:"by robbie dyson"})]})})};return n(l,{children:(()=>c("div",{className:"text-lg md:text-xl font-display",children:[u(),n("div",{className:"fixed flex flex-col md:flex-row bottom-2 left-2 md:gap-1",children:t.current.map(a=>n(d,{button:a,side:"left"}))}),n("div",{className:"fixed flex flex-col md:flex-row bottom-2 right-2 md:gap-1",children:r.current.map(a=>n(d,{button:a,side:"right"}))})]}))()})}function d(e){const t=e.button;o.useEffect(()=>{t.escapeEvent==!0&&document.addEventListener("keydown",i,!0)},[]);const r=s=>{switch(s){case"instagram":return()=>window.open("https://www.instagram.com/murmuur_","_blank");case"youtube":return()=>window.open("https://www.youtube.com/@murmuur_","_blank");case"resume":return()=>window.open(h,"_blank");case"contact":return()=>window.open(m,"_self");case"signout":return()=>window.open("/","_self")}return s},i=s=>{s.key=="Escape"&&(console.log("Pressed:",s.key),r(t.event)())};return(()=>{switch(e.side){case"left":return c("button",{onClick:r(t.event),className:"cursor-pointer hover:underline underline-offset-1 decoration-2 text-start",children:["[ ",t.name," ]"]});case"right":return c("button",{onClick:r(t.event),className:"cursor-pointer hover:underline underline-offset-1 decoration-2 text-end",children:["[ ",t.name," ]"]})}})()}export{b as N};
