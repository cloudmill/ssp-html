!function(e){function t(t){for(var i,o,c=t[0],l=t[1],r=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(d&&d(t);f.length;)f.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,c=1;c<a.length;c++){var l=a[c];0!==s[l]&&(i=!1)}i&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},s={0:0},n=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var d=l;n.push([5,1,2]),a()}([,,function(e,t,a){"use strict";function i(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}a.d(t,"a",(function(){return i}))},,,function(e,t,a){"use strict";a.r(t),function(e){a(0),a(6),a(7);var t=a(2);e((function(){a(8),a(9),a(27),a(10),a(11),a(14),a(15),a(16),a(17),a(18),a(19),a(20),a(21),a(22),Object(t.a)()&&document.body.classList.add("touch-device");var i=document.querySelector(".practices__header-img img"),s=e(".loader"),n=e(".header"),o=s.find(".loader-progress").find(".loader-progress__circle"),c=+o.attr("r"),l=2*Math.PI*c;if(setTimeout((function(){window.scrollTo(0,0)}),100),s.hasClass("hidden"))setTimeout((function(){e("body").addClass("loaded")}),500);else{var r=1500;o.css("strokeDasharray","".concat(l," ").concat(l)),o.css("strokeDashoffset",l),o.css("transition","stroke-dashoffset ".concat(r,"ms cubic-bezier(0.65, 0, 0.35, 1)")),o.css("display","block"),setTimeout((function(){e(".loaded-content").css("visibility","visible"),o.css("strokeDashoffset",0),setTimeout((function(){e("body").addClass("loaded"),e(".loader").addClass("hidden"),setTimeout((function(){n.removeClass("is-first-load")}),1200),window.fullPageSlider&&(window.fullPageSlider.slides.forEach((function(e){e.classList.remove("swiper-slide-active")})),window.fullPageSlider.update(),window.fullPageSlider.autoplay.start(),i&&i.classList.add("is-inview"))}),r)}),10)}}))}.call(this,a(0))},,function(e,t,a){},function(e,t,a){(function(e){if(e(".header").width()){var t=e(".header"),a=e(t).find(".header__burger");e(t).find(".header__burger_close");if(!e(".index-page").width()){var i=e(".anonce");i&&i.css("display","none")}if(e(a).on("click",(function(){t.toggleClass("active")})),e(".practices-modal").width()){var s=e(".practices-modal"),n=e(t).find(".practices-link"),o=e(s).find(".zoom-hide-item");e(n).on("click",(function(t){t.preventDefault(),s.toggleClass("active"),setTimeout((function(){e(o).each((function(t,a){e(a).addClass("show")}))}),700)}))}}}).call(this,a(0))},function(e,t){},function(e,t,a){(function(e,t){e("img.svg").each((function(){var a=t(this),i=a.attr("src"),s=a.prop("attributes");e.get(i,(function(i){var n=t(i).find("svg");n=n.removeAttr("xmlns:a"),e.each(s,(function(){n.attr(this.name,this.value)})),a.replaceWith(n)}),"xml")}))}).call(this,a(0),a(0))},function(e,t,a){"use strict";a.r(t),function(e){var t=a(3),i=a.n(t);e(".ticker-wrapper.text"),e(".ticker-wrapper.images");new i.a(".recognition__content-row").render({circular:!0,loop:-1,drag:!1,hoverstop:!1,scrollamount:80})}.call(this,a(0))},,,function(e,t,a){(function(e){if(e(".main.events").width()||e(".main.event").width()){var t=e(".events__subscribe-block"),a=(e(t).find(".filter .filter__tabs .tab-btn"),e(".filter .filter__discard"),e(t).find(".subscribe .more-btn")),i=e(t).find(".subscribe input[name=agree]"),s=(e(t).find(".subscribe input[name=email]"),e(t).find(".subscribe .subscribe-title")),n=e(t).find(".subscribe input[name=agree] + label .error"),o=e(t).find(".subscribe input[name=email] + .error");e(a).on("click",(function(a){if(a.preventDefault(),e(t).hasClass("subscribed"))e(t).removeClass("subscribed"),e(s).toggleClass("active"),e(".subscribe-btn").toggleClass("active"),e(n).removeClass("active"),e(o).removeClass("active"),e(i).prop("checked","");else{var c=!1;e(i).prop("checked")||(e(n).addClass("active"),c=!0),c||(e(i).prop("checked",""),e(n).removeClass("active"),e(o).removeClass("active"),e(t).addClass("subscribed"),e(s).toggleClass("active"),e(".subscribe-btn").toggleClass("active"))}}))}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".main.contacts").width()){var t=e(".contacts");e(t).find("#map")}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".main.cases").width()){var t=e(".main.cases"),a=e(t).find(".cases__filter"),i=e(t).find(".cases__filter-trigger");e(a).find(".tab-btn"),e(a).find(".cases__filter-discard");e(window).width()<=768?(e(a).hasClass("active")||(e(a).removeClass("active"),e(a).find(".cases__filter-block").slideUp(600)),e(i).on("click",(function(){a.hasClass("active")?(e(a).find(".cases__filter-block").slideUp(600),a.removeClass("active")):(a.addClass("active"),e(a).find(".cases__filter-block").slideDown(600))}))):e(a).find(".cases__filter-block").slideDown(600)}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".main.practices").width()){var t=e(".main.practices"),a=e(t).find(".practices__services"),i=e(a).find(".accordion-item__trigger"),s=e(t).find(".all-practices");e(".practices__manager .more-btn").on("click",(function(t){t.preventDefault();var a=e(".practices__feedback-modal"),i=e(a).find(".practices__feedback-modal-close");a.addClass("active"),e(i).on("click",(function(){a.removeClass("active")}))})),e(".accordion-item").each((function(t,a){e(a).hasClass("active")||(e(a).removeClass("active"),e(a).find(".accordion-item__content-wrap").css("height",0))})),e(i).on("click",(function(t){var a=e(t.delegateTarget).parent();a.hasClass("active")?(e(t.delegateTarget).next(".accordion-item__content-wrap").css("height",0),a.removeClass("active")):(e(".accordion-item").removeClass("active"),e(".accordion-item").find(".accordion-item__content-wrap").css("height",0),a.addClass("active"),e(t.delegateTarget).next(".accordion-item__content-wrap").css("height",e(t.delegateTarget).next(".accordion-item__content-wrap")[0].scrollHeight)),window.scroller.update(),setTimeout((function(){window.scroller.update()}),600)})),e(window).width()<=1060?(e(s).hasClass("active")||(e(s).removeClass("active"),e(s).find(".all-practices-block").slideUp(600)),e(".all-practices__trigger").on("click",(function(){s.hasClass("active")?(e(s).find(".all-practices-block").slideUp(600),s.removeClass("active")):(s.addClass("active"),e(s).find(".all-practices-block").slideDown(600))}))):(e(s).addClass("active"),e(s).find(".all-practices-block").slideDown(600))}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".anonce").width()){var t=e(".anonce"),a=e(t).find(".anonce__trigger"),i=e(t).find(".anonce__block"),s=e(t).find(".zoom-hide-item");e(s).each((function(t,a){e(a).removeClass("show")})),e(t).removeClass("active"),e(i).slideUp(600),e(a).on("click",(function(){t.hasClass("active")?(e(s).each((function(t,a){e(a).removeClass("show")})),setTimeout((function(){e(i).slideUp(600),e(t).removeClass("active")}),900)):(e(t).addClass("active"),e(i).slideDown(600),setTimeout((function(){e(s).each((function(t,a){e(a).addClass("show")}))}),600))}))}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".practices-modal").width()){var t=e(".practices-modal"),a=e(t).find(".practices-modal_close"),i=e(t).find(".practices-modal__link"),s=e(t).find(".zoom-hide-item");e(i).on("click",(function(a){a.preventDefault(),e(s).each((function(t,a){e(a).removeClass("show")})),setTimeout((function(){t.removeClass("active")}),1200)})),e(a).on("click",(function(){e(s).each((function(t,a){e(a).removeClass("show")})),setTimeout((function(){t.removeClass("active"),e(".header").removeClass("active")}),1200)})),e(document).mouseup((function(a){t.is(a.target)||0!==t.has(a.target).length||t.hasClass("active")&&(e(s).each((function(t,a){e(a).removeClass("show")})),setTimeout((function(){t.removeClass("active"),e(".header").removeClass("active")}),1200))}))}}).call(this,a(0))},function(e,t){var a=document.querySelector(".overlay");a&&a.addEventListener("click",(function(){a.classList.remove("active"),document.querySelectorAll(".modal").forEach((function(e){e.classList.remove("active")}))})),document.addEventListener("click",(function(e){var t=e.target;t.dataset.modalBtn?(e.preventDefault(),a.classList.add("active"),document.querySelector('.modal[data-modal="'.concat(t.dataset.modalBtn,'"]')).classList.add("active")):t.dataset.modalClose&&t.closest(".modal[data-modal]").classList.remove("active")}))},function(e,t,a){"use strict";a.r(t),function(e){var t=a(4);e("#map").width()&&new t.a({apiKey:"AIzaSyBQYAk9soX0a_B8jAVlzC1Mm4wzeTsZY0w"}).load().then((function(){var t=new google.maps.Map(document.getElementById("map"),{center:{lat:59.94700391527715,lng:30.36313817538211},zoom:12,styles:[{featureType:"all",elementType:"all",stylers:[{visibility:"simplified"},{hue:"#0083ff"},{lightness:"-25"},{saturation:"60"},{gamma:"1.00"},{invert_lightness:!0}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#073a6c"}]},{featureType:"poi",elementType:"all",stylers:[{color:"#073a6c"}]},{featureType:"road",elementType:"all",stylers:[{color:"#05315d"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#396b9d"},{lightness:"2"},{gamma:"1.00"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#4d77a1"}]},{featureType:"transit.line",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"transit.line",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"all",stylers:[{color:"#0a437c"},{gamma:"1.15"}]}]});window.debMap=t;var a=e("[data-type=coordinates]").val(),i=JSON.parse("".concat(a)),s=function(e){new google.maps.Marker({position:e,map:t,icon:"/local/templates/main/assets/images/icons/pin.svg"});o.extend(e)},n=null,o=new google.maps.LatLngBounds;for(var c in i)n=i[c].split(","),s({lat:Number(n[0]),lng:Number(n[1])});t.fitBounds(o)}))}.call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){a(23),a(25),a(0);e((function(){!function(){function t(){var t=[],a=e("[data-type=js-events-list]");e("[data-type=js-event-filter-tag]").each((function(){e(this).hasClass("active")&&(t[t.length]=e(this).attr("data-value"))})),e.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(e){a.html(e),window.scroller.update()}))}console.log("events"),e("[data-type=js-event-filter-tag]").on("click",(function(a){a.preventDefault(),e(this).toggleClass("active"),t()})),e("[data-type=js-event-filter-clear]").on("click",(function(a){a.preventDefault(),e("[data-type=js-event-filter-tag]").each((function(){e(this).hasClass("active")&&e(this).removeClass("active")})),t()}))}(),function(){function t(){var t=[],a=e("[data-type=js-cases-list]");e("[data-type=js-case-filter-tag]").each((function(){e(this).hasClass("active")&&(t[t.length]=e(this).attr("data-value"))})),e.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(e){a.html(e),window.scroller.update()}))}console.log("cases"),e("[data-type=js-case-filter-tag]").on("click",(function(a){a.preventDefault(),e(this).toggleClass("active"),t()})),e("[data-type=js-case-filter-clear]").on("click",(function(a){a.preventDefault(),e("[data-type=js-case-filter-tag]").each((function(){e(this).hasClass("active")&&e(this).removeClass("active")})),t()}))}(),e("[data-type=feedback-form]").parsley(),window.Parsley.addValidator("phone",{validateString:function(e){return 17==e.length&&9==e[4]}}),Inputmask({mask:"+7 (999) 999-9999"}).mask("[data-mask=phone]"),e("[data-type=feedback-form]").submit((function(t){t.preventDefault();var a=e(this),i={},s=a.attr("data-title-type"),n=a.attr("data-name-practic");s&&(i.UF_TYPE=s),n&&(i.UF_PRACTIC=n),a.find("input, textarea").each((function(){i[e(this).attr("data-uf")]=e(this).val()})),i&&e.ajax({type:"POST",url:"/local/templates/main/include/ajax/feedback_form.php",dataType:"json",data:i,success:function(t){console.log(t),a.hide(),e("[data-type=success-message]").toggleClass("active"),e("[data-type=success-message-title]").toggleClass("active")}})})),e(document).on("click","[data-type=show_more_click]",(function(t){var a=e(this),i=window.location.pathname.split("/"),s=a.attr("data-url"),n=a.attr("data-tags"),o=a.parents("[data-type-container=main-items-container]").find("[data-container=items]");n&&(n=JSON.parse(n)),s&&(a.remove(),e.ajax({method:"POST",url:s,data:{ajax:1,tags:n}}).done((function(t){var a=null,s=e(t).filter("[data-type=show_more_click]");a="events"==i[1]?e(t):e(t).find("[data-type=item]"),o.append(a),"cases"==i[1]&&o.after(s),window.scroller.update()})))})),e(document).on("click","[data-type=subscribe-click]",(function(t){t.preventDefault(),console.log("subscribe from");var a=e(document).find("[data-type=subscribe-form]").find("input[name=email]").val(),i={};i.UF_EMAIL=a,i&&e.ajax({type:"POST",url:"/local/templates/main/include/ajax/subscribe_form.php",dataType:"json",data:i,success:function(t){console.log(t),"exist"==t?e(document).find("[data-type=after-subscribe]").text("Данный E-mail уже подписан"):e(document).find("[data-type=after-subscribe]").text("Подписка успешно оформлена")}})}))}))}.call(this,a(0))},,,,,function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i);function n(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$root=document.querySelector(t),this.$root&&(this.$wrapper=this.$root.querySelector(".command__slider-wrapper"),this.$slides=this.$root.querySelectorAll(".command__slider-slide"),this.setActive=this.setActive.bind(this),this.init())}var t,a,i;return t=e,(a=[{key:"init",value:function(){var e=this;this.setActive(this.$slides[0]),this.$root.addEventListener("click",(function(t){var a=t.target;if(a.dataset.commandSliderArrow)switch(a.dataset.commandSliderArrow){case"prev":if(e.$active.previousElementSibling){e.setActive(e.$active.previousElementSibling);break}e.setActive(e.$slides[e.$slides.length-1]);break;case"next":if(e.$active.nextElementSibling){e.setActive(e.$active.nextElementSibling);break}e.setActive(e.$slides[0]);break;default:return}})),this.$root.addEventListener("touchstart",(function(t){e.$root.ontouchmove=function(a){e.$root.ontouchend=function(){return t.touches[0].clientX-a.touches[0].clientX<0&&t.touches[0].clientX-a.touches[0].clientX<-75?(e.$active.previousElementSibling?e.setActive(e.$active.previousElementSibling):e.setActive(e.$slides[e.$slides.length-1]),e.$root.ontouchmove=null,void(e.$root.ontouchend=null)):t.touches[0].clientX-a.touches[0].clientX>0&&t.touches[0].clientX-a.touches[0].clientX>75?(e.$active.nextElementSibling?e.setActive(e.$active.nextElementSibling):e.setActive(e.$slides[0]),e.$root.ontouchmove=null,void(e.$root.ontouchend=null)):void 0}}})),window.addEventListener("resize",(function(){e.setActive(e.$active)}))}},{key:"setActive",value:function(e){var t=this;this.$slides.forEach((function(a,i){a!==e?a.classList.remove("active"):(t.$wrapper.style.pointerEvents="none",setTimeout((function(){a.classList.add("active"),t.$active=a,t.$wrapper.style.transform="translateX(-".concat(t.$wrapper.offsetWidth*i,"px)"),t.$wrapper.style.pointerEvents=""}),1200))}))}}])&&n(t.prototype,a),i&&n(t,i),e}(),c=(new s.a(".practices__timeline-slider",{speed:300,slidesPerView:"auto",centeredSlides:!1,watchOverflow:!0,spaceBetween:20,freeMode:!0}),new s.a(".anonce__slider",{loop:!0,speed:600,simulateTouch:!1,slidesPerView:1,navigation:{nextEl:".next-btn",prevEl:".prev-btn"}}),new s.a(".about-company__clients-slider",{loop:!0,spaceBetween:20,watchOverflow:!0,speed:600,slidesPerView:8,breakpoints:{320:{slidesPerView:2},480:{slidesPerView:3},640:{slidesPerView:4},800:{slidesPerView:5},960:{slidesPerView:6},1120:{slidesPerView:7},1280:{slidesPerView:8}},navigation:{nextEl:".next-btn",prevEl:".prev-btn"}}),new s.a(".practices__slider",{loop:!0,loopedSlides:3,spaceBetween:20,initialSlide:0,speed:1e3,simulateTouch:!1,breakpoints:{768:{simulateTouch:!0}},navigation:{nextEl:".swiper-button-next"},on:{beforeTransitionStart:function(){var e=this.el.querySelector(".swiper-slide-active"),t=this.el.querySelector(".swiper-wrapper");window.matchMedia("(min-width: 769px)").matches&&(0!==this.realIndex||e.classList.contains("swiper-slide-duplicate"))?t.style.transitionDelay="0.6s":t.style.transitionDelay="0s"}}}),new o(".command__slider"),!0),l=!0,r=0,d=['<svg width="68" height="84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.82 70.67l.66 5.94c-7.773 4.62-16.683 6.93-26.73 6.93-13.127 0-23.137-3.74-30.03-11.22C3.68 64.987.16 55.197.16 42.95c0-3.887.403-7.7 1.21-11.44.807-3.813 2.2-7.59 4.18-11.33 2.053-3.813 4.583-7.113 7.59-9.9 3.08-2.86 7.04-5.17 11.88-6.93C29.86 1.59 35.287.71 41.3.71c8.14 0 16.28 1.943 24.42 5.83l-.66 6.16C58.9 5.587 50.43 2.03 39.65 2.03c-6.527 0-12.063 1.943-16.61 5.83-4.473 3.813-7.7 8.653-9.68 14.52-1.98 5.867-2.97 12.503-2.97 19.91 0 13.053 2.933 22.953 8.8 29.7 5.793 6.82 12.98 10.23 21.56 10.23 10.927 0 19.617-3.85 26.07-11.55z" fill="#fff"/></svg>','<svg width="68" height="84" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.82 70.67l.66 5.94c-7.773 4.62-16.683 6.93-26.73 6.93-13.127 0-23.137-3.74-30.03-11.22C3.68 64.987.16 55.197.16 42.95c0-3.887.403-7.7 1.21-11.44.807-3.813 2.2-7.59 4.18-11.33 2.053-3.813 4.583-7.113 7.59-9.9 3.08-2.86 7.04-5.17 11.88-6.93C29.86 1.59 35.287.71 41.3.71c8.14 0 16.28 1.943 24.42 5.83l-.66 6.16C58.9 5.587 50.43 2.03 39.65 2.03c-6.527 0-12.063 1.943-16.61 5.83-4.473 3.813-7.7 8.653-9.68 14.52-1.98 5.867-2.97 12.503-2.97 19.91 0 13.053 2.933 22.953 8.8 29.7 5.793 6.82 12.98 10.23 21.56 10.23 10.927 0 19.617-3.85 26.07-11.55z" fill="#fff"/></svg>','<svg width="60" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M59.31.47V80h-9.35V2.89c-3.007-.733-7.26-1.1-12.76-1.1H22.79c-5.353 0-9.533.367-12.54 1.1V80H.9V.47h58.41z" fill="#fff"/></svg>'],u=function(e){e.pagination.bullets.forEach((function(t){var a=t.querySelector(".bullet-progress__little-circle"),i=t.querySelector(".bullet-progress__circle");!l&&t.classList.contains("swiper-pagination-bullet-active")?(a.style.transform="rotate(360deg)",i.style.strokeDashoffset="0px",e.pagination.bullets.forEach((function(e){e.querySelector(".bullet-progress__little-circle").classList.remove("is-first-load")}))):(a.style.transitionDuration="0s",a.style.transform="rotate(0deg)",a.style.transitionDuration=null,i.style.transitionDuration="0s",i.style.strokeDashoffset="647.168px",i.style.transitionDuration=null)}))},f={loop:!0,effect:"fade",fadeEffect:{crossFade:!1},speed:1,simulateTouch:!1,autoplay:{delay:6200,disableOnInteraction:!1},pagination:{el:".fulpage__slider-pagination",clickable:!0,renderBullet:function(e,t){return'\n        <div class="fulpage__slider-bullet '.concat(t,'" data-bullet-index="0">\n          <span class="bullet-content">\n            ').concat(d[e],'\n          </span>\n          <div class="colored-circle"></div>\n          <div class="bullet-progress__little-circle is-first-load" style="transform: rotate(0deg);"></div>\n          <svg class="bullet-progress" width="220" height="220">\n            <circle class="bullet-progress__circle" stroke="#fff" stroke-width="1" cx="104" cy="104" r="103" fill="transparent" style="\n              stroke-dashoffset: 647.168px;\n              stroke-dasharray: 647.168, 647.168;\n            "></circle>\n          </svg>\n        </div>\n      ')}},on:{paginationUpdate:function(e){u(e)},autoplayStart:function(e){2===++r&&(l=!1),u(e)},slideChange:function(){c&&2===this.activeIndex&&(c=!1,this.slides.forEach((function(e){e.querySelectorAll(".is-first-load").forEach((function(e){e.classList.remove("is-first-load")}))})))}}},p=new s.a(document.querySelector(".fulpage__slider"),f);p.el&&(p.autoplay.stop(),window.fullPageSlider=p)}]);