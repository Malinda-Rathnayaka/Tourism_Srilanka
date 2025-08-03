// Initialize carousel with auto slide every 3 seconds
  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#homeCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 1500,  // 3 seconds per slide
      ride: 'carousel' // Start sliding automatically
    });
  });


  // Enable auto-sliding
  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#homeCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 1500,  // Slide every 3 seconds
      ride: 'carousel' // Auto start
    });
  });