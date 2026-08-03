document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  if (footer) {
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle("footer-in-view", entry.isIntersecting);
        if (entry.isIntersecting) {
          document.querySelector(".sales-agent")?.remove();
          agent = null;
          const footerLauncher = document.querySelector(".sales-launcher");
          footerLauncher?.classList.remove("active");
          footerLauncher?.setAttribute("aria-expanded", "false");
          if (footerLauncher) {
            footerLauncher.innerHTML = "<span>◉</span><b>Agente de ventas</b><i></i>";
          }
        }
      },
      { threshold: 0.08 },
    );
    footerObserver.observe(footer);
  }

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
  let people = "";
  let extraMessage = "";

  const asksForPeople = () =>
    selectedService === "Oficina equipada" || selectedService === "Sala de juntas";

  const updateWhatsAppLink = () => {
    if (!agent) return;
    const whatsapp = agent.querySelector(".sales-email");
    const routingMessage = agent.querySelector(".sales-routing-message");
    const canContinue = Boolean(selectedService) && (!asksForPeople() || Number(people) > 0);

    routingMessage.hidden = !canContinue;
    if (!canContinue) {
      whatsapp.removeAttribute("href");
      whatsapp.removeAttribute("target");
      whatsapp.removeAttribute("rel");
      whatsapp.classList.remove("ready");
      whatsapp.setAttribute("aria-disabled", "true");
      whatsapp.innerHTML = `<span>◉</span>${selectedService ? "Indica el número de personas" : "Selecciona un servicio"}`;
      return;
    }

    const message = `¡Hola! Nos da mucho gusto recibir tu mensaje. Me interesa ${selectedService.toLowerCase()}${
      asksForPeople() ? ` para ${people} ${Number(people) === 1 ? "persona" : "personas"}` : ""
    }. Entiendo que mi solicitud será canalizada al área de ventas.${
      extraMessage.trim() ? `\n\nMensaje adicional: ${extraMessage.trim()}` : ""
    }`;
    whatsapp.href = `https://wa.me/525579250612?text=${encodeURIComponent(message)}`;
    whatsapp.target = "_blank";
    whatsapp.rel = "noopener noreferrer";
    whatsapp.classList.add("ready");
    whatsapp.setAttribute("aria-disabled", "false");
    whatsapp.innerHTML = "<span>◉</span>Continuar en WhatsApp Business";
  };

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
        <div class="sales-avatar"><img src="/zenttre/images/sales-agent-zenttre.jpg" alt="" aria-hidden="true"></div>
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
        <div class="sales-people" hidden>
          <label for="sales-people-count"></label>
          <input id="sales-people-count" type="number" min="1" inputmode="numeric" placeholder="Número de personas">
        </div>
        <div class="sales-extra-message">
          <label for="sales-extra-message">¿Necesitas preguntarnos algo más? <span>(opcional)</span></label>
          <textarea id="sales-extra-message" rows="3" placeholder="Escribe aquí tu mensaje"></textarea>
        </div>
        <div class="sales-routing-message" role="status" hidden>Nos da mucho gusto recibir tu mensaje. Tu solicitud será canalizada al área de ventas.</div>
        <a class="sales-email" aria-disabled="true"><span>◉</span>Selecciona un servicio</a>
        <small>Te conectaremos con nuestra área de ventas.</small>
      </div>`;

    document.body.appendChild(agent);
    launcher.classList.add("active");
    launcher.setAttribute("aria-expanded", "true");
    launcher.innerHTML = "<span>×</span><b>Cerrar</b>";

    agent.querySelector(".sales-agent-head button")?.addEventListener("click", closeAgent);
    const peopleBox = agent.querySelector(".sales-people");
    const peopleLabel = peopleBox.querySelector("label");
    const peopleInput = peopleBox.querySelector("input");
    const extraMessageInput = agent.querySelector("#sales-extra-message");

    peopleInput.addEventListener("input", () => {
      people = peopleInput.value;
      updateWhatsAppLink();
    });
    extraMessageInput.addEventListener("input", () => {
      extraMessage = extraMessageInput.value;
      updateWhatsAppLink();
    });

    agent.querySelectorAll("[data-service]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedService = button.dataset.service;
        people = "";
        peopleInput.value = "";
        agent.querySelectorAll("[data-service]").forEach((item) => {
          item.classList.toggle("selected", item === button);
          item.querySelector("span").textContent = item === button ? "✓" : "→";
        });
        peopleBox.hidden = !asksForPeople();
        if (asksForPeople()) {
          peopleLabel.textContent = `¿Para cuántas personas buscas ${selectedService === "Sala de juntas" ? "la sala de juntas" : "la oficina"}?`;
          peopleInput.focus();
        }
        updateWhatsAppLink();
      });
    });
  };

  launcher.addEventListener("click", () => {
    if (agent) closeAgent();
    else openAgent();
  });
});
