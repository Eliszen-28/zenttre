import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Oficina virtual en Colonia del Valle, CDMX",
  description: "Oficina virtual en CDMX con domicilio comercial o fiscal, recepción de mensajería, atención de visitas y crédito para salas desde $1,150 + IVA.",
  alternates: { canonical: "/oficina-virtual/" },
  openGraph: { title: "Oficina virtual en Colonia del Valle | Zenttre", description: "Presencia profesional en CDMX sin los gastos de una oficina física.", url: "/oficina-virtual/" },
};

export default function OficinaVirtualPage() {
  return (
    <ServiceDetailPage
      eyebrow="OFICINA VIRTUAL · ESTÁNDAR Y PREMIUM"
      title="Una oficina sin los grandes gastos de un"
      italicTitle="local físico."
      intro="Servicios que ayudan a realizar actividades similares a las de una oficina tradicional."
      heroImage="/images/03.jpg"
      secondaryImage="/images/10.jpg"
      serviceName="Oficina virtual"
      highlights={[
        { value: "Desde $1,150", label: "+ IVA" },
        { value: "24/7", label: "acceso y seguridad" },
        { value: "2 planes", label: "Estándar y Premium" },
      ]}
      sectionTitle="Servicios para mantener a tu empresa"
      sectionItalic="presente y conectada."
      sectionText="Elige domicilio comercial o domicilio fiscal y comercial, con atención de visitas, recepción de mensajería y crédito para salas u oficinas."
      benefits={[
        { title: "Ubicación profesional", text: "Domicilio en la Colonia del Valle, CDMX." },
        { title: "Acceso y seguridad", text: "Acceso 24/7 los 365 días y sistemas de seguridad permanentes." },
        { title: "Recepción de mensajería", text: "Paquetería de hasta 30 × 30 cm para distribución en lockers." },
        { title: "Atención personalizada", text: "Recepción de visitas y notificación de documentos por correo electrónico." },
      ]}
      plans={[
        { eyebrow: "DOMICILIO COMERCIAL", title: "Estándar", description: "Domicilio Comercial en la Colonia del Valle, CDMX.", details: ["Lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 14:00", "Acceso 24/7 los 365 días", "Sistemas de seguridad 24/7", "$800.00 de crédito para salas u oficinas", "Wi‑Fi en las instalaciones", "Notificación de documentos vía correo electrónico", "Recepción de mensajería y paquetería de hasta 30 × 30 cm", "Atención personalizada de visitas"], price: "$1,150.00 + IVA" },
        { eyebrow: "DOMICILIO FISCAL Y COMERCIAL", title: "Premium", description: "Domicilio Fiscal y Comercial en la Colonia del Valle, CDMX.", details: ["Lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 14:00", "Acceso 24/7 los 365 días", "Sistemas de seguridad 24/7", "$1,000.00 de crédito para salas u oficinas", "Wi‑Fi en las instalaciones", "Notificación de documentos vía correo electrónico", "Recepción de mensajería y paquetería de hasta 30 × 30 cm", "Atención personalizada de visitas"], price: "$2,200.00 + IVA" },
      ]}
      showVirtualOffer
      informationTitle="Requisitos para Oficina Virtual"
      informationSections={[
        { title: "Persona Moral", items: ["Formato de solicitud de servicios con todos los datos", "Comprobante de pago", "Acta constitutiva", "Constancia de situación fiscal", "Opinión de cumplimiento de obligaciones fiscales", "INE del representante legal y propietario", "RFC de la empresa, del representante legal y del propietario", "Comprobante de domicilio del representante legal y propietario"] },
        { title: "Persona Física", items: ["Formato de solicitud de servicios con todos los datos", "Comprobante de pago", "Constancia de situación fiscal", "Opinión de cumplimiento de obligaciones fiscales", "INE", "RFC", "Comprobante de domicilio", "Estado de cuenta bancario no mayor a 3 meses"] },
        { title: "Términos y condiciones", items: ["Contrato con plazo mínimo de 12 meses", "Documentación obligatoria verificada por el área legal; el proceso dura 3 días", "Firma del contrato en las instalaciones de Zenttre", "Precios sujetos a posibles modificaciones", "Todos los precios son más IVA"] },
      ]}
    />
  );
}
