let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides = document.getElementsByClassName("slideshow");
  if (slides[slideIndex] !== undefined) {
    slides[slideIndex].style.display = "block";
  }

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  setTimeout(showSlides, 1500); // Change image every 1 seconds
}
