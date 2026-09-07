import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { C as CallToAction_default } from './CallToAction-DOCyRBmK.mjs';
import { a as coreValues, b as activities, k as strategicObjectives, l as faqs } from './site-_S4qsMiU.mjs';
import { P as ProjectsShowcase_default } from './ProjectsShowcase-DAvrtnig.mjs';
import { defineComponent, unref, withCtx, createVNode, createTextVNode, ref, computed, mergeProps, toDisplayString, resolveDynamicComponent, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { Coffee, Check, ArrowRight, ArrowUpRight, Lock, RefreshCw, ChevronDown } from '@lucide/vue';
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
import 'vue-router';
import 'unhead/plugins';
import 'unhead/utils';
import './SafeImage-Dg0xeSOY.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region app/components/HomeHero.vue?vue&type=script&setup=true&lang.ts
var HomeHero_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "HomeHero",
	__ssrInlineRender: true,
	props: {
		badgeText: { default: "Sustainable Coffee Value Chains · Uganda" },
		titlePrefix: { default: "Exceptional" },
		rotatingWords: { default: () => [
			"Ugandan Coffee",
			"Arabica & Robusta",
			"Specialty Lots",
			"Highland Harvests"
		] },
		titleSuffix: { default: "Built for a Sustainable Future." },
		description: { default: "From smallholder farms to global markets, AFRICOFF delivers traceable, specialty-grade coffee that creates lasting value for growers and buyers alike." },
		primaryBtnText: { default: "Explore Our Coffee" },
		primaryBtnLink: { default: "/products" },
		secondaryBtnText: { default: "Our Out-Growers" },
		secondaryBtnLink: { default: "/out-growers" },
		typingSpeed: { default: 90 },
		deletingSpeed: { default: 45 },
		pauseDuration: { default: 2200 }
	},
	setup(__props) {
		const props = __props;
		const displayText = ref("");
		const currentWordIndex = ref(0);
		ref(false);
		const isPaused = ref(false);
		computed(() => {
			return props.rotatingWords[currentWordIndex.value] || "";
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({
				class: "hh-hero",
				"aria-label": "AFRICOFF Home Hero"
			}, _attrs))} data-v-ec6a66e3><div class="hh-card" data-v-ec6a66e3><div class="hh-ambient" aria-hidden="true" data-v-ec6a66e3><div class="glow-orb glow-gold" data-v-ec6a66e3></div><div class="glow-orb glow-forest" data-v-ec6a66e3></div><div class="grid-overlay" data-v-ec6a66e3></div></div><div class="hh-grid" data-v-ec6a66e3><div class="hh-text" data-v-ec6a66e3>`);
			if (__props.badgeText) _push(`<div class="hh-badge" data-v-ec6a66e3><span class="pulse-dot-gold" aria-hidden="true" data-v-ec6a66e3></span><span class="badge-text" data-v-ec6a66e3>${ssrInterpolate(__props.badgeText)}</span></div>`);
			else _push(`<!---->`);
			_push(`<h1 class="hh-title" data-v-ec6a66e3><span class="title-prefix" data-v-ec6a66e3>${ssrInterpolate(__props.titlePrefix)}</span><span class="typewriter-box" data-v-ec6a66e3><span class="dynamic-highlight" data-v-ec6a66e3>${ssrInterpolate(displayText.value)}</span><span class="${ssrRenderClass([{ "caret-paused": isPaused.value }, "dynamic-caret"])}" aria-hidden="true" data-v-ec6a66e3></span></span><br data-v-ec6a66e3><span class="title-suffix" data-v-ec6a66e3>${ssrInterpolate(__props.titleSuffix)}</span></h1><p class="hh-subtitle" data-v-ec6a66e3>${ssrInterpolate(__props.description)}</p><div class="hh-actions" data-v-ec6a66e3>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: __props.primaryBtnLink,
				class: "hh-btn-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-ec6a66e3${_scopeId}>${ssrInterpolate(__props.primaryBtnText)}</span>`);
						_push(ssrRenderComponent(unref(ArrowUpRight), {
							class: "btn-arrow",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, toDisplayString(__props.primaryBtnText), 1), createVNode(unref(ArrowUpRight), {
						class: "btn-arrow",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: __props.secondaryBtnLink,
				class: "hh-btn-secondary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span data-v-ec6a66e3${_scopeId}>${ssrInterpolate(__props.secondaryBtnText)}</span>`);
					else return [createVNode("span", null, toDisplayString(__props.secondaryBtnText), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="hh-visual" aria-hidden="true" data-v-ec6a66e3><div class="trace-card-frame" data-v-ec6a66e3><div class="trace-header" data-v-ec6a66e3><div class="browser-dots" data-v-ec6a66e3><span class="dot dot-red" data-v-ec6a66e3></span><span class="dot dot-yellow" data-v-ec6a66e3></span><span class="dot dot-green" data-v-ec6a66e3></span></div><div class="browser-address" data-v-ec6a66e3>`);
			_push(ssrRenderComponent(unref(Lock), {
				size: 13,
				"stroke-width": 2
			}, null, _parent));
			_push(`<span data-v-ec6a66e3>africoff.industries/traceability</span></div><div class="trace-status-chip" data-v-ec6a66e3><span class="chip-dot" data-v-ec6a66e3></span><span data-v-ec6a66e3>EUDR VERIFIED</span></div></div><div class="trace-screen" data-v-ec6a66e3><div class="trace-metrics" data-v-ec6a66e3><div class="metric-card" data-v-ec6a66e3><span class="metric-label" data-v-ec6a66e3>SCA Cup Score</span><div class="metric-val" data-v-ec6a66e3>86.5 <span class="trend-up" data-v-ec6a66e3>↑ 2 pts</span></div></div><div class="metric-card" data-v-ec6a66e3><span class="metric-label" data-v-ec6a66e3>Active Farmers</span><div class="metric-val" data-v-ec6a66e3>5,000+ <span class="trend-up" data-v-ec6a66e3>↑ 12%</span></div></div></div><div class="lot-stream" data-v-ec6a66e3><div class="lot-step active-step" data-v-ec6a66e3><div class="step-badge" data-v-ec6a66e3>01</div><div class="step-info" data-v-ec6a66e3><h4 data-v-ec6a66e3>Cherry Intake</h4><p data-v-ec6a66e3>Mount Elgon lot received &amp; weighed</p></div><span class="step-status" data-v-ec6a66e3>Verified</span></div><div class="lot-connector" data-v-ec6a66e3></div><div class="lot-step processing-step" data-v-ec6a66e3><div class="step-badge" data-v-ec6a66e3>02</div><div class="step-info" data-v-ec6a66e3><h4 data-v-ec6a66e3>Quality Analysis</h4><p data-v-ec6a66e3>Cupping &amp; grading in progress</p></div><span class="step-status running" data-v-ec6a66e3>86.5 SCA</span></div><div class="lot-connector" data-v-ec6a66e3></div><div class="lot-step" data-v-ec6a66e3><div class="step-badge" data-v-ec6a66e3>03</div><div class="step-info" data-v-ec6a66e3><h4 data-v-ec6a66e3>Export Dispatch</h4><p data-v-ec6a66e3>GeoJSON docs &amp; due-diligence filed</p></div><span class="step-status queued" data-v-ec6a66e3>Scheduled</span></div></div><div class="trace-pill" data-v-ec6a66e3><span class="pill-dot" data-v-ec6a66e3></span><span data-v-ec6a66e3>1,847 farm polygons verified this season</span></div></div></div></div></div></div></section>`);
		};
	}
});
//#endregion
//#region app/components/HomeHero.vue
var _sfc_setup$4 = HomeHero_vue_vue_type_script_setup_true_lang_default.setup;
HomeHero_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeHero.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var HomeHero_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(HomeHero_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ec6a66e3"]]), { __name: "HomeHero" });
//#endregion
//#region app/components/ServicesGrid.vue?vue&type=script&setup=true&lang.ts
var ServicesGrid_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ServicesGrid",
	__ssrInlineRender: true,
	setup(__props) {
		const activeFilter = ref("all");
		const flippedCard = ref(null);
		const filters = [
			{
				id: "all",
				label: "All Operations"
			},
			{
				id: "farming",
				label: "Farming & Out-Growers"
			},
			{
				id: "processing",
				label: "Wet & Dry Milling"
			},
			{
				id: "value-addition",
				label: "Value Addition & Roast"
			},
			{
				id: "traceability",
				label: "EUDR & Traceability"
			},
			{
				id: "export",
				label: "Global Logistics"
			},
			{
				id: "trading",
				label: "Buying & Selling"
			},
			{
				id: "domestic",
				label: "Local Market"
			}
		];
		const filteredActivities = computed(() => {
			if (activeFilter.value === "all") return activities;
			return activities.filter((act) => act.category === activeFilter.value);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "services",
				class: "py-section bg-offwhite"
			}, _attrs))}><div class="shell"><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "2.5rem" })}"><span class="section-label">Integrated Agro-Processing</span><h2 class="section-title"> Excellence Across Every Node of the <em>Coffee Value Chain</em></h2><p class="section-subtitle"> From high-altitude shade farming and precision eco-milling to digital EUDR traceability and direct trade logistics. </p></div><div class="service-filters"><!--[-->`);
			ssrRenderList(filters, (filter) => {
				_push(`<button class="${ssrRenderClass([{ active: activeFilter.value === filter.id }, "filter-btn"])}">${ssrInterpolate(filter.label)}</button>`);
			});
			_push(`<!--]--></div><div class="services-grid"><!--[-->`);
			ssrRenderList(filteredActivities.value, (activity) => {
				_push(`<div class="service-card-wrap"><div class="${ssrRenderClass([{ flipped: flippedCard.value === activity.id }, "service-card-inner"])}"><div class="card-front"><div><div class="card-front-top"><span class="service-number">${ssrInterpolate(activity.number)}</span><div class="service-icon-box">`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(activity.icon), {
					size: 26,
					"stroke-width": 2
				}, null), _parent);
				_push(`</div></div><h3>${ssrInterpolate(activity.title)}</h3><p>${ssrInterpolate(activity.shortDesc)}</p></div><div class="card-hint"><span>Tap or click to explore specs</span>`);
				_push(ssrRenderComponent(unref(RefreshCw), {
					size: 14,
					"stroke-width": 2.5
				}, null, _parent));
				_push(`</div></div><div class="card-back"><div><div class="card-front-top"><span class="service-number" style="${ssrRenderStyle({ "color": "var(--gold-light)" })}">${ssrInterpolate(activity.number)}</span><div class="service-icon-box" style="${ssrRenderStyle({
					"background": "rgba(255, 255, 255, 0.12)",
					"color": "#fff"
				})}">`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(activity.icon), {
					size: 26,
					"stroke-width": 2
				}, null), _parent);
				_push(`</div></div><h3>${ssrInterpolate(activity.title)}</h3><ul class="card-back-features"><!--[-->`);
				ssrRenderList(activity.features, (feat) => {
					_push(`<li>${ssrInterpolate(feat)}</li>`);
				});
				_push(`<!--]--></ul></div><div class="card-back-cta">`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/activities",
					class: "text-link light"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` View full operational process <span${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowRight), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode(" View full operational process "), createVNode("span", null, [createVNode(unref(ArrowRight), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 2
				}, _parent));
				_push(`</div></div></div></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
});
//#endregion
//#region app/components/ServicesGrid.vue
var _sfc_setup$3 = ServicesGrid_vue_vue_type_script_setup_true_lang_default.setup;
ServicesGrid_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServicesGrid.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var ServicesGrid_default = Object.assign(ServicesGrid_vue_vue_type_script_setup_true_lang_default, { __name: "ServicesGrid" });
//#endregion
//#region app/components/ObjectivesSection.vue?vue&type=script&setup=true&lang.ts
var ObjectivesSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ObjectivesSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-section bg-offwhite" }, _attrs))}><div class="shell"><div class="objectives-grid"><div><span class="section-label">Strategic Roadmap</span><h2 class="section-title"> Our Commitment to a Resilient, <em>Inclusive Coffee Economy</em></h2><p class="lead" style="${ssrRenderStyle({ "margin-bottom": "1.5rem" })}"> AFRICOFF operates on foundational pillars that unite commercial viability with social justice and ecological protection across Uganda. </p><p style="${ssrRenderStyle({ "margin-bottom": "2rem" })}"> By integrating smallholders directly into the high-value specialty export supply chain, we deliver tangible benefits from soil to international cups. </p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/about",
				class: "btn-outline-dark"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span${_scopeId}>Learn About Our Mission</span>`);
						_push(ssrRenderComponent(unref(ArrowRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Learn About Our Mission"), createVNode(unref(ArrowRight), {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="obj-list"><!--[-->`);
			ssrRenderList(unref(strategicObjectives), (obj) => {
				_push(`<div class="obj-item"><div class="obj-num">${ssrInterpolate(obj.num)}</div><h4>${ssrInterpolate(obj.title)}</h4><p>${ssrInterpolate(obj.text)}</p></div>`);
			});
			_push(`<!--]--></div></div></div></section>`);
		};
	}
});
//#endregion
//#region app/components/ObjectivesSection.vue
var _sfc_setup$2 = ObjectivesSection_vue_vue_type_script_setup_true_lang_default.setup;
ObjectivesSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ObjectivesSection.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ObjectivesSection_default = Object.assign(ObjectivesSection_vue_vue_type_script_setup_true_lang_default, { __name: "ObjectivesSection" });
//#endregion
//#region \0virtual:public?%2Fassets%2Fimages%2Fcoffee-cup.jpg
var _virtual_public__2Fassets_2Fimages_2Fcoffee_cup_default = publicAssetsURL("/assets/images/coffee-cup.jpg");
//#endregion
//#region app/components/FaqSection.vue?vue&type=script&setup=true&lang.ts
var FaqSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "FaqSection",
	__ssrInlineRender: true,
	setup(__props) {
		const openIndex = ref(0);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-section bg-cream" }, _attrs))}><div class="shell"><div class="faq-grid"><div class="faq-image-box"><img${ssrRenderAttr("src", _virtual_public__2Fassets_2Fimages_2Fcoffee_cup_default)} alt="Coffee cherries harvesting" loading="lazy"><div class="faq-image-caption"><h4>Direct Sourcing &amp; Inquiries</h4><p>Have questions regarding origin visits, micro-lot cupping samples, or out-grower enrollment? Our trade team is here to assist.</p></div></div><div><span class="section-label">Frequently Asked Questions</span><h2 class="section-title"> Answers on Sourcing, Traceability &amp; <em>Partnership</em></h2><p class="section-subtitle" style="${ssrRenderStyle({ "margin-bottom": "2rem" })}"> Common inquiries from international coffee buyers, roasters, out-grower farmers, and development partners. </p><div class="accordion-list"><!--[-->`);
			ssrRenderList(unref(faqs), (faq, index) => {
				_push(`<div class="${ssrRenderClass([{ active: openIndex.value === index }, "accordion-item"])}"><div class="accordion-head"><h4>${ssrInterpolate(faq.question)}</h4><div class="accordion-icon">`);
				_push(ssrRenderComponent(unref(ChevronDown), {
					size: 18,
					"stroke-width": 2.5
				}, null, _parent));
				_push(`</div></div><div class="accordion-body" style="${ssrRenderStyle(openIndex.value === index ? null : { display: "none" })}"><p>${ssrInterpolate(faq.answer)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></div></div></section>`);
		};
	}
});
//#endregion
//#region app/components/FaqSection.vue
var _sfc_setup$1 = FaqSection_vue_vue_type_script_setup_true_lang_default.setup;
FaqSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqSection.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var FaqSection_default = Object.assign(FaqSection_vue_vue_type_script_setup_true_lang_default, { __name: "FaqSection" });
//#endregion
//#region \0virtual:public?%2Fassets%2Fimages%2F001.jpg
var _virtual_public__2Fassets_2Fimages_2F001_default = publicAssetsURL("/assets/images/001.jpg");
//#endregion
//#region \0virtual:public?%2Fassets%2Fimages%2F1.jpg
var _virtual_public__2Fassets_2Fimages_2F1_default = publicAssetsURL("/assets/images/1.jpg");
//#endregion
//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "AFRICOFF Industries — Sustainable Coffee Value Chains in Uganda",
			description: "AFRICOFF Industries connects Ugandan coffee smallholders with modern agro-processing, EUDR-compliant polygon traceability, and premium global markets."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_HomeHero = HomeHero_default;
			const _component_NuxtLink = NuxtLink;
			const _component_ServicesGrid = ServicesGrid_default;
			const _component_ProjectsShowcase = ProjectsShowcase_default;
			const _component_ObjectivesSection = ObjectivesSection_default;
			const _component_FaqSection = FaqSection_default;
			const _component_CallToAction = CallToAction_default;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-19b7ffef>`);
			_push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
			_push(`<section id="about" class="py-section-sm bg-offwhite" data-v-19b7ffef><div class="shell" data-v-19b7ffef><div class="about-grid" data-v-19b7ffef><div class="about-images" data-v-19b7ffef><img${ssrRenderAttr("src", _virtual_public__2Fassets_2Fimages_2F001_default)} alt="Handpicking ripe coffee cherries" class="about-img-main" loading="lazy" data-v-19b7ffef><img${ssrRenderAttr("src", _virtual_public__2Fassets_2Fimages_2F1_default)} alt="Raised drying beds in Uganda" class="about-img-accent" loading="lazy" data-v-19b7ffef><div class="about-badge-floating" data-v-19b7ffef><div class="badge-icon" data-v-19b7ffef>`);
			_push(ssrRenderComponent(unref(Coffee), {
				size: 22,
				"stroke-width": 2
			}, null, _parent));
			_push(`</div><div data-v-19b7ffef><div class="badge-text-title" data-v-19b7ffef>Specialty Origin</div><div class="badge-text-val" data-v-19b7ffef>Mount Elgon &amp; Rwenzori</div></div></div></div><div class="about-text-col" data-v-19b7ffef><span class="section-label" data-v-19b7ffef>About AFRICOFF Industries</span><h3 class="section-title" data-v-19b7ffef> Pioneering Modern Agribusiness and <em data-v-19b7ffef>Farmer Prosperity in Uganda</em></h3><p class="lead" style="${ssrRenderStyle({ "margin-bottom": "1.25rem" })}" data-v-19b7ffef> AFRICOFF Industries (U) Limited is an integrated coffee processing and export enterprise committed to creating ethical, sustainable value chains from cherry to cup. </p><p style="${ssrRenderStyle({ "margin-bottom": "1.75rem" })}" data-v-19b7ffef> Working directly with farming communities in Uganda&#39;s renowned high-altitude regions, we provide fair-price off-take contracts, climate-smart agronomy training, and precision wet and dry milling to deliver exceptional coffee beans to the world market. </p><div style="${ssrRenderStyle({
				"display": "flex",
				"flex-wrap": "wrap",
				"gap": "0.65rem",
				"margin-bottom": "2.2rem"
			})}" data-v-19b7ffef><!--[-->`);
			ssrRenderList(unref(coreValues).slice(0, 4), (val) => {
				_push(`<span class="value-pill" data-v-19b7ffef>`);
				_push(ssrRenderComponent(unref(Check), {
					size: 13,
					"stroke-width": 3
				}, null, _parent));
				_push(` ${ssrInterpolate(val.title)}</span>`);
			});
			_push(`<!--]--></div><div style="${ssrRenderStyle({
				"display": "flex",
				"gap": "1.25rem",
				"align-items": "center",
				"flex-wrap": "wrap"
			})}" data-v-19b7ffef>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/about",
				class: "btn-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-19b7ffef${_scopeId}>Our Story &amp; Mission</span>`);
						_push(ssrRenderComponent(unref(ArrowRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Our Story & Mission"), createVNode(unref(ArrowRight), {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/out-growers",
				class: "text-link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(` Smallholder impact <span data-v-19b7ffef${_scopeId}>`);
						_push(ssrRenderComponent(unref(ArrowRight), {
							size: 16,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
						_push(`</span>`);
					} else return [createTextVNode(" Smallholder impact "), createVNode("span", null, [createVNode(unref(ArrowRight), {
						size: 16,
						"stroke-width": 2.5
					})])];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></div></section>`);
			_push(ssrRenderComponent(_component_ServicesGrid, null, null, _parent));
			_push(`<section class="py-section bg-forest" data-v-19b7ffef><div class="shell" data-v-19b7ffef><div class="eudr-spotlight-grid" data-v-19b7ffef><div data-v-19b7ffef><span class="section-label light" data-v-19b7ffef>Regulatory &amp; Climate Leadership</span><p class="section-subtitle light" style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-19b7ffef> In strict adherence to the European Union Deforestation Regulation (EUDR), AFRICOFF maps every farm polygon using high-precision GIS satellite systems to ensure zero deforestation after December 31, 2020. </p><div class="eudr-points" data-v-19b7ffef><div class="eudr-point" data-v-19b7ffef><div class="point-num" data-v-19b7ffef>01</div><div data-v-19b7ffef><h4 data-v-19b7ffef>GPS Polygon Boundary Surveys</h4><p data-v-19b7ffef>Every smallholder farm is digitally mapped and recorded into our centralized traceability ledger.</p></div></div><div class="eudr-point" data-v-19b7ffef><div class="point-num" data-v-19b7ffef>02</div><div data-v-19b7ffef><h4 data-v-19b7ffef>Historical Satellite Risk Verification</h4><p data-v-19b7ffef>Continuous deforestation risk checks verified against European Union observatory reference data.</p></div></div><div class="eudr-point" data-v-19b7ffef><div class="point-num" data-v-19b7ffef>03</div><div data-v-19b7ffef><h4 data-v-19b7ffef>Container Due-Diligence Passports</h4><p data-v-19b7ffef>Complete export documentation including GeoJSON lot coordinates and verifiable farmer IDs.</p></div></div></div><div style="${ssrRenderStyle({ "margin-top": "2.5rem" })}" data-v-19b7ffef>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/activities",
				class: "btn-gold"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-19b7ffef${_scopeId}>Explore EUDR Architecture</span>`);
						_push(ssrRenderComponent(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Explore EUDR Architecture"), createVNode(unref(ArrowUpRight), {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="eudr-card-visual" data-v-19b7ffef><div class="visual-glass-card" data-v-19b7ffef><div class="card-status-pill" data-v-19b7ffef><span class="pulse-dot" style="${ssrRenderStyle({
				"background": "var(--sage)",
				"box-shadow": "0 0 8px var(--sage)"
			})}" data-v-19b7ffef></span><span data-v-19b7ffef>TRACEABILITY SYSTEM ACTIVE</span></div><h3 data-v-19b7ffef>Digital Lot Certificate #UG-ELG-2026</h3><div class="lot-meta-grid" data-v-19b7ffef><div data-v-19b7ffef><span class="meta-label" data-v-19b7ffef>Origin:</span><span class="meta-val" data-v-19b7ffef>Mount Elgon, Uganda</span></div><div data-v-19b7ffef><span class="meta-label" data-v-19b7ffef>Altitude:</span><span class="meta-val" data-v-19b7ffef>1,850m ASL</span></div><div data-v-19b7ffef><span class="meta-label" data-v-19b7ffef>Variety:</span><span class="meta-val" data-v-19b7ffef>SL-14 / SL-28 Arabica</span></div><div data-v-19b7ffef><span class="meta-label" data-v-19b7ffef>Deforestation Risk:</span><span class="meta-val" style="${ssrRenderStyle({ "color": "var(--sage-light)" })}" data-v-19b7ffef>0.00% (Compliant)</span></div></div><div class="polygon-visual-mock" data-v-19b7ffef><div class="map-grid-line" data-v-19b7ffef></div><div class="map-polygon" data-v-19b7ffef></div><span class="polygon-tag" data-v-19b7ffef>GPS Polygon Verified</span></div></div></div></div></div></section>`);
			_push(ssrRenderComponent(_component_ProjectsShowcase, null, null, _parent));
			_push(ssrRenderComponent(_component_ObjectivesSection, null, null, _parent));
			_push(ssrRenderComponent(_component_FaqSection, null, null, _parent));
			_push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = /*#__PURE__*/ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-19b7ffef"]]);

export { pages_default as default };
//# sourceMappingURL=pages-Bk-hxeVm.mjs.map
