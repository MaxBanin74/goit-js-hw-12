import{a as u,S as d,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="https://pixabay.com/api/";function p(s){const o={key:"55960662-5976d34f2ed07da81c3dd4b18",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:o}).then(e=>e.data.hits)}const a=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(){a&&(a.innerHTML="")}function h(s){const o=s.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
            />
            </a>
            <ul class="comment-list">
                <li class="comment-item">
                    <p class=comment-title>Likes</p>
                    <p class=comment-value>${e.likes}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Views</p>
                    <p class=comment-value>${e.views}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Comments</p>
                    <p class=comment-value>${e.comments}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Downloads</p>
                    <p class=comment-value>${e.downloads}</p>
                </li>
            </ul>
        </li>`).join("");a&&(a.insertAdjacentHTML("beforeend",o),y.refresh())}function L(){l&&l.classList.remove("hidden")}function b(){l&&l.classList.add("hidden")}const m={messageColor:"white",backgroundColor:"red",position:"center",progressBar:!1,timeout:4e3},v=document.querySelector(".form");v.addEventListener("submit",w);function w(s){s.preventDefault(),g();const o=s.target.elements["search-text"];if(!o.value.trim()){o.value="";return}L(),p(o.value).then(e=>{if(!e.length){c.show({message:"Sorry, there are no images matching your search query. Please try again!",...m});return}h(e),s.target.reset()}).catch(e=>{console.error(e),c.show({message:"Server Pixabay is not avialible",...m})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
