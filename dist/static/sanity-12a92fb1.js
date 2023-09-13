import{d as y,E as p,r as f,_ as h,a as v,R as r,b,c as w,e as x}from"./desk-257f76bb-e5eb009e.js";const C=y(e=>{const{name:t,title:n,icon:a,...o}=e||{};return{name:"@sanity/vision",tools:[{name:t||"vision",title:n||"Vision",icon:a||p,component:f.lazy(()=>h(()=>import("./SanityVision-8a519187-9dbbbaed.js"),["static/SanityVision-8a519187-9dbbbaed.js","static/desk-257f76bb-e5eb009e.js","static/index-5c66d08c.js"])),options:o,router:v.create("/*")}]}}),_={name:"blog",type:"document",title:"Blog",fields:[{name:"title",type:"string",title:"Title"},{title:"Slug",name:"slug",type:"slug",options:{source:"title",maxLength:200,slugify:e=>e.toLowerCase().replace(/\s+/g,"-").slice(0,200)}},{name:"metadesc",type:"string",title:"Meta Description"},{name:"content",title:"Content",type:"array",of:[{type:"block"},{type:"image",fields:[{type:"text",name:"alt",title:"Alternative text",description:`Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what's on your page.`,options:{isHighlighted:!0}}]}]},{name:"releaseDate",type:"date",title:"Release date",options:{dateFormat:"YYYY-MM-DD",timeFormat:"HH:mm",timeStep:15,calendarTodayLabel:"Today"}},{title:"BlogImage",name:"blogImage",type:"image",options:{hotspot:!0},fields:[{name:"caption",type:"string",title:"Caption",options:{isHighlighted:!0}},{name:"attribution",type:"string",title:"Attribution"}]}]};var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=r.createContext&&r.createContext(g),i=globalThis&&globalThis.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)},O=globalThis&&globalThis.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n};function m(e){return e&&e.map(function(t,n){return r.createElement(t.tag,i({key:n},t.attr),m(t.child))})}function E(e){return function(t){return r.createElement(T,i({attr:i({},e.attr)},t),m(e.child))}}function T(e){var t=function(n){var a=e.attr,o=e.size,s=e.title,d=O(e,["attr","size","title"]),c=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,d,{className:l,style:i(i({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return u!==void 0?r.createElement(u.Consumer,null,function(n){return t(n)}):t(g)}function P(e){return E({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(e)}const j={name:"category",title:"Category",type:"document",icon:P,fields:[{name:"title",type:"string"},{title:"Slug",name:"slug",type:"slug",options:{source:"title",maxLength:200,slugify:e=>e.toLowerCase().replace(/\s+/g,"-").slice(0,200)}},{name:"parent",type:"reference",to:[{type:"category"}],options:{filter:"!defined(parent)"}}],preview:{select:{title:"title",subtitle:"parent.title"},prepare:({title:e,subtitle:t})=>({title:e,subtitle:t?`– ${t}`:""})}},I=[_,j],k=b({name:"default",title:"test Project",basePath:"/test-project",projectId:"upsd5y9w",dataset:"production",plugins:[w(),C()],schema:{types:I}});x(document.getElementById("sanity"),k,{reactStrictMode:!1,basePath:"/"});