// ===================Show Menu ===================//
const nav_close = document.getElementById("nav-close"),
nav_toggle = document.getElementById("nav-toggle"),
nav_menu = document.getElementById("nav-menu");



if(nav_toggle){
  nav_toggle.addEventListener('click',()=>{
    nav_menu.classList.add("show-menu");
  });
}

if(nav_close){
  nav_close.addEventListener("click",()=>{
    nav_menu.classList.remove("show-menu");
  })
}

// ===================Remove Menu Mobile ===================//

const linkItems = document.querySelectorAll(".nav__link");

const linkAction = ()=>{
  nav_menu.classList.remove('show-menu')
}

linkItems.forEach(linkItem => linkItem.addEventListener("click",linkAction))

/**=====================Add Shadow Heade===============r */

const shadowHeader= ()=>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header'): header.classList.remove('shadow-header')
}

window.addEventListener('scroll',shadowHeader);