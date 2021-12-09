window.onload = function () {};

let firstColor = document.querySelector('.black-square');
firstColor.classList.add('selected');
let cor = 'black';

let colorPalette = document.querySelectorAll('.color');

document.querySelectorAll('.color').forEach((item) => {
  item.addEventListener('click', (event) => {
    for (let i = 0; i < colorPalette.length; i++) {
      if (colorPalette[i].classList.contains('selected')) {
        colorPalette[i].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
    cor = window
      .getComputedStyle(event.target)
      .getPropertyValue('background-color');
  });
});

document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.style.backgroundColor = cor;
  });
});
