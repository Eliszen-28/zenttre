import ServiceDetailPage from "../components/ServiceDetailPage";

export default function DomicilioFiscalComercialPage() {
  return (
    <ServiceDetailPage
      eyebrow="DOMICILIO FISCAL Y COMERCIAL · CDMX"
      title="Una presencia profesional para"
      italicTitle="tu empresa."
      intro="Establece tu negocio en la Colonia del Valle con una dirección profesional, recepción de documentos y atención personalizada."
      heroImage="/images/01.jpg"
      secondaryImage="/images/10.jpg"
      serviceName="Domicilio fiscal y comercial"
      highlights={[
        { value: "Col. Del Valle", label: "ubicación estratégica" },
        { value: "Desde $880", label: "+ IVA al mes" },
        { value: "Hasta 12%", label: "de descuento anual" },
      ]}
      sectionTitle="La imagen de una oficina formal, con una operación"
      sectionItalic="más ligera."
      sectionText="Obtén una dirección empresarial confiable sin mantener una oficina física permanente. Nuestro equipo recibe documentos y te mantiene informado para que tu empresa conserve presencia y orden."
      benefits={[
        { title: "Dirección fiscal y comercial", text: "Domicilio profesional en Aniceto Ortega 817, Colonia del Valle." },
        { title: "Recepción de documentos", text: "Atención de correspondencia y notificaciones durante el horario de servicio." },
        { title: "Avisos oportunos", text: "Notificación por correo para mantener el control de tus documentos." },
        { title: "Beneficios Zenttre", text: "Acceso a instalaciones y soluciones complementarias según el plan." },
      ]}
      plans={[
        { eyebrow: "PARA NUEVOS EMPRENDEDORES", title: "Domicilio Fiscal 1", description: "Dirección fiscal, Wi‑Fi en instalaciones y notificación de documentos por correo.", price: "Desde $880 + IVA / mes" },
        { eyebrow: "PARA MAYOR MOVIMIENTO", title: "Domicilio Fiscal 2", description: "Atención profesional para empresas con mayor recepción y operación documental.", price: "Desde $1,860 + IVA / mes" },
      ]}
    />
  );
}
