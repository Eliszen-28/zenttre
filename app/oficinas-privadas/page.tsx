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
        { value: "2–10", label: "personas por oficina" },
        { value: "24/7", label: "los 365 días del año" },
        { value: "Desde $4,500", label: "mensuales + IVA" },
      ]}
      sectionTitle="Un espacio para tu empresa donde el profesionalismo y"
      sectionItalic="tu crecimiento son primordiales."
      sectionText="Acceso permanente, mobiliario y servicios para que tu empresa trabaje en un entorno profesional."
      benefits={[
        { title: "Acceso permanente", text: "Acceso 24/7 los 365 días del año." },
        { title: "Servicios adicionales", text: "Bebidas, copiado, impresiones y escaneo disponibles con costo adicional." },
        { title: "Conectividad", text: "Acceso por medio de Apple TV y HDMI en salas con pantalla." },
        { title: "Áreas comunes", text: "Acceso a servicios y espacios compartidos de Zenttre." },
      ]}
      plans={[
        { eyebrow: "OFICINA EQUIPADA", title: "Oficina A", description: "Oficina cómoda para 3 personas.", details: ["5 m²", "Bono para salas: $1,000"], price: "$4,500 mensuales + IVA" },
        { eyebrow: "OFICINA EQUIPADA", title: "Oficina para 10 personas", description: "Oficina cómoda para 10 personas aproximadamente.", details: ["32 m²", "Pantalla para proyección de 85″", "Aire acondicionado", "Conexiones múltiples para los equipos", "Wi‑Fi incluido", "Bono mensual de salas: $1,900"], price: "$13,400 mensuales + IVA" },
        { eyebrow: "OFICINA EQUIPADA", title: "Oficina Verde", description: "Oficina cómoda para 7 personas aproximadamente.", details: ["32 m²", "Aire acondicionado", "Conexiones múltiples para los equipos", "Wi‑Fi, agua y limpieza incluidos", "Bono mensual de salas: $2,500"], price: "$25,500 mensuales + IVA" },
        { eyebrow: "OFICINA EQUIPADA", title: "Oficina 205", description: "Oficina cómoda para 3 personas.", details: ["6.6 m²", "Wi‑Fi incluido", "Bono mensual de salas: $1,200"], price: "$5,000 mensuales + IVA" },
        { eyebrow: "OFICINA EQUIPADA", title: "Oficina 604", description: "Oficina cómoda para 2 personas.", details: ["5 m²", "Conexiones múltiples para los equipos", "Wi‑Fi incluido", "Bono mensual de salas: $1,200"], price: "$5,000 mensuales + IVA" },
      ]}
      footnotes={["Los servicios de bebidas, copiado, impresiones y escaneo tienen costo adicional.", "Apple TV y HDMI están disponibles en salas con pantalla."]}
    />
  );
}
