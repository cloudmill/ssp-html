// /* src/app.js */
import "jquery";
import "velocity-animate";

// Styles
import "Styles/_app.scss";
import isTouchDevice from "./assets/scripts/utils";

// MAIN PAGE: loader

$(() => {
  require("Scripts/header");
  require("Scripts/feedback-form");
  require("Scripts/sliders");
  require("Scripts/convert-svg");
  require("Scripts/scroll");
  require("Scripts/marquee");
  require("Scripts/events");
  require("Scripts/contacts");
  require("Scripts/cases");
  require("Scripts/practices");
  require("Scripts/anonce");
  require("Scripts/practices-modal");
  require("Scripts/gMapsAPI");
  require("Scripts/backend");

  if (isTouchDevice()) {
    document.body.classList.add('touch-device');
  }

  const loader = $(".loader"),
    header = $('.header'),
    progress = loader.find(".loader-progress"),
    circle = progress.find(".loader-progress__circle"),
    radius = +circle.attr("r"),
    circumference = 2 * Math.PI * radius;

  if (process.env.NODE_ENV === "production" || !loader.hasClass("hidden")) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
  }

  if (!loader.hasClass("hidden")) {
    const loaderDuration = 1500;

    circle.css("strokeDasharray", `${circumference} ${circumference}`);
    circle.css("strokeDashoffset", circumference);
    circle.css(
      "transition",
      `stroke-dashoffset ${loaderDuration}ms cubic-bezier(0.65, 0, 0.35, 1)`
    );
    circle.css("display", "block");

    // закрытие прелоадера
    function preloaderClose() {
      $(".loaded-content").css("visibility", "visible");
      circle.css("strokeDashoffset", 0);

      setTimeout(() => {
        $('body').addClass('loaded');

        $(".loader").addClass("hidden");

        setTimeout(() => {
          header.removeClass('is-first-load');
        }, 1200);

        if (window.fullPageSlider) {
          window.fullPageSlider.slides.forEach((slide) => {
            slide.classList.remove('swiper-slide-active');
          });
          window.fullPageSlider.update();
          window.fullPageSlider.autoplay.start();
        }

      }, loaderDuration);
    }

    setTimeout(() => {
      preloaderClose();
    }, 10);
  } else {

    setTimeout(() => {
      $('body').addClass('loaded');

    }, 500);
  }
});
