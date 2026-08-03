import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders complete SEO metadata and local business data", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Zenttre \| Oficinas equipadas en Colonia del Valle, CDMX<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/zenttre\.mx\/"/);
  assert.match(html, /<meta name="robots" content="index, follow"/);
  assert.match(html, /<meta property="og:image" content="https:\/\/zenttre\.mx\/og\.png"/);
  assert.match(html, /<script type="application\/ld\+json">/);
  assert.match(html, /"@type":\["LocalBusiness","ProfessionalService"\]/);
  assert.match(html, /"streetAddress":"Aniceto Ortega 817"/);
});

test("renders unique metadata for service landing pages", async () => {
  const response = await render("/salas-de-juntas");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Salas de juntas en Colonia del Valle desde \$100 \| Zenttre<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/zenttre\.mx\/salas-de-juntas\/"/);
  assert.match(html, /Renta salas de juntas en la Colonia del Valle/);
});

test("publishes crawl controls and a complete sitemap", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /Sitemap: https:\/\/zenttre\.mx\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/zenttre\.mx\/oficinas-privadas\//);
  assert.match(sitemap, /https:\/\/zenttre\.mx\/oficina-virtual\//);
  assert.match(sitemap, /https:\/\/zenttre\.mx\/salas-de-juntas\//);
  assert.match(sitemap, /https:\/\/zenttre\.mx\/domicilio-fiscal-comercial\//);
});

test("renders client access and collision-safe mobile controls", async () => {
  const response = await render();
  const html = await response.text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(html, /ec2-34-208-182-159\.us-west-2\.compute\.amazonaws\.com:4000\/#\/login/);
  assert.match(html, /Acceso a/);
  assert.doesNotMatch(html, /Cotiza tu espacio/);
  assert.match(html, /src="\/thenewworkexperience\.jpg"/);
  assert.doesNotMatch(html, /La oficina que se adapta a tu negocio/);
  assert.match(css, /\.client-access-zone\s*\{[^}]*background:\s*var\(--white\)/i);
  assert.match(css, /\.client-access\s*\{[^}]*color:\s*#626262[^}]*background:\s*#93d0df/i);
  assert.match(css, /\.back-to-top\s*\{[^}]*width:\s*48px/i);
  assert.match(css, /safe-area-inset-bottom/);
});
