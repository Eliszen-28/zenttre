import ServiceDetailPage from "../components/ServiceDetailPage";

export default function OficinasPrivadasPage() {
  return (
    <ServiceDetailPage
      eyebrow="OFICINAS EQUIPADAS · LISTAS PARA TRABAJAR"
      title="Aquí tenemos un espacio"
      italicTitle="a tu medida."
      intro="Espacios con mobiliario incluido, acceso a todos los servicios y áreas comunes."
      heroImage="/images/04.jpg"
      secondaryImage="/images/07.jpg"
      serviceName="Oficinas equipadas"
      highlights={[
        { value: "1 - 7", label: "personas por oficina" },
        { value: "24/7", label: "los 365 días del año" },
        { value: "Desde $5,000", label: "mensuales + IVA" },
      ]}
      sectionTitle="Un espacio para tu empresa donde el profesionalismo y"
      sectionItalic="tu crecimiento son primordiales."
      sectionText="Acceso permanente, mobiliario y servicios para que tu empresa trabaje en un entorno profesional."
      benefits={[
        { title: "Acceso permanente", text: "Acceso 24/7 los 365 días del año." },
        { title: "Servicios adicionales", text: "Bebidas, copiado, impresiones y escaneo disponibles con costo adicional." },
        { title: "Conectividad", text: "Acceso por medio de HDMI en salas con pantalla." },
        { title: "Áreas comunes", text: "Acceso a servicios y espacios compartidos de Zenttre." },
      ]}
      plans={[
        { eyebrow: "OFICINA EQUIPADA", title: "Oficina", description: "Oficina cómoda para 7 personas aprox.", details: ["32m²", "Aire acondicionado", "Conexiones múltiples para los equipos", "Wifi, agua y limpieza incluidos", "Bono mensual de salas $2,500"], price: "Mensuales $25,500 + IVA." },
        { eyebrow: "OFICINA EQUIPADA", title: "Oficina 205", description: "Oficina cómoda para 3 personas", details: ["6.6m²", "Wifi gratis", "Bono mensual de salas $1,200"], price: "Mensuales $5,000 + IVA." },
      ]}
      footnotes={["Los servicios de bebidas, copiado, impresiones y escaneo tienen costo adicional.", "HDMI está disponible en salas con pantalla."]}
    />
  );
}
