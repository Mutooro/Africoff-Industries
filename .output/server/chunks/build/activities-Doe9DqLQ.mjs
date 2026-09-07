import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { S as SafeImage_default } from './SafeImage-Dg0xeSOY.mjs';
import { C as CallToAction_default } from './CallToAction-DOCyRBmK.mjs';
import { b as activities, r as researchDevelopment, d as targetMarkets } from './site-_S4qsMiU.mjs';
import { defineComponent, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { Check, ArrowRight, ArrowUpRight, Microscope, ShieldCheck, FlaskConical } from '@lucide/vue';
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

//#region app/pages/activities.vue?vue&type=script&setup=true&lang.ts
var activities_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "activities",
	__ssrInlineRender: true,
	setup(__props) {
		const categoryLabels = {
			farming: "Farming",
			processing: "Processing",
			"value-addition": "Value Addition",
			traceability: "Traceability",
			export: "Export",
			trading: "Buying & Selling",
			domestic: "Domestic Market"
		};
		useSeoMeta$1({
			title: "Our Activities & Integrated Operations · AFRICOFF Industries",
			description: "Explore the full operational spectrum of AFRICOFF Industries: sustainable plantations, eco-washing stations, modern dry milling, roasting, and global export."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SafeImage = SafeImage_default;
			const _component_NuxtLink = NuxtLink;
			const _component_CallToAction = CallToAction_default;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-88d65afc><section class="page-intro" data-v-88d65afc><div class="shell" data-v-88d65afc><div class="page-intro-inner" data-v-88d65afc><span class="section-label" data-v-88d65afc>Operations &amp; value addition</span><h1 data-v-88d65afc>Precision Engineering Across the <em data-v-88d65afc>Coffee Value Chain</em></h1><p data-v-88d65afc>From sustainable seedling propagation and eco-friendly wet washing to digital EUDR polygon verification and direct container exports.</p></div></div></section><section class="py-section bg-offwhite" data-v-88d65afc><div class="shell" data-v-88d65afc><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "4rem" })}" data-v-88d65afc><span class="section-label" data-v-88d65afc>Integrated Agro-Processing</span><h2 class="section-title" data-v-88d65afc> Step-by-Step Excellence From <em data-v-88d65afc>Tree to Port</em></h2><p class="section-subtitle" data-v-88d65afc> Explore the comprehensive lifecycle of AFRICOFF coffee, managed with meticulous attention to environmental standards and bean integrity. </p></div><div class="activity-detailed-list" data-v-88d65afc><!--[-->`);
			ssrRenderList(unref(activities), (act, index) => {
				_push(`<div class="${ssrRenderClass([{ "row-reverse": index % 2 === 1 }, "activity-row"])}" data-v-88d65afc><div class="activity-img-col" data-v-88d65afc>`);
				_push(ssrRenderComponent(_component_SafeImage, {
					src: act.image,
					alt: act.title,
					loading: "lazy"
				}, null, _parent));
				_push(`<div class="activity-img-badge" data-v-88d65afc><span class="act-num-lg" data-v-88d65afc>${ssrInterpolate(act.number)}</span></div></div><div class="activity-text-col" data-v-88d65afc><div class="act-icon-header" data-v-88d65afc><span class="act-icon" data-v-88d65afc>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(act.icon), {
					size: 24,
					"stroke-width": 2
				}, null), _parent);
				_push(`</span><span class="act-cat-tag" data-v-88d65afc>${ssrInterpolate(categoryLabels[act.category] ?? act.category)}</span></div><h3 data-v-88d65afc>${ssrInterpolate(act.title)}</h3><p class="lead" style="${ssrRenderStyle({ "margin-bottom": "1.25rem" })}" data-v-88d65afc>${ssrInterpolate(act.shortDesc)}</p><p style="${ssrRenderStyle({ "margin-bottom": "1.75rem" })}" data-v-88d65afc>${ssrInterpolate(act.fullDesc)}</p><div class="features-checklist" data-v-88d65afc><h4 data-v-88d65afc>Core Operational Highlights:</h4><ul data-v-88d65afc><!--[-->`);
				ssrRenderList(act.features, (feat) => {
					_push(`<li data-v-88d65afc><span data-v-88d65afc>`);
					_push(ssrRenderComponent(unref(Check), {
						size: 15,
						"stroke-width": 3
					}, null, _parent));
					_push(`</span> ${ssrInterpolate(feat)}</li>`);
				});
				_push(`<!--]--></ul></div><div style="${ssrRenderStyle({ "margin-top": "2rem" })}" data-v-88d65afc>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/contact",
					class: "text-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` Discuss a commercial partnership <span data-v-88d65afc${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowRight), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode(" Discuss a commercial partnership "), createVNode("span", null, [createVNode(unref(ArrowRight), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 2
				}, _parent));
				_push(`</div></div></div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-section bg-forest" data-v-88d65afc><div class="shell" data-v-88d65afc><div class="quality-standards-grid" data-v-88d65afc><div data-v-88d65afc><span class="section-label light" data-v-88d65afc>Quality Assurance</span><h2 class="section-title light" data-v-88d65afc> SCA Cupping Protocols &amp; <em data-v-88d65afc>Zero-Defect Sorting</em></h2><p class="section-subtitle light" style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-88d65afc> Every lot passing through our Kampala and regional mills undergoes moisture testing (target 11.0% - 12.0%), gravimetric density grading, optical trichromatic color sorting, and sensory cupping led by certified Q-graders. A dedicated team of experienced quality-control specialists monitors every stage of the coffee production process — from cherry selection to container loading. </p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/products",
				class: "btn-gold"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-88d65afc${_scopeId}>View Green Coffee Specifications</span>`);
						_push(ssrRenderComponent(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "View Green Coffee Specifications"), createVNode(unref(ArrowUpRight), {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="standards-cards" data-v-88d65afc><div class="std-card" data-v-88d65afc><div class="std-icon" data-v-88d65afc>`);
			_push(ssrRenderComponent(unref(Microscope), {
				size: 28,
				"stroke-width": 1.8
			}, null, _parent));
			_push(`</div><h4 data-v-88d65afc>Certified Cupping Lab</h4><p data-v-88d65afc>Sensory profiling conducted under strict Specialty Coffee Association (SCA) protocol with blind evaluations.</p></div><div class="std-card" data-v-88d65afc><div class="std-icon" data-v-88d65afc>`);
			_push(ssrRenderComponent(unref(ShieldCheck), {
				size: 28,
				"stroke-width": 1.8
			}, null, _parent));
			_push(`</div><h4 data-v-88d65afc>GrainPro Hermetic Packing</h4><p data-v-88d65afc>Green beans packaged in multi-layer hermetic bags to preserve moisture equilibrium and prevent ambient odor absorption.</p></div></div></div></div></section><section class="py-section bg-offwhite" data-v-88d65afc><div class="shell rd-grid" data-v-88d65afc><div data-v-88d65afc><span class="section-label" data-v-88d65afc>Research &amp; development</span><h2 class="section-title" data-v-88d65afc> Innovating for <em data-v-88d65afc>Better Coffee</em></h2><p class="section-subtitle" data-v-88d65afc>${ssrInterpolate(unref(researchDevelopment).lead)} ${ssrInterpolate(unref(researchDevelopment).text)}</p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn-primary",
				style: { "margin-top": "1.5rem" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-88d65afc${_scopeId}>Partner on Product Innovation</span>`);
						_push(ssrRenderComponent(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Partner on Product Innovation"), createVNode(unref(ArrowUpRight), {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="rd-card" data-v-88d65afc><div class="rd-icon" data-v-88d65afc>`);
			_push(ssrRenderComponent(unref(FlaskConical), {
				size: 28,
				"stroke-width": 1.8
			}, null, _parent));
			_push(`</div><h4 data-v-88d65afc>Our R&amp;D Focus</h4><ul class="rd-list" data-v-88d65afc><!--[-->`);
			ssrRenderList(unref(researchDevelopment).points, (point) => {
				_push(`<li data-v-88d65afc>${ssrInterpolate(point)}</li>`);
			});
			_push(`<!--]--></ul></div></div></section><section class="py-section bg-cream" data-v-88d65afc><div class="shell" data-v-88d65afc><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-88d65afc><span class="section-label" data-v-88d65afc>Target markets</span><h2 class="section-title" data-v-88d65afc> Markets We <em data-v-88d65afc>Serve</em></h2><p class="section-subtitle" data-v-88d65afc> From Ugandan cafés and regional buyers to roasters across three continents — building a loyal customer base for Ugandan coffee at every level. </p></div><div class="markets-grid" data-v-88d65afc><!--[-->`);
			ssrRenderList(unref(targetMarkets), (market) => {
				_push(`<div class="market-card" data-v-88d65afc><div class="market-icon" data-v-88d65afc>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(market.icon), {
					size: 26,
					"stroke-width": 2
				}, null), _parent);
				_push(`</div><h3 data-v-88d65afc>${ssrInterpolate(market.name)}</h3><p data-v-88d65afc>${ssrInterpolate(market.description)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
			_push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/pages/activities.vue
var _sfc_setup = activities_vue_vue_type_script_setup_true_lang_default.setup;
activities_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activities.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var activities_default = /*#__PURE__*/ _plugin_vue_export_helper_default(activities_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-88d65afc"]]);

export { activities_default as default };
//# sourceMappingURL=activities-Doe9DqLQ.mjs.map
