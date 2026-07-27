"use client";

import { useState } from "react";

const salesOptions = [
  "Oficina equipada",
  "Sala de juntas",
  "Domicilio fiscal",
  "Oficina virtual",
];

export default function FloatingSiteTools() {
  const [salesOpen, setSalesOpen] = useState(false);
  const [salesService, setSalesService] = useState("");

  const whatsappMessage = salesService
    ? `Hola, me interesa recibir información sobre ${salesService}. ¿Podrían ayudarme?`
    : "Hola, me gustaría recibir información sobre los servicios de Zenttre.";
  const whatsappUrl = `https://wa.me/525579250612?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <button
        className="back-to-top"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver al inicio de la página"
      >
        <span>↑</span> Back to top
      </button>

      {salesOpen && (
        <aside className="sales-agent" aria-label="Agente de ventas Zenttre">
          <div className="sales-agent-head">
            <div className="sales-avatar">Z</div>
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
                  onClick={() => setSalesService(option)}
                  key={option}
                >
                  <span>{salesService === option ? "✓" : "→"}</span>
                  {option}
                </button>
              ))}
            </div>
            <a
              className={salesService ? "sales-whatsapp ready" : "sales-whatsapp"}
              href={salesService ? whatsappUrl : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!salesService}
              onClick={(event) => {
                if (!salesService) event.preventDefault();
              }}
            >
              <span>◉</span>
              {salesService ? "Continuar en WhatsApp" : "Selecciona un servicio"}
            </a>
            <small>Te conectaremos con un asesor de ventas.</small>
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
