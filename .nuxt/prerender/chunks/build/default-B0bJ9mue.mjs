globalThis.__timing__.logStart('Load chunks/build/default-B0bJ9mue');import { _ as _plugin_vue_export_helper_default, a as useRoute$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/server-renderer/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/nostics/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/nostics/dist/formatters/ansi.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/hookable/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unctx/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/h3/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/ufo/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/ofetch/dist/node.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue-router/vue-router.node.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/defu/dist/defu.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/utils.mjs';
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
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/scule/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/pathe/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/server.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/legacy.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/devalue/index.js';

var _virtual_public__2Fafricoff_default = publicAssetsURL("/africoff.png");
var SiteHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      {
        label: "About",
        to: "/about"
      },
      {
        label: "Activities",
        to: "/activities"
      },
      {
        label: "Out-growers",
        to: "/out-growers"
      },
      {
        label: "Products",
        to: "/products"
      },
      {
        label: "Impact",
        to: "/impact"
      }
    ];
    const isOpen = ref(false);
    const route = useRoute$1();
    watch(() => route.fullPath, () => {
      isOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = NuxtLink;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))}><div class="shell header-inner">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "brand",
        "aria-label": "AFRICOFF home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(`<img${ssrRenderAttr("src", _virtual_public__2Fafricoff_default)} alt="AFRICOFF Industries (U) Limited"${_scopeId}>`);
          else return [createVNode("img", {
            src: _virtual_public__2Fafricoff_default,
            alt: "AFRICOFF Industries (U) Limited"
          })];
        }),
        _: 1
      }, _parent));
      _push(`<nav class="desktop-nav" aria-label="Main navigation"><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) _push2(`${ssrInterpolate(item.label)}`);
            else return [createTextVNode(toDisplayString(item.label), 1)];
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "button button-small desktop-cta"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(`Contact us <span${_scopeId}>\u2197</span>`);
          else return [createTextVNode("Contact us "), createVNode("span", null, "\u2197")];
        }),
        _: 1
      }, _parent));
      _push(`<button class="menu-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(isOpen))} aria-label="Toggle navigation"><span></span><span></span><span></span></button></div>`);
      if (unref(isOpen)) {
        _push(`<nav class="mobile-nav shell" aria-label="Mobile navigation"><!--[-->`);
        ssrRenderList(navigation, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.to,
            to: item.to
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) _push2(`${ssrInterpolate(item.label)}`);
              else return [createTextVNode(toDisplayString(item.label), 1)];
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) _push2(`Contact us <span${_scopeId}>\u2197</span>`);
            else return [createTextVNode("Contact us "), createVNode("span", null, "\u2197")];
          }),
          _: 1
        }, _parent));
        _push(`</nav>`);
      } else _push(`<!---->`);
      _push(`</header>`);
    };
  }
});
var _sfc_setup$2 = SiteHeader_vue_vue_type_script_setup_true_lang_default.setup;
SiteHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var SiteHeader_default = Object.assign(SiteHeader_vue_vue_type_script_setup_true_lang_default, { __name: "SiteHeader" });
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = NuxtLink;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))}><div class="shell footer-grid"><div><img class="footer-logo"${ssrRenderAttr("src", _virtual_public__2Fafricoff_default)} alt="AFRICOFF Industries (U) Limited"><p class="footer-summary">Growing a sustainable future through quality Ugandan coffee.</p></div><div><p class="footer-label">Explore</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`About AFRICOFF`);
      else return [createTextVNode("About AFRICOFF")];
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/activities" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`Our activities`);
      else return [createTextVNode("Our activities")];
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/out-growers" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`Out-growers scheme`);
      else return [createTextVNode("Out-growers scheme")];
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`Products`);
      else return [createTextVNode("Products")];
    }),
    _: 1
  }, _parent));
  _push(`</div><div><p class="footer-label">Start a conversation</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`Contact AFRICOFF <span${_scopeId}>\u2197</span>`);
      else return [createTextVNode("Contact AFRICOFF "), createVNode("span", null, "\u2197")];
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/impact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`Our impact`);
      else return [createTextVNode("Our impact")];
    }),
    _: 1
  }, _parent));
  _push(`<a href="/Bwana%20Profile.pdf" download>Company profile \u2193</a></div></div><div class="shell footer-bottom"><span>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} AFRICOFF Industries (U) Limited.</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`Privacy`);
      else return [createTextVNode("Privacy")];
    }),
    _: 1
  }, _parent));
  _push(`</div></footer>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var SiteFooter_default = /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "SiteFooter" });
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SiteHeader = SiteHeader_default;
  const _component_SiteFooter = SiteFooter_default;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
  _push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_default as default };;globalThis.__timing__.logEnd('Load chunks/build/default-B0bJ9mue');
//# sourceMappingURL=default-B0bJ9mue.mjs.map
