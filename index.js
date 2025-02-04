import{S as m,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function p(r){return r.map(({webformatURL:t,largeImageURL:o,tags:l,likes:e,views:i,comments:s,downloads:h})=>`<li class="gallery--list">
            <a class="gallery--link" href="${o}">
              <img
                class="gallery--image"
                src="${t}"
                alt="${l}"
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
                <p class="thumb--amount">${i}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Comments</h2>
                <p class="thumb--amount">${s}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Downloads</h2>
                <p class="thumb--amount">${h}</p>
              </div>
            </div>
          </li>`).join("")}const u=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(r){fetch(r).then(t=>t.json()).then(t=>{t.hits.length||c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),n.style.display="block",u.innerHTML=p(t.hits),n.style.display="none",d.refresh()}).catch(t=>{c.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"})})}const a=document.querySelector(".form"),f="48554296-d2b735e3ffae040ef4553c6bb";n.style.display="none";a.addEventListener("submit",r=>{r.preventDefault();let t=a.seurch.value.trim(),o=`https://pixabay.com/api/?key=${f}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;if(u.innerHTML="",t.length===0||t.value===""){iziToast.warning({title:"Warning",message:"Please, enter a value!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"});return}g(o),a.reset()});
//# sourceMappingURL=index.js.map
