if ($(".main.practices").width()) {
  const practices = $(".main.practices"),
    services = $(practices).find(".practices__services"),
    triggers = $(services).find(".accordion-item__trigger"),
    allPractices = $(practices).find(".all-practices");

  $(".practices__manager .more-btn").on("click", (e) => {
    e.preventDefault();

    const feedbackModal = $(".practices__feedback-modal"),
      closeBtn = $(feedbackModal).find(".practices__feedback-modal-close");

    feedbackModal.addClass("active");

    $(closeBtn).on("click", () => {
      feedbackModal.removeClass("active");
    });
  });

  $(".accordion-item").each(function (index, element) {
    if (!$(element).hasClass("active")) {
      $(element).removeClass("active");
      // $(element).find(".accordion-item__content").slideUp(600);
      $(element).find(".accordion-item__content-wrap").css('height', 0);
    }
  });

  $(triggers).on("click", (e) => {
    const parent = $(e.delegateTarget).parent();

    if (parent.hasClass("active")) {
      // $(e.delegateTarget).next(".accordion-item__content").slideUp(600);
      $(e.delegateTarget).next(".accordion-item__content-wrap").css('height', 0);
      parent.removeClass("active");
    } else {
      $(".accordion-item").removeClass("active");
      // $(".accordion-item").find(".accordion-item__content").slideUp(600);
      $(".accordion-item").find(".accordion-item__content-wrap").css('height', 0);
      parent.addClass("active");
      // $(e.delegateTarget).next(".accordion-item__content").slideDown(600);
      $(e.delegateTarget).next(".accordion-item__content-wrap").css('height',
        $(e.delegateTarget).next(".accordion-item__content-wrap")[0].scrollHeight);
      // console.log()
    }

    window.scroller.update();
    setTimeout(() => {
      window.scroller.update();
    }, 600);
  });

  if ($(window).width() <= 1060) {
    if (!$(allPractices).hasClass("active")) {
      $(allPractices).removeClass("active");
      $(allPractices).find(".all-practices-block").slideUp(600);
    }

    $(".all-practices__trigger").on("click", () => {
      if (allPractices.hasClass("active")) {
        $(allPractices).find(".all-practices-block").slideUp(600);
        allPractices.removeClass("active");
      } else {
        allPractices.addClass("active");
        $(allPractices).find(".all-practices-block").slideDown(600);
      }
    });
  } else {
    $(allPractices).addClass("active");
    $(allPractices).find(".all-practices-block").slideDown(600);
  }
}
