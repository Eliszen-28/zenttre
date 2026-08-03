import type { Metadata } from "next";
import SocialLinks from "../components/SocialLinks";
import ClientAccessLink from "../components/ClientAccessLink";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de uso y contratación de Zenttre.",
  alternates: { canonical: "/terminos-y-condiciones/" },
  robots: { index: true, follow: true },
};

export default function TerminosYCondicionesPage() {
  return (
    <main className="privacy-page">
      <header className="site-header detail-header">
        <a className="logo logo-image" href="/" aria-label="Zenttre, inicio">
          <img src="/zenttre-logo-v3.png" alt="Zenttre smart office services" />
        </a>
        <nav className="nav detail-nav" aria-label="Navegación de servicios">
          <a href="/oficinas-privadas">Oficinas equipadas</a>
          <a href="/oficina-virtual">Oficinas virtuales</a>
          <a href="/salas-de-juntas">Salas de juntas</a>
          <a href="/domicilio-fiscal-comercial">Domicilio fiscal</a>
        </nav>
        <ClientAccessLink />
        <a className="header-cta" href="mailto:mensajes@zenttre.com">
          Contactar <span>→</span>
        </a>
      </header>

      <section className="privacy-hero">
        <a className="detail-back" href="/">← Volver al inicio</a>
        <p className="eyebrow">INFORMACIÓN LEGAL</p>
        <h1>Términos y Condiciones de <em>Uso y Contratación.</em></h1>
        <p>
          Condiciones aplicables al uso del sitio web y a la contratación de los
          servicios ofrecidos por Zenttre.
        </p>
      </section>

      <article className="privacy-content">
        <section className="privacy-intro">
          <h2>TÉRMINOS Y CONDICIONES DE USO Y CONTRATACIÓN</h2>
          <p>
            Los presentes Términos y Condiciones rigen el acceso y uso del sitio
            web ZENTTRE{" "}
            <a href="https://www.zenttre.mx">https://www.zenttre.mx</a>, así como
            las condiciones de contratación de los servicios de arrendamiento de
            oficinas privadas, renta de salas de juntas, oficinas virtuales y
            domicilio fiscal/comercial en la Ciudad de México, de conformidad con
            el Código de Comercio, Código Civil Federal y la Ley Federal de
            Protección al Consumidor (PROFECO).
          </p>
        </section>

        <section>
          <span className="privacy-number">01</span>
          <h2>Aceptación de los Términos</h2>
          <p>
            Al navegar en este sitio web, solicitar cotizaciones o contratar
            cualquiera de los servicios ofrecidos por ZENTTRE, el Usuario/Cliente
            expresa su aceptación plena y sin reservas de todos y cada uno de los
            Términos y Condiciones aquí estipulados.
          </p>
        </section>

        <section>
          <span className="privacy-number">02</span>
          <h2>Descripción y Condiciones de los Servicios</h2>
          <div className="privacy-cards">
            <div>
              <h3>Oficinas Privadas Equipadas</h3>
              <p>
                Espacios amueblados para equipos de 2 a 10 personas en la Col. Del
                Valle.
              </p>
              <p>
                Incluyen mobiliario, internet Wi-Fi, limpieza, seguridad, áreas
                comunes y acceso 24/7/365 según el contrato celebrado.
              </p>
            </div>
            <div>
              <h3>Salas de Juntas</h3>
              <p>
                Capacidad de 4 a 10 personas. Equipadas con Wi-Fi, pantalla,
                pizarrón y conectividad HDMI.
              </p>
              <p>
                Renta por hora (desde $100.00 MXN + IVA/hora). Sujeto a
                disponibilidad y reservación previa.
              </p>
            </div>
            <div>
              <h3>Domicilio Fiscal y Comercial</h3>
              <p>
                Domicilio Fiscal 1: Desde $880.00 MXN + IVA/mes (incluye dirección
                fiscal, Wi-Fi en instalaciones y notificación de documentos por
                correo).
              </p>
              <p>
                Domicilio Fiscal 2: Desde $1,860.00 MXN + IVA/mes (incluye
                atención profesional con mayor capacidad de recepción y operación
                documental).
              </p>
              <p>
                Requiere validación y firma de contrato con entrega de
                documentación legal comprobable.
              </p>
            </div>
            <div>
              <h3>Servicio Telefónico Adicional</h3>
              <p>Activación de línea personalizada: $1,000.00 MXN + IVA.</p>
              <p>Renta mensual: $500.00 MXN + IVA.</p>
            </div>
          </div>
        </section>

        <section>
          <span className="privacy-number">03</span>
          <h2>Precios, Pagos y Descuentos</h2>
          <h3>Moneda e Impuestos</h3>
          <p>
            Todos los precios expresados en el sitio web o cotizaciones se
            encuentran en Pesos Mexicanos (MXN) y no incluyen I.V.A., salvo que
            expresamente se indique lo contrario.
          </p>
          <h3>Beneficios por Pago Anticipado</h3>
          <ul>
            <li>
              6% de descuento al realizar el pago semestral en una sola
              exhibición.
            </li>
            <li>
              12% de descuento al realizar el pago anual en una sola exhibición.
            </li>
          </ul>
          <h3>Módulos de Pago</h3>
          <p>
            Los pagos deberán realizarse por transferencia electrónica (SPEI),
            depósito o tarjetas autorizadas dentro de los primeros días señalados
            en cada contrato individual.
          </p>
        </section>

        <section>
          <span className="privacy-number">04</span>
          <h2>Normas de Uso y Obligaciones del Usuario</h2>
          <ul>
            <li>
              El usuario se compromete a no utilizar las instalaciones, domicilio
              fiscal o línea telefónica asignada para actividades ilícitas,
              fraudulentas, informales o contrarias a la ley.
            </li>
            <li>
              El cliente debe cumplir con el Reglamento Interno de ZENTTRE en
              relación con horarios de atención (Lunes a Viernes de 9:00 a 18:00
              hrs, Sábados de 9:00 a 13:00 hrs), uso de áreas comunes y
              conservación del mobiliario.
            </li>
          </ul>
        </section>

        <section>
          <span className="privacy-number">05</span>
          <h2>Propiedad Intelectual</h2>
          <p>
            Todos los contenidos del sitio web (logotipos, imágenes, textos,
            diseños, nombres comerciales y marcas) son propiedad exclusiva de
            ZENTTRE. Queda prohibida su copia, reproducción o explotación no
            autorizada.
          </p>
        </section>

        <section>
          <span className="privacy-number">06</span>
          <h2>Jurisdicción y Ley Aplicable</h2>
          <p>
            Para todo lo relativo a la interpretación y cumplimiento de estos
            Términos y Condiciones, las partes se someten a la legislación federal
            de la República Mexicana y a la jurisdicción de los Tribunales
            Competentes de la Ciudad de México, renunciando a cualquier otro fuero
            que pudiera corresponderles.
          </p>
        </section>

        <section>
          <span className="privacy-number">ACTUALIZACIÓN</span>
          <h2>Información de contacto</h2>
          <p>
            <strong>Última actualización:</strong> Julio de 2026.
          </p>
          <p>
            <strong>Contacto Legal / Consultas:</strong>{" "}
            <a href="mailto:mensajes@zenttre.com">mensajes@zenttre.com</a> |
            Aniceto Ortega 817, Col. Del Valle, CDMX.
          </p>
        </section>
      </article>

      <section className="privacy-contact">
        <div>
          <p className="eyebrow">CONSULTAS LEGALES</p>
          <h2>Estamos para <em>ayudarte.</em></h2>
        </div>
        <a className="button primary" href="mailto:mensajes@zenttre.com">
          Escribir a mensajes@zenttre.com <span>↗</span>
        </a>
      </section>

      <footer>
        <div className="footer-main detail-footer">
          <div>
            <a className="logo logo-image footer-logo" href="/">
              <img src="/zenttre-logo-v3.png" alt="Zenttre smart office services" />
            </a>
            <p>Oficinas a la medida para ti.</p>
          </div>
          <div>
            <small>VISÍTANOS</small>
            <p>
              Aniceto Ortega 817
              <br />
              Col. Del Valle, CDMX
              <br />
              C.P. 03100
            </p>
          </div>
          <div>
            <small>LEGAL</small>
            <p>
              <a href="/aviso-de-privacidad">Aviso de privacidad</a>
              <br />
              <a href="/terminos-y-condiciones">Términos y condiciones</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Zenttre 2026</span>
          <SocialLinks />
          <span>Made with love by <a href="https://www.zooule.com" target="_blank" rel="noreferrer">Zooule</a></span>
          <a href="/">Volver al inicio ↑</a>
        </div>
      </footer>
    </main>
  );
}
