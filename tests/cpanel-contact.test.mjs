import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contactHandler = new URL("../cpanel/contact.php", import.meta.url);

test("cPanel contact handler validates and sends form submissions", async () => {
  const php = await readFile(contactHandler, "utf8");

  assert.match(php, /REQUEST_METHOD.*POST/);
  assert.match(php, /\$captcha !== '9'/);
  assert.match(php, /\$privacyAccepted/);
  assert.match(php, /filter_var\(\$email, FILTER_VALIDATE_EMAIL\)/);
  assert.match(php, /mail\(/);
  assert.match(php, /mensajes@zenttre\.com/);
  assert.match(php, /contact=.+#contacto/);
});

test("cPanel handler includes spam and repeated-submit protection", async () => {
  const php = await readFile(contactHandler, "utf8");

  assert.match(php, /\$_POST\['website'\]/);
  assert.match(php, /zenttre_last_contact/);
  assert.match(php, /rate-limit/);
});
