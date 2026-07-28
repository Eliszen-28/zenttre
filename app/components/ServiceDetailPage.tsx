type Highlight = {
  value: string;
  label: string;
};

type Benefit = {
  title: string;
  text: string;
};

type Plan = {
  eyebrow: string;
  title: string;
  description: string;
  price?: string;
  details?: string[];
  notice?: string;
  image?: string;
};

type InformationSection = {
  title: string;
  items: string[];
};

type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  italicTitle: string;
  intro: string;
  heroImage: string;
  secondaryImage: string;
  serviceName: string;
  highlights: Highlight[];
  benefits: Benefit[];
  plans?: Plan[];
  sectionTitle: string;
  sectionItalic: string;
  sectionText: string;
  informationTitle?: string;
  informationSections?: InformationSection[];
  footnotes?: string[];
  showVirtualOffer?: boolean;
};

export default function ServiceDetailPage({
  eyebrow,
  title,
  italicTitle,
  intro,
  heroImage,
  secondaryImage,
  serviceName,
  highlights,
  benefits,
  plans,
  sectionTitle,
  sectionItalic,
  sectionText,
  informationTitle,
  informationSections,
  footnotes,
  showVirtualOffer,
}: ServiceDetailPageProps) {
  const email = `mailto:mensajes@zenttre.com?subject=${encodeURIComponent(
    `Información sobre ${serviceName}`,
  )}&body=${encodeURIComponent(
    `Hola, me interesa recibir información sobre ${serviceName}. ¿Podrían ayudarme?`,
  )}`;

  return (
    <main>
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
        <a className="header-cta" href={email}>
          Contactar <span>→</span>
        </a>
      </header>

      <section className="detail-hero">
        <div className="detail-hero-copy">
          <a className="detail-back" href="/">← Todos los servicios</a>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title} <em>{italicTitle}</em></h1>
          <p className="hero-lead">{intro}</p>
          <div className="hero-actions">
            <a className="button primary" href={email}>
              Solicitar información <span>↗</span>
            </a>
          </div>
        </div>
        <div className="detail-hero-image">
          <img src={heroImage} alt={serviceName} />
          <div className="detail-image-label">ZENTTRE · COLONIA DEL VALLE</div>
        </div>
      </section>

      <section className="detail-highlights section-pad" aria-label="Datos principales">
        {highlights.map((item, index) => (
          <div key={item.label}>
            <span>0{index + 1}</span>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="detail-story">
        <div className="detail-story-image">
          <img src={secondaryImage} alt={`Detalles de ${serviceName}`} />
        </div>
        <div className="detail-story-copy">
          <p className="eyebrow">UNA SOLUCIÓN A TU MEDIDA</p>
          <h2>{sectionTitle} <em>{sectionItalic}</em></h2>
          <p className="detail-intro">{sectionText}</p>
          <div className="detail-benefits">
            {benefits.map((benefit, index) => (
              <article key={benefit.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {plans && (
        <section className="detail-plans section-pad">
          <div className="detail-plans-heading">
            <p className="eyebrow">ELIGE LA OPCIÓN IDEAL</p>
            <h2>Planes claros, atención <em>personal.</em></h2>
          </div>
          <div className="detail-plan-grid">
            {plans.map((plan) => (
              <article key={plan.title}>
                {plan.image && (
                  <div className="detail-plan-image">
                    <img src={plan.image} alt={`${plan.title} en Zenttre`} />
                  </div>
                )}
                <small>{plan.eyebrow}</small>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                {plan.details && (
                  <ul className="detail-plan-list">
                    {plan.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
                {plan.price && <strong>{plan.price}</strong>}
                {plan.notice && <p className="detail-plan-notice">{plan.notice}</p>}
                <a href={email}>Consultar disponibilidad <span>↗</span></a>
              </article>
            ))}
          </div>
          {footnotes && <div className="detail-footnotes">{footnotes.map((note) => <p key={note}>{note}</p>)}</div>}
        </section>
      )}

      {informationSections && (
        <section className="detail-information section-pad">
          <p className="eyebrow">REQUERIMIENTOS Y CONDICIONES</p>
          <h2>{informationTitle || "Información para contratar"}</h2>
          <div className="detail-information-grid">
            {informationSections.map((section) => (
              <article key={section.title}>
                <h3>{section.title}</h3>
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {showVirtualOffer && (
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
      )}

      <section className="detail-contact">
        <div>
          <p className="eyebrow">HABLEMOS DE TU EMPRESA</p>
          <h2>Encuentra la solución que tu empresa <em>necesita.</em></h2>
        </div>
        <div className="detail-contact-actions">
          <a className="button primary" href={email}>
            Enviar correo <span>↗</span>
          </a>
          <a href="mailto:mensajes@zenttre.com">mensajes@zenttre.com →</a>
          <a href="tel:+525520002619">(55) 2000 2619 →</a>
        </div>
      </section>

      <footer>
        <div className="footer-main detail-footer">
          <div>
            <a className="logo logo-image footer-logo" href="/">
              <img src="/zenttre-logo-v3.png" alt="Zenttre smart office services" />
            </a>
            <p>Oficinas a la medida para ti.</p>
          </div>
          <div><small>VISÍTANOS</small><p>Aniceto Ortega 817<br />Col. Del Valle, CDMX<br />C.P. 03100</p></div>
          <div><small>EXPLORA</small><p><a href="/oficinas-privadas">Oficinas privadas</a><br /><a href="/salas-de-juntas">Salas de juntas</a><br /><a href="/domicilio-fiscal-comercial">Domicilio fiscal</a><br /><a href="/oficina-virtual">Oficina virtual</a></p></div>
        </div>
        <div className="footer-bottom">
          <span>© Zenttre 2026</span>
          <a href="/aviso-de-privacidad">Aviso de privacidad</a>
          <a href="/terminos-y-condiciones">Términos y condiciones</a>
          <span>Made with love by <a href="https://www.zooule.com" target="_blank" rel="noreferrer">Zooule</a></span>
          <a href="/">Volver al inicio ↑</a>
        </div>
      </footer>

    </main>
  );
}
