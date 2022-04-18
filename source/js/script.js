document.addEventListener("DOMContentLoaded", function () {

  /* Выпадающее меню в шапке сайта */

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

  /* Слайдер срафнения */

  let sliderBeforeItem = document.querySelector(".comparison-slider__item--before");
  let sliderAfterItem = document.querySelector(".comparison-slider__item--after");
  let sliderScrollbar = document.querySelector(".comparison-slider__scrollbar");
  let sliderToggler  = document.querySelector(".comparison-slider__toggler");
  let sliderBeforeButton = document.querySelector(".comparison-slider__button--before");
  let sliderAfterButton = document.querySelector(".comparison-slider__button--after");

  let switchToBefore = function () {

    if ( !sliderBeforeItem.classList.contains("comparison-slider__item--active") ) {

      sliderBeforeItem.classList.add("comparison-slider__item--active");
      sliderAfterItem.classList.remove("comparison-slider__item--active");

      sliderScrollbar.classList.remove("comparison-slider__scrollbar--active");

    }

    sliderBeforeItem.style.width = "100%";
    sliderAfterItem.style.width = "0";
    sliderToggler.style.left = "0";

  }

  let switchToAfter = function () {

    if ( !sliderAfterItem.classList.contains("comparison-slider__item--active") ) {

      sliderAfterItem.classList.add("comparison-slider__item--active");
      sliderBeforeItem.classList.remove("comparison-slider__item--active");

      sliderScrollbar.classList.add("comparison-slider__scrollbar--active");

    }

    sliderBeforeItem.style.width = "0";
    sliderAfterItem.style.width = "100%";
    sliderToggler.style.left = "100%";

  }

  sliderBeforeButton.onclick = switchToBefore;
  sliderAfterButton.onclick = switchToAfter;

});
