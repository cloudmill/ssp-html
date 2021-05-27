if ($(".practices-modal").width()) {
  const practicesModal = $(".practices-modal"),
    btnCloseHeader = $(practicesModal).find(".practices-modal_close"),
    btnCloseModal = $(practicesModal).find(".practices-modal__link"),
    zoomHideItem = $(practicesModal).find(".zoom-hide-item");

  $(btnCloseModal).on("click", (e) => {
    e.preventDefault();

    $(zoomHideItem).each(function (index, item) {
      $(item).removeClass("show");
    });

    setTimeout(() => {
      practicesModal.removeClass("active");
    }, 1200);
  });

  $(btnCloseHeader).on("click", () => {
    $(zoomHideItem).each(function (index, item) {
      $(item).removeClass("show");
    });

    setTimeout(() => {
      practicesModal.removeClass("active");
      $(".header").removeClass("active");
    }, 1200);
  });

  $(document).mouseup(function (e) {
    if (
      !practicesModal.is(e.target) &&
      practicesModal.has(e.target).length === 0
    ) {
      if (practicesModal.hasClass("active")) {
        $(zoomHideItem).each(function (index, item) {
          $(item).removeClass("show");
        });

        setTimeout(() => {
          practicesModal.removeClass("active");
          $(".header").removeClass("active");
        }, 1200);
      }
    }
  });
}
