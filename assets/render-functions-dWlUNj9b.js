import{S as m}from"./vendor-Dr0KmOfh.js";const i=document.querySelector(".gallery"),e=document.querySelector(".loader");let v=new m(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0});function g(a){const o=a.map(({webformatURL:l,largeImageURL:s,tags:t,likes:n,views:r,comments:c,downloads:d})=>`
            <li class="gallery-item">
                <a href="${s}">
                    <img src="${l}" alt="${t}" loading="lazy" />
                </a>
                <div class="info">
                    <div class="info-row">
                        <div class="info-item">
                            <b>Likes</b>
                            ${n.toLocaleString()}
                        </div>
                        <div class="info-item">
                            <b>Views</b>
                            ${r.toLocaleString()}
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
        `).join("");i.innerHTML=o,v.refresh()}function L(){i.innerHTML=""}function u(){e.classList.remove("hidden")}function b(){e.classList.add("hidden")}export{g as a,L as c,b as h,u as s};
//# sourceMappingURL=render-functions-dWlUNj9b.js.map
