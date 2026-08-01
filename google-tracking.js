(function () {
  var config = window.ZENTTRE_GOOGLE_TAGS || {};
  var ids = [config.tagId, config.adsId].filter(function (id, index, list) {
    return id && list.indexOf(id) === index;
  });
  if (!ids.length) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  ids.forEach(function (id) { window.gtag("config", id, { send_page_view: true }); });

  var loader = document.createElement("script");
  loader.async = true;
  loader.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ids[0]);
  document.head.appendChild(loader);

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link) return;
    var href = link.getAttribute("href") || "";
    var method = href.indexOf("mailto:") === 0 ? "email" : href.indexOf("tel:") === 0 ? "phone" : "";
    if (!method) return;
    window.gtag("event", "generate_lead", { method: method, link_url: href.split("?")[0] });
    if (config.adsId && config.adsConversionLabel) {
      window.gtag("event", "conversion", { send_to: config.adsId + "/" + config.adsConversionLabel });
    }
  });
})();
