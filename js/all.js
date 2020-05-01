$(document).ready(function () {
  $('.hamIcon').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('active');
  });
});