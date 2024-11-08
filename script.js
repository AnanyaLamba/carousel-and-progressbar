
const slides = document.querySelectorAll(".slide");
const progressBar = document.querySelectorAll(".circle");
const prev = document.getElementById("prevbtn");
const next = document.getElementById("nextbtn");
let counter = 0;
let intervalId;

// Initial setup to position each slide
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Set the active image and reset the timer
const activeImage = (indicator) => {
    clearInterval(intervalId);
    counter = indicator;
    slideImage();
    dynamicSlider();
};

// Move to the next slide and reset the timer
const goNext = () => {
    clearInterval(intervalId);
    counter = (counter + 1) % slides.length; // Circular next
    slideImage();
    dynamicSlider();
};

// Move to the previous slide and reset the timer
const goPrev = () => {
    clearInterval(intervalId);
    counter = (counter - 1 + slides.length) % slides.length; // Circular previous
    slideImage();
    dynamicSlider();
};

// Slide image function to update slide position
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    updateIndicator();
};

// Update the indicator
function updateIndicator() {
    progressBar.forEach((indicator, idx) => {
        indicator.classList.toggle("active", idx === counter);
    });
}

// Automatic slider
function dynamicSlider() {
    intervalId = setInterval(() => {
        counter = (counter + 1) % slides.length; // Loop back to start
        slideImage();
    }, 2000);
}

// Initialize the slider
dynamicSlider();
