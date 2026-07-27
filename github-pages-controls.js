document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector(".back-to-top");
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const launcher = document.querySelector(".sales-launcher");
  if (!launcher) return;

  const services = [
    "Oficina equipada",
    "Sala de juntas",
    "Domicilio fiscal",
    "Oficina virtual",
  ];
  let agent = null;
  let selectedService = "";

  const closeAgent = () => {
    agent?.remove();
    agent = null;
    launcher.classList.remove("active");
    launcher.setAttribute("aria-expanded", "false");
    launcher.innerHTML = "<span>◉</span><b>Agente de ventas</b><i></i>";
  };

  const openAgent = () => {
    agent = document.createElement("aside");
    agent.className = "sales-agent";
    agent.setAttribute("aria-label", "Agente de ventas Zenttre");
    agent.innerHTML = `
      <div class="sales-agent-head">
        <div class="sales-avatar">Z</div>
        <div><strong>Agente Zenttre</strong><span><i></i> En línea</span></div>
        <button type="button" aria-label="Cerrar agente de ventas">×</button>
      </div>
      <div class="sales-agent-body">
        <div class="sales-message">
          <p>¡Hola! Soy tu asesor de Zenttre.</p>
          <p>¿Qué servicio te interesa?</p>
        </div>
        <div class="sales-options">
          ${services.map((service) => `<button type="button" data-service="${service}"><span>→</span>${service}</button>`).join("")}
        </div>
        <a class="sales-whatsapp" aria-disabled="true"><span>◉</span>Selecciona un servicio</a>
        <small>Te conectaremos con un asesor de ventas.</small>
      </div>`;

    document.body.appendChild(agent);
    launcher.classList.add("active");
    launcher.setAttribute("aria-expanded", "true");
    launcher.innerHTML = "<span>×</span><b>Cerrar</b>";

    agent.querySelector(".sales-agent-head button")?.addEventListener("click", closeAgent);
    const whatsapp = agent.querySelector(".sales-whatsapp");

    agent.querySelectorAll("[data-service]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedService = button.dataset.service;
        agent.querySelectorAll("[data-service]").forEach((item) => {
          item.classList.toggle("selected", item === button);
          item.querySelector("span").textContent = item === button ? "✓" : "→";
        });
        const message = `Hola, me interesa recibir información sobre ${selectedService}. ¿Podrían ayudarme?`;
        whatsapp.href = `https://wa.me/525579250612?text=${encodeURIComponent(message)}`;
        whatsapp.target = "_blank";
        whatsapp.rel = "noreferrer";
        whatsapp.classList.add("ready");
        whatsapp.setAttribute("aria-disabled", "false");
        whatsapp.innerHTML = "<span>◉</span>Continuar en WhatsApp";
      });
    });
  };

  launcher.addEventListener("click", () => {
    if (agent) closeAgent();
    else openAgent();
  });
});
