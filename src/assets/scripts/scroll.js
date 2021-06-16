// import LocomotiveScroll from 'locomotive-scroll';
import LocomotiveScroll from './locomotive-scroll';

let scroll;
const anonce = document.querySelector('.anonce');
const offset = anonce ? anonce.offsetHeight : 0;
const header = document.querySelector('.header');
const main = document.querySelector('[data-scroll-container]');
const headerParent = header.closest('[data-header-parent]');

const scrollOptions = {
  el: document.querySelector('main[data-scroll-container]'),
  smooth: true,
  lerp: 0.035,
  smartphone: {
    smooth: false,
  },
  tablet: {
    smooth: false,
  },
  getDirection: true,
  reloadOnContextChange: true,
  resetNativeScroll: false,
  scrollbarContainer: document.querySelector('[data-scroll-container]'),
  scrollbarClass: 'c-scrollbar',
  scrollingClass: 'has-scroll-scrolling',
};

const initScroll = () => {
  scroll = new LocomotiveScroll(scrollOptions);

  window.scroller = scroll;

  scroll.on('scroll', (e) => {

    if (e.direction === 'down') {
      // console.log('down');

      header.classList.remove('fixed');
      header.classList.remove('scrolled');

      if (e.scroll.y >= header.offsetHeight + offset) {
        header.classList.add('hidden');
        if (main.firstElementChild !== header) {
          main.prepend(header);
        }
      }

    } else {
      // console.log('up');

      if (main.firstElementChild === header) {
        header.classList.add('fixed');
        header.classList.add('scrolled');
        header.classList.remove('hidden');
      }

      if (!offset) {
        if (e.scroll.y <= 25) {
          if (!headerParent.contains(header)) {
            header.classList.remove('fixed');
            header.classList.remove('scrolled');

            if (e.scroll.y <= 1) {
              headerParent.prepend(header);
            }
          }
        }
      } else {
        if (e.scroll.y <= 0 + offset) {
          if (!headerParent.contains(header)) {
            setTimeout(() => {
              header.classList.remove('fixed');
              header.classList.remove('scrolled');
            }, 0);

            headerParent.prepend(header);
          }
        }
      }

    }

  });

};

// if (loader) {
//   setTimeout(initScroll, 1500);
// } else {
//   initScroll();

//   setTimeout(() => scroll.update(), 1500);
// }

setTimeout(initScroll, 500);
setTimeout(() => {
  if (scroll) scroll.update();
}, 1500);

document.body.onload = () => {
  if (scroll) scroll.update();
};
