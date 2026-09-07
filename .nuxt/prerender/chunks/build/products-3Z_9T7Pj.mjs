globalThis.__timing__.logStart('Load chunks/build/products-3Z_9T7Pj');import { u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { P as PageHero_default } from './PageHero-DJRHivW1.mjs';
import { C as CallToAction_default } from './CallToAction-CPXsyoyA.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/index.mjs';
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

var products_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta$1({
      title: "Coffee products",
      description: "Discover AFRICOFF coffee products and make a buyer enquiry."
    });
    const products = [
      {
        name: "Green coffee",
        copy: "Quality coffee for buyers seeking traceable, carefully handled Ugandan origin."
      },
      {
        name: "Roasted coffee",
        copy: "Roasted offerings that showcase the distinct character of Ugandan coffee."
      },
      {
        name: "Ground coffee",
        copy: "Convenient coffee products made for freshness, flavour, and everyday enjoyment."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = PageHero_default;
      const _component_NuxtLink = NuxtLink;
      const _component_CallToAction = CallToAction_default;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Our products",
        title: "Ugandan coffee, thoughtfully prepared.",
        intro: "From green coffee through to value-added products, we focus on quality at every step."
      }, null, _parent));
      _push(`<section class="shell content-section"><div class="section-heading"><p class="eyebrow">Coffee offerings</p><h2>Made for discerning <em>coffee partners.</em></h2></div><div class="product-grid"><!--[-->`);
      ssrRenderList(products, (product, index) => {
        _push(`<article><span>0${ssrInterpolate(index + 1)}</span><h3>${ssrInterpolate(product.name)}</h3><p>${ssrInterpolate(product.copy)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-link",
          to: "/contact"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) _push2(`Request information <span${_scopeId}>\u2192</span>`);
            else return [createTextVNode("Request information "), createVNode("span", null, "\u2192")];
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
var _sfc_setup = products_vue_vue_type_script_setup_true_lang_default.setup;
products_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var products_default = products_vue_vue_type_script_setup_true_lang_default;

export { products_default as default };;globalThis.__timing__.logEnd('Load chunks/build/products-3Z_9T7Pj');
//# sourceMappingURL=products-3Z_9T7Pj.mjs.map
