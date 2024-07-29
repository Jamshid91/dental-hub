const menuBtn = document.querySelector('.menu-btn'),
      menu= document.querySelector('.menu'),
      itemBtn = document.querySelectorAll('.item-btn'),
      body = document.querySelector('body');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('clickedBtn');
  menu.classList.toggle('d-none');
  body.classList.toggle('bodyStopScroll')
});

window.addEventListener('click', (e) => {
  if(e.target == menu) {
    menuBtn.classList.toggle('clickedBtn');
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll')
  }
});

itemBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.classList.toggle('showServices')
  });
})

document.addEventListener('click', (e) => {
  itemBtn.forEach(btn => {
    btn.parentElement.parentElement.contains(e.target) || btn.parentElement.parentElement.classList.remove('showServices')
  })
})