/* empty css                         */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_BlpA9jtx.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Lucas/Desktop/Himnario/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$LayoutPrincipal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Himnario jovenes</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-300"> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Lucas/Desktop/Himnario/src/layouts/LayoutPrincipal.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN ?? "7cddd6b75a90531868944fcfcdb711d08dd5fbf9:mgmyo415vfrr8bl75xbaso5vyeah", {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const himnos = asDrizzleTable("himnos", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "himnos", "primaryKey": true } }, "titulo": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "titulo", "collection": "himnos", "primaryKey": false, "optional": false } }, "letra": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "letra", "collection": "himnos", "primaryKey": false, "optional": false } }, "acordes": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "acordes", "collection": "himnos", "primaryKey": false, "optional": true } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro$1 = createAstro();
const $$BotonRedireccion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BotonRedireccion;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-start m-6"> <a${addAttribute(url ? url : "/", "href")} class="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-700"> ${renderSlot($$result, $$slots["default"], renderTemplate`Inicio`)} </a> </div>`;
}, "C:/Users/Lucas/Desktop/Himnario/src/components/BotonRedireccion.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const getStaticPaths = async () => {
  const himnos$1 = await db.select().from(himnos);
  return himnos$1.map((himno) => ({ params: { id: himno.id }, props: himno }));
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const himno = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BotonVolver", $$BotonRedireccion, { "url": "/listadoHimnos" }, { "default": ($$result2) => renderTemplate`Atrás` })} ${renderComponent($$result, "Layout", $$LayoutPrincipal, { "background": "bg-black" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center mb-10 gap-5"> <h3 class="text-black text-center">${himno.titulo}</h3> <pre class="text-black text-sm w-96">${himno.letra}</pre> </div> ` })}`;
}, "C:/Users/Lucas/Desktop/Himnario/src/pages/himnos/[id].astro", void 0);

const $$file = "C:/Users/Lucas/Desktop/Himnario/src/pages/himnos/[id].astro";
const $$url = "/himnos/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BotonRedireccion as $, _id_ as _, $$LayoutPrincipal as a, db as d, himnos as h };
