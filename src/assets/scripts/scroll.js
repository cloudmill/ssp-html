// let scrollPrev = 0;

// const startTicker = () => {
//   const ticker = $(".ticker");
//   let speed = 5;
//   let lastScrollPos = 0;
//   let timer;

//   const containers = $(ticker).find(".ticker-wrapper");

//   $(containers).each(function (index, container) {
//     const content = $(container).find(".ticker-content"),
//       elWidth = content.outerWidth();

//     console.log("content: ", content);

//     let clone = content.clone(true),
//       progress = 1;

//     $(container).append(clone);

//     const loop = () => {
//       progress = progress - speed;

//       if (progress <= elWidth * -1) progress = 0;

//       $(container).css(
//         "transform",
//         `translateX(${progress}px)`
//       );

//       window.requestAnimationFrame(loop);
//     };

//     loop();
//   });

//   $(window).on("scroll", () => {
//     const maxScrollValue = 10;
//     const newScrollPos = window.scrollY;
//     let scrollValue = newScrollPos - lastScrollPos;

//     if (scrollValue > maxScrollValue) scrollValue = maxScrollValue;
//     else if (scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;

//     speed = scrollValue;

//     clearTimeout(timer);
//     timer = setTimeout(handleSpeedClear, 10);
//   });

//   function handleSpeedClear() {
//     speed = 5;
//   }
// };

// startTicker();

// $(window).on("scroll", () => {
//   changeHeaderBg();
//   // changeHeaderPosition();
// });

// const changeHeaderBg = () => {
//   const header = $(".header");

//   if ($(window).scrollTop() > $(window).height() / 15) {
//     header.addClass("scrolled");
//   } else header.removeClass("scrolled");

//   if (
//     $(window).scrollTop() > $(window).height() / 3 &&
//     $(window).scrollTop() > scrollPrev &&
//     !header.hasClass("active")
//   )
//     header.addClass("out");
//   else header.removeClass("out");

//   scrollPrev = $(window).scrollTop();
// };


import LocomotiveScroll from 'locomotive-scroll';

let scroll;
let initialScroll = 0;
const header = document.querySelector('.header');
const main = document.querySelector('[data-scroll-container]');
const headerParent = header.closest('[data-header-parent]');

setTimeout(() => {
  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
    reloadOnContextChange: true,
  });

  window.scroller = scroll;

  scroll.on('scroll', (e) => {
    // console.log(e.scroll.y);

    if (initialScroll < e.scroll.y) {
      // console.log('down');

      if (!headerParent.contains(header)) {
        headerParent.prepend(header);
        header.classList.remove('fixed');
        header.classList.remove('active');
      }
    } else {
      // console.log('up');

      if (!(main.firstElementChild === header)) {
        main.prepend(header);
        header.classList.add('fixed');
        header.classList.add('active');
      }
    }

    if (e.scroll.y === 0) {
      if (!headerParent.contains(header)) {
        header.classList.remove('fixed');
        header.classList.remove('active');
        setTimeout(() => {
          headerParent.prepend(header);
        }, 600);
      }
    }

    initialScroll = e.scroll.y;
  });
}, 1500);

document.body.onload = () => {
  if (scroll) scroll.update();
};
