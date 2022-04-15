document.addEventListener("DOMContentLoaded", function () {

  let pageHeader = document.querySelector('.page-header');
  let menuToggler = pageHeader.querySelector('.menu-toggler');
  let headerSiteMenu = pageHeader.querySelector('.site-menu');

  pageHeader.classList.add("page-header--ready");

  menuToggler.onclick = function () {
    if ( headerSiteMenu.classList.contains("page-header__site-menu--opened") ) {
      headerSiteMenu.classList.remove("page-header__site-menu--opened");
      menuToggler.classList.remove("menu-toggler--opened-menu");
    } else {
      headerSiteMenu.classList.add("page-header__site-menu--opened");
      menuToggler.classList.add("menu-toggler--opened-menu");
    }
  }

});
