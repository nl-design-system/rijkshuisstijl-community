const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./accordion.stories-BmF4U7Dk.js","./jsx-runtime-BlAj40OV.js","./index-Cs7sjTYM.js","./_commonjsHelpers-BosuxZz1.js","./index.esm-1krHqaFo.js","./objectWithoutProperties-BJfzkg-c.js","./setPrototypeOf-CqX0LrMY.js","./index-BMdlDBjA.js","./index.esm-CwDQqDNp.js","./extends-CF3RwP-h.js","./action-group.stories-DS7XIOMM.js","./alert.stories-DIUhL391.js","./index.esm-Dnzld8kx.js","./index-B_a6aUZv.css","./index-CUFoOpJq.css","./article.stories-f9tVm2d1.js","./blockquote.stories-DguoWdTV.js","./breadcrumb-nav.stories-Bg5eFFXj.js","./button.stories-B-Tdp7Hh.js","./IconCalendarEvent-C4py0n5o.js","./checkbox-group.stories-D0RjFY8e.js","./checkbox.stories-BTxb_8Vd.js","./counter-badge.stories-D95VPpdQ.js","./dot-badge.stories-C6NezJuM.js","./fieldset.stories-DAaRkALc.js","./figure.stories-Cso7MrYg.js","./file-input.stories-BlyMv2Ev.js","./footer.stories-BnlGQEzs.js","./form-field-checkbox-group.stories-KexiQqS0.js","./form-field-checkbox-option.stories-D8idSWU9.js","./form-field-radio-option.stories-D93wwdb4.js","./form-field-select.stories-Cp7y0EHq.js","./form-field-textarea.stories-DYkvxXCH.js","./form-field-textbox.stories-Bq0lBHQu.js","./heading.stories-zy4bmg9W.js","./hero.stories-B6pb4Da5.js","./icon.stories-fwEx4xQ1.js","./image.stories-CBZHmKyG.js","./link-list-card.stories-BbvQUCrG.js","./link-list-link.stories-z7EPWBXP.js","./link-list.stories-DU4Oc4LM.js","./link.stories-dr8R4r9q.js","./logo.stories-B9u9dVG2.js","./message-list-item.stories-C3I66x-I.js","./message-list.stories-llUu4pER.js","./navbar.stories-YT6Z-ojl.js","./navigation-list-item.stories-CGtL5ODD.js","./navigation-list.stories-BbwyHTLW.js","./orderedList.stories-OiR7cy4v.js","./orderedListItem.stories-DZcQmQpE.js","./paragraph.stories-DTWVHInK.js","./radio-group.stories-BId6-vCQ.js","./radio.stories-dok2pU5R.js","./separator.stories-CxGLJFOv.js","./side-nav-link.stories-U7oNG2S5.js","./side-nav.stories-BQsxxj8s.js","./skip-link.stories-DtxucXSi.js","./sub-navbar.stories-CddeI9Iw.js","./table-cell.stories-D8_J5gXa.js","./table-header-cell.stories-t9oq4xDH.js","./table.stories-DACNVqMw.js","./text-input.stories-CBEOMleQ.js","./textarea.stories-D5vrxj1c.js","./toggletip.stories-CtXiZZUc.js","./unorderedList.stories-twmnoe_I.js","./unorderedListItem.stories-CtWW-dwZ.js","./font-B07hQuOt.js","./index-BI1Biiay.js","./chunk-HLWAVYOI-CNnQ6R2h.js","./react-18-CxOrbeQH.js","./index-D-8MO0q_.js","./index-DSgSp0X8.js","./introduction-B3GNClc9.js","./license-BxoCW_mp.js","./notice-6SKLu0y0.js","./heading.stories-ds7-ANiB.js","./paragraph.stories-CaCWwMfi.js","./template.stories-wYWY9VqS.js","./collage.stories-DrPp0hBz.js","./globals-B7n1Ewem.css","./details.stories-cYg38lAe.js","./form.stories-DYqE6vgb.js","./rich-text.stories-BHLvh7tV.js","./entry-preview-DwGOxG97.js","./entry-preview-docs-DzJt4V2x.js","./preview-BJPLiuSt.js","./preview-B73LL-ls.js","./preview-B6jboc2n.css"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const e of i.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&u(e)}).observe(document,{childList:!0,subtree:!0});function c(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(o){if(o.ep)return;o.ep=!0;const i=c(o);fetch(o.href,i)}})();const O="modulepreload",R=function(r,_){return new URL(r,_).href},d={},t=function(_,c,u){let o=Promise.resolve();if(c&&c.length>0){const i=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),l=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));o=Promise.all(c.map(s=>{if(s=R(s,u),s in d)return;d[s]=!0;const n=s.endsWith(".css"),y=n?'[rel="stylesheet"]':"";if(!!u)for(let a=i.length-1;a>=0;a--){const p=i[a];if(p.href===s&&(!n||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${y}`))return;const m=document.createElement("link");if(m.rel=n?"stylesheet":O,n||(m.as="script",m.crossOrigin=""),m.href=s,l&&m.setAttribute("nonce",l),document.head.appendChild(m),n)return new Promise((a,p)=>{m.addEventListener("load",a),m.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>_()).catch(i=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=i,window.dispatchEvent(e),!e.defaultPrevented)throw i})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,E=L({page:"preview"});T.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const v={"./src/community/accordion.stories.tsx":async()=>t(()=>import("./accordion.stories-BmF4U7Dk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),"./src/community/action-group.stories.tsx":async()=>t(()=>import("./action-group.stories-DS7XIOMM.js"),__vite__mapDeps([10,1,2,3,8,5,9]),import.meta.url),"./src/community/alert.stories.tsx":async()=>t(()=>import("./alert.stories-DIUhL391.js"),__vite__mapDeps([11,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/article.stories.tsx":async()=>t(()=>import("./article.stories-f9tVm2d1.js"),__vite__mapDeps([15,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/blockquote.stories.tsx":async()=>t(()=>import("./blockquote.stories-DguoWdTV.js"),__vite__mapDeps([16,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/breadcrumb-nav.stories.tsx":async()=>t(()=>import("./breadcrumb-nav.stories-Bg5eFFXj.js"),__vite__mapDeps([17,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/button.stories.tsx":async()=>t(()=>import("./button.stories-B-Tdp7Hh.js"),__vite__mapDeps([18,1,2,3,12,8,5,9,13,14,19]),import.meta.url),"./src/community/checkbox-group.stories.tsx":async()=>t(()=>import("./checkbox-group.stories-D0RjFY8e.js"),__vite__mapDeps([20,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/checkbox.stories.tsx":async()=>t(()=>import("./checkbox.stories-BTxb_8Vd.js"),__vite__mapDeps([21,8,5,2,3,1,9]),import.meta.url),"./src/community/counter-badge.stories.tsx":async()=>t(()=>import("./counter-badge.stories-D95VPpdQ.js"),__vite__mapDeps([22,8,5,2,3,1,9]),import.meta.url),"./src/community/dot-badge.stories.tsx":async()=>t(()=>import("./dot-badge.stories-C6NezJuM.js"),__vite__mapDeps([23,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/fieldset.stories.tsx":async()=>t(()=>import("./fieldset.stories-DAaRkALc.js"),__vite__mapDeps([24,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/figure.stories.tsx":async()=>t(()=>import("./figure.stories-Cso7MrYg.js"),__vite__mapDeps([25,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/file-input.stories.tsx":async()=>t(()=>import("./file-input.stories-BlyMv2Ev.js"),__vite__mapDeps([26,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/footer.stories.tsx":async()=>t(()=>import("./footer.stories-BnlGQEzs.js"),__vite__mapDeps([27,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/form-field-checkbox-group.stories.tsx":async()=>t(()=>import("./form-field-checkbox-group.stories-KexiQqS0.js"),__vite__mapDeps([28,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/form-field-checkbox-option.stories.tsx":async()=>t(()=>import("./form-field-checkbox-option.stories-D8idSWU9.js"),__vite__mapDeps([29,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/form-field-radio-option.stories.tsx":async()=>t(()=>import("./form-field-radio-option.stories-D93wwdb4.js"),__vite__mapDeps([30,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/form-field-select.stories.tsx":async()=>t(()=>import("./form-field-select.stories-Cp7y0EHq.js"),__vite__mapDeps([31,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/form-field-textarea.stories.tsx":async()=>t(()=>import("./form-field-textarea.stories-DYkvxXCH.js"),__vite__mapDeps([32,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/form-field-textbox.stories.tsx":async()=>t(()=>import("./form-field-textbox.stories-Bq0lBHQu.js"),__vite__mapDeps([33,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/heading.stories.tsx":async()=>t(()=>import("./heading.stories-zy4bmg9W.js"),__vite__mapDeps([34,8,5,2,3,1,9]),import.meta.url),"./src/community/hero.stories.tsx":async()=>t(()=>import("./hero.stories-B6pb4Da5.js"),__vite__mapDeps([35,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/icon.stories.tsx":async()=>t(()=>import("./icon.stories-fwEx4xQ1.js"),__vite__mapDeps([36,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/image.stories.tsx":async()=>t(()=>import("./image.stories-CBZHmKyG.js"),__vite__mapDeps([37,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/link-list-card.stories.tsx":async()=>t(()=>import("./link-list-card.stories-BbvQUCrG.js"),__vite__mapDeps([38,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/link-list-link.stories.tsx":async()=>t(()=>import("./link-list-link.stories-z7EPWBXP.js"),__vite__mapDeps([39,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/link-list.stories.tsx":async()=>t(()=>import("./link-list.stories-DU4Oc4LM.js"),__vite__mapDeps([40,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/link.stories.tsx":async()=>t(()=>import("./link.stories-dr8R4r9q.js"),__vite__mapDeps([41,1,2,3,12,8,5,9,13,14,19]),import.meta.url),"./src/community/logo.stories.tsx":async()=>t(()=>import("./logo.stories-B9u9dVG2.js"),__vite__mapDeps([42,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/message-list-item.stories.tsx":async()=>t(()=>import("./message-list-item.stories-C3I66x-I.js"),__vite__mapDeps([43,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/message-list.stories.tsx":async()=>t(()=>import("./message-list.stories-llUu4pER.js"),__vite__mapDeps([44,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/navbar.stories.tsx":async()=>t(()=>import("./navbar.stories-YT6Z-ojl.js"),__vite__mapDeps([45,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/navigation-list-item.stories.tsx":async()=>t(()=>import("./navigation-list-item.stories-CGtL5ODD.js"),__vite__mapDeps([46,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/navigation-list.stories.tsx":async()=>t(()=>import("./navigation-list.stories-BbwyHTLW.js"),__vite__mapDeps([47,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/orderedList.stories.tsx":async()=>t(()=>import("./orderedList.stories-OiR7cy4v.js"),__vite__mapDeps([48,1,2,3,8,5,9]),import.meta.url),"./src/community/orderedListItem.stories.tsx":async()=>t(()=>import("./orderedListItem.stories-DZcQmQpE.js"),__vite__mapDeps([49,1,2,3,8,5,9]),import.meta.url),"./src/community/paragraph.stories.tsx":async()=>t(()=>import("./paragraph.stories-DTWVHInK.js"),__vite__mapDeps([50,8,5,2,3,1,9]),import.meta.url),"./src/community/radio-group.stories.tsx":async()=>t(()=>import("./radio-group.stories-BId6-vCQ.js"),__vite__mapDeps([51,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/radio.stories.tsx":async()=>t(()=>import("./radio.stories-dok2pU5R.js"),__vite__mapDeps([52,1,2,3,8,5,9]),import.meta.url),"./src/community/separator.stories.tsx":async()=>t(()=>import("./separator.stories-CxGLJFOv.js"),__vite__mapDeps([53,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/side-nav-link.stories.tsx":async()=>t(()=>import("./side-nav-link.stories-U7oNG2S5.js"),__vite__mapDeps([54,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/side-nav.stories.tsx":async()=>t(()=>import("./side-nav.stories-BQsxxj8s.js"),__vite__mapDeps([55,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/skip-link.stories.tsx":async()=>t(()=>import("./skip-link.stories-DtxucXSi.js"),__vite__mapDeps([56,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/sub-navbar.stories.tsx":async()=>t(()=>import("./sub-navbar.stories-CddeI9Iw.js"),__vite__mapDeps([57,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/table-cell.stories.tsx":async()=>t(()=>import("./table-cell.stories-D8_J5gXa.js"),__vite__mapDeps([58,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/table-header-cell.stories.tsx":async()=>t(()=>import("./table-header-cell.stories-t9oq4xDH.js"),__vite__mapDeps([59,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/table.stories.tsx":async()=>t(()=>import("./table.stories-DACNVqMw.js"),__vite__mapDeps([60,1,2,3,12,8,5,9,13,14]),import.meta.url),"./src/community/text-input.stories.tsx":async()=>t(()=>import("./text-input.stories-CBEOMleQ.js"),__vite__mapDeps([61,1,2,3,8,5,9]),import.meta.url),"./src/community/textarea.stories.tsx":async()=>t(()=>import("./textarea.stories-D5vrxj1c.js"),__vite__mapDeps([62,1,2,3,8,5,9]),import.meta.url),"./src/community/toggletip.stories.tsx":async()=>t(()=>import("./toggletip.stories-CtXiZZUc.js"),__vite__mapDeps([63,12,8,5,2,3,1,9,13,14]),import.meta.url),"./src/community/unorderedList.stories.tsx":async()=>t(()=>import("./unorderedList.stories-twmnoe_I.js"),__vite__mapDeps([64,1,2,3,8,5,9]),import.meta.url),"./src/community/unorderedListItem.stories.tsx":async()=>t(()=>import("./unorderedListItem.stories-CtWW-dwZ.js"),__vite__mapDeps([65,1,2,3,8,5,9]),import.meta.url),"./src/documentation/font.mdx":async()=>t(()=>import("./font-B07hQuOt.js"),__vite__mapDeps([66,1,2,3,67,68,69,7,70,9,6,71]),import.meta.url),"./src/documentation/introduction.mdx":async()=>t(()=>import("./introduction-B3GNClc9.js"),__vite__mapDeps([72,1,2,3,67,68,69,7,70,9,6,71]),import.meta.url),"./src/documentation/license.mdx":async()=>t(()=>import("./license-BxoCW_mp.js"),__vite__mapDeps([73,1,2,3,67,68,69,7,70,9,6,71]),import.meta.url),"./src/documentation/notice.mdx":async()=>t(()=>import("./notice-6SKLu0y0.js"),__vite__mapDeps([74,1,2,3,67,68,69,7,70,9,6,71]),import.meta.url),"./src/rivm/heading.stories.tsx":async()=>t(()=>import("./heading.stories-ds7-ANiB.js"),__vite__mapDeps([75,4,5,6,2,3,7]),import.meta.url),"./src/rivm/paragraph.stories.tsx":async()=>t(()=>import("./paragraph.stories-CaCWwMfi.js"),__vite__mapDeps([76,4,5,6,2,3,7]),import.meta.url),"./src/rivm/template.stories.tsx":async()=>t(()=>import("./template.stories-wYWY9VqS.js"),__vite__mapDeps([77,1,2,3,8,5,9]),import.meta.url),"./src/templates/collage.stories.tsx":async()=>t(()=>import("./collage.stories-DrPp0hBz.js"),__vite__mapDeps([78,1,2,3,12,8,5,9,13,14,19,79]),import.meta.url),"./src/templates/details.stories.tsx":async()=>t(()=>import("./details.stories-cYg38lAe.js"),__vite__mapDeps([80,1,2,3,12,8,5,9,13,14,4,6,7,79]),import.meta.url),"./src/templates/form.stories.tsx":async()=>t(()=>import("./form.stories-DYqE6vgb.js"),__vite__mapDeps([81,1,2,3,12,8,5,9,13,14,79]),import.meta.url),"./src/templates/rich-text.stories.tsx":async()=>t(()=>import("./rich-text.stories-BHLvh7tV.js"),__vite__mapDeps([82,1,2,3,12,8,5,9,13,14,79]),import.meta.url)};async function I(r){return v[r]()}const{composeConfigs:P,PreviewWeb:V,ClientApi:f}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(r=[])=>{const _=await Promise.all([r.at(0)??t(()=>import("./entry-preview-DwGOxG97.js"),__vite__mapDeps([83,2,3,69,7]),import.meta.url),r.at(1)??t(()=>import("./entry-preview-docs-DzJt4V2x.js"),__vite__mapDeps([84,71,3,2]),import.meta.url),r.at(2)??t(()=>import("./preview-D9RVqA8x.js"),[],import.meta.url),r.at(3)??t(()=>import("./preview-Ct5NkTJf.js"),[],import.meta.url),r.at(4)??t(()=>import("./preview-D_ozL5H-.js"),[],import.meta.url),r.at(5)??t(()=>import("./preview-gLmJTRpJ.js"),[],import.meta.url),r.at(6)??t(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([85,70]),import.meta.url),r.at(7)??t(()=>import("./preview-DF-d5FoE.js"),[],import.meta.url),r.at(8)??t(()=>import("./preview-BnWGZYux.js"),[],import.meta.url),r.at(9)??t(()=>import("./preview-C7tAAfkq.js"),[],import.meta.url),r.at(10)??t(()=>import("./preview-DmdbpuW6.js"),[],import.meta.url),r.at(11)??t(()=>import("./preview-B73LL-ls.js"),__vite__mapDeps([86,1,2,3,4,5,6,7,87,14]),import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
