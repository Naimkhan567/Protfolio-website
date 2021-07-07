const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})









// back to the top

let topbtn = document.getElementById('TopBtn');


topbtn.addEventListener('click', function topFunction() {
  document.body.scrollTop = 0;
  $('html, body').animate({scrollTop:0}, '300');
});