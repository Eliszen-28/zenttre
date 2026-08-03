const clientPortalUrl =
  "http://ec2-34-208-182-159.us-west-2.compute.amazonaws.com:4000/#/login";

export default function ClientAccessLink() {
  return (
    <a
      className="client-access"
      href={clientPortalUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir acceso para clientes de Zenttre"
    >
      <span className="client-access-icon" aria-hidden="true">↗</span>
      <span className="client-access-label"><span className="client-access-full">Acceso a </span>clientes</span>
    </a>
  );
}
