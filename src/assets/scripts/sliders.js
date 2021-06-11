import Swiper from "swiper/swiper-bundle.min";

// const circles = $(".bullet-progress__circle"),
//   radius = +$(circles[0]).attr("r"),
//   circumference = 2 * Math.PI * radius;

// initialCircles(circles);

const practicesTimeline = new Swiper(".practices__timeline-slider", {
  speed: 300,
  slidesPerView: "auto",
  centeredSlides: false,
  watchOverflow: true,
  spaceBetween: 20,
  freeMode: true,
});

const anonceSlider = new Swiper(".anonce__slider", {
  loop: true,
  speed: 600,
  simulateTouch: false,
  slidesPerView: 1,

  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});

const clientsSliderSettings = {
  loop: true,
  spaceBetween: 20,
  watchOverflow: true,
  speed: 600,
  slidesPerView: 8,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 5,
    },
    960: {
      slidesPerView: 6,
    },
    1120: {
      slidesPerView: 7,
    },
    1280: {
      slidesPerView: 8,
    },
  },

  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
};

const clientsSlider = new Swiper(
  ".about-company__clients-slider",
  clientsSliderSettings
);

const practicesSlider = new Swiper(".practices__slider", {
  loop: true,
  loopedSlides: 3,
  spaceBetween: 20,
  allowSlidePrev: false,
  watchOverflow: true,
  initialSlide: 0,
  speed: 1000,
  simulateTouch: false,

  breakpoints: {
    768: {
      simulateTouch: true,
      allowSlidePrev: true,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const commandSlider = new Swiper(".command__slider", {
  loop: true,
  // loopedSlides: 3,
  initialSlide: 0,
  effect: "fade",
  fadeEffect: {
    crossFade: false
  },
  speed: 1,
  simulateTouch: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let isAnimationDisable = true;
let isFirstLoad = true;
let loadCounter = 0;

const letters = ['<svg width="68" height="84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.82 70.67l.66 5.94c-7.773 4.62-16.683 6.93-26.73 6.93-13.127 0-23.137-3.74-30.03-11.22C3.68 64.987.16 55.197.16 42.95c0-3.887.403-7.7 1.21-11.44.807-3.813 2.2-7.59 4.18-11.33 2.053-3.813 4.583-7.113 7.59-9.9 3.08-2.86 7.04-5.17 11.88-6.93C29.86 1.59 35.287.71 41.3.71c8.14 0 16.28 1.943 24.42 5.83l-.66 6.16C58.9 5.587 50.43 2.03 39.65 2.03c-6.527 0-12.063 1.943-16.61 5.83-4.473 3.813-7.7 8.653-9.68 14.52-1.98 5.867-2.97 12.503-2.97 19.91 0 13.053 2.933 22.953 8.8 29.7 5.793 6.82 12.98 10.23 21.56 10.23 10.927 0 19.617-3.85 26.07-11.55z" fill="#fff"/></svg>', '<svg width="68" height="84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.82 70.67l.66 5.94c-7.773 4.62-16.683 6.93-26.73 6.93-13.127 0-23.137-3.74-30.03-11.22C3.68 64.987.16 55.197.16 42.95c0-3.887.403-7.7 1.21-11.44.807-3.813 2.2-7.59 4.18-11.33 2.053-3.813 4.583-7.113 7.59-9.9 3.08-2.86 7.04-5.17 11.88-6.93C29.86 1.59 35.287.71 41.3.71c8.14 0 16.28 1.943 24.42 5.83l-.66 6.16C58.9 5.587 50.43 2.03 39.65 2.03c-6.527 0-12.063 1.943-16.61 5.83-4.473 3.813-7.7 8.653-9.68 14.52-1.98 5.867-2.97 12.503-2.97 19.91 0 13.053 2.933 22.953 8.8 29.7 5.793 6.82 12.98 10.23 21.56 10.23 10.927 0 19.617-3.85 26.07-11.55z" fill="#fff"/></svg>', '<svg width="60" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M59.31.47V80h-9.35V2.89c-3.007-.733-7.26-1.1-12.76-1.1H22.79c-5.353 0-9.533.367-12.54 1.1V80H.9V.47h58.41z" fill="#fff"/></svg>'];

const updateBullet = ($this) => {
  $this.pagination.bullets.forEach(bullet => {
    const littleCircle = bullet.querySelector('.bullet-progress__little-circle');
    const circle = bullet.querySelector('.bullet-progress__circle');
    if (!isFirstLoad && bullet.classList.contains('swiper-pagination-bullet-active')) {
      littleCircle.style.transform = 'rotate(360deg)';

      circle.style.strokeDashoffset = '0px';
    } else {
      littleCircle.style.transitionDuration = '0s';
      littleCircle.style.transform = 'rotate(0deg)';
      littleCircle.style.transitionDuration = null;

      circle.style.transitionDuration = '0s';
      circle.style.strokeDashoffset = '647.168px';
      circle.style.transitionDuration = null;
    }
  });
};

const fullPageSliderSettings = {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: false
  },
  speed: 1,
  simulateTouch: false,

  autoplay: {
    delay: 5600,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.fulpage__slider-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return `
        <div class="fulpage__slider-bullet ${className}" data-bullet-index="0">
          <span class="bullet-content">
            ${letters[index]}
          </span>
          <div class="colored-circle"></div>
          <div class="bullet-progress__little-circle" style="transform: rotate(0deg);"></div>
          <svg class="bullet-progress" width="220" height="220">
            <circle class="bullet-progress__circle" stroke="#fff" stroke-width="1" cx="104" cy="104" r="103" fill="transparent" style="
              stroke-dashoffset: 647.168px;
              stroke-dasharray: 647.168, 647.168;
            "></circle>
          </svg>
        </div>
      `;
    }
  },
  on: {
    paginationUpdate: function(swiper) {
      updateBullet(swiper);
    },
    autoplayStart: function(swiper) {
      loadCounter++;

      if (loadCounter === 2) {
        isFirstLoad = false;
      }

      updateBullet(swiper);


    },
    slideChange: function() {

      if (isAnimationDisable && this.activeIndex === 2) {
        isAnimationDisable = false;

        this.slides.forEach(slide => {
          const elems = slide.querySelectorAll('.is-first-load');

          elems.forEach(el => {
            el.classList.remove('is-first-load');
          });
        });
      }

    }
  }
};

const fullPageSlider = new Swiper(document.querySelector(".fulpage__slider"), fullPageSliderSettings);
if (fullPageSlider.el) {
  fullPageSlider.autoplay.stop();
  window.fullPageSlider = fullPageSlider;
}
