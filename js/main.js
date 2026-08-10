// Shuchana Development Limited — site scripts

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Project filter tabs (projects page)
  var filterButtons = document.querySelectorAll(".filter-btn");
  var projectCards = document.querySelectorAll("[data-city], [data-type]");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var group = btn.closest(".filter-row");
        group.querySelectorAll(".filter-btn").forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");

        var filter = btn.getAttribute("data-filter");
        projectCards.forEach(function (card) {
          if (filter === "all") {
            card.style.display = "";
            return;
          }
          var matches =
            card.getAttribute("data-city") === filter ||
            card.getAttribute("data-type") === filter;
          card.style.display = matches ? "" : "none";
        });
      });
    });
  }

  // Basic client-side validation feedback for the inquiry form
  var form = document.querySelector(".inquiry-form");
  if (form) {
    // Point FormSubmit's redirect at this same site's thank-you page,
    // regardless of what domain/path the site ends up hosted at.
    var nextField = document.getElementById("formNext");
    if (nextField) {
      nextField.value = new URL("thank-you.html", window.location.href).href;
    }

    // Pre-fill the form when arriving from an "Inquire" link on the
    // Ongoing Projects page, e.g. contact.html?project=Shuchana+Heights&city=Dhaka&type=Residential
    var params = new URLSearchParams(window.location.search);
    var project = params.get("project");
    var city = params.get("city");
    var type = params.get("type");

    if (project) {
      var messageField = document.getElementById("message");
      if (messageField) {
        messageField.value =
          "I'm interested in " + project + ". Please share more details about pricing and availability.";
      }
    }
    if (city) {
      var cityField = document.getElementById("city");
      if (cityField && [].slice.call(cityField.options).some(function (o) { return o.value === city; })) {
        cityField.value = city;
      }
    }
    if (type) {
      var typeField = document.getElementById("type");
      if (typeField && [].slice.call(typeField.options).some(function (o) { return o.value === type; })) {
        typeField.value = type;
      }
    }

    form.addEventListener("submit", function () {
      var submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
