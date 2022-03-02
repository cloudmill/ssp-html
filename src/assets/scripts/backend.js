import "parsleyjs";
import mask from "inputmask";
import { ajaxPrefilter } from "jquery";

$(function () {
  events();
  cases();
  validates();
  masks();
  submitForm();
  showMore();
  subscribe();
  modalTeam();
});

function modalTeam() {
  $(document).on("click", "[data-type=team-modal]", function (e) {
    console.log("modal team");

    let thisObj = $(this),
      name = thisObj.attr("data-name"),
      project = thisObj.attr("data-project"),
      publicBlock = thisObj.siblings("[data-type=modal-info-public]").html(),
      descProv = thisObj.siblings("[data-type=modal-info-desc-items]").html(),
      descBlock = thisObj.siblings("[data-type=modal-info-desc]").html();

    if (name) {
      $(document).find('[data-type=team-name]').html(name);
    }
    if (project) {
      $(document).find('[data-type=team-project]').html(project);
    }
    if (publicBlock) {
      $(document).find('[data-type=team-public]').html(publicBlock);
    }
    if (descProv) {
      $(document).find('[data-type=team-desc]').html(descBlock);
    }
  });
}

function subscribe() {
  $(document).on("click", "[data-type=subscribe-click]", function (e) {
    e.preventDefault();
    console.log("subscribe from");

    let form = $(document).find("[data-type=subscribe-form]"),
      email = form.find("input[name=email]").val(),
      data = {};

    data["UF_EMAIL"] = email;

    if (data) {
      $.ajax({
        type: "POST",
        url: "/local/templates/main/include/ajax/subscribe_form.php",
        dataType: "json",
        data: data,
        success: function (data) {
          console.log(data);
          if (data == "exist") {
            $(document).find("[data-type=after-subscribe]").text("Данный E-mail уже подписан");
          } else {
            $(document).find("[data-type=after-subscribe]").text("Подписка успешно оформлена");
          }
        },
      });
    }
  });
}

function showMore() {
  $(document).on("click", "[data-type=show_more_click]", function (e) {
    let thisObj = $(this),
      path = window.location.pathname,
      pathArr = path.split("/"),
      url = thisObj.attr("data-url"),
      tags = thisObj.attr("data-tags"),
      container = thisObj.parents("[data-type-container=main-items-container]"),
      itemsContainer = container.find("[data-container=items]");

    if (tags) {
      tags = JSON.parse(tags);
    }

    if (url) {
      thisObj.remove();

      $.ajax({
        method: "POST",
        url: url,
        data: {
          ajax: 1,
          tags: tags,
        },
      }).done(function (r) {
        let itemsResponse = null,
          responsePageNav = $(r).filter("[data-type=show_more_click]");

        if (pathArr[1] == "events") {
          itemsResponse = $(r);
        } else {
          itemsResponse = $(r).find("[data-type=item]");
        }

        itemsContainer.append(itemsResponse);
        if (pathArr[1] == "cases") {
          itemsContainer.after(responsePageNav);
        }
        window.scroller.update();
      });
    }
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
      window.scroller.update();
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
      window.scroller.update();
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
