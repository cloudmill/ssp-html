!function(e){function t(t){for(var i,l,o=t[0],c=t[1],r=t[2],f=0,u=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&u.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(d&&d(t);u.length;)u.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},s={0:0},n=[];function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var d=c;n.push([5,1,2]),a()}([,,,,,function(e,t,a){"use strict";a.r(t),function(e){a(0);var t=a(2),i=a.n(t);a(6),a(7);e((function(){a(8),a(9),a(10),a(11),a(12),a(13),a(16),a(17),a(18),a(19),a(20),a(21),a(22),a(23);var t=e(".loader"),s=t.find(".loader-progress").find(".loader-progress__circle"),n=+s.attr("r"),l=2*Math.PI*n;if(setTimeout((function(){window.scrollTo(0,0)}),100),t.hasClass("hidden"))e("body").css("overflow","hidden"),setTimeout((function(){e("body").css("overflow","visible"),i.a.init({offset:50,duration:600,easing:"ease-in-out-quad",delay:100,once:!0})}),500);else{var o=1500;e("body").css("overflow","hidden"),s.css("strokeDasharray","".concat(l," ").concat(l)),s.css("strokeDashoffset",l),s.css("transition","stroke-dashoffset ".concat(o,"ms cubic-bezier(0.45, 0, 0.55, 1)")),s.css("display","block"),setTimeout((function(){e(".loaded-content").css("visibility","visible"),s.css("strokeDashoffset",0),e("body").css("overflow","visible"),setTimeout((function(){e(".loader").addClass("hidden");var t=e(".fulpage__slider-bullet"),a=t.find(".bullet-progress__circle");e(t[0]).addClass("fulpage__slider-bullet-filling"),e(a[0]).css("strokeDashoffset",0),i.a.init({offset:50,duration:600,easing:"ease-in-out-quad",delay:100,once:!0})}),o)}),10)}}))}.call(this,a(0))},,function(e,t,a){},function(e,t,a){(function(e){if(e(".header").width()){var t=e(".header"),a=e(t).find(".header__burger");e(t).find(".header__burger_close");if(!e(".index-page").width()){var i=e(".anonce");i&&i.css("display","none")}if(e(a).on("click",(function(){t.toggleClass("active")})),e(".practices-modal").width()){var s=e(".practices-modal"),n=e(t).find(".practices-link"),l=e(s).find(".zoom-hide-item");e(n).on("click",(function(t){t.preventDefault(),s.toggleClass("active"),setTimeout((function(){e(l).each((function(t,a){e(a).addClass("show")}))}),700)}))}}}).call(this,a(0))},function(e,t,a){(function(e){e(".feedback .more-btn").on("click",(function(t){t.preventDefault();var a=e(t.delegateTarget).closest(".feedback"),i=e(a).find(".submit-btn"),s=e(a).find(".feedback__title"),n=e(a).find(".feedback__form"),l=e(n).find(".feedback-name"),o=e(n).find(".feedback-email"),c=e(n).find(".feedback-phone"),r=e(n).find("textarea[name=message]"),d=e(a).find("input[name=agree]");if(e(a).hasClass("sended"))return e(l).find("input[name=name]").val(""),e(o).find("input[name=email]").val(""),e(c).find("input[name=phone]").val(""),e(r).val(""),e(d).prop("checked",""),e(a).removeClass("sended"),e(i).toggleClass("active"),e(s).toggleClass("active"),!0;var f=!1;return e(a).removeClass("sended"),e(l).find(".error").removeClass("active"),e(o).find(".error").removeClass("active"),e(c).find(".error").removeClass("active"),e(d).siblings("label").find(".error").removeClass("active"),e(l).find("input[name=name]").attr("required")&&!e(l).find("input[name=name]").val()&&(e(l).find(".error").addClass("active"),f=!0),e(o).find("input[name=email]").attr("required")&&!e(o).find("input[name=email]").val()&&(e(o).find(".error").addClass("active"),f=!0),e(c).find("input[name=phone]").attr("required")&&!e(c).find("input[name=phone]").val()&&(e(c).find(".error").addClass("active"),f=!0),e(d).attr("required")&&!e(d).prop("checked")&&(e(d).siblings("label").find(".error").addClass("active"),f=!0),f?void 0:(e(a).addClass("sended"),e(i).toggleClass("active"),e(s).toggleClass("active"),!0)}))}).call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){var t=a(1),i=a.n(t),s=e(".bullet-progress__circle"),n=+e(s[0]).attr("r"),l=2*Math.PI*n;!function(t){e(t).each((function(t,a){e(a).css("strokeDasharray","".concat(l," ").concat(l)),e(a).css("strokeDashoffset",l)}))}(s);new i.a(".practices__timeline-slider",{speed:300,slidesPerView:"auto",centeredSlides:!1,watchOverflow:!0,spaceBetween:20,freeMode:!0}),new i.a(".anonce__slider",{loop:!0,speed:600,simulateTouch:!1,slidesPerView:1,navigation:{nextEl:".next-btn",prevEl:".prev-btn"}}),new i.a(".about-company__clients-slider",{loop:!0,spaceBetween:20,watchOverflow:!0,speed:600,slidesPerView:8,breakpoints:{320:{slidesPerView:2},480:{slidesPerView:3},640:{slidesPerView:4},800:{slidesPerView:5},960:{slidesPerView:6},1120:{slidesPerView:7},1280:{slidesPerView:8}},navigation:{nextEl:".next-btn",prevEl:".prev-btn"}}),new i.a(".practices__slider",{loop:!0,loopedSlides:3,spaceBetween:20,allowSlidePrev:!1,watchOverflow:!0,initialSlide:0,speed:1e3,simulateTouch:!1,breakpoints:{768:{simulateTouch:!0,allowSlidePrev:!0}},navigation:{nextEl:".swiper-button-next"}}),new i.a(".command__slider",{loop:!0,loopedSlides:3,initialSlide:0,spaceBetween:40,speed:600,simulateTouch:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var o={loop:!0,effect:"fade",speed:600,simulateTouch:!1,autoplay:{delay:5e3,disableOnInteraction:!1}};function c(t){e(t).css("strokeDashoffset",0)}setTimeout((function(){var t=new i.a(".fulpage__slider",o);function a(a){var i;e(".fulpage__slider-bullet").each((function(t,i){if(t===a)return e(i).addClass("fulpage__slider-bullet-active"),e(i).addClass("fulpage__slider-bullet-filling"),void setTimeout((function(){c(e(i).find(".bullet-progress__circle"))}),600);(e(i).hasClass("fulpage__slider-bullet-active")||e(i).hasClass("fulpage__slider-bullet-filling"))&&(e(i).removeClass("fulpage__slider-bullet-active"),e(i).removeClass("fulpage__slider-bullet-filling"),setTimeout((function(){var t;t=e(i).find(".bullet-progress__circle"),e(t).css("strokeDashoffset",l)}),600))})),i=a,t.slideToLoop(i,600,!0),c()}t.on("slideChangeTransitionStart",(function(){a(t.realIndex)})),e(".fulpage__slider-bullet").on("click",(function(t){var i;i=e(t.target).hasClass("fulpage__slider-bullet")?t.target:t.target.closest(".fulpage__slider-bullet"),a(e(i).data("bulletIndex"))}))}),1500)}.call(this,a(0))},function(e,t,a){(function(e,t){e("img.svg").each((function(){var a=t(this),i=a.attr("src"),s=a.prop("attributes");e.get(i,(function(i){var n=t(i).find("svg");n=n.removeAttr("xmlns:a"),e.each(s,(function(){n.attr(this.name,this.value)})),a.replaceWith(n)}),"xml")}))}).call(this,a(0),a(0))},function(e,t,a){(function(e){var t=0;e(window).on("scroll",(function(){a()}));var a=function(){var a=e(".header");e(window).scrollTop()>e(window).height()/15?a.addClass("scrolled"):a.removeClass("scrolled"),e(window).scrollTop()>e(window).height()/3&&e(window).scrollTop()>t&&!a.hasClass("active")?a.addClass("out"):a.removeClass("out"),t=e(window).scrollTop()}}).call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){var t=a(3),i=a.n(t);e(".ticker-wrapper.text"),e(".ticker-wrapper.images");new i.a(".recognition__content-row").render({circular:!0,loop:-1,drag:!1,hoverstop:!1,scrollamount:80})}.call(this,a(0))},,,function(e,t,a){(function(e){if(e(".main.events").width()||e(".main.event").width()){var t=e(".events__subscribe-block"),a=(e(t).find(".filter .filter__tabs .tab-btn"),e(".filter .filter__discard"),e(t).find(".subscribe .more-btn")),i=e(t).find(".subscribe input[name=agree]"),s=e(t).find(".subscribe input[name=email]"),n=e(t).find(".subscribe .subscribe-title"),l=e(t).find(".subscribe input[name=agree] + label .error"),o=e(t).find(".subscribe input[name=email] + .error");e(a).on("click",(function(a){if(a.preventDefault(),e(t).hasClass("subscribed"))e(t).removeClass("subscribed"),e(n).toggleClass("active"),e(".subscribe-btn").toggleClass("active"),e(l).removeClass("active"),e(o).removeClass("active"),e(i).prop("checked","");else{var c=!1;e(i).prop("checked")||(e(l).addClass("active"),c=!0),e(s).val()||(e(o).addClass("active"),c=!0),c||(e(i).prop("checked",""),e(l).removeClass("active"),e(o).removeClass("active"),e(t).addClass("subscribed"),e(n).toggleClass("active"),e(".subscribe-btn").toggleClass("active"),e(s).val(""))}}))}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".main.contacts").width()){var t=e(".contacts");e(t).find("#map")}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".main.cases").width()){var t=e(".main.cases"),a=e(t).find(".cases__filter"),i=e(t).find(".cases__filter-trigger");e(a).find(".tab-btn"),e(a).find(".cases__filter-discard");e(window).width()<=768?(e(a).hasClass("active")||(e(a).removeClass("active"),e(a).find(".cases__filter-block").slideUp(600)),e(i).on("click",(function(){a.hasClass("active")?(e(a).find(".cases__filter-block").slideUp(600),a.removeClass("active")):(a.addClass("active"),e(a).find(".cases__filter-block").slideDown(600))}))):e(a).find(".cases__filter-block").slideDown(600)}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".main.practices").width()){var t=e(".main.practices"),a=e(t).find(".practices__services"),i=e(a).find(".accordion-item__trigger"),s=e(t).find(".all-practices");e(".practices__manager .more-btn").on("click",(function(t){t.preventDefault();var a=e(".practices__feedback-modal"),i=e(a).find(".practices__feedback-modal-close");a.addClass("active"),e(i).on("click",(function(){a.removeClass("active")}))})),e(".accordion-item").each((function(t,a){e(a).hasClass("active")||(e(a).removeClass("active"),e(a).find(".accordion-item__content").slideUp(600))})),e(i).on("click",(function(t){var a=e(t.delegateTarget).parent();a.hasClass("active")?(e(t.delegateTarget).next(".accordion-item__content").slideUp(600),a.removeClass("active")):(e(".accordion-item").removeClass("active"),e(".accordion-item").find(".accordion-item__content").slideUp(600),a.addClass("active"),e(t.delegateTarget).next(".accordion-item__content").slideDown(600))})),e(window).width()<=1060?(e(s).hasClass("active")||(e(s).removeClass("active"),e(s).find(".all-practices-block").slideUp(600)),e(".all-practices__trigger").on("click",(function(){s.hasClass("active")?(e(s).find(".all-practices-block").slideUp(600),s.removeClass("active")):(s.addClass("active"),e(s).find(".all-practices-block").slideDown(600))}))):(e(s).addClass("active"),e(s).find(".all-practices-block").slideDown(600))}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".anonce").width()){var t=e(".anonce"),a=e(t).find(".anonce__trigger"),i=e(t).find(".anonce__block"),s=e(t).find(".zoom-hide-item");e(s).each((function(t,a){e(a).removeClass("show")})),e(t).removeClass("active"),e(i).slideUp(600),e(a).on("click",(function(){t.hasClass("active")?(e(s).each((function(t,a){e(a).removeClass("show")})),setTimeout((function(){e(i).slideUp(600),e(t).removeClass("active")}),900)):(e(t).addClass("active"),e(i).slideDown(600),setTimeout((function(){e(s).each((function(t,a){e(a).addClass("show")}))}),600))}))}}).call(this,a(0))},function(e,t,a){(function(e){if(e(".practices-modal").width()){var t=e(".practices-modal"),a=e(t).find(".practices-modal_close"),i=e(t).find(".practices-modal__link"),s=e(t).find(".zoom-hide-item");e(i).on("click",(function(a){a.preventDefault(),e(s).each((function(t,a){e(a).removeClass("show")})),setTimeout((function(){t.removeClass("active")}),1200)})),e(a).on("click",(function(){e(s).each((function(t,a){e(a).removeClass("show")})),setTimeout((function(){t.removeClass("active"),e(".header").removeClass("active")}),1200)}))}}).call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){var t=a(4);e("#map").width()&&new t.a({apiKey:"AIzaSyDH6vqQLGTGXjMIF7KEDy1-ijODaKbDxyQ"}).load().then((function(){var e=new google.maps.Map(document.getElementById("map"),{center:{lat:59.94700391527715,lng:30.36313817538211},zoom:12,styles:[{featureType:"all",elementType:"all",stylers:[{visibility:"simplified"},{hue:"#0083ff"},{lightness:"-25"},{saturation:"60"},{gamma:"1.00"},{invert_lightness:!0}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#073a6c"}]},{featureType:"poi",elementType:"all",stylers:[{color:"#073a6c"}]},{featureType:"road",elementType:"all",stylers:[{color:"#05315d"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#396b9d"},{lightness:"2"},{gamma:"1.00"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#4d77a1"}]},{featureType:"transit.line",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"transit.line",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"all",stylers:[{color:"#0a437c"},{gamma:"1.15"}]}]}),t=function(t){new google.maps.Marker({position:t,map:e,icon:"assets/images/icons/pin.svg"})};t({lat:59.97585905027141,lng:30.304834817801797}),t({lat:59.94700391527715,lng:30.36313817538211})}))}.call(this,a(0))},function(e,t,a){(function(e){!function(){function t(){var t=[],a=e("[data-type=js-events-list]");e("[data-type=js-event-filter-tag]").each((function(){e(this).hasClass("active")&&(t[t.length]=e(this).attr("data-value"))})),e.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(e){a.html(e)}))}console.log("events"),e("[data-type=js-event-filter-tag]").on("click",(function(a){a.preventDefault(),e(this).toggleClass("active"),t()})),e("[data-type=js-event-filter-clear]").on("click",(function(a){a.preventDefault(),e("[data-type=js-event-filter-tag]").each((function(){e(this).hasClass("active")&&e(this).removeClass("active")})),t()}))}(),function(){function t(){var t=[],a=e("[data-type=js-cases-list]");e("[data-type=js-case-filter-tag]").each((function(){e(this).hasClass("active")&&(t[t.length]=e(this).attr("data-value"))})),e.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:t}}).done((function(e){a.html(e)}))}console.log("cases"),e("[data-type=js-case-filter-tag]").on("click",(function(a){a.preventDefault(),e(this).toggleClass("active"),t()})),e("[data-type=js-case-filter-clear]").on("click",(function(a){a.preventDefault(),e("[data-type=js-case-filter-tag]").each((function(){e(this).hasClass("active")&&e(this).removeClass("active")})),t()}))}()}).call(this,a(0))}]);