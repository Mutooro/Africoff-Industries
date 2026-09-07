import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { v as valueChains } from './reviewed-CbsaqwN4.mjs';
import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowRight, ArrowUpRight } from '@lucide/vue';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/pages/value-chains.vue?vue&type=script&setup=true&lang.ts
var value_chains_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "value-chains",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Coffee, Cocoa and Honey Value Chains · AFRICOFF",
			description: "Explore AFRICOFF value-chain information for buyers and partners, including Ugandan coffee and developing cocoa and honey offerings."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-7db3e925><section class="page-intro" data-v-7db3e925><div class="shell" data-v-7db3e925><div class="page-intro-inner" data-v-7db3e925><span class="section-label" data-v-7db3e925>Value chains</span><h1 data-v-7db3e925>From Ugandan Origins to <em data-v-7db3e925>Responsible Markets</em></h1><p data-v-7db3e925>Explore current product information and register interest in AFRICOFF&#39;s developing cocoa and honey value chains.</p></div></div></section><section class="py-section bg-offwhite" data-v-7db3e925><div class="shell" data-v-7db3e925><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-7db3e925><span class="section-label" data-v-7db3e925>Buyer information</span><h2 class="section-title" data-v-7db3e925>Clearer Origin Data for <em data-v-7db3e925>Better Decisions</em></h2><p class="section-subtitle" data-v-7db3e925>Published details are separated from information awaiting commercial and programme-owner approval.</p></div><div class="values-grid" data-v-7db3e925><!--[-->`);
			ssrRenderList(unref(valueChains), (chain) => {
				_push(`<article class="val-card" data-v-7db3e925><span class="section-label" data-v-7db3e925>${ssrInterpolate(chain.status === "published" ? "Information available" : "Details in review")}</span><h3 data-v-7db3e925>${ssrInterpolate(chain.name)}</h3><p data-v-7db3e925>${ssrInterpolate(chain.summary)}</p><ul class="chain-details" data-v-7db3e925><!--[-->`);
				ssrRenderList(chain.details, (detail) => {
					_push(`<li data-v-7db3e925>${ssrInterpolate(detail)}</li>`);
				});
				_push(`<!--]--></ul>`);
				if (chain.slug === "coffee") _push(ssrRenderComponent(_component_NuxtLink, {
					to: "/products",
					class: "text-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` View coffee catalogue <span data-v-7db3e925${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowRight), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode(" View coffee catalogue "), createVNode("span", null, [createVNode(unref(ArrowRight), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 2
				}, _parent));
				else _push(ssrRenderComponent(_component_NuxtLink, {
					to: "/contact",
					class: "text-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` Register buyer interest <span data-v-7db3e925${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowRight), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode(" Register buyer interest "), createVNode("span", null, [createVNode(unref(ArrowRight), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 2
				}, _parent));
				_push(`</article>`);
			});
			_push(`<!--]--></div></div></section><section class="py-section bg-forest" data-v-7db3e925><div class="shell quality-standards-grid" data-v-7db3e925><div data-v-7db3e925><span class="section-label light" data-v-7db3e925>Commercial enquiry</span><h2 class="section-title light" data-v-7db3e925>Need an Origin Sheet or <em data-v-7db3e925>Sample?</em></h2><p class="section-subtitle light" data-v-7db3e925>Tell us which value chain, origin or format you are evaluating and the team can confirm current availability.</p></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn-gold"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-7db3e925${_scopeId}>Contact AFRICOFF</span>`);
						_push(ssrRenderComponent(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Contact AFRICOFF"), createVNode(unref(ArrowUpRight), {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/value-chains.vue
var _sfc_setup = value_chains_vue_vue_type_script_setup_true_lang_default.setup;
value_chains_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/value-chains.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var value_chains_default = /*#__PURE__*/ _plugin_vue_export_helper_default(value_chains_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-7db3e925"]]);

export { value_chains_default as default };
//# sourceMappingURL=value-chains-CPKDtYFu.mjs.map
