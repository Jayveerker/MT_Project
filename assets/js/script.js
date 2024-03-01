const images = document.querySelectorAll(".slider-image");
let currentIndex = 0;

function showImage(index) {
  // Hide all images
  images.forEach((image) => (image.style.display = "none"));

  // Show the image at the given index
  images[index].style.display = "block";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Display the first image initially
showImage(currentIndex);

// Automatically advance to the next image every 3 seconds (3000 milliseconds)
setInterval(nextImage, 3000);

//
var auto = new auto(".auto", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
  },
});
