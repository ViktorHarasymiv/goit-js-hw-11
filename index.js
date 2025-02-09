import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(o){return o.map(({webformatURL:i,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:h})=>`<li class="gallery--list">
            <a class="gallery--link" href="${r}">
              <img
                class="gallery--image"
                src="${i}"
                alt="${s}"
                width="360"
                height="200"
              />
            </a>
            <div class="thumb--box">
              <div class="thumb--item">
                <h2 class="thumb--tittle">Likes</h2>
                <p class="thumb--amount">${e}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Views</h2>
                <p class="thumb--amount">${t}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Comments</h2>
                <p class="thumb--amount">${a}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Downloads</h2>
                <p class="thumb--amount">${h}</p>
              </div>
            </div>
          </li>`).join("")}async function p(o){const r=`https://pixabay.com/api/?key=48554296-d2b735e3ffae040ef4553c6bb&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,s=await fetch(r);if(!s.ok)throw new Error(s.statusText);return s.json()}const u=document.querySelector(".gallery"),n=document.querySelector(".loader"),c=document.querySelector(".form"),f=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});c.addEventListener("submit",async o=>{o.preventDefault();const i=c.search.value.trim();if(n.classList.remove("hidden"),u.innerHTML="",i.length===0||i.value===""){l.warning({title:"Warning",message:"Please, enter a value!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),n.classList.add("hidden");return}try{const r=await p(i);r.hits.length?(u.insertAdjacentHTML("beforeend",m(r.hits)),n.classList.add("hidden"),f.refresh(),c.reset()):(n.classList.add("hidden"),l.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}))}catch{n.classList.add("hidden"),l.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"})}});
//# sourceMappingURL=index.js.map
