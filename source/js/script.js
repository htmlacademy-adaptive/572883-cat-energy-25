document.addEventListener("DOMContentLoaded", function () {

  /* Выпадающее меню в шапке сайта */

  let pageHeader = document.querySelector('.page-header');
  let menuToggler = pageHeader.querySelector('.menu-toggler');
  let headerSiteMenu = pageHeader.querySelector('.page-header__site-menu');

  pageHeader.classList.remove("page-header--nojs");

  menuToggler.onclick = function () {
    if ( headerSiteMenu.classList.contains("page-header__site-menu--opened") ) {
      headerSiteMenu.classList.remove("page-header__site-menu--opened");
      menuToggler.classList.remove("menu-toggler--opened-menu");
    } else {
      headerSiteMenu.classList.add("page-header__site-menu--opened");
      menuToggler.classList.add("menu-toggler--opened-menu");
    }
  }

  /* Слайдер сравнения */

  if ( document.body.classList.contains("home") ) {

    let sliderBeforeItem = document.querySelector(".comparison-slider__item--before");
    let sliderAfterItem = document.querySelector(".comparison-slider__item--after");


    let sliderToggler  = document.querySelector(".comparison-slider__toggler");
    let sliderScroller = document.querySelector(".comparison-slider__scroller");

    let sliderBeforeButton = document.querySelector(".comparison-slider__button--before");
    let sliderAfterButton = document.querySelector(".comparison-slider__button--after");

    let switchToBefore = function () {

      if ( !sliderBeforeItem.classList.contains("comparison-slider__item--active") ) {

        sliderBeforeItem.classList.add("comparison-slider__item--active");
        sliderAfterItem.classList.remove("comparison-slider__item--active");

        sliderToggler.classList.remove("comparison-slider__toggler--active");

      }

      sliderBeforeItem.style.width = "100%";
      sliderAfterItem.style.width = "0";
      sliderScroller.style.left = "100%";

    }

    let switchToAfter = function () {

      if ( !sliderAfterItem.classList.contains("comparison-slider__item--active") ) {

        sliderAfterItem.classList.add("comparison-slider__item--active");
        sliderBeforeItem.classList.remove("comparison-slider__item--active");

        sliderToggler.classList.add("comparison-slider__toggler--active");

      }

      sliderBeforeItem.style.width = "0";
      sliderAfterItem.style.width = "100%";
      sliderScroller.style.left = "0";

    }

    sliderBeforeButton.onclick = switchToBefore;
    sliderAfterButton.onclick = switchToAfter;

    sliderToggler.onclick = function () {
      if ( this.classList.contains("comparison-slider__toggler--active") ) {
        switchToBefore();
      } else {
        switchToAfter();
      }
    };

    sliderScroller.onclick = function () {
      sliderBeforeItem.style.width = "50%";
      sliderAfterItem.style.width = "50%";
      sliderScroller.style.left = "50%";

      sliderAfterItem.classList.add("comparison-slider__item--active");
      sliderBeforeItem.classList.remove("comparison-slider__item--active");
      sliderToggler.classList.remove("comparison-slider__toggler--active");
    }

  }

  /* Валидация формы */

  if ( document.body.classList.contains("application") ) {

    let applicationForm = document.querySelector(".application-form");
    let applicationFormInput = applicationForm.querySelectorAll(".form-field__input");
    let applicationFormTextarea = applicationForm.querySelectorAll(".form-textarea");

    applicationForm.addEventListener("invalid", () => {

      applicationFormInput.forEach( function(item) {
        item.classList.add("form-field__input--validation");
      });

      applicationFormTextarea.forEach( function(item) {
        item.classList.add("form-textarea--validation");
      });

    }, true);
  }

});
