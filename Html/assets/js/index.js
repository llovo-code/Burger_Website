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
