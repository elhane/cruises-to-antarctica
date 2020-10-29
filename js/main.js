'use strict';

(function () {
  var logo = document.querySelector('.header__logo-svg');
  var header = document.querySelector('.header');
  var headerToggle = document.querySelector('.header__toggle');
  var cards = document.querySelectorAll('.cruises__item');

  header.classList.remove('header--nojs');

  headerToggle.addEventListener('click', function () {
    if (header.classList.contains('header--closed')) {
      header.classList.remove('header--closed');
      header.classList.add('header--opened');
      logo.classList.add('header__logo-svg--opened');
    } else {
      header.classList.add('header--closed');
      header.classList.remove('header--opened');
      logo.classList.remove('header__logo-svg--opened');
    }
  });

  // фокус на кнопку забронировать
  cards.forEach(function (item) {
    item.addEventListener('focus', function () {
      closeCards();
      item.classList.add('cruises__item--focused');
      item.querySelector('.cruises__button').focus();
    });
  });

  function closeCards() {
    cards.forEach(function (item) {
      if (item.classList.contains('cruises__item--focused')) {
        item.classList.remove('cruises__item--focused');
      }
    });
  }

})();
