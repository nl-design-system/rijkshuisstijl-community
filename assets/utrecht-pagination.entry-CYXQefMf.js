import{r as s,h as a}from"./index.esm-CkaAH-Mq.js";import{c as o}from"./clsx-eca3fadc-B-dksMZM.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BeNflsVP.js";import"./iframe-e3cE5MT0.js";import"../sb-preview/runtime.js";const h=`.utrecht-pagination__page-link:focus-visible,.utrecht-pagination__relative-link:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}.utrecht-pagination{font-family:var(--utrecht-pagination-font-family, var(--utrecht-document-font-family));font-size:var(--utrecht-pagination-font-size, var(--utrecht-document-font-family));margin-block-end:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0) * var(--utrecht-pagination-margin-block-start, 0))}.utrecht-pagination--distanced{--utrecht-space-around:1}.utrecht-pagination__relative-link{background-color:var(--utrecht-pagination-relative-link-background-color);border-color:var(--utrecht-pagination-relative-link-border-color);border-radius:var(--utrecht-pagination-relative-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-relative-link-border-width, 0);color:var(--utrecht-pagination-relative-link-color);display:inline-block;font-weight:var(--utrecht-pagination-relative-link-font-weight);padding-block-end:var(--utrecht-pagination-relative-link-padding-block-end);padding-block-start:var(--utrecht-pagination-relative-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-relative-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-relative-link-padding-inline-start);text-decoration:var(--utrecht-pagination-relative-link-text-decoration);text-transform:var(--utrecht-pagination-relative-link-text-transform)}.utrecht-pagination__relative-link--next{margin-inline-start:var(--utrecht-pagination-relative-link-distanced-margin-inline-start)}.utrecht-pagination__relative-link--prev{margin-inline-end:var(--utrecht-pagination-relative-link-distanced-margin-inline-end)}.utrecht-pagination__relative-link--disabled{background-color:var(--utrecht-pagination-relative-link-disabled-background-color, var(--utrecht-pagination-relative-link-background-color));color:var(--utrecht-pagination-relative-link-disabled-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__relative-link--hover,.utrecht-pagination__relative-link:hover{background-color:var(--utrecht-pagination-relative-link-hover-background-color, var(--utrecht-pagination-relative-link-background-color));border-color:var(--utrecht-pagination-relative-link-hover-border-color, var(--utrecht-pagination-relative-link-border-color));color:var(--utrecht-pagination-relative-link-hover-color, var(--utrecht-pagination-relative-link-color))}.utrecht-pagination__page-link{background-color:var(--utrecht-pagination-page-link-background-color);border-color:var(--utrecht-pagination-page-link-border-color, 0);border-radius:var(--utrecht-pagination-page-link-border-radius);border-style:solid;border-width:var(--utrecht-pagination-page-link-border-width);color:var(--utrecht-pagination-page-link-color);display:inline-block;font-weight:var(--utrecht-pagination-page-link-font-weight);padding-block-end:var(--utrecht-pagination-page-link-padding-block-end);padding-block-start:var(--utrecht-pagination-page-link-padding-block-start);padding-inline-end:var(--utrecht-pagination-page-link-padding-inline-end);padding-inline-start:var(--utrecht-pagination-page-link-padding-inline-start);text-decoration:var(--utrecht-pagination-page-link-text-decoration)}.utrecht-pagination__page-link--current{--utrecht-pagination-page-link-background-color:var(--utrecht-pagination-page-link-current-background-color);--utrecht-pagination-page-link-border-color:var(--utrecht-pagination-page-link-current-border-color);--utrecht-pagination-page-link-color:var(--utrecht-pagination-page-link-current-color)}.utrecht-pagination__page-link~.utrecht-pagination__page-link{margin-inline-start:var(--utrecht-pagination-page-link-distanced-margin-inline-start)}.utrecht-pagination__page-link--hover,.utrecht-pagination__page-link:hover{background-color:var(--utrecht-pagination-page-link-hover-background-color, var(--utrecht-pagination-page-link-background-color));border-color:var(--utrecht-pagination-page-link-hover-border-color, var(--utrecht-pagination-page-link-border-color));color:var(--utrecht-pagination-page-link-hover-color, var(--utrecht-pagination-page-link-color))}.utrecht-pagination__page-link:focus-visible,.utrecht-pagination__relative-link:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color, revert);outline-offset:var(--utrecht-focus-outline-offset, revert);outline-style:var(--utrecht-focus-outline-style, revert);outline-width:var(--utrecht-focus-outline-width, revert)}:host{display:block}:host([hidden]){display:none !important}`,v=h,k=class{constructor(i){s(this,i),this.links=void 0,this.next=void 0,this.prev=void 0,this.currentIndex=void 0}render(){const{currentIndex:i}=this,p=typeof this.links=="string"?JSON.parse(this.links):null,l=typeof this.next=="string"?JSON.parse(this.next):null,c=typeof this.prev=="string"?JSON.parse(this.next):null,u=({disabled:t=!1,href:e="",rel:n=null,textContent:r="",title:g=""})=>t?a("span",{class:o("utrecht-pagination__relative-link",t&&"utrecht-pagination__relative-link--disabled",n==="next"&&"utrecht-pagination__relative-link--next",n==="prev"&&"utrecht-pagination__relative-link--prev"),"aria-label":g||null},r):a("a",{href:e,class:o("utrecht-pagination__relative-link",t&&"utrecht-pagination__relative-link--disabled",n==="next"&&"utrecht-pagination__relative-link--next",n==="prev"&&"utrecht-pagination__relative-link--prev"),rel:n,"aria-label":g||null},r),d=({current:t=!1,href:e="",rel:n=null,textContent:r=""})=>a("a",{key:"f6768db06888542962048ffa40ad6a4c41ba3351",class:o("utrecht-pagination__page-link",t&&"utrecht-pagination__page-link--current"),href:e,"aria-current":t?"true":null,rel:n},r);return a("nav",{key:"defcf8d099ff404ebb496bf4276f572608501e6c",class:"utrecht-pagination"},a("span",{key:"31e05b13ce146627a02f2de816fa921783db90b8",class:"utrecht-pagination__before"},c?u(Object.assign(Object.assign({},c),{rel:"prev",textContent:"Vorige"})):""),a("span",{key:"533c69d847173fade3ea85393fae7990b2da8ded",role:"group",class:"utrecht-pagination__pages"},p.sort((t,e)=>t.index===e.index?0:t.index>e.index?1:-1).map((t,e)=>{const n=typeof t.index=="number"?t.index:e;return Object.assign({index:n,current:typeof i=="number"&&n===i,rel:typeof i=="number"?n===i+1?"next":n===i-1?"prev":null:null,textContent:t.index||n},t)}).map(t=>d(t))),a("span",{key:"ecfe8bfab588c3abd2b10c1aad86e5bb62f4fbf8",class:"utrecht-pagination__before"},l?u(Object.assign(Object.assign({},l),{rel:"next",textContent:"Volgende"})):""))}};k.style=v;export{k as utrecht_pagination};
