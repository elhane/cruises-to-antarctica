'use strict';

(function () {
  var logo = document.querySelector('.header__logo-svg');
  var header = document.querySelector('.header');
  var headerToggle = document.querySelector('.header__toggle');

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
})();
