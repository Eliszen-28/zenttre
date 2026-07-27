import ServiceDetailPage from "../components/ServiceDetailPage";

export default function DomicilioFiscalComercialPage() {
  return (
    <ServiceDetailPage
      eyebrow="DOMICILIO FISCAL · COLONIA DEL VALLE"
      title="Domicilio fiscal para"
      italicTitle="tu empresa."
      intro="Dos planes para nuevos emprendedores y empresas con mayores movimientos."
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
      sectionText="Domicilio fiscal en la Colonia del Valle, Wi‑Fi en las instalaciones y notificación de documentos por correo electrónico."
      benefits={[
        { title: "Ubicación", text: "Domicilio Fiscal en la Colonia del Valle, CDMX." },
        { title: "Horario de atención", text: "Lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 13:00." },
        { title: "Wi‑Fi", text: "Acceso a Wi‑Fi en todas las áreas dentro de las instalaciones." },
        { title: "Notificaciones", text: "Aviso de recepción de documentos vía correo electrónico." },
      ]}
      plans={[
        { eyebrow: "NUEVOS EMPRENDEDORES", title: "Domicilio Fiscal 1", description: "Domicilio Fiscal en la Colonia del Valle, CDMX.", details: ["Equipo profesional en horario de atención", "Acceso a Wi‑Fi en las instalaciones", "Notificación de documentos vía correo electrónico"], price: "$880.00 + IVA" },
        { eyebrow: "EMPRESAS CON MAYORES MOVIMIENTOS", title: "Domicilio Fiscal 2", description: "Domicilio Fiscal en la Colonia del Valle, CDMX.", details: ["Equipo profesional en horario de atención", "Acceso a Wi‑Fi en las instalaciones", "Notificación de documentos vía correo electrónico"], price: "$1,860.00 + IVA" },
      ]}
      footnotes={["6% de descuento al hacer el pago semestral.", "12% de descuento al hacer el pago anual.", "Número telefónico personalizado: activación $1,000.00 + IVA y mensualidad $500.00 + IVA."]}
      informationTitle="Documentación y términos de contratación"
      informationSections={[
        { title: "Persona Moral", items: ["Formato de solicitud de servicios con todos los datos", "Comprobante de pago", "Acta constitutiva", "Constancia de situación fiscal", "Opinión de cumplimiento de obligaciones fiscales", "INE del representante legal y/o propietario", "RFC de la empresa, del representante legal y del propietario", "Estado de cuenta bancario de la empresa no mayor a 3 meses", "Comprobante de domicilio de la dirección fiscal actual y datos de contacto", "Comprobante de domicilio del representante legal y propietario"] },
        { title: "Persona Física", items: ["Formato de solicitud de servicios con todos los datos", "Comprobante de pago", "Constancia de situación fiscal", "Opinión de cumplimiento de obligaciones fiscales", "INE", "RFC", "Comprobante de domicilio", "Estado de cuenta bancario no mayor a 3 meses", "Comprobante de domicilio de la dirección fiscal actual y sus datos de contacto"] },
        { title: "Términos y condiciones", items: ["Contrato con plazo mínimo de 12 meses", "Entrega presencial de la documentación en Zenttre", "Verificación obligatoria de la documentación por el área legal; el proceso dura 3 días", "Firma del contrato en las instalaciones de Zenttre", "Depósito en garantía de $2,000.00, reembolsable al finalizar y entregar el comprobante de cambio de domicilio fiscal ante el SAT", "Tres referencias personales no familiares", "Precios sujetos a posibles modificaciones", "Todos los precios son más IVA"] },
      ]}
    />
  );
}
