(function () {
  var adsConversionDestination = "AW-979193174/8vmUCITInfMBENaa9dID";
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  function trackLead(method, details, isPrimaryConversion) {
    window.gtag("event", "generate_lead", Object.assign({ method: method }, details || {}));

    if (isPrimaryConversion) {
      window.gtag("event", "conversion", {
        send_to: adsConversionDestination,
      });
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var method = href.indexOf("mailto:") === 0
      ? "email"
      : href.indexOf("tel:") === 0
        ? "phone"
        : href.indexOf("https://wa.me/") === 0
          ? "whatsapp"
          : "";

    if (method) {
      trackLead(method, {
        link_url: href.split("?")[0],
      });
    }
  });

  var status = new URLSearchParams(window.location.search).get("contact");
  if (status === "success") {
    var storageKey = "zenttre_ads_form_conversion";
    if (!window.sessionStorage.getItem(storageKey)) {
      trackLead("contact_form", { form_name: "Formulario contacto general" }, true);
      window.sessionStorage.setItem(storageKey, "1");
    }
  }
})();
