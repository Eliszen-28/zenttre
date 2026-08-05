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
        <b>{salesOpen ? "Cerrar" : "Agente de ventas"}</b>
        {!salesOpen && <i />}
      </button>
    </>
  );
}
