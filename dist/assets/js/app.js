console.log("Hi"),function(){let e=document.querySelector(".burger"),t=document.querySelector(".nav__body"),o=document.getElementById("page"),c=document.body,n=document.querySelectorAll(".menu__arrow");function l(){c.classList.remove("_lock"),e.classList.remove("_active"),t.classList.remove("_active"),document.querySelector(".page__mask").remove(),n.forEach((e=>{e.parentElement.classList.remove("_active")}))}n.forEach((e=>{e.addEventListener("click",(t=>{e.parentElement.classList.toggle("_active")}))})),e&&e.addEventListener("click",(function(n){e.classList.toggle("_active"),t.classList.toggle("_active"),e.classList.contains("_active")?function(){let e=document.createElement("div");e.classList.add("page__mask"),e.addEventListener("click",l),o.appendChild(e),c.classList.add("_lock")}():l()}));let a=document.querySelectorAll(".nav__link[data-goto]");function s(t){const o=t.target;if(o.dataset.goto&&document.querySelector(o.dataset.goto)){const c=document.querySelector(o.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight-document.querySelector(".intro__nav").offsetHeight;e.classList.contains("_active")&&l(),window.scrollTo({top:c,behavior:"smooth"}),t.preventDefault()}}a.length>0&&a.forEach((e=>{e.addEventListener("click",s)}))}(),console.log("hi2"),function(){let e=document.getElementById("listing-first").querySelectorAll(".listing-item__img"),t=document.getElementById("modal"),o=document.querySelector(".modal-content"),c=t.querySelector(".modal-grid__top-left"),n=t.querySelector(".modal__close"),l=document.body;function a(e){const a=e.target;c.src=a.src,t.classList.add("show-modal"),l.classList.add("_lock"),n.addEventListener("click",s),t.addEventListener("click",s,!1),o.addEventListener("click",(e=>{e.stopImmediatePropagation()}))}function s(){t.classList.remove("show-modal"),l.classList.remove("_lock")}e.length>0&&e.forEach((e=>{e.addEventListener("click",a)}))}(),function(){let e=document.querySelectorAll(".dot__item[data-img-src]"),t=document.querySelector(".intro__img");function o(e){const o=e.target;o.dataset.imgSrc&&(t.src=o.dataset.imgSrc)}e.length>0&&e.forEach((e=>{e.addEventListener("click",o)}))}();