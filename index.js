import{a as q,S as B,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const M="https://pixabay.com/api/",y=15;async function h(e,o){const t={key:"55960662-5976d34f2ed07da81c3dd4b18",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:o};return(await q.get(M,{params:t})).data}const c=document.querySelector(".gallery"),m=document.querySelector(".loader"),a=document.querySelector(".more-btn"),D=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function I(){c&&(c.innerHTML="")}function g(e){const o=e.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${t.tags}"
            />
            </a>
            <ul class="comment-list">
                <li class="comment-item">
                    <p class=comment-title>Likes</p>
                    <p class=comment-value>${t.likes}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Views</p>
                    <p class=comment-value>${t.views}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Comments</p>
                    <p class=comment-value>${t.comments}</p>
                </li>
                <li class="comment-item">
                    <p class=comment-title>Downloads</p>
                    <p class=comment-value>${t.downloads}</p>
                </li>
            </ul>
        </li>`).join("");c&&(c.insertAdjacentHTML("beforeend",o),D.refresh())}function w(){m&&m.classList.remove("hidden")}function v(){m&&m.classList.add("hidden")}function E(){a&&a.classList.remove("hidden")}function L(){a&&a.classList.add("hidden")}const u={messageColor:"white",backgroundColor:"red",position:"center",progressBar:!1,timeout:4e3},$=document.querySelector(".form");let n=1,b=1,p="",P=0;$.addEventListener("submit",k);a.addEventListener("click",x);async function k(e){e.preventDefault(),I();const o=e.target.elements["search-text"];if(!o.value.trim()){o.value="";return}n=1,p=o.value,L(),w();try{const t=await h(p,n);if(!t.hits.length){l.show({message:"Sorry, there are no images matching your search query. Please try again!",...u});return}b=Math.ceil(t.totalHits/y),g(t.hits),S(),e.target.reset(),P=document.querySelector(".gallery-item").getBoundingClientRect().height*2}catch(t){console.error(t),l.show({message:"Server Pixabay is not avialible",...u})}finally{v()}}async function x(e){n+=1,L(),w();try{const o=await h(p,n);g(o.hits),d(1),S()}catch(o){console.error(o),l.show({message:"Server Pixabay is not avialible",...u})}v()}function S(){n<b?E():l.show({message:"We're sorry, but you've reached the end of search results.",...u})}function d(e){window.scrollBy({top:P*e,behavior:"smooth"})}window.addEventListener("wheel",e=>{e.preventDefault(),d(e.deltaY>0?1:-1)},{passive:!1});window.addEventListener("keydown",e=>{e.key==="ArrowDown"&&(e.preventDefault(),d(1)),e.key==="ArrowUp"&&(e.preventDefault(),d(-1))});
//# sourceMappingURL=index.js.map
