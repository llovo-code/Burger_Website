// document.addEventListener("DOMContentLoaded", () => {
//   window.scrollTo(0, 0);
// });


// ===================Show Menu ===================//
const nav_close = document.getElementById("nav-close"),
  nav_toggle = document.getElementById("nav-toggle"),
  nav_menu = document.getElementById("nav-menu");

if (nav_toggle) {
  nav_toggle.addEventListener("click", () => {
    nav_menu.classList.add("show-menu");
  });
}

if (nav_close) {
  nav_close.addEventListener("click", () => {
    nav_menu.classList.remove("show-menu");
  });
}

// ===================Remove Menu Mobile ===================//

const linkItems = document.querySelectorAll(".nav__link");

const linkAction = () => {
  nav_menu.classList.remove("show-menu");
};

linkItems.forEach((linkItem) => linkItem.addEventListener("click", linkAction));

/**=====================Add Shadow Heade===============r */

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

/**============== show scroll Up  */
const scrollUP = () => {
  const scroll = document.getElementById("ScrollUp");
  this.scrollY >= 350
    ? scroll.classList.add("show-scrollUp")
    : scroll.classList.remove("show-scrollUp");
};

window.addEventListener("scroll", scrollUP);

/**==============ScrollSelection Active NavBar=============**/
const sections = document.querySelectorAll("section[id]");
console.log(`Secciones `, sections);
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      `.nav__menu a[href*=${sectionId} ]`
    );
    
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    }else {
      sectionsClass.classList.remove("active-link");
    }
  });

};

window.addEventListener("scroll", scrollActive);


// Reveal Scroll

const scrv = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration:2500,
  delay:300
})

scrv.reveal(`.home__data, .footer`);
scrv.reveal(`.home__dish`,{delay:500, distance: '100px',origin:'bottom' });
scrv.reveal(`.home__burger`,{delay:1000, distance:'100px',duration:1500});
scrv.reveal(`.home__ingredient`,{delay:1600,interval:100});
scrv.reveal(`.recipe__image, .delivery__img, .contact__image`,{delay:600,origin:'left',duration:1000,});
scrv.reveal(`.recipe__data, .delivery__data, .contact__data`,{delay:600,origin:'rigth',duration:1000});
scrv.reveal(`.popular__card`,{delay:500,origin:'rigth',interval:50});


scrv.reveal(`.contact__sticker-1, .contact__sticker-2`,{delay:1000,interval:300});

