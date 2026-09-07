globalThis.__timing__.logStart('Load chunks/build/out-growers-DBlbggzz');import { u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { P as PageHero_default } from './PageHero-DJRHivW1.mjs';
import { C as CallToAction_default } from './CallToAction-CPXsyoyA.mjs';
import { _ as _virtual_public__2Fhero_default } from './_virtual_public-Y_sW7Sq3.mjs';
import { defineComponent, useSSRContext } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/server-renderer/index.mjs';
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

var out_growers_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "out-growers",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta$1({
      title: "Out-growers scheme",
      description: "AFRICOFF\u2019s approach to supporting smallholder coffee farmers in Uganda."
    });
    const benefits = [
      "Training and capacity building",
      "Access to quality inputs",
      "Technical support services",
      "Fair market opportunities",
      "Improved food security",
      "Women empowerment programmes"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = PageHero_default;
      const _component_CallToAction = CallToAction_default;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Out-growers scheme",
        title: "Opportunity grows when farmers thrive.",
        intro: "We partner with smallholder coffee growers to support quality production while improving livelihoods and strengthening local communities."
      }, null, _parent));
      _push(`<section class="shell programme-section reverse"><div><p class="eyebrow">Our approach</p><h2>Practical support. <em>Shared progress.</em></h2><p class="lead">The scheme brings together the tools, knowledge, and relationships that can help farmers grow with confidence.</p><div class="benefit-grid"><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<p><span>\u2713</span>${ssrInterpolate(benefit)}</p>`);
      });
      _push(`<!--]--></div></div><div class="programme-image"><img${ssrRenderAttr("src", _virtual_public__2Fhero_default)} alt="Coffee farm landscape"></div></section><section class="dark-editorial"><div class="shell two-column"><p class="eyebrow light">A focus on women</p><div><h2>More space for women to <em>lead and prosper.</em></h2><p>Women are essential to the coffee sector. AFRICOFF aims to promote more inclusive participation, leadership, and economic opportunity through its farmer partnerships.</p></div></div></section>`);
      _push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
var _sfc_setup = out_growers_vue_vue_type_script_setup_true_lang_default.setup;
out_growers_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/out-growers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var out_growers_default = out_growers_vue_vue_type_script_setup_true_lang_default;

export { out_growers_default as default };;globalThis.__timing__.logEnd('Load chunks/build/out-growers-DBlbggzz');
//# sourceMappingURL=out-growers-DBlbggzz.mjs.map
