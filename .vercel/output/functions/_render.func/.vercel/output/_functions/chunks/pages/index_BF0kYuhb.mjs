/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_BlpA9jtx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$LayoutPrincipal } from './_id__CdfNSzzN.mjs';
import 'clsx';

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center mt-10"> <div class="flex flex-col w-auto gap-10 h-64 justify-center"> <a href="/listadoHimnos"> <button class="bg-blue-500 hover:bg-blue-700 text-2xl text-white font-bold py-2 rounded-full w-40 place-self-center">Himnos</button> </a> </div> </div>`;
}, "C:/Users/Lucas/Desktop/Himnario/src/components/Menu.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutPrincipal, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, {})} ` })}`;
}, "C:/Users/Lucas/Desktop/Himnario/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lucas/Desktop/Himnario/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
