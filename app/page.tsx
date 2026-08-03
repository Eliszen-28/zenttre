"use client";

import { FormEvent, useState } from "react";
import SocialLinks from "./components/SocialLinks";
import ClientAccessLink from "./components/ClientAccessLink";

const gallery = [
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/07.jpg",
  "/images/05.jpg",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="logo logo-image" href="#inicio" aria-label="Zenttre, inicio">
          <img src="/zenttre-logo-v3.png" alt="Zenttre smart office services" />
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegación principal">
          <a href="/oficinas-privadas" onClick={() => setMenuOpen(false)}>Oficinas equipadas</a>
          <a href="/oficina-virtual" onClick={() => setMenuOpen(false)}>Oficinas virtuales</a>
          <a href="/salas-de-juntas" onClick={() => setMenuOpen(false)}>Salas de juntas</a>
          <a href="/domicilio-fiscal-comercial" onClick={() => setMenuOpen(false)}>Domicilio fiscal</a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <ClientAccessLink />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">ESPACIOS DE TRABAJO · COLONIA DEL VALLE</p>
          <h1>Tu éxito comienza <em>aquí.</em></h1>
          <p className="hero-lead">
            Oficinas, salas y servicios virtuales pensados para que tu empresa
            trabaje mejor, crezca y se sienta en casa.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#soluciones">Explorar soluciones <span>↗</span></a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/home-hero-arbol-zenttre.jpeg" alt="Patio arbolado de las oficinas Zenttre" />
          <div className="hero-note">
            <span className="pulse" />
            <p><strong>Oficinas disponibles</strong><br />Listas para trabajar</p>
          </div>
        </div>
      </section>

      <section className="finder" aria-label="Encuentra tu solución">
        <div>
          <p className="finder-label">¿QUÉ NECESITAS?</p>
          <strong>Encuentra el espacio ideal para ti</strong>
        </div>
        <div className="finder-options">
          <a href="/oficinas-privadas"><span>⌂</span> Oficina privada</a>
          <a href="/salas-de-juntas"><span>◫</span> Sala de juntas</a>
          <a href="/domicilio-fiscal-comercial"><span>◎</span> Domicilio empresarial</a>
        </div>
        <a className="finder-go" href="#contacto" aria-label="Comenzar búsqueda">→</a>
      </section>

      <section className="intro section-pad" id="soluciones">
        <p className="eyebrow">SOLUCIONES FLEXIBLES</p>
        <div className="intro-grid">
          <h2>Un espacio para cada forma de <em>trabajar.</em></h2>
          <p>
            En Zenttre encuentras mucho más que metros cuadrados. Diseñamos
            espacios funcionales y servicios profesionales para acompañar el
            ritmo real de tu negocio.
          </p>
        </div>
      </section>

      <section className="solution-details" aria-label="Soluciones de trabajo Zenttre">
        <article className="solution-panel" id="oficinas-privadas">
          <div className="solution-visual">
            <img src="/images/home-tu-espacio-equipo-mg8014.jpg" alt="Área de trabajo de Zenttre" />
            <div className="solution-index"><span>01</span> OFICINAS PRIVADAS</div>
          </div>
          <div className="solution-content">
            <p className="eyebrow">TU ESPACIO, TU EQUIPO</p>
            <h2>Oficinas privadas y listas para <em>crecer contigo.</em></h2>
            <p className="solution-intro">
              Un espacio profesional que puedes hacer tuyo desde el primer día.
              Mobiliario, servicios y atención incluidos para que tu equipo se
              concentre en lo que realmente importa.
            </p>
            <div className="solution-benefits">
              <div><span>↗</span><p><strong>Acceso todos los días</strong>Disponibilidad 24/7, los 365 días del año.</p></div>
              <div><span>↗</span><p><strong>Todo incluido</strong>Wi‑Fi, limpieza, seguridad y áreas comunes.</p></div>
              <div><span>↗</span><p><strong>Espacios a la medida</strong>Opciones para equipos desde 2 hasta 10 personas.</p></div>
            </div>
            <div className="solution-actions">
              <a className="button primary" href="/oficinas-privadas">Ver oficinas privadas <span>↗</span></a>
            </div>
          </div>
        </article>

        <article className="solution-panel reverse" id="salas-de-juntas">
          <div className="solution-visual">
            <img src="/images/09.jpg" alt="Sala de juntas equipada en Zenttre" />
            <div className="solution-index"><span>02</span> SALAS DE JUNTAS</div>
          </div>
          <div className="solution-content">
            <p className="eyebrow">REUNIONES QUE AVANZAN</p>
            <h2>El espacio indicado para cada conversación <em>importante.</em></h2>
            <p className="solution-intro">
              Salas privadas con distintas capacidades y personalidades para
              recibir clientes, presentar proyectos o trabajar con tu equipo
              por hora, sin rentar una oficina completa.
            </p>
            <div className="meeting-types">
              <div><strong>Hasta 4</strong><span>personas</span><small>Reuniones breves</small></div>
              <div><strong>Hasta 10</strong><span>personas</span><small>Juntas y presentaciones</small></div>
              <div><strong>Desde $100</strong><span>por hora + IVA</span><small>Reserva flexible</small></div>
            </div>
            <div className="solution-features">
              <span>Wi‑Fi</span><span>Pantalla</span><span>Pizarrón</span><span>HDMI</span>
            </div>
            <div className="solution-actions">
              <a className="button primary" href="/salas-de-juntas">Ver capacidades y precios <span>↗</span></a>
              <a className="text-link" href="mailto:mensajes@zenttre.com?subject=Disponibilidad%20de%20salas%20de%20juntas">Consultar disponibilidad →</a>
            </div>
          </div>
        </article>

        <article className="solution-panel domicile" id="domicilio-empresas">
          <div className="solution-visual">
            <img src="/images/01.jpg" alt="Recepción profesional de Zenttre en la Colonia del Valle" />
            <div className="solution-index"><span>03</span> DOMICILIO EMPRESARIAL</div>
          </div>
          <div className="solution-content">
            <p className="eyebrow">PRESENCIA PROFESIONAL EN CDMX</p>
            <h2>Domicilio fiscal y comercial para <em>tu empresa.</em></h2>
            <p className="solution-intro">
              Dale a tu negocio una dirección profesional en la Colonia del
              Valle, con un equipo que recibe tus documentos y atiende tus
              necesidades durante el horario de servicio.
            </p>
            <div className="plan-grid">
              <div>
                <small>PARA NUEVOS EMPRENDEDORES</small>
                <h3>Domicilio Fiscal 1</h3>
                <p>Dirección fiscal, Wi‑Fi en instalaciones y notificación de documentos por correo.</p>
                <strong>Desde $880 <span>+ IVA / mes</span></strong>
              </div>
              <div>
                <small>PARA MAYOR MOVIMIENTO</small>
                <h3>Domicilio Fiscal 2</h3>
                <p>Atención profesional para empresas con mayor recepción y operación documental.</p>
                <strong>Desde $1,860 <span>+ IVA / mes</span></strong>
              </div>
            </div>
            <div className="solution-actions">
              <a className="button primary" href="/domicilio-fiscal-comercial">Ver planes y beneficios <span>↗</span></a>
            </div>
          </div>
        </article>
      </section>

      <section className="virtual-offer section-pad" aria-label="Descuentos y servicio telefónico">
        <div className="virtual-offer-box">
          <p className="eyebrow">BENEFICIOS DE CONTRATACIÓN</p>
          <div className="virtual-offer-grid">
            <div className="virtual-discounts">
              <strong>*6% de descuento al hacer tu pago semestral</strong>
              <strong>*12% de descuento al hacer tu pago anual</strong>
            </div>
            <div className="virtual-phone">
              <p>Servicio adicional de número telefónico personalizado:</p>
              <p>Activación por <strong>$1,000.00 + I.V.A.</strong></p>
              <p>Pago mensual de <strong>$500.00 + I.V.A.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits" id="nosotros">
        <div className="benefit-image">
          <img src="/images/06.jpg" alt="Área de trabajo compartida en Zenttre" />
          <div className="floating-card">
            <strong>25 años</strong>
            <span>acompañando tu crecimiento</span>
          </div>
        </div>
        <div className="benefit-copy">
          <p className="eyebrow">TODO LISTO PARA TI</p>
          <h2>Trabaja con libertad. Nosotros cuidamos <em>el resto.</em></h2>
          <div className="benefit-list">
            <div><span>01</span><p><strong>Acceso 24/7</strong>Tu espacio disponible los 365 días del año.</p></div>
            <div><span>02</span><p><strong>Ubicación estratégica</strong>En el corazón de la Colonia del Valle, CDMX.</p></div>
            <div><span>03</span><p><strong>Servicios incluidos</strong>Wi‑Fi, limpieza, seguridad y atención a tus visitas.</p></div>
            <div><span>04</span><p><strong>Espacios flexibles</strong>Soluciones que se adaptan al tamaño y ritmo de tu equipo.</p></div>
          </div>
          <a className="button primary" href="#contacto">Agenda una visita <span>↗</span></a>
        </div>
      </section>

      <section className="spaces section-pad" id="espacios">
        <div className="spaces-heading">
          <div>
            <p className="eyebrow">CONOCE ZENTTRE</p>
            <h2>Espacios que inspiran <em>buenas ideas.</em></h2>
          </div>
          <p>Ambientes funcionales, salas con carácter y áreas comunes diseñadas para concentrarte, reunirte y avanzar.</p>
        </div>
        <div className="gallery">
          {gallery.map((image, index) => (
            <figure key={image} className={`gallery-${index + 1}`}>
              <img src={image} alt={`Interior de Zenttre ${index + 1}`} />
              {index === 0 && <figcaption>Recepción · Zenttre Del Valle</figcaption>}
              {index === 1 && <figcaption>Áreas comunes</figcaption>}
            </figure>
          ))}
        </div>
      </section>

      <section className="quote-strip">
        <img src="/thenewworkexperience.jpg" alt="The new work experience" />
      </section>

      <section className="contact section-pad" id="contacto">
        <div className="contact-copy">
          <p className="eyebrow">HABLEMOS</p>
          <h2>Tu nuevo espacio está a un mensaje de <em>distancia.</em></h2>
          <p>Cuéntanos qué necesitas. Nuestro equipo te ayudará a encontrar la solución ideal.</p>
          <div className="contact-methods">
            <a href="tel:+525520002619">
              <span>01</span><div><small>LLÁMANOS</small><strong>(55) 2000 2619</strong></div><b>↗</b>
            </a>
            <a href="mailto:mensajes@zenttre.com">
              <span>02</span><div><small>ESCRÍBENOS</small><strong>mensajes@zenttre.com</strong></div><b>↗</b>
            </a>
            <a href="mailto:mensajes@zenttre.com?subject=Solicitud%20de%20cotización">
              <span>03</span><div><small>COTIZACIONES</small><strong>mensajes@zenttre.com</strong></div><b>↗</b>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submitContact}>
          {sent ? (
            <div className="form-success" role="status">
              <span>✓</span>
              <h3>Gracias por escribirnos.</h3>
              <p>Recibimos tus datos. También puedes llamarnos al (55) 2000 2619 para atención inmediata.</p>
              <button type="button" className="text-link" onClick={() => setSent(false)}>Enviar otro mensaje →</button>
            </div>
          ) : (
            <>
              <div className="field-row">
                <label>Nombre<input name="name" required placeholder="Tu nombre" /></label>
                <label>Teléfono<input name="phone" required type="tel" placeholder="55 0000 0000" /></label>
              </div>
              <label>Correo electrónico<input name="email" required type="email" placeholder="nombre@empresa.com" /></label>
              <label>Me interesa
                <select name="service" defaultValue="">
                  <option value="" disabled>Selecciona una solución</option>
                  <option>Oficina equipada</option>
                  <option>Sala de juntas</option>
                  <option>Oficina virtual</option>
                  <option>Domicilio fiscal</option>
                </select>
              </label>
              <label>Mensaje<textarea name="message" rows={3} placeholder="Cuéntanos qué espacio necesitas" /></label>
              <label className="privacy"><input type="checkbox" required /> Acepto el aviso de privacidad.</label>
              <button className="button primary submit" type="submit">Quiero recibir información <span>↗</span></button>
            </>
          )}
        </form>
      </section>

      <section className="location-section" aria-labelledby="ubicacion-title">
        <div className="location-copy">
          <p className="eyebrow">UBICACIÓN · COLONIA DEL VALLE</p>
          <h2 id="ubicacion-title">Visítanos en una ubicación <em>estratégica.</em></h2>
          <p>Aniceto Ortega 817, Col. Del Valle, Alcaldía Benito Juárez, C.P. 03100, Ciudad de México.</p>
          <a
            className="button primary"
            href="https://www.google.com/maps/search/?api=1&query=Zenttre%2C%20Aniceto%20Ortega%20817%2C%20Colonia%20del%20Valle%2C%20CDMX"
            target="_blank"
            rel="noreferrer"
          >
            Ver en Google Maps <span>↗</span>
          </a>
        </div>
        <div className="location-map">
          <iframe
            title="Ubicación de Zenttre en Google Maps"
            src="https://www.google.com/maps?q=Zenttre%2C%20Aniceto%20Ortega%20817%2C%20Colonia%20del%20Valle%2C%20CDMX&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <a className="logo logo-image footer-logo" href="#inicio">
              <img src="/zenttre-logo-v3.png" alt="Zenttre smart office services" />
            </a>
            <p>Oficinas a la medida para ti.</p>
          </div>
          <div>
            <small>VISÍTANOS</small>
            <p>Aniceto Ortega 817<br />Col. Del Valle, CDMX<br />C.P. 03100<br /><a href="https://www.google.com/maps/search/?api=1&query=Zenttre%2C%20Aniceto%20Ortega%20817%2C%20Colonia%20del%20Valle%2C%20CDMX" target="_blank" rel="noreferrer">Cómo llegar en Google Maps ↗</a></p>
          </div>
          <div>
            <small>HORARIO</small>
            <p>Lunes a viernes<br />9:00 a 18:00<br />Sábados 9:00 a 13:00</p>
          </div>
          <div>
            <small>EXPLORA</small>
            <a href="#soluciones">Soluciones</a>
            <a href="#espacios">Espacios</a>
            <a href="/oficina-virtual">Oficina virtual</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Zenttre 2026</span>
          <SocialLinks />
          <a href="/aviso-de-privacidad">Aviso de privacidad</a>
          <a href="/terminos-y-condiciones">Términos y condiciones</a>
          <span>Made with love by <a href="https://www.zooule.com" target="_blank" rel="noreferrer">Zooule</a></span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>

    </main>
  );
}
