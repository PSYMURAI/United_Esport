const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	toggleButton.classList.toggle('active');
});
const card = document.querySelector('.card');

card.addEventListener('mouseover', () => {
  card.style.transition = 'all 0.5s ease-in-out';
  card.style.opacity = '0.5';
});

card.addEventListener('mouseout', () => {
  card.style.opacity = '1';
});
document.addEventListener("DOMContentLoaded", function(event) { 
  var box = document.querySelector(".box");
  var img = box.querySelector("img");
  
  img.addEventListener("load", function() {
    img.classList.add("fade-in");
  });
});
const box = document.querySelector('.box');
const img = box.querySelector('img');

box.addEventListener('mouseenter', () => {
  img.style.transform = 'scale(1.2)';
});

box.addEventListener('mouseleave', () => {
  img.style.transform = 'scale(1)';
});
