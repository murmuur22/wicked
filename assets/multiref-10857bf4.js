function f(n){let t=[],e=new Set(t);function o(){return n&&e.size===0?n:typeof document>"u"?(console.error("do not run this on the server !!!!!!"),Array.from(e)):Array.from(e).filter(r=>document.contains(r))}function u(r){r!==null&&e.add(r)}return[o,u]}export{f as u};
