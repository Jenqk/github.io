// Accordion functionality for FAQ
document.addEventListener("DOMContentLoaded", function() {
  const details = document.querySelectorAll("details");
  
  details.forEach(detail => {
    detail.addEventListener("toggle", function(event) {
      // Only proceed if this detail is being opened
      if (!event.target.open) return;
      
      // Close all other details in the same container
      const container = event.target.closest('.sum_grid');
      if (container) {
        const allDetails = container.querySelectorAll("details");
        allDetails.forEach(otherDetail => {
          if (otherDetail !== event.target && otherDetail.hasAttribute('open')) {
            otherDetail.removeAttribute("open");
          }
        });
      }
    });
  });
  // Reviews carousel (portfolio page)
  const reviewsCarousel = document.querySelector('.reviews-carousel .swiper');
  if (reviewsCarousel) {
    const portfolioSwiper = new Swiper(reviewsCarousel, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 1.2,
      spaceBetween: 24,
      navigation: {
        nextEl: '.reviews-carousel .swiper-button-next',
        prevEl: '.reviews-carousel .swiper-button-prev'
      },
      pagination: {
        el: '.reviews-carousel .swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      breakpoints: {
        768: { slidesPerView: 1.5, spaceBetween: 32 },
        1024: { slidesPerView: 2.1, spaceBetween: 40 }
      }
    });
  }
});  