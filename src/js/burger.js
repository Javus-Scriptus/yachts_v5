const menuBtn = document.querySelector('.burger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById('header__nav').style.height = '100%';
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementById('header__nav').style.height = '0%';
  }
});
