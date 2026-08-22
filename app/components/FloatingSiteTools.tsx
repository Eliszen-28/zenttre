"use client";

import { useEffect, useState } from "react";

const salesOptions = [
  "Oficina equipada",
  "Sala de juntas",
  "Domicilio fiscal",
  "Oficina virtual",
];

export default function FloatingSiteTools() {
  const [salesOpen, setSalesOpen] = useState(false);
  const [salesService, setSalesService] = useState("");
  const [people, setPeople] = useState("");
  const [extraMessage, setExtraMessage] = useState("");

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle("footer-in-view", entry.isIntersecting);
        if (entry.isIntersecting) setSalesOpen(false);
      },
      { threshold: 0.08 },
    );

    observer.observe(footer);
    return () => {
      observer.disconnect();
      document.body.classList.remove("footer-in-view");
    };
  }, []);

  useEffect(() => {
    const openFromAvailabilityButton = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>(
        "[data-open-sales-agent]",
      );
      if (!trigger) return;

      event.preventDefault();
      const requestedService = trigger.dataset.salesService || "";
      const normalizedService = requestedService.toLowerCase();
      const matchingService = normalizedService.startsWith("oficina")
        ? "Oficina equipada"
        : normalizedService.startsWith("sala")
          ? "Sala de juntas"
          : salesOptions.find((option) =>
              normalizedService.includes(option.toLowerCase()),
            );
      setSalesService(matchingService || "");
      setPeople("");
      setExtraMessage("");
      setSalesOpen(true);
    };

    document.addEventListener("click", openFromAvailabilityButton);
    return () => document.removeEventListener("click", openFromAvailabilityButton);
  }, []);

  const asksForPeople = salesService === "Oficina equipada" || salesService === "Sala de juntas";
  const canContinue = Boolean(salesService) && (!asksForPeople || Number(people) > 0);
  const whatsappMessage = `¡Hola! Nos da mucho gusto recibir tu mensaje. Me interesa ${salesService.toLowerCase()}${
    asksForPeople ? ` para ${people} ${Number(people) === 1 ? "persona" : "personas"}` : ""
  }. Entiendo que mi solicitud será canalizada al área de ventas.${
    extraMessage.trim() ? `\n\nMensaje adicional: ${extraMessage.trim()}` : ""
  }`;
  const whatsappUrl = `https://wa.me/525543501601?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <button
        className="back-to-top"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver al inicio de la página"
      >
        <span aria-hidden="true">↑</span>
      </button>

      {salesOpen && (
        <aside className="sales-agent" aria-label="Agente de ventas Zenttre">
          <div className="sales-agent-head">
            <div className="sales-avatar">
              <img src="/images/sales-agent-zenttre.jpg" alt="" aria-hidden="true" />
            </div>
            <div>
              <strong>Agente Zenttre</strong>
              <span><i /> En línea</span>
            </div>
            <button onClick={() => setSalesOpen(false)} aria-label="Cerrar agente de ventas">×</button>
          </div>
          <div className="sales-agent-body">
            <div className="sales-message">
              <p>¡Hola! Soy tu asesor de Zenttre.</p>
              <p>¿Qué servicio te interesa?</p>
            </div>
            <div className="sales-options">
              {salesOptions.map((option) => (
                <button
                  type="button"
                  className={salesService === option ? "selected" : ""}
                  onClick={() => {
                    setSalesService(option);
                    setPeople("");
                  }}
                  key={option}
                >
                  <span>{salesService === option ? "✓" : "→"}</span>
                  {option}
                </button>
              ))}
            </div>

            {asksForPeople && (
              <div className="sales-people">
                <label htmlFor="sales-people-count">
                  ¿Para cuántas personas buscas {salesService === "Sala de juntas" ? "la sala de juntas" : "la oficina"}?
                </label>
                <input
                  id="sales-people-count"
                  type="number"
                  min="1"
                  inputMode="numeric"
                  value={people}
                  onChange={(event) => setPeople(event.target.value)}
                  placeholder="Número de personas"
                />
              </div>
            )}

            <div className="sales-extra-message">
              <label htmlFor="sales-extra-message">¿Necesitas preguntarnos algo más? <span>(opcional)</span></label>
              <textarea
                id="sales-extra-message"
                rows={3}
                value={extraMessage}
                onChange={(event) => setExtraMessage(event.target.value)}
                placeholder="Escribe aquí tu mensaje"
              />
            </div>

            {canContinue && (
              <div className="sales-routing-message" role="status">
                Nos da mucho gusto recibir tu mensaje. Tu solicitud será canalizada al área de ventas.
              </div>
            )}

            <a
              className={canContinue ? "sales-email ready" : "sales-email"}
              href={canContinue ? whatsappUrl : undefined}
              target={canContinue ? "_blank" : undefined}
              rel={canContinue ? "noopener noreferrer" : undefined}
              aria-disabled={!canContinue}
              onClick={(event) => {
                if (!canContinue) event.preventDefault();
              }}
            >
              <span>◉</span>
              {!salesService
                ? "Selecciona un servicio"
                : asksForPeople && !canContinue
                  ? "Indica el número de personas"
                  : "Continuar en WhatsApp Business"}
            </a>
            <small>Te conectaremos con nuestra área de ventas.</small>
          </div>
        </aside>
      )}

      <button
        className={salesOpen ? "sales-launcher active" : "sales-launcher"}
        onClick={() => setSalesOpen(!salesOpen)}
        aria-expanded={salesOpen}
        aria-label="Abrir agente de ventas"
        type="button"
      >
        <span>{salesOpen ? "×" : "◉"}</span>
        <b>{salesOpen ? "Cerrar" : "Ventas"}</b>
        {!salesOpen && <i />}
      </button>

      <a
        className="whatsapp-launcher"
        href="https://wa.me/525543501601?text=Hola%20Zenttre%2C%20quiero%20recibir%20informaci%C3%B3n."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Zenttre por WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M16.05 3A12.91 12.91 0 0 0 5 22.58L3.3 29l6.57-1.72A12.94 12.94 0 1 0 16.05 3Zm0 23.57a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.61 10.61 0 1 1 8.91 4.89Zm5.82-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.63 9.63 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.31.32-.52.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.25-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.14-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </>
  );
}
