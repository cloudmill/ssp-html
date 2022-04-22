// import LocomotiveScroll from 'locomotive-scroll';
import LocomotiveScroll from "./locomotive-scroll";

let scroll;
const anonce = document.querySelector(".anonce");
const offset = anonce ? anonce.offsetHeight : 0;
const header = document.querySelector(".header");
const main = document.querySelector("[data-scroll-container]");
const headerParent = header.closest("[data-header-parent]");

const scrollOptions = {
  el: document.querySelector("main[data-scroll-container]"),
  smooth: true,
  lerp: 0.035,
  smartphone: {
    smooth: false,
  },
  tablet: {
    smooth: false,
  },
  getDirection: true,
  reloadOnContextChange: false,
  resetNativeScroll: false,
  scrollbarContainer: document.querySelector("[data-scroll-container]"),
  scrollbarClass: "c-scrollbar",
  scrollingClass: "has-scroll-scrolling",
};

const SCROLL_MODE = {
  STARTED: 0,
  STOPED: 1,
};
let scrollMode = SCROLL_MODE.STOPED;

const initScroll = () => {
  scroll = new LocomotiveScroll(scrollOptions);

  window.scroller = scroll;

  scroll.on("scroll", (e) => {
    if (e.direction === "down") {
      // console.log('down');

      header.classList.remove("fixed");
      header.classList.remove("scrolled");

      if (e.scroll.y >= header.offsetHeight + offset) {
        header.classList.add("hidden");
        if (main.firstElementChild !== header) {
          main.prepend(header);
        }
      }
    } else {
      // console.log('up');

      if (main.firstElementChild === header) {
        header.classList.add("fixed");
        header.classList.add("scrolled");
        header.classList.remove("hidden");
      }

      if (!offset) {
        if (e.scroll.y <= 25) {
          if (!headerParent.contains(header)) {
            header.classList.remove("fixed");
            header.classList.remove("scrolled");

            if (e.scroll.y <= 1) {
              headerParent.prepend(header);
            }
          }
        }
      } else {
        if (e.scroll.y <= 0 + offset) {
          if (!headerParent.contains(header)) {
            setTimeout(() => {
              header.classList.remove("fixed");
              header.classList.remove("scrolled");
            }, 0);

            headerParent.prepend(header);
          }
        }
      }
    }
  });
};

window.addEventListener("load", () => {
  setTimeout(() => {
    const sony = document.querySelector(".sony");

    sony.classList.remove("sony--hide");

    scrollMode = SCROLL_MODE.STOPED;
    scroll.stop();

    const layout = sony.querySelector(".sony__layout");
    const close = sony.querySelector(".sony__close .btn-close");

    layout.addEventListener("click", (e) => {
      if (!e.target.closest(".sony__modal")) {
        sony.classList.add("sony--hide");
        scrollMode = SCROLL_MODE.STARTED;
        scroll.start();
      }
    });

    close.addEventListener("click", () => {
      sony.classList.add("sony--hide");
      scrollMode = SCROLL_MODE.STARTED;
      scroll.start();
    });
  }, 3000);
});

// if (loader) {
//   setTimeout(initScroll, 1500);
// } else {
//   initScroll();

//   setTimeout(() => scroll.update(), 1500);
// }

// const command = document.querySelector(".command");

// if (!command) {
setTimeout(initScroll, 1500);
setTimeout(() => {
  if (scroll) scroll.update();
}, 3000);

document.body.onload = () => {
  if (scroll) scroll.update();
};
// } else {
//   document.body.style.overflow = "visible";
// }
