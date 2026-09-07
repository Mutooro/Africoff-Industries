import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { S as SafeImage_default } from './SafeImage-Dg0xeSOY.mjs';
import { C as CallToAction_default } from './CallToAction-DOCyRBmK.mjs';
import { p as products, h as farmServices, j as certifications } from './site-_S4qsMiU.mjs';
import { defineComponent, ref, computed, unref, withCtx, createVNode, resolveDynamicComponent, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { Coffee, ArrowUpRight, Package, Ship, Plane } from '@lucide/vue';
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

//#region app/pages/products.vue?vue&type=script&setup=true&lang.ts
var products_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "products",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Specialty Coffee Offerings and Green Bean Grades · AFRICOFF Industries",
			description: "Explore AFRICOFF’s premium Ugandan green coffee catalogue: Bugisu Washed Arabica AA/AB, Natural Drugar, Screen 18 Washed Robusta, and artisanal roasted selections."
		});
		const activeFilter = ref("All");
		const filteredProducts = computed(() => {
			if (activeFilter.value === "All") return products;
			return products.filter((p) => p.type === activeFilter.value);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_SafeImage = SafeImage_default;
			const _component_CallToAction = CallToAction_default;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-98942258><section class="page-intro" data-v-98942258><div class="shell" data-v-98942258><div class="page-intro-inner" data-v-98942258><span class="section-label" data-v-98942258>Coffee offerings</span><h1 data-v-98942258>Single-Origin Specialty Lots and <em data-v-98942258>High-Grade Robusta</em></h1><p data-v-98942258>Carefully harvested from Uganda&#39;s prime volcanic slopes and high-altitude mountain forests. Hand-sorted, cup-tested, and hermetically packaged for global export.</p></div></div></section><section class="py-section bg-offwhite" data-v-98942258><div class="shell" data-v-98942258><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "2.5rem" })}" data-v-98942258><span class="section-label" data-v-98942258>Export Catalogue</span><h2 class="section-title" data-v-98942258> Exceptional Terroirs, <em data-v-98942258>Distinct Sensory Profiles</em></h2><p class="section-subtitle" data-v-98942258> All lots are certified by the Uganda Coffee Development Authority (UCDA), defect-sorted, and available in GrainPro lined 60kg jute bags. </p></div><div class="service-filters" data-v-98942258><!--[-->`);
			ssrRenderList([
				"All",
				"Arabica",
				"Robusta",
				"Value-Added"
			], (cat) => {
				_push(`<button class="${ssrRenderClass([{ active: activeFilter.value === cat }, "filter-btn"])}" data-v-98942258>${ssrInterpolate(cat === "Value-Added" ? "Roasted and Value-Added" : cat)}</button>`);
			});
			_push(`<!--]--></div><div class="products-grid-catalog" data-v-98942258><!--[-->`);
			ssrRenderList(filteredProducts.value, (prod) => {
				_push(`<div class="product-catalog-card" data-v-98942258><div class="product-card-top" data-v-98942258><span class="prod-type-pill" data-v-98942258>${ssrInterpolate(prod.type)}</span><span class="prod-grade-pill" data-v-98942258>${ssrInterpolate(prod.grade)}</span></div><h3 data-v-98942258>${ssrInterpolate(prod.name)}</h3><p class="prod-desc" data-v-98942258>${ssrInterpolate(prod.description)}</p><div class="prod-spec-table" data-v-98942258><div class="spec-row" data-v-98942258><span class="spec-k" data-v-98942258>Origin:</span><span class="spec-v" data-v-98942258>${ssrInterpolate(prod.region)}</span></div><div class="spec-row" data-v-98942258><span class="spec-k" data-v-98942258>Altitude:</span><span class="spec-v" data-v-98942258>${ssrInterpolate(prod.altitude)}</span></div><div class="spec-row" data-v-98942258><span class="spec-k" data-v-98942258>Processing:</span><span class="spec-v" data-v-98942258>${ssrInterpolate(prod.process)}</span></div><div class="spec-row" data-v-98942258><span class="spec-k" data-v-98942258>Screen Size:</span><span class="spec-v" data-v-98942258>${ssrInterpolate(prod.screen)}</span></div></div><div class="cup-profile-box" data-v-98942258><span class="cup-label" data-v-98942258>Cup Sensory Notes:</span><div class="flavor-tags" data-v-98942258><!--[-->`);
				ssrRenderList(prod.cupProfile, (note) => {
					_push(`<span class="flavor-tag" data-v-98942258>`);
					_push(ssrRenderComponent(unref(Coffee), {
						size: 13,
						"stroke-width": 2.5
					}, null, _parent));
					_push(` ${ssrInterpolate(note)}</span>`);
				});
				_push(`<!--]--></div></div><div class="prod-card-bottom" data-v-98942258>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: `/contact?product=${encodeURIComponent(prod.name)}`,
					class: "btn-primary",
					style: {
						"width": "100%",
						"justify-content": "center"
					}
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<span data-v-98942258${_scopeId}>Request Sample / Spec Sheet</span>`);
							_push(ssrRenderComponent(unref(ArrowUpRight), {
								class: "btn-icon",
								size: 18,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
						} else return [createVNode("span", null, "Request Sample / Spec Sheet"), createVNode(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						})];
					}),
					_: 2
				}, _parent));
				_push(`</div></div>`);
			});
			_push(`<!--]--></div></div></section><section class="py-section bg-cream" data-v-98942258><div class="shell" data-v-98942258><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-98942258><span class="section-label" data-v-98942258>Farm services</span><h2 class="section-title" data-v-98942258> Beyond the Bean: <em data-v-98942258>Farm Services</em></h2><p class="section-subtitle" data-v-98942258> Alongside our coffee catalogue, we provide production-side services that keep quality high from the nursery to the harvest. </p></div><div class="farm-services-grid" data-v-98942258><!--[-->`);
			ssrRenderList(unref(farmServices), (service) => {
				_push(`<article class="farm-service-card" data-v-98942258><div class="farm-service-img" data-v-98942258>`);
				_push(ssrRenderComponent(_component_SafeImage, {
					src: service.image,
					alt: service.name,
					loading: "lazy"
				}, null, _parent));
				_push(`</div><div class="farm-service-body" data-v-98942258><div class="farm-service-icon" data-v-98942258>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), {
					size: 24,
					"stroke-width": 2
				}, null), _parent);
				_push(`</div><h3 data-v-98942258>${ssrInterpolate(service.name)}</h3><p class="farm-service-summary" data-v-98942258>${ssrInterpolate(service.summary)}</p><ul class="farm-service-points" data-v-98942258><!--[-->`);
				ssrRenderList(service.points, (point) => {
					_push(`<li data-v-98942258>${ssrInterpolate(point)}</li>`);
				});
				_push(`<!--]--></ul>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/contact",
					class: "text-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` Request service details <span data-v-98942258${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowUpRight), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode(" Request service details "), createVNode("span", null, [createVNode(unref(ArrowUpRight), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 2
				}, _parent));
				_push(`</div></article>`);
			});
			_push(`<!--]--></div></div></section><section class="py-section bg-forest" data-v-98942258><div class="shell" data-v-98942258><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-98942258><span class="section-label light" data-v-98942258>Packaging and Logistics</span><h2 class="section-title light" data-v-98942258> Export Standards and <em data-v-98942258>Quality Packaging</em></h2><p class="section-subtitle light" data-v-98942258> We ensure bean freshness and prevent ambient degradation during international ocean transit. </p></div><div class="export-specs-grid" data-v-98942258><div class="spec-box" data-v-98942258><div class="spec-box-icon" data-v-98942258>`);
			_push(ssrRenderComponent(unref(Package), {
				size: 26,
				"stroke-width": 1.8
			}, null, _parent));
			_push(`</div><h4 data-v-98942258>60kg GrainPro Hermetic Bags</h4><p data-v-98942258>Moisture-barrier high-density polyethylene liner bags inside natural jute to safeguard aromatics and prevent condensation.</p></div><div class="spec-box" data-v-98942258><div class="spec-box-icon" data-v-98942258>`);
			_push(ssrRenderComponent(unref(Ship), {
				size: 26,
				"stroke-width": 1.8
			}, null, _parent));
			_push(`</div><h4 data-v-98942258>Full Container Loads (FCL)</h4><p data-v-98942258>Standard 20ft dry containers holding 320 x 60kg bags (19.2 Metric Tons) with desiccants and craft paper lining.</p></div><div class="spec-box" data-v-98942258><div class="spec-box-icon" data-v-98942258>`);
			_push(ssrRenderComponent(unref(Plane), {
				size: 26,
				"stroke-width": 1.8
			}, null, _parent));
			_push(`</div><h4 data-v-98942258>Air Express Sample Service</h4><p data-v-98942258>300g to 1kg green coffee sample batches dispatched via DHL/FedEx worldwide within 48 hours of cupping confirmation.</p></div></div></div></section><section class="py-section bg-offwhite" data-v-98942258><div class="shell" data-v-98942258><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-98942258><span class="section-label" data-v-98942258>Certification and compliance</span><h2 class="section-title" data-v-98942258> Standards We Are <em data-v-98942258>Working Toward</em></h2><p class="section-subtitle" data-v-98942258> We are committed to complying with international standards and regulations. Certification programmes below are targeted and currently in progress across our operations. </p></div><div class="cert-grid" data-v-98942258><!--[-->`);
			ssrRenderList(unref(certifications), (cert) => {
				_push(`<article class="cert-card" data-v-98942258><div class="cert-icon" data-v-98942258>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(cert.icon), {
					size: 26,
					"stroke-width": 2
				}, null), _parent);
				_push(`</div><h3 data-v-98942258>${ssrInterpolate(cert.name)}</h3><p data-v-98942258>${ssrInterpolate(cert.description)}</p><span class="cert-status" data-v-98942258>${ssrInterpolate(cert.status)}</span></article>`);
			});
			_push(`<!--]--></div></div></section>`);
			_push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/pages/products.vue
var _sfc_setup = products_vue_vue_type_script_setup_true_lang_default.setup;
products_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var products_default = /*#__PURE__*/ _plugin_vue_export_helper_default(products_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-98942258"]]);

export { products_default as default };
//# sourceMappingURL=products-DIUldbjS.mjs.map
