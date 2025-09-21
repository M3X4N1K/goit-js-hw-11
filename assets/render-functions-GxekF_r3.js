import{S as f}from"./vendor-Dr0KmOfh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.getElementById("gallery"),s=document.getElementById("loader");let u=new f(".gallery a",{captionsData:"alt",captionDelay:250});function m(l){const r=l.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:o,comments:c,downloads:d})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${o}</p>
          <p><b>Comments:</b> ${c}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>`).join("");a.innerHTML=r,u.refresh()}function y(){a.innerHTML=""}function g(){s&&s.classList.remove("hidden")}function h(){s&&s.classList.add("hidden")}export{m as a,y as c,h,g as s};
//# sourceMappingURL=render-functions-GxekF_r3.js.map
