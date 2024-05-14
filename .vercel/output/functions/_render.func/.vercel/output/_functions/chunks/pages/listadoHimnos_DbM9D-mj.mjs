/* empty css                         */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BlpA9jtx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, h as himnos, a as $$BotonRedireccion, $ as $$LayoutPrincipal } from './_id__CdfNSzzN.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';

const input = ({ himnos }) => {
  const [listahimnos, setListaHimnos] = useState(himnos);
  const [input2, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const filtrarHimnos = (himnos2) => himnos2.filter(
    (himno) => himno.titulo.toLowerCase().includes(input2.toLowerCase())
  );
  const himnosfiltrados = useMemo(() => filtrarHimnos(listahimnos), [input2]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-6", children: /* @__PURE__ */ jsx(
      "input",
      {
        onChange: handleInput,
        value: input2,
        placeholder: "Busca tu himno",
        type: "text",
        className: "p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center items-center mt-8", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: himnosfiltrados?.map((himno, index) => /* @__PURE__ */ jsxs("a", { href: `/himnos/${himno.id}`, className: "block", children: [
      himno.id,
      ". ",
      himno.titulo
    ] }, index)) }) })
  ] });
};

const $$ListadoHimnos = createComponent(async ($$result, $$props, $$slots) => {
  const himnos$1 = await db.select().from(himnos);
  return renderTemplate`${renderComponent($$result, "ButtonBack", $$BotonRedireccion, {}, { "default": ($$result2) => renderTemplate` Inicio ` })} ${renderComponent($$result, "Layout", $$LayoutPrincipal, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h3 class="text-4xl text-center mt-6">Himnos</h3> ${renderComponent($$result2, "Input", input, { "client:load": true, "himnos": himnos$1, "client:component-hydration": "load", "client:component-path": "C:/Users/Lucas/Desktop/Himnario/src/components/Input", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Lucas/Desktop/Himnario/src/pages/listadoHimnos.astro", void 0);

const $$file = "C:/Users/Lucas/Desktop/Himnario/src/pages/listadoHimnos.astro";
const $$url = "/listadoHimnos";

export { $$ListadoHimnos as default, $$file as file, $$url as url };
