const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
if (i === index) {
slide.classList.add('active');
} else {
slide.classList.remove('active');
}
});
}

function nextSlide() {
currentSlideIndex = (currentSlideIndex + 1) % slides.length;
showSlide(currentSlideIndex);
}

function previousSlide() {
currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
showSlide(currentSlideIndex);
}

// Initial slide
showSlide(currentSlideIndex);

// Auto slide change (optional)
// setInterval(nextSlide, 5000); // Change slide every 5 seconds