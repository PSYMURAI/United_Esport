const box = document.querySelector('.box');
const img = box.querySelector('img');

box.addEventListener('mouseenter', () => {
  img.style.transform = 'scale(1.2)';
});

box.addEventListener('mouseleave', () => {
  img.style.transform = 'scale(1)';
});
