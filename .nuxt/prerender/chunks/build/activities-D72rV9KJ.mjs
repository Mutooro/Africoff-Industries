globalThis.__timing__.logStart('Load chunks/build/activities-D72rV9KJ');import { u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { P as PageHero_default } from './PageHero-DJRHivW1.mjs';
import { C as CallToAction_default } from './CallToAction-CPXsyoyA.mjs';
import { a as activities } from './site-D_MDZ0Kq.mjs';
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

var activities_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "activities",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta$1({
      title: "Our activities",
      description: "Explore AFRICOFF\u2019s coffee production, processing, quality, value-addition and export activities."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = PageHero_default;
      const _component_CallToAction = CallToAction_default;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "What we do",
        title: "From farm to market, with care.",
        intro: "Our activities are designed to protect quality, create value, and strengthen the links that make coffee work for more people."
      }, null, _parent));
      _push(`<section class="shell content-section"><div class="section-heading"><p class="eyebrow">The coffee journey</p><h2>Built around <em>quality and connection.</em></h2></div><div class="activity-list"><!--[-->`);
      ssrRenderList(unref(activities), (activity) => {
        _push(`<article><span>${ssrInterpolate(activity.number)}</span><div><h3>${ssrInterpolate(activity.title)}</h3><p>${ssrInterpolate(activity.text)}</p></div></article>`);
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
var _sfc_setup = activities_vue_vue_type_script_setup_true_lang_default.setup;
activities_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activities.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var activities_default = activities_vue_vue_type_script_setup_true_lang_default;

export { activities_default as default };;globalThis.__timing__.logEnd('Load chunks/build/activities-D72rV9KJ');
//# sourceMappingURL=activities-D72rV9KJ.mjs.map
