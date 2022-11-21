(() => {
    const refs = {
      menuBtn: document.querySelector("[data-menu-btn]"),
      menu: document.querySelector("[data-menu]"),
      body: document.querySelector("body"),
      menuList: document.querySelector(".mob-menu-list"),
    };
  
    refs.menuBtn.addEventListener("click", togglemenu);
    refs.menuList.addEventListener("click", togglemenu);
  
    function togglemenu() {
      refs.menuBtn.classList.toggle("is-open");
      refs.menu.classList.toggle("is-open");
      refs.body.classList.toggle("no-scroll");
  }
    function removeMenu() {
      refs.menuBtn.classList.remove("is-open");
      refs.menu.classList.remove("is-open");
      refs.body.classList.remove("no-scroll");
    }
})();
