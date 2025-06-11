let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % total;
  slides[currentSlide].classList.add('active');
}, 3000);
