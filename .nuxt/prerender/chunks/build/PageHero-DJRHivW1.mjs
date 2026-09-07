globalThis.__timing__.logStart('Load chunks/build/PageHero-DJRHivW1');import { defineComponent, mergeProps, useSSRContext } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/server-renderer/index.mjs';

var PageHero_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    intro: {},
    image: { default: "/hero.png" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-hero" }, _attrs))}><img${ssrRenderAttr("src", __props.image)} alt="Coffee growing landscape"><div class="page-hero-overlay"></div><div class="shell page-hero-content"><p class="eyebrow light">${ssrInterpolate(__props.eyebrow)}</p><h1>${ssrInterpolate(__props.title)}</h1><p>${ssrInterpolate(__props.intro)}</p></div></section>`);
    };
  }
});
var _sfc_setup = PageHero_vue_vue_type_script_setup_true_lang_default.setup;
PageHero_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PageHero_default = Object.assign(PageHero_vue_vue_type_script_setup_true_lang_default, { __name: "PageHero" });

export { PageHero_default as P };;globalThis.__timing__.logEnd('Load chunks/build/PageHero-DJRHivW1');
//# sourceMappingURL=PageHero-DJRHivW1.mjs.map
