import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Salas de juntas en Colonia del Valle desde $100",
  description: "Renta salas de juntas en la Colonia del Valle, CDMX, para 3 a 10 personas. Wi-Fi, pantalla, pizarrón y HDMI desde $100 por hora + IVA.",
  alternates: { canonical: "/salas-de-juntas/" },
  openGraph: { title: "Salas de juntas en Colonia del Valle | Zenttre", description: "Seis salas para reuniones de 3 a 10 personas, disponibles por hora en CDMX.", url: "/salas-de-juntas/" },
};

export default function SalasDeJuntasPage() {
  return (
    <ServiceDetailPage
      eyebrow="SALAS DE JUNTAS · RESERVA POR HORA"
      title="Alternativas para"
      italicTitle="tus reuniones."
      intro="Oficinas y salas acordes a lo que necesitas, con capacidades de 3 a 10 personas."
      heroImage="/images/salas/sala-b-drive.jpg"
      secondaryImage="/images/salas/sala-d.jpg"
      serviceName="Salas de juntas"
      highlights={[
        { value: "Desde $100", label: "por hora + IVA" },
        { value: "3–10", label: "personas según la sala" },
        { value: "6 opciones", label: "para distintos tipos de junta" },
      ]}
      sectionTitle="Oficinas y salas acordes a"
      sectionItalic="lo que necesitas."
      sectionText="Acceso 24/7, servicios complementarios y conectividad para reuniones breves, presentaciones y sesiones con colaboradores."
      benefits={[
        { title: "Acceso permanente", text: "Acceso 24/7 los 365 días del año." },
        { title: "Servicios adicionales", text: "Bebidas, copiado, impresiones y escaneo disponibles con costo adicional." },
        { title: "Conectividad", text: "HDMI en las salas que cuentan con pantalla." },
        { title: "Distintas capacidades", text: "Opciones para reuniones de 3, 4 y hasta 10 personas." },
      ]}
      plans={[
        { eyebrow: "MÁXIMO 4 PERSONAS", title: "Sala A", image: "/images/salas/sala-a.jpg", description: "Cómoda y práctica, ideal para reuniones breves.", details: ["Wi‑Fi", "Pizarrón", "Servicio de bebidas disponible en recepción"], price: "$100.00 por hora + IVA" },
        { eyebrow: "MÁXIMO 4 PERSONAS", title: "Sala A+", image: "/images/salas/sala-a-plus.jpg", description: "Estilo inglés modernista con una cortina que aísla el sonido y la luz externa.", details: ["Wi‑Fi", "Pantalla"], price: "$220.00 por hora + IVA" },
        { eyebrow: "MÁXIMO 10 PERSONAS", title: "Sala B", image: "/images/salas/sala-b-drive.jpg", description: "Vibrante y elegante para juntas importantes con total comodidad.", details: ["Wi‑Fi", "Pantalla", "Sistema de aislamiento", "Pizarrón"], price: "$320.00 por hora + IVA" },
        { eyebrow: "MÁXIMO 10 PERSONAS", title: "Sala C", image: "/images/salas/sala-c.jpg", description: "Sofisticada y privada para dar presencia y confidencialidad a tus reuniones.", details: ["Wi‑Fi", "Sistema de aislamiento", "Pantalla", "Pizarrón"], price: "$280.00 por hora + IVA" },
        { eyebrow: "MÁXIMO 10 PERSONAS", title: "Sala D", image: "/images/salas/sala-d.jpg", description: "Espaciosa, con estilo ecléctico, ideal para reuniones con colaboradores.", details: ["Wi‑Fi", "Apta para consumo de alimentos y bebidas", "Pantalla", "Vista a las áreas comunes"], price: "$280.00 por hora + IVA", notice: "No disponible de lunes a viernes de 14:00 a 17:00 horas." },
        { eyebrow: "MÁXIMO 3 PERSONAS", title: "Sala B1", image: "/images/salas/sala-b1.jpg", description: "Franjas orgánicas estilo bambú para reuniones confidenciales, con estilo y frescura.", price: "$150.00 por hora + IVA" },
        { eyebrow: "MÁXIMO 3 PERSONAS", title: "Sala B2", image: "/images/salas/sala-b2.jpg", description: "Franjas orgánicas estilo bambú para reuniones confidenciales, con estilo y frescura.", price: "$150.00 por hora + IVA" },
      ]}
      footnotes={["Los servicios de bebidas, copiado, impresiones y escaneo tienen costo adicional.", "HDMI está disponible en salas con pantalla."]}
    />
  );
}
