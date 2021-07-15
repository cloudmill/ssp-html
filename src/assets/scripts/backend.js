import "parsleyjs";
import mask from "inputmask";

$(function () {
  events();
  cases();
  validates();
  masks();
  submitForm();
  showMore();
});

function showMore() {
  $("[data-type=show_more_click]").on("click", function (e) {
    console.log("show more");

    let count = $(this).attr("data-count"),
      tags = $(this).attr("data-tags"),
      casesList = $("[data-type=js-cases-list]");

    $.ajax({
      method: "POST",
      url: window.location.href,
      data: {
        ajax: 1,
        count: count,
        tags: tags,
      },
    }).done(function (a) {
      casesList.html(a);
    });
  });
}

function events() {
  console.log("events");
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
  console.log("cases");
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
      casesList = $("[data-type=js-cases-list]"),
      count = $("[data-type=show_more_click]").attr("data-count");

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
        count: count,
      },
    }).done(function (a) {
      casesList.html(a);
    });
  }
}

function validates() {
  $("[data-type=feedback-form]").parsley();

  window.Parsley.addValidator("phone", {
    validateString: function (value) {
      if (value.length == 17 && value[4] == 9) {
        return true;
      } else {
        return false;
      }
    },
  });
}

function masks() {
  Inputmask({ mask: "+7 (999) 999-9999" }).mask("[data-mask=phone]");
}

function submitForm() {
  $("[data-type=feedback-form]").submit(function (e) {
    e.preventDefault();

    let form = $(this),
      data = {},
      formType = form.attr("data-title-type"),
      namePractic = form.attr("data-name-practic");

    if (formType) {
      data["UF_TYPE"] = formType;
    }

    if (namePractic) {
      data["UF_PRACTIC"] = namePractic;
    }

    form.find("input, textarea").each(function () {
      data[$(this).attr("data-uf")] = $(this).val();
    });

    if (data) {
      $.ajax({
        type: "POST",
        url: "/local/templates/main/include/ajax/feedback_form.php",
        dataType: "json",
        data: data,
        success: function (data) {
          console.log(data);
          form.hide();
          $("[data-type=success-message]").toggleClass("active");
          $("[data-type=success-message-title]").toggleClass("active");
        },
      });
    }
  });
}
