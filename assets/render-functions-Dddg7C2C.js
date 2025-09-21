import{S as f}from"./vendor-B0cCz-ly.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),a=document.querySelector(".loader");let u=new f(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0});function p(n){const o=n.map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:i,comments:c,downloads:d})=>`
            <li class="gallery-item">
                <a href="${r}">
                    <img src="${s}" alt="${e}" loading="lazy" />
                </a>
                <div class="info">
                    <div class="info-row">
                        <div class="info-item">
                            <b>Likes</b>
                            ${t.toLocaleString()}
                        </div>
                        <div class="info-item">
                            <b>Views</b>
                            ${i.toLocaleString()}
                        </div>
                    </div>
                    <div class="info-row">
                        <div class="info-item">
                            <b>Comments</b>
                            ${c.toLocaleString()}
                        </div>
                        <div class="info-item">
                            <b>Downloads</b>
                            ${d.toLocaleString()}
                        </div>
                    </div>
                </div>
            </li>
        `).join("");l.innerHTML=o,u.refresh()}function g(){l.innerHTML=""}function y(){a.classList.remove("hidden")}function v(){a.classList.add("hidden")}export{p as a,g as c,v as h,y as s};
//# sourceMappingURL=render-functions-Dddg7C2C.js.map
