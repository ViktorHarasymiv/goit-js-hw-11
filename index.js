import{i as a,S as g}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:l,downloads:m})=>`<li class="gallery--list">
            <a class="gallery--link" href="${o}">
              <img
                class="gallery--image"
                src="${r}"
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
                <p class="thumb--amount">${l}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Downloads</h2>
                <p class="thumb--amount">${m}</p>
              </div>
            </div>
          </li>`).join("")}const h=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=document.querySelector(".get--seurch_button");let c=document.querySelector("#form--input");const f="48554296-d2b735e3ffae040ef4553c6bb";let u="";c.addEventListener("input",function(i){i.preventDefault(),u=i.target.value.trim()});n.style.display="none";d.addEventListener("click",i=>{i.preventDefault(),h.innerHTML="";let r=`https://pixabay.com/api/?key=${f}&q=${u}&image_type=photo&orientation=horizontal&safesearch=true`;if(u.length<=0||c.value==="")return a.warning({title:"Warning",message:"Please, enter a value!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",iconUrl:"./img/bi_x-octagon.svg",position:"topRight"}),!1;fetch(r).then(o=>o.json()).then(o=>{o.hits.length||a.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",iconUrl:"bi_x-octagon.svg",position:"topRight"}),n.style.display="block",setTimeout(()=>{h.innerHTML=p(o.hits),n.style.display="none",new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},1500),c.value=""}).catch(o=>{console.log(o.message),a.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",iconUrl:"./bi_x-octagon.svg",position:"topRight"})})});
//# sourceMappingURL=index.js.map
