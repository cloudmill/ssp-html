function events() {
  $("[data-type=js-event-filter-tag]").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");

    ajaxEventsList();
  });

  $("[data-type=js-event-filter-clear]").on("click", function (e) {
    e.preventDefault();

    $("[data-type=js-event-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });

    ajaxEventsList();
  });

  function ajaxEventsList() {
    let tags = [],
      eventsList = $("[data-type=js-events-list]");

    $("[data-type=js-event-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        tags[tags.length] = $(this).attr("data-value");
      }
    });

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        tags: tags,
      },
    }).done(function (a) {
      eventsList.html(a);
    });
  }
}

function cases() {
  $("[data-type=js-case-filter-tag]").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");

    ajaxCasesList();
  });

  $("[data-type=js-case-filter-clear]").on("click", function (e) {
    e.preventDefault();

    $("[data-type=js-case-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });

    ajaxCasesList();
  });

  function ajaxCasesList() {
    let tags = [],
      casesList = $("[data-type=js-cases-list]");

    $("[data-type=js-case-filter-tag]").each(function () {
      if ($(this).hasClass("active")) {
        tags[tags.length] = $(this).attr("data-value");
      }
    });

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        tags: tags,
      },
    }).done(function (a) {
      casesList.html(a);
    });
  }
}
