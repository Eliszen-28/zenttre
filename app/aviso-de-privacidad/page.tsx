import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad Integral | Zenttre",
  description: "Aviso de Privacidad Integral de Zenttre.",
};

export default function AvisoDePrivacidadPage() {
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
        <a className="header-cta" href="mailto:mensajes@zenttre.com">
          Contactar <span>→</span>
        </a>
      </header>

      <section className="privacy-hero">
        <a className="detail-back" href="/">← Volver al inicio</a>
        <p className="eyebrow">PROTECCIÓN DE DATOS PERSONALES</p>
        <h1>Aviso de Privacidad <em>Integral.</em></h1>
        <p>
          Información sobre el tratamiento y protección de los datos personales
          de clientes, prospectos y usuarios de Zenttre.
        </p>
      </section>

      <article className="privacy-content">
        <section className="privacy-intro">
          <h2>AVISO DE PRIVACIDAD INTEGRAL</h2>
          <p>
            En cumplimiento con lo dispuesto por la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares (LFPDPPP), su
            Reglamento y los Lineamientos del Aviso de Privacidad publicadas por
            el INAI, ZENTTRE (en lo sucesivo &quot;EL RESPONSABLE&quot;), con
            domicilio ubicado en Aniceto Ortega 817, Col. Del Valle, Alcaldía
            Benito Juárez, C.P. 03100, Ciudad de México, y portal web{" "}
            <a href="https://www.zenttre.mx">https://www.zenttre.mx</a>, pone a su
            disposición el presente Aviso de Privacidad.
          </p>
        </section>

        <section>
          <span className="privacy-number">01</span>
          <h2>Datos Personales Objeto de Tratamiento</h2>
          <p>
            Para llevar a cabo las finalidades descritas en este aviso,
            recabaremos las siguientes categorías de datos personales:
          </p>
          <div className="privacy-cards">
            <div>
              <h3>Datos de Identificación</h3>
              <p>
                Nombre completo, identificación oficial con fotografía
                (INE/Pasaporte), Registro Federal de Contribuyentes (RFC), Clave
                Única de Registro de Población (CURP) y firma autógrafa o digital.
              </p>
            </div>
            <div>
              <h3>Datos de Contacto</h3>
              <p>
                Correo electrónico, teléfono fijo, teléfono celular, domicilio
                particular o fiscal.
              </p>
            </div>
            <div>
              <h3>Datos Financieros y de Facturación</h3>
              <p>
                Información bancaria, comprobante de domicilio, Constancia de
                Situación Fiscal y método de pago (para la contratación de
                espacios o servicios).
              </p>
            </div>
            <div>
              <h3>Datos de Representación Legal</h3>
              <p>
                En caso de personas morales: Acta constitutiva, poder notarial del
                representante e identificación oficial del apoderado.
              </p>
            </div>
            <div>
              <h3>Datos Digitales</h3>
              <p>
                Dirección IP, cookies y datos de navegación recabados a través del
                sitio web.
              </p>
            </div>
          </div>
          <aside className="privacy-note">
            <strong>Nota:</strong> ZENTTRE NO solicita ni recaba datos personales
            sensibles (tales como religión, estado de salud, origen étnico,
            preferencia sexual o afiliación política/sindical).
          </aside>
        </section>

        <section>
          <span className="privacy-number">02</span>
          <h2>Finalidades del Tratamiento</h2>
          <h3>A. Finalidades Primarias (Necesarias para el servicio contratado):</h3>
          <ul>
            <li>
              Verificar y confirmar la identidad del usuario o prospecto y/o la
              representación legal de la empresa.
            </li>
            <li>
              Elaborar cotizaciones, procesar solicitudes de contratación y
              efectuar reservas de oficinas privadas, salas de juntas, oficinas
              virtuales y domicilio fiscal/comercial.
            </li>
            <li>
              Gestionar, administrar y dar cumplimiento a los contratos de
              arrendamiento y prestación de servicios corporativos.
            </li>
            <li>
              Recibir, custodiar y notificar la correspondencia, documentación
              oficial y paquetería del cliente en el domicilio asignado.
            </li>
            <li>
              Emitir comprobantes fiscales digitales (CFDI), efectuar cobros,
              facturación y gestión contable.
            </li>
            <li>
              Brindar atención, soporte, aclaraciones y comunicación continua a
              través del teléfono <a href="tel:+525520002619">(55) 2000 2619</a> y
              correo electrónico{" "}
              <a href="mailto:mensajes@zenttre.com">mensajes@zenttre.com</a>.
            </li>
            <li>
              Controlar el acceso y garantizar la seguridad dentro de las
              instalaciones.
            </li>
          </ul>
          <h3>B. Finalidades Secundarias (Prospección y mercadotecnia):</h3>
          <ul>
            <li>
              Envío de boletines informativos, promociones especiales (como
              descuentos del 6% en pagos semestrales y 12% en pagos anuales).
            </li>
            <li>
              Aplicación de encuestas de satisfacción para mejorar la calidad de
              nuestros servicios.
            </li>
          </ul>
          <p>
            Si no desea que sus datos sean utilizados para las finalidades
            secundarias, puede manifestarlo enviando un correo a{" "}
            <a href="mailto:mensajes@zenttre.com">mensajes@zenttre.com</a>.
          </p>
        </section>

        <section>
          <span className="privacy-number">03</span>
          <h2>Transferencia de Datos Personales</h2>
          <p>
            Sus datos personales no serán vendidos ni transferidos a terceros no
            relacionados sin su consentimiento previo, salvo las excepciones
            contempladas en el Artículo 37 de la LFPDPPP, las cuales incluyen:
          </p>
          <ul>
            <li>
              Cumplimiento de requerimientos de autoridades judiciales o
              administrativas competentes (p. ej. SAT, PROFECO).
            </li>
            <li>
              Procesadores de pagos e instituciones bancarias para efectuar
              cobros.
            </li>
          </ul>
        </section>

        <section>
          <span className="privacy-number">04</span>
          <h2>Ejercicio de Derechos ARCO y Revocación del Consentimiento</h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos de usted,
            para qué los utilizamos y las condiciones del uso que les damos
            (Acceso); solicitar la corrección de su información (Rectificación);
            que la eliminemos de nuestras bases de datos (Cancelación); u oponerse
            al uso de sus datos para fines específicos (Oposición).
          </p>
          <h3>Procedimiento:</h3>
          <p>
            Deberá enviar una solicitud por escrito al correo{" "}
            <a href="mailto:mensajes@zenttre.com">mensajes@zenttre.com</a>{" "}
            indicando:
          </p>
          <ul>
            <li>Nombre completo y correo electrónico de contacto.</li>
            <li>
              Documento que acredite su identidad (INE o Pasaporte escaneado).
            </li>
            <li>
              Descripción clara y precisa de los datos personales respecto de los
              cuales busca ejercer alguno de los Derechos ARCO.
            </li>
          </ul>
          <p>
            <strong>Plazo de respuesta:</strong> Recibirá respuesta en un plazo
            máximo de 20 días hábiles.
          </p>
        </section>

        <section>
          <span className="privacy-number">05</span>
          <h2>Uso de Cookies y Tecnologías de Rastreo</h2>
          <p>
            Nuestro sitio web utiliza cookies y web beacons para analizar el
            tráfico web y brindarle una mejor experiencia de usuario. Puede
            deshabilitar o configurar el uso de cookies directamente en las
            opciones de configuración de su navegador de internet.
          </p>
        </section>

        <section>
          <span className="privacy-number">06</span>
          <h2>Modificaciones al Aviso de Privacidad</h2>
          <p>
            ZENTTRE se reserva el derecho de efectuar en cualquier momento
            modificaciones o actualizaciones al presente Aviso de Privacidad.
            Cualquier cambio estará disponible para su consulta en nuestro sitio
            web oficial.
          </p>
        </section>
      </article>

      <section className="privacy-contact">
        <div>
          <p className="eyebrow">CONTACTO DE PRIVACIDAD</p>
          <h2>¿Tienes alguna <em>pregunta?</em></h2>
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
          <span>Made with love by <a href="https://www.zooule.com" target="_blank" rel="noreferrer">Zooule</a></span>
          <a href="/">Volver al inicio ↑</a>
        </div>
      </footer>
    </main>
  );
}
