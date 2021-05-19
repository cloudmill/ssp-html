if ($(".header").width()) {
  const header = $(".header"),
    burger = $(header).find(".header__burger"),
    burgerClose = $(header).find(".header__burger_close");

  if (!$(".index-page").width()) {
    const anonce = $(".anonce");

    if (anonce) {
      anonce.css("display", "none");
    }
  }

  $(burger).on("click", () => {
    header.toggleClass("active");
  })

  if ($(".practices-modal").width()) {
    const practicesModal = $(".practices-modal"),
      practicesLink = $(header).find(".practices-link"),
      zoomHideItem = $(practicesModal).find(".zoom-hide-item");

    $(practicesLink).on("click", (e) => {
      e.preventDefault();
      practicesModal.toggleClass("active");

      setTimeout(() => {
        $(zoomHideItem).each(function (index, item) {
          $(item).addClass("show");
        });
      }, 700);
    });
  }
}
