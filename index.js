import{S as m,a as d,i as n}from"./assets/vendor-CUAzmrUA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();function p(o){return o.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:i,comments:s,downloads:h})=>`<li class="gallery--list">
            <a class="gallery--link" href="${r}">
              <img
                class="gallery--image"
                src="${t}"
                alt="${a}"
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
          </li>`).join("")}const u=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(o){d.get(o).then(t=>{console.log(t),t.data.hits.length||n.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),c.style.display="block",u.innerHTML=p(t.data.hits),c.style.display="none",g.refresh()}).catch(t=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"})})}alert("Коментар : Я не можу зрозуміти яку саме частину винести в файл api ,а яку в мейн , тикніть пальцем в потрібну частину коду , яку винести Переробив на axios і працює завантажувач , дальше ступор");const l=document.querySelector(".form"),y="48554296-d2b735e3ffae040ef4553c6bb";c.style.display="none";l.addEventListener("submit",o=>{o.preventDefault();let t=l.seurch.value.trim(),r=`https://pixabay.com/api/?key=${y}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;if(u.innerHTML="",t.length===0||t.value===""){n.warning({title:"Warning",message:"Please, enter a value!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"});return}f(r),l.reset()});
//# sourceMappingURL=index.js.map
