import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { C as CallToAction_default } from './CallToAction-DOCyRBmK.mjs';
import { e as socialCommitments, f as stats } from './site-_S4qsMiU.mjs';
import { P as ProjectsShowcase_default } from './ProjectsShowcase-DAvrtnig.mjs';
import { defineComponent, unref, createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { Leaf, Satellite, Users, Droplets } from '@lucide/vue';
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
import './nuxt-link-WAb99hsX.mjs';
import './SafeImage-Dg0xeSOY.mjs';

//#region app/components/StatsCounter.vue?vue&type=script&setup=true&lang.ts
var StatsCounter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "StatsCounter",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "stats-bar" }, _attrs))}><div class="shell"><div class="stats-grid"><!--[-->`);
			ssrRenderList(unref(stats), (stat) => {
				_push(`<div class="stat-item"><span class="stat-num">${ssrInterpolate(stat.num)}</span><span class="stat-label">${ssrInterpolate(stat.label)}</span><span class="stat-desc">${ssrInterpolate(stat.desc)}</span></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
});
//#endregion
//#region app/components/StatsCounter.vue
var _sfc_setup$1 = StatsCounter_vue_vue_type_script_setup_true_lang_default.setup;
StatsCounter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatsCounter.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var StatsCounter_default = Object.assign(StatsCounter_vue_vue_type_script_setup_true_lang_default, { __name: "StatsCounter" });
//#endregion
//#region app/pages/impact.vue?vue&type=script&setup=true&lang.ts
var impact_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "impact",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Sustainability & Community Impact · AFRICOFF Industries",
			description: "Discover AFRICOFF’s verifiable impact across Uganda: EUDR zero-deforestation compliance, shade-tree agroforestry, gender equity in coffee, and smallholder prosperity."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_StatsCounter = StatsCounter_default;
			const _component_ProjectsShowcase = ProjectsShowcase_default;
			const _component_CallToAction = CallToAction_default;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-7e5c8afd><section class="page-intro" data-v-7e5c8afd><div class="shell" data-v-7e5c8afd><div class="page-intro-inner" data-v-7e5c8afd><span class="section-label" data-v-7e5c8afd>Sustainability &amp; ESG</span><h1 data-v-7e5c8afd>Driving Climate Action &amp; <em data-v-7e5c8afd>Equitable Prosperity</em> in Uganda</h1><p data-v-7e5c8afd>Balancing commercial coffee excellence with genuine ecological regeneration, women farmer empowerment, and strict EUDR deforestation-free compliance.</p></div></div></section>`);
			_push(ssrRenderComponent(_component_StatsCounter, null, null, _parent));
			_push(`<section class="py-section-lg bg-offwhite" data-v-7e5c8afd><div class="shell" data-v-7e5c8afd><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "4rem" })}" data-v-7e5c8afd><span class="section-label" data-v-7e5c8afd>Strategic ESG Pillars</span><h2 class="section-title" data-v-7e5c8afd> Measurable Outcomes for <em data-v-7e5c8afd>People and Planet</em></h2><p class="section-subtitle" data-v-7e5c8afd> Our environmental and social governance framework aligns with UN Sustainable Development Goals (SDGs 1, 5, 8, 12, 13, and 15). </p></div><div class="impact-pillars-grid" data-v-7e5c8afd><div class="impact-pillar-card" data-v-7e5c8afd><div class="pillar-top-badge" data-v-7e5c8afd>`);
			_push(ssrRenderComponent(unref(Leaf), {
				size: 13,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` Climate &amp; Biodiversity</div><h3 data-v-7e5c8afd>Shade-Tree Agroforestry &amp; Carbon Insetting</h3><p data-v-7e5c8afd> We promote multi-strata shade canopies by distributing indigenous tree seedlings (such as Cordia africana, Albizia, and fruit varieties) to smallholders. This prevents soil erosion on steep slopes, preserves bird corridors, and sequesters atmospheric carbon directly at the farm level. </p><div class="impact-stat-pill" data-v-7e5c8afd><strong data-v-7e5c8afd>45,000+</strong> Indigenous Trees Planted </div></div><div class="impact-pillar-card" data-v-7e5c8afd><div class="pillar-top-badge" data-v-7e5c8afd>`);
			_push(ssrRenderComponent(unref(Satellite), {
				size: 13,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` Traceability &amp; Compliance</div><h3 data-v-7e5c8afd>100% Zero-Deforestation (EUDR) Verification</h3><p data-v-7e5c8afd> Our GIS mapping team surveys every farmer parcel to generate certified digital polygons. We cross-reference historical satellite imagery against the December 31, 2020 cutoff date to guarantee that not a single cherry is sourced from deforested land. </p><div class="impact-stat-pill" data-v-7e5c8afd><strong data-v-7e5c8afd>5,000+</strong> Farm Polygons Digitally Mapped </div></div><div class="impact-pillar-card" data-v-7e5c8afd><div class="pillar-top-badge" data-v-7e5c8afd>`);
			_push(ssrRenderComponent(unref(Users), {
				size: 13,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` Gender Equity</div><h3 data-v-7e5c8afd>Women in Coffee Leadership Initiative</h3><p data-v-7e5c8afd> Women perform the majority of farm labor yet historically receive less than 20% of agricultural proceeds. AFRICOFF guarantees direct bank/mobile-money payouts to female heads of household, supports female-led producer groups, and sponsors agronomy leadership academies. </p><div class="impact-stat-pill" data-v-7e5c8afd><strong data-v-7e5c8afd>40%+</strong> Women-Led Producer Groups </div></div><div class="impact-pillar-card" data-v-7e5c8afd><div class="pillar-top-badge" data-v-7e5c8afd>`);
			_push(ssrRenderComponent(unref(Droplets), {
				size: 13,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` Eco-Processing</div><h3 data-v-7e5c8afd>Water Conservation &amp; Eco-Pulping</h3><p data-v-7e5c8afd> Traditional wet mills consume up to 20 liters of fresh water per kilogram of green coffee. AFRICOFF installs modern Pinhalense and Penagos eco-pulpers that recirculate water, reducing consumption by 80% while treating effluents in biological vetiver grass ponds. </p><div class="impact-stat-pill" data-v-7e5c8afd><strong data-v-7e5c8afd>80%</strong> Fresh Water Reduction </div></div></div></div></section><section class="py-section bg-cream" data-v-7e5c8afd><div class="shell" data-v-7e5c8afd><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-7e5c8afd><span class="section-label" data-v-7e5c8afd>Social responsibility</span><h2 class="section-title" data-v-7e5c8afd> Commitments We <em data-v-7e5c8afd>Never Compromise</em></h2><p class="section-subtitle" data-v-7e5c8afd> We promote social responsibility and sustainability in every operation. These principles govern how we work with our employees, out-growers, and communities. </p></div><div class="commitments-grid" data-v-7e5c8afd><!--[-->`);
			ssrRenderList(unref(socialCommitments), (commitment) => {
				_push(`<div class="commitment-card" data-v-7e5c8afd><div class="commitment-icon" data-v-7e5c8afd>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(commitment.icon), {
					size: 26,
					"stroke-width": 2
				}, null), _parent);
				_push(`</div><h3 data-v-7e5c8afd>${ssrInterpolate(commitment.title)}</h3><p data-v-7e5c8afd>${ssrInterpolate(commitment.description)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
			_push(ssrRenderComponent(_component_ProjectsShowcase, null, null, _parent));
			_push(ssrRenderComponent(_component_CallToAction, {
				title: "Partner With Us on Transformative Agro-Forestry & Gender Programs",
				subtitle: "We collaborate with international development agencies, roasters, and carbon offset initiatives to co-finance scalable impact across Ugandan coffee communities."
			}, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/pages/impact.vue
var _sfc_setup = impact_vue_vue_type_script_setup_true_lang_default.setup;
impact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impact.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var impact_default = /*#__PURE__*/ _plugin_vue_export_helper_default(impact_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-7e5c8afd"]]);

export { impact_default as default };
//# sourceMappingURL=impact-g5kP0D78.mjs.map
