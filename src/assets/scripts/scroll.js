import LocomotiveScroll from 'locomotive-scroll';

let scroll;
let initialScroll = 0;
const anonce = document.querySelector('.anonce');
const offset = anonce ? anonce.offsetHeight : 0;
const header = document.querySelector('.header');
const main = document.querySelector('[data-scroll-container]');
const headerParent = header.closest('[data-header-parent]');

setTimeout(() => {
  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
    reloadOnContextChange: true,
    resetNativeScroll: false,
  });

  window.scroller = scroll;

  scroll.on('scroll', (e) => {

    if (initialScroll < e.scroll.y) {
      // console.log('down');

      if (!headerParent.contains(header)) {
        headerParent.prepend(header);
        header.classList.remove('fixed');
        header.classList.remove('scrolled');
      }
    } else {
      // console.log('up');

      if (!(main.firstElementChild === header) && e.scroll.y !== (0 + offset)) {
        main.prepend(header);
        header.classList.add('fixed');
        header.classList.add('scrolled');
      }
    }

    if (e.scroll.y <= (40 + offset)) {
      if (!headerParent.contains(header)) {
        header.classList.remove('fixed');
        header.classList.remove('scrolled');


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
