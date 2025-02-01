import { a as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, b as renderComponent, e as renderHead, f as renderSlot } from './astro/server.C9X3inmw.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://jharrison-huntley.github.io");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title = "Jareth Harrison-Huntley", description = "Personal portfolio and blog" } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Favicon stuff --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Social Media --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website">`;
}, "/home/runner/work/me/me/src/components/BaseHead.astro", undefined);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto 2xl:max-w-7xl bg-black lg:fixed lg:z-50 w-full"> <div class="mx-auto bg-black justify-center w-full"> <div class="mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-center lg:justify-between w-full"> <div class="text-white text-center items-center w-full flex flex-col justify-between md:px-0 sm:flex-row sm:px-8"> <a href="/me" class="text-white text-xs font-display inline-flex items-center md:px-8 md:text-center py-4 uppercase"> <span>Jareth Harrison-Huntley</span> </a> <nav class="flex gap-8 items-center"> <a href="/me/career" class="text-white/70 hover:text-white duration-200 text-xs uppercase">Career</a> <a href="/me/projects" class="text-white/70 hover:text-white duration-200 text-xs uppercase">Projects</a> <a href="https://github.com/JHARRISON-HUNTLEY" class="text-white/70 hover:text-white duration-200 text-xs uppercase">Github</a> <a href="mailto:jharrison.huntley@outlook.com" class="text-blue-500 hover:text-blue-400 duration-200 text-xs uppercase">Contact</a> </nav> </div> </div> </div> </section>`;
}, "/home/runner/work/me/me/src/components/global/Navigation.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-32 border-t border-gray-800"> <div class="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8"> <p class="mt-10 text-center text-xs leading-5 text-gray-400">
&copy; ${year} Jareth Harrison-Huntley. All rights reserved.
</p> </div> </footer>`;
}, "/home/runner/work/me/me/src/components/global/Footer.astro", undefined);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="selection:bg-orange  selection:text-white"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body class="mx-auto bg-black 2xl:max-w-7xl"> ${renderComponent($$result, "Navigation", $$Navigation, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/work/me/me/src/layouts/BaseLayout.astro", undefined);

export { $$BaseLayout as $ };
