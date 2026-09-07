globalThis.__timing__.logStart('Load chunks/build/about-DtoJymM8');import { u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { P as PageHero_default } from './PageHero-DJRHivW1.mjs';
import { C as CallToAction_default } from './CallToAction-CPXsyoyA.mjs';
import { defineComponent, useSSRContext } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/server-renderer/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/nostics/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/nostics/dist/formatters/ansi.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/hookable/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unctx/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/h3/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/ufo/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'node:async_hooks';
import '../_/nitro.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/destr/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unstorage/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/ohash/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/klona/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/defu/dist/defu.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/scule/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/pathe/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/server.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/legacy.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/devalue/index.js';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue-router/vue-router.node.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/utils.mjs';
import './nuxt-link-WAb99hsX.mjs';

var about_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta$1({
      title: "About us",
      description: "Learn about AFRICOFF Industries (U) Limited and our role in Uganda\u2019s coffee value chain."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = PageHero_default;
      const _component_CallToAction = CallToAction_default;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "About AFRICOFF",
        title: "Coffee with a future in mind.",
        intro: "We are building a responsible coffee business grounded in quality, partnership, and the long-term wellbeing of coffee-growing communities."
      }, null, _parent));
      _push(`<section class="shell content-section two-column"><p class="eyebrow">Our story</p><div><h2>From Uganda\u2019s coffee regions to the <em>wider world.</em></h2><p class="lead">AFRICOFF Industries brings together production, processing, value addition, and market access. Our work is shaped by a belief that quality coffee and shared prosperity should grow together.</p><p>We work to strengthen every connection in the value chain\u2014from the care put into a crop, through processing and quality assurance, to the markets where Ugandan coffee is enjoyed.</p></div></section><section class="cream-section"><div class="shell values-grid"><div><p class="eyebrow">What guides us</p><h2>Responsible growth, <em>every day.</em></h2></div><article><span>01</span><h3>Integrity</h3><p>We build transparent relationships with farmers, customers, and partners.</p></article><article><span>02</span><h3>Sustainability</h3><p>We protect the land and invest in resilient farming communities.</p></article><article><span>03</span><h3>Excellence</h3><p>We pursue consistent quality from the farm to every market.</p></article></div></section>`);
      _push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
var _sfc_setup = about_vue_vue_type_script_setup_true_lang_default.setup;
about_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about_default = about_vue_vue_type_script_setup_true_lang_default;

export { about_default as default };;globalThis.__timing__.logEnd('Load chunks/build/about-DtoJymM8');
//# sourceMappingURL=about-DtoJymM8.mjs.map
