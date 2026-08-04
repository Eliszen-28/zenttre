(function () {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

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
      window.gtag("event", "generate_lead", {
        method: method,
        link_url: href.split("?")[0],
      });
    }
  });

  var status = new URLSearchParams(window.location.search).get("contact");
  if (status === "success") {
    window.gtag("event", "generate_lead", { method: "contact_form" });
  }
})();
