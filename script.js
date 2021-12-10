const firstColor = document.querySelector('.black-square');
firstColor.classList.add('selected');
let color = 'black';

const colorPalette = document.querySelectorAll('.color');

document.querySelectorAll('.color').forEach((item) => {
  item.addEventListener('click', (event) => {
    for (let i = 0; i < colorPalette.length; i += 1) {
      if (colorPalette[i].classList.contains('selected')) {
        colorPalette[i].classList.remove('selected');
      }
    }
    const colorButton = event.target;
    colorButton.classList.add('selected');
    color = window
      .getComputedStyle(colorButton)
      .getPropertyValue('background-color');
  });
});

document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', () => {
    if (item.style.backgroundColor !== color) {
      item.style.backgroundColor = color;
    } else {
      item.style.backgroundColor = 'white';
    }
  });
});

document.getElementById('clear-board').addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach((item) => {
    if (item.style.backgroundColor !== 'white') {
      item.style.backgroundColor = 'white';
    }
    return;
  });
});
