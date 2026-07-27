import ServiceDetailPage from "../components/ServiceDetailPage";

export default function SalasDeJuntasPage() {
  return (
    <ServiceDetailPage
      eyebrow="SALAS DE JUNTAS · RESERVA POR HORA"
      title="Reuniones importantes en el espacio"
      italicTitle="indicado."
      intro="Salas privadas, cómodas y equipadas para recibir clientes, presentar proyectos o colaborar con tu equipo desde $100 por hora."
      heroImage="/images/09.jpg"
      secondaryImage="/images/11.jpg"
      serviceName="Salas de juntas"
      highlights={[
        { value: "Desde $100", label: "por hora + IVA" },
        { value: "4–10", label: "personas según la sala" },
        { value: "Por hora", label: "sin contratos largos" },
      ]}
      sectionTitle="Todo lo necesario para que la conversación"
      sectionItalic="avance."
      sectionText="Reserva solamente el tiempo que necesitas. Cada sala ofrece una atmósfera profesional y herramientas para que tus juntas sean cómodas, puntuales y productivas."
      benefits={[
        { title: "Conectividad incluida", text: "Wi‑Fi de alta velocidad para todos los participantes." },
        { title: "Presentaciones sencillas", text: "Pantalla, Apple TV, conexión HDMI y pizarrón disponibles." },
        { title: "Atención a tus visitas", text: "Recepción profesional para clientes, proveedores y colaboradores." },
        { title: "Reserva flexible", text: "Elige la capacidad y las horas que realmente necesitas." },
      ]}
      plans={[
        { eyebrow: "REUNIONES BREVES", title: "Sala hasta 4 personas", description: "Ideal para entrevistas, videollamadas y sesiones de trabajo.", price: "Desde $100 por hora + IVA" },
        { eyebrow: "JUNTAS Y PRESENTACIONES", title: "Sala hasta 10 personas", description: "Amplitud para clientes, equipos y presentaciones importantes.", price: "Cotiza según horario y duración" },
      ]}
    />
  );
}
