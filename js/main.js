//loader
  let loader = document.getElementById('preloader');
  window.addEventListener('load', function () {  loader.style.display = 'none';
 });
//loader

//  scroll-up 
var btn = $('#button');
var navbar = $('#navbar')
var lang = $('.navbar  .dropdown');
var inquery = $('.navbar  .inquery_btn ');
$(window).scroll(function () {
  if ($(window).scrollTop() > 490) {
    btn.addClass('show');
    navbar.addClass('change');
    lang.css('display', 'none');
    inquery.css('display', 'none');

  } else {
    btn.removeClass('show');
    navbar.removeClass('change');
    lang.css('display', 'block');
    inquery.css('display', 'flex');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
//    scroll-up 
// animated hamburger icon
$(document).ready($(function () {
  let navBtn = $('.navbar-toggler');
  $(navBtn).click(function () {
    $(navBtn).toggleClass('active-hamburger');
  });
}));
// animated hamburger icon



//download file
var doc = new jsPDF();
var specialElementHandlers = {
  '#editor': function (element, renderer) {
    return true;
  }
};

$('#cmd').click(function () {
  doc.fromHTML($('#content').html(), 15, 15, {
    'width': 270,
    'elementHandlers': specialElementHandlers
  });
  doc.save('cv.pdf');
});

//=========== Active navbar Link in multi pages =============
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "nav-link active";
  }
}
//=========== Active navbar Link in multi pages =============