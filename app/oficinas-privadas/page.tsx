import ServiceDetailPage from "../components/ServiceDetailPage";

export default function OficinasPrivadasPage() {
  return (
    <ServiceDetailPage
      eyebrow="OFICINAS PRIVADAS · LISTAS PARA TRABAJAR"
      title="Tu oficina, con la privacidad para"
      italicTitle="hacerla tuya."
      intro="Espacios equipados para equipos de 2 a 10 personas, con mobiliario, servicios y atención incluidos desde el primer día."
      heroImage="/images/04.jpg"
      secondaryImage="/images/07.jpg"
      serviceName="Oficinas privadas"
      highlights={[
        { value: "2–10", label: "personas por oficina" },
        { value: "24/7", label: "acceso todos los días" },
        { value: "Todo incluido", label: "sin costos ocultos" },
      ]}
      sectionTitle="Un espacio profesional que"
      sectionItalic="crece contigo."
      sectionText="Instálate sin inversiones iniciales ni gestiones complicadas. Tu equipo encuentra un lugar cómodo, funcional y profesional, mientras Zenttre se encarga de la operación diaria."
      benefits={[
        { title: "Lista desde el primer día", text: "Mobiliario, internet de alta velocidad, limpieza y mantenimiento incluidos." },
        { title: "Acceso y seguridad", text: "Entrada 24/7 los 365 días del año para trabajar a tu ritmo." },
        { title: "Imagen profesional", text: "Recepción de visitas y correspondencia en una ubicación estratégica de CDMX." },
        { title: "Espacios compartidos", text: "Acceso a áreas comunes y tarifas preferenciales en salas de juntas." },
      ]}
      plans={[
        { eyebrow: "EQUIPOS PEQUEÑOS", title: "Oficina para 2–4", description: "Privacidad y funcionalidad para profesionales y equipos compactos." },
        { eyebrow: "EQUIPOS EN CRECIMIENTO", title: "Oficina para 5–10", description: "Más espacio para colaborar sin perder la concentración y privacidad." },
      ]}
    />
  );
}
