import ServiceDetailPage from "../components/ServiceDetailPage";

export default function DomicilioFiscalComercialPage() {
  return (
    <ServiceDetailPage
      eyebrow="DOMICILIO FISCAL · COLONIA DEL VALLE"
      title="Domicilio fiscal para"
      italicTitle="tu empresa."
      intro="Domicilio Fiscal en la Colonia del Valle, CDMX."
      heroImage="/images/01.jpg"
      secondaryImage="/images/10.jpg"
      serviceName="Domicilio fiscal"
      highlights={[
        { value: "Desde $880", label: "+ IVA" },
        { value: "Hasta 12%", label: "de descuento anual" },
        { value: "12 meses", label: "plazo mínimo de contrato" },
      ]}
      sectionTitle="Presencia empresarial con atención"
      sectionItalic="profesional."
      sectionText="Domicilio Fiscal en la Colonia del Valle, CDMX."
      benefits={[
        { title: "Domicilio Fiscal", text: "Domicilio Fiscal en la Colonia del Valle, CDMX." },
        { title: "Equipo de profesionales", text: "De lunes a viernes de 9:00 a 18:00 hrs y sábados de 9:00 a 13:00 hrs." },
        { title: "WI-FI", text: "Acceso a WI-FI en todas las áreas dentro de las instalaciones." },
        { title: "Notificaciones", text: "Notificación de recepción de documentos vía e-mail." },
      ]}
      plans={[
        { eyebrow: "NUEVOS EMPRENDEDORES", title: "Domicilio Fiscal 1", description: "Domicilio Fiscal en la Colonia del Valle, CDMX.", details: ["Equipo de profesionales, de lunes a viernes de 9:00 a 18:00 hrs y sábados de 9:00 a 13:00 hrs.", "Acceso a WI-FI en todas las áreas dentro de las instalaciones.", "Notificación de recepción de documentos vía e-mail."], price: "Precio $880.00* + I.V.A." },
        { eyebrow: "EMPRESAS CON MAYORES MOVIMIENTOS", title: "Domicilio Fiscal 2", description: "Domicilio Fiscal en la Colonia del Valle, CDMX.", details: ["Equipo de profesionales, de lunes a viernes de 9:00 a 18:00 hrs y sábados de 9:00 a 13:00 hrs.", "Acceso a WI-FI en todas las áreas dentro de las instalaciones.", "Notificación de recepción de documentos vía e-mail."], price: "Precio $1,860.00* + I.V.A." },
      ]}
      showVirtualOffer
      informationTitle="Documentación y términos de contratación"
      informationSections={[
        { title: "Persona Moral", items: ["Ingresar todos los datos en el formato de solicitud de servicios", "Comprobante de pago", "Acta constitutiva", "Constancia de situación fiscal", "Opinión de cumplimiento de obligaciones fiscales.", "INE del representante legal y/o propietario.", "RFC de la empresa, del representante legal y del propietario.", "Estado de cuenta bancario de la empresa, no mayor a 3 meses.", "Comprobante de domicilio de la dirección fiscal actual y datos de contacto de ese domicilio.", "Comprobante de domicilio de representante legal y propietario."] },
        { title: "Persona Física", items: ["Ingresar todos los datos del formato de solicitud de servicios", "Comprobante de pago", "Constancia de situación fiscal", "Opinión de cumplimiento de obligaciones fiscales", "INE", "RFC", "Comprobante de domicilio", "Estado de cuenta bancario, no mayor a 3 meses", "Comprobante de domicilio de la dirección fiscal actual y sus datos de contacto"] },
        { title: "Términos y condiciones", items: ["Todo contrato debe tener un plazo mínimo de 12 meses. *", "Para realizar el proceso de contratación es necesario entregar de manera presencial la documentación en las instalaciones de Zenttre.", "Toda la documentación es requerida sin excepción y será verificada por el área legal, este proceso dura 3 días.", "El Contrato deberá ser firmado en las instalaciones de Zenttre.", "Se solicitará un depósito en garantía de $2,000.00, mismo que será devuelto al cliente, cuando decida finalizar su contrato con Zenttre y este entregue copia del comprobante de cambio de domicilio fiscal ante el SAT.", "Se solicitarán 3 referencias personales, no familiares.", "Todos los precios están sujetos a posibles modificaciones.", "Todos los precios son + I.V.A."] },
      ]}
    />
  );
}
