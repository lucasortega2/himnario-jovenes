import{r as a}from"./index.DhYZZe0J.js";var p={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=a,_=Symbol.for("react.element"),y=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,j=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function d(o,t,c){var e,n={},l=null,i=null;c!==void 0&&(l=""+c),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(e in t)h.call(t,e)&&!v.hasOwnProperty(e)&&(n[e]=t[e]);if(o&&o.defaultProps)for(e in t=o.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:_,type:o,key:l,ref:i,props:n,_owner:j.current}}u.Fragment=y;u.jsx=d;u.jsxs=d;p.exports=u;var s=p.exports;const b=({himnos:o})=>{const[t,c]=a.useState(o),[e,n]=a.useState(""),l=r=>{n(r.target.value)},i=r=>r.filter(f=>f.titulo.toLowerCase().includes(e.toLowerCase())),m=a.useMemo(()=>i(t),[e]);return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"flex justify-center mt-6",children:s.jsx("input",{onChange:l,value:e,placeholder:"Busca tu himno",type:"text",className:"p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"})}),s.jsx("div",{className:"flex flex-col justify-center items-center mt-8",children:s.jsx("ul",{className:"flex flex-col gap-2",children:m?.map((r,f)=>s.jsxs("a",{href:`/himnos/${r.id}`,className:"block",children:[r.id,". ",r.titulo]},f))})})]})};export{b as default};
