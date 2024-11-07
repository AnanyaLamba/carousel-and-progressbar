const slides = document.querySelectorAll(".slide");
let counter = 0;
let autoSlideInterval;

// Initial setup to position each slide
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Move to the next slide
const goNext = () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0; // Loop back to the first slide
  }
  slideImage();
};

// Move to the previous slide
const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1; // Loop back to the last slide
  }
  slideImage();
};

// Update the slides' position based on the counter
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Start the automatic slide transition
const startAutoSlide = () => {
  autoSlideInterval = setInterval(goNext, 2000); // Change slide every 3 seconds
};

// Stop the automatic slide transition when the user interacts
const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

// Restart the auto-slide when the user finishes interacting
const resetAutoSlide = () => {
  stopAutoSlide();
  startAutoSlide();
};

// Event listeners to pause auto-slide when using the buttons
document.querySelector(".btn").addEventListener("click", resetAutoSlide);

// Start the automatic slide when the page loads
startAutoSlide();
