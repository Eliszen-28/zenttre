<?php
declare(strict_types=1);

session_start();

function return_to_form(string $status)
{
    header('Location: /?contact=' . rawurlencode($status) . '#contacto', true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    return_to_form('invalid');
}

// Honeypot: legitimate visitors never fill this field.
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    return_to_form('success');
}

$lastSubmission = (int) ($_SESSION['zenttre_last_contact'] ?? 0);
if ($lastSubmission > 0 && time() - $lastSubmission < 20) {
    return_to_form('rate-limit');
}

$name = trim((string) ($_POST['name'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$service = trim((string) ($_POST['service'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$captcha = trim((string) ($_POST['captcha'] ?? ''));
$privacyAccepted = isset($_POST['privacy']);

$allowedServices = [
    'Oficina equipada',
    'Sala de juntas',
    'Oficina virtual',
    'Domicilio fiscal',
];

if (
    $captcha !== '9' ||
    !$privacyAccepted ||
    $name === '' || strlen($name) > 240 ||
    $phone === '' || strlen($phone) > 80 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 190 ||
    ($service !== '' && !in_array($service, $allowedServices, true)) ||
    strlen($message) > 6000
) {
    return_to_form('invalid');
}

$safeName = preg_replace('/[\r\n]+/', ' ', $name) ?: 'Visitante Zenttre';
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safePhone = preg_replace('/[^0-9+() .-]/', '', $phone) ?: $phone;
$selectedService = $service !== '' ? $service : 'No especificado';

$subject = 'Nuevo contacto desde zenttre.mx: ' . $selectedService;
$body = implode("\n", [
    'Se recibió una solicitud desde el formulario de zenttre.mx.',
    '',
    'Nombre: ' . $safeName,
    'Teléfono: ' . $safePhone,
    'Correo: ' . $safeEmail,
    'Servicio: ' . $selectedService,
    '',
    'Mensaje:',
    $message !== '' ? $message : 'Sin mensaje adicional.',
    '',
    'Fecha: ' . date('Y-m-d H:i:s T'),
]);

$headers = [
    'From: Sitio web Zenttre <mensajes@zenttre.com>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = mail(
    'mensajes@zenttre.com',
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers)
);

if (!$sent) {
    return_to_form('mail-error');
}

$_SESSION['zenttre_last_contact'] = time();
return_to_form('success');
