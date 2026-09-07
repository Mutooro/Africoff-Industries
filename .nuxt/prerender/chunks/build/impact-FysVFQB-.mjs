globalThis.__timing__.logStart('Load chunks/build/impact-FysVFQB-');import { u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { P as PageHero_default } from './PageHero-DJRHivW1.mjs';
import { C as CallToAction_default } from './CallToAction-CPXsyoyA.mjs';
import { o as objectives } from './site-D_MDZ0Kq.mjs';
import { defineComponent, unref, useSSRContext } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/server-renderer/index.mjs';
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

var impact_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "impact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta$1({
      title: "Our impact",
      description: "AFRICOFF\u2019s commitments to sustainable quality, community development and inclusive growth."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = PageHero_default;
      const _component_CallToAction = CallToAction_default;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Our impact",
        title: "Quality coffee. A more sustainable future.",
        intro: "We are guided by the impact we can create across the coffee value chain\u2014for growers, communities, partners, and the environment."
      }, null, _parent));
      _push(`<section class="shell content-section two-column"><p class="eyebrow">Our direction</p><div><h2>Six commitments that guide <em>our work.</em></h2><div class="commitment-list"><!--[-->`);
      ssrRenderList(unref(objectives), (objective, index) => {
        _push(`<p><span>0${ssrInterpolate(index + 1)}</span>${ssrInterpolate(objective)}</p>`);
      });
      _push(`<!--]--></div></div></section><section class="cream-section"><div class="shell feature-copy"><p class="eyebrow">Sustainability in practice</p><h2>Growing responsibly means looking <em>beyond the harvest.</em></h2><p class="lead">We work towards environmentally sound production, stronger livelihoods, women\u2019s empowerment, and durable partnerships that can support coffee communities over time.</p></div></section>`);
      _push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
var _sfc_setup = impact_vue_vue_type_script_setup_true_lang_default.setup;
impact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var impact_default = impact_vue_vue_type_script_setup_true_lang_default;

export { impact_default as default };;globalThis.__timing__.logEnd('Load chunks/build/impact-FysVFQB-');
//# sourceMappingURL=impact-FysVFQB-.mjs.map
