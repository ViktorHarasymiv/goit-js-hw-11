import{S as m,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(s){return s.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:a,downloads:h})=>`<li class="gallery--list">
            <a class="gallery--link" href="${i}">
              <img
                class="gallery--image"
                src="${r}"
                alt="${o}"
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
          </li>`).join("")}async function p(s){const i=`https://pixabay.com/api/?key=48554296-d2b735e3ffae040ef4553c6bb&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,o=await fetch(i);if(!o.ok)throw new Error(o.statusText);return o.json()}const u=document.querySelector(".gallery"),c=document.querySelector(".loader"),n=document.querySelector(".form"),f=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});n.addEventListener("submit",async s=>{s.preventDefault();const r=n.search.value.trim();if(c.classList.remove("hidden"),u.innerHTML="",r.length===0||r.value===""){l.warning({title:"Warning",message:"Please, enter a value!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),c.classList.add("hidden");return}try{const i=await p(r);i.hits.length||l.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),u.innerHTML=d(i.hits),c.classList.add("hidden"),f.refresh(),n.reset()}catch{l.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),n.reset()}});
//# sourceMappingURL=index.js.map
