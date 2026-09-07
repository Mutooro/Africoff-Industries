import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { a as accountabilityResources } from './reviewed-CbsaqwN4.mjs';
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

//#region app/pages/accountability.vue?vue&type=script&setup=true&lang.ts
var accountability_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "accountability",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Accountability and Resources · AFRICOFF",
			description: "Find AFRICOFF governance information, policies, reports and due-diligence resources for partners and stakeholders."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)}><section class="page-intro"><div class="shell"><div class="page-intro-inner"><span class="section-label">Accountability &amp; resources</span><h1>Evidence for <em>Responsible Partnership</em></h1><p>Policies, governance information and reports will be published here with clear ownership, dates and approval status.</p></div></div></section><section class="py-section bg-offwhite"><div class="shell"><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}"><span class="section-label">Due diligence library</span><h2 class="section-title">A Growing Home for <em>Public Documents</em></h2><p class="section-subtitle">Pending items are labelled openly so partners can distinguish published material from documents still awaiting approval.</p></div><div class="values-grid"><!--[-->`);
			ssrRenderList(unref(accountabilityResources), (resource) => {
				_push(`<article class="val-card"><span class="section-label">${ssrInterpolate(resource.type)} · ${ssrInterpolate(resource.status === "published" ? "Published" : "Pending approval")}</span><h3>${ssrInterpolate(resource.title)}</h3><p>${ssrInterpolate(resource.description)}</p>`);
				if (resource.href) _push(ssrRenderComponent(_component_NuxtLink, {
					to: resource.href,
					class: "text-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` Open resource <span${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowRight), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode(" Open resource "), createVNode("span", null, [createVNode(unref(ArrowRight), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 2
				}, _parent));
				else _push(`<!---->`);
				_push(`</article>`);
			});
			_push(`<!--]--></div></div></section><section class="py-section bg-cream"><div class="shell about-grid"><div><span class="section-label">Contact the right desk</span><h2 class="section-title">Questions About <em>Due Diligence?</em></h2></div><div><p class="lead">For requests involving governance, safeguarding, complaints, anti-fraud controls or impact evidence, contact AFRICOFF so the request can be routed to the responsible owner.</p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn-primary",
				style: { "margin-top": "1.5rem" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span${_scopeId}>Send a due-diligence enquiry</span>`);
						_push(ssrRenderComponent(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Send a due-diligence enquiry"), createVNode(unref(ArrowUpRight), {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/accountability.vue
var _sfc_setup = accountability_vue_vue_type_script_setup_true_lang_default.setup;
accountability_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/accountability.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var accountability_default = accountability_vue_vue_type_script_setup_true_lang_default;

export { accountability_default as default };
//# sourceMappingURL=accountability-CnwBEagj.mjs.map
