const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach(
    (slide,index) =>{
        slide.style.left = `${index * 100}%`
    }
)

//forward function
const goNext = () =>{
    counter++;
  if (counter >= slides.length) {
    counter = 0; // Loop back to the first slide
  }
  slideImage();
}

//backward function 
const goPrev = () =>{
    counter--;
  if (counter < 0) {
    counter = slides.length - 1; // Loop back to the last slide
  }
  slideImage();
}

const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}