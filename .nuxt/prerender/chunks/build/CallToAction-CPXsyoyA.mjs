globalThis.__timing__.logStart('Load chunks/build/CallToAction-CPXsyoyA');import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/server-renderer/index.mjs';

var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = NuxtLink;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))}><div class="shell cta-inner"><div><p class="eyebrow light">Partner with AFRICOFF</p><h2>Let\u2019s grow a more resilient coffee value chain.</h2></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "button button-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`Start a conversation <span${_scopeId}>\u2197</span>`);
      else return [createTextVNode("Start a conversation "), createVNode("span", null, "\u2197")];
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var CallToAction_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "CallToAction" });

export { CallToAction_default as C };;globalThis.__timing__.logEnd('Load chunks/build/CallToAction-CPXsyoyA');
//# sourceMappingURL=CallToAction-CPXsyoyA.mjs.map
