// nav.js — mobile hamburger toggle & active nav link
(function () {
  'use strict';

  var hamburger = document.getElementById('hamburger');
  var nav       = document.getElementById('mainNav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Highlight active page link based on current file
  var links = document.querySelectorAll('.nav-link');
  var page  = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();
