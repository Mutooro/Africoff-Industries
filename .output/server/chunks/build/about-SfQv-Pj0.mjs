import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { S as SafeImage_default } from './SafeImage-Dg0xeSOY.mjs';
import { C as CallToAction_default } from './CallToAction-DOCyRBmK.mjs';
import { c as companyFacts, a as coreValues, t as teamMembers, i as industryMemberships } from './site-_S4qsMiU.mjs';
import { defineComponent, unref, withCtx, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { Globe, Target, Flag, ArrowRight } from '@lucide/vue';
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

//#region app/pages/about.vue?vue&type=script&setup=true&lang.ts
var about_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "about",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "About Us · AFRICOFF Industries (U) Limited",
			description: "Learn about AFRICOFF Industries: our origin story, vision, leadership, farm footprints in Mount Elgon and Rwenzori, and commitment to sustainable coffee processing in Uganda."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SafeImage = SafeImage_default;
			const _component_NuxtLink = NuxtLink;
			const _component_CallToAction = CallToAction_default;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-be030f1a><section class="page-intro" data-v-be030f1a><div class="shell" data-v-be030f1a><div class="page-intro-inner" data-v-be030f1a><span class="section-label" data-v-be030f1a>Who we are</span><h1 data-v-be030f1a>Building an Ethical, <em data-v-be030f1a>World-Class Coffee Future</em> in Uganda</h1><p data-v-be030f1a>Connecting smallholder farming communities with modern agro-processing technology, verified EUDR traceability, and global specialty markets.</p></div></div></section><section class="facts-strip" data-v-be030f1a><div class="shell facts-grid" data-v-be030f1a><!--[-->`);
			ssrRenderList(unref(companyFacts), (fact) => {
				_push(`<div class="fact-box" data-v-be030f1a><span class="fact-label" data-v-be030f1a>${ssrInterpolate(fact.label)}</span><span class="fact-value" data-v-be030f1a>${ssrInterpolate(fact.value)}</span></div>`);
			});
			_push(`<!--]--></div></section><section class="py-section bg-offwhite" data-v-be030f1a><div class="shell" data-v-be030f1a><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-be030f1a><span class="section-label" data-v-be030f1a>Our Guiding Purpose</span><h2 class="section-title" data-v-be030f1a> Driven by Quality, <em data-v-be030f1a>Sustained by Community</em></h2></div><div class="vision-mission-grid" data-v-be030f1a><div class="purpose-card vision-card" data-v-be030f1a><div class="purpose-icon" data-v-be030f1a>`);
			_push(ssrRenderComponent(unref(Globe), {
				size: 34,
				"stroke-width": 1.8
			}, null, _parent));
			_push(`</div><h3 data-v-be030f1a>Our Vision</h3><p data-v-be030f1a> To become East Africa&#39;s leading sustainable agribusiness enterprise, celebrated globally for pristine coffee quality, authentic deforestation-free traceability, and transformational prosperity for smallholder farming families. </p></div><div class="purpose-card mission-card" data-v-be030f1a><div class="purpose-icon" data-v-be030f1a>`);
			_push(ssrRenderComponent(unref(Target), {
				size: 34,
				"stroke-width": 1.8
			}, null, _parent));
			_push(`</div><h3 data-v-be030f1a>Our Mission</h3><p data-v-be030f1a> To bridge the gap between Ugandan coffee growers and the international market by deploying modern eco-processing technologies, transparent price incentives, regenerative agricultural education, and uncompromising quality assurance. </p></div></div></div></section><section class="py-section-lg bg-cream" data-v-be030f1a><div class="shell" data-v-be030f1a><div class="about-grid" data-v-be030f1a><div class="about-images" data-v-be030f1a>`);
			_push(ssrRenderComponent(_component_SafeImage, {
				src: "/assets/images/image3.jpg",
				alt: "Highland coffee plantation landscape",
				class: "about-img-main",
				loading: "lazy"
			}, null, _parent));
			_push(ssrRenderComponent(_component_SafeImage, {
				src: "/assets/images/women.jpeg",
				alt: "Farmer inspecting coffee harvest",
				class: "about-img-accent",
				loading: "lazy"
			}, null, _parent));
			_push(`<div class="about-badge-floating" data-v-be030f1a><div class="badge-icon" data-v-be030f1a>`);
			_push(ssrRenderComponent(unref(Flag), {
				size: 22,
				"stroke-width": 2
			}, null, _parent));
			_push(`</div><div data-v-be030f1a><div class="badge-text-title" data-v-be030f1a>Footprint</div><div class="badge-text-val" data-v-be030f1a>Elgon, Rwenzori &amp; Central</div></div></div></div><div data-v-be030f1a><span class="section-label" data-v-be030f1a>Our Heritage &amp; Origins</span><h2 class="section-title" data-v-be030f1a> Rooted in the Rich Soils of <em data-v-be030f1a>Uganda’s Highlands</em></h2><p class="lead" style="${ssrRenderStyle({ "margin-bottom": "1.25rem" })}" data-v-be030f1a> Uganda is blessed with some of the world&#39;s most exceptional coffee-growing microclimates, from the mist-covered volcanic slopes of Mount Elgon to the snowcapped Rwenzori mountains and lush Lake Victoria basin. </p><p style="${ssrRenderStyle({ "margin-bottom": "1.25rem" })}" data-v-be030f1a> AFRICOFF Industries (U) Limited was founded in 2021 and incorporated in 2025 under the Companies Act of Uganda. From our headquarters in Kampala, we specialise in the production, processing, value addition, and export of high-quality coffee and other agricultural products. </p><p style="${ssrRenderStyle({ "margin-bottom": "1.25rem" })}" data-v-be030f1a> AFRICOFF was established to overcome traditional supply chain fragmentation. By operating decentralized washing stations and central milling hubs, we eliminate exploitative middlemen and preserve bean freshness straight from harvest. </p><p style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-be030f1a> Today, we serve as a trusted bridge for over 5,000 smallholders, ensuring every bag exported meets rigorous international standards while rewarding growers with transparent living premiums. </p>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/activities",
				class: "btn-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-be030f1a${_scopeId}>Explore Our Operations</span>`);
						_push(ssrRenderComponent(unref(ArrowRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Explore Our Operations"), createVNode(unref(ArrowRight), {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></section><section class="py-section bg-offwhite" data-v-be030f1a><div class="shell" data-v-be030f1a><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-be030f1a><span class="section-label" data-v-be030f1a>Foundational Principles</span><h2 class="section-title" data-v-be030f1a> The Values That <em data-v-be030f1a>Guide Every Harvest</em></h2><p class="section-subtitle" data-v-be030f1a> Integrity, stewardship, and equity are embedded across every level of our operations and farmer partnerships. </p></div><div class="values-grid" data-v-be030f1a><!--[-->`);
			ssrRenderList(unref(coreValues), (val, index) => {
				_push(`<div class="val-card" data-v-be030f1a><div class="val-num" data-v-be030f1a>0${ssrInterpolate(index + 1)}</div><h3 data-v-be030f1a>${ssrInterpolate(val.title)}</h3><p data-v-be030f1a>${ssrInterpolate(val.desc)}</p></div>`);
			});
			_push(`<!--]--></div></div></section><section id="team" class="py-section bg-cream" data-v-be030f1a><div class="shell" data-v-be030f1a><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-be030f1a><span class="section-label" data-v-be030f1a>Leadership &amp; Governance</span><h2 class="section-title" data-v-be030f1a> The People Behind <em data-v-be030f1a>Every Harvest</em></h2><p class="section-subtitle team-subtitle" data-v-be030f1a> Behind AFRICOFF’s growth is a dedicated leadership team committed to ethical sourcing, financial integrity, and operational excellence — the people who turn Uganda’s coffee promise into a dependable supply for partners worldwide. </p></div><div class="team-grid" data-v-be030f1a><!--[-->`);
			ssrRenderList(unref(teamMembers), (member) => {
				_push(`<article class="team-card" data-v-be030f1a><div class="team-avatar" aria-hidden="true" data-v-be030f1a><span class="team-initials" data-v-be030f1a>${ssrInterpolate(member.initials)}</span></div><h3 class="team-name" data-v-be030f1a>${ssrInterpolate(member.name)}</h3><span class="team-role" data-v-be030f1a>${ssrInterpolate(member.role)}</span><p class="team-bio" data-v-be030f1a>${ssrInterpolate(member.bio)}</p>`);
				if (member.pending) _push(`<span class="team-pending" data-v-be030f1a>Profile pending publication</span>`);
				else _push(`<!---->`);
				_push(`</article>`);
			});
			_push(`<!--]--></div></div></section><section class="py-section bg-forest" data-v-be030f1a><div class="shell" data-v-be030f1a><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-be030f1a><span class="section-label light" data-v-be030f1a>Operational Footprint</span><h2 class="section-title light" data-v-be030f1a> Where We Grow, <em data-v-be030f1a>Process &amp; Flourish</em></h2><p class="section-subtitle light" data-v-be030f1a> Strategically situated across Uganda&#39;s prime Arabica and Robusta cultivation corridors. </p></div><div class="regions-grid" data-v-be030f1a><div class="region-box" data-v-be030f1a><span class="region-badge" data-v-be030f1a>Eastern Region</span><h3 data-v-be030f1a>Mount Elgon Hub (Mbale)</h3><p class="region-elev" data-v-be030f1a>Altitude: 1,600m - 2,200m ASL</p><p data-v-be030f1a>Volcanic soils producing world-renowned washed Bugisu Arabica (Grades AA, AB, PB) with vibrant citric acidity and stone fruit complexity.</p></div><div class="region-box" data-v-be030f1a><span class="region-badge" data-v-be030f1a>Western Region</span><h3 data-v-be030f1a>Rwenzori Foothills (Kasese)</h3><p class="region-elev" data-v-be030f1a>Altitude: 1,400m - 1,900m ASL</p><p data-v-be030f1a>Glacial-fed mountain streams nurturing sun-dried Natural Drugar and washed specialty micro-lots known for wild berry richness.</p></div><div class="region-box" data-v-be030f1a><span class="region-badge" data-v-be030f1a>Central Region</span><h3 data-v-be030f1a>Kampala HQ &amp; Milling Facility</h3><p class="region-elev" data-v-be030f1a>Central Export Logistics Hub</p><p data-v-be030f1a>Centralized modern dry milling, optical color sorting, cupping laboratory, artisanal roasting plant, and export container consolidation.</p></div></div></div></section><section class="py-section bg-offwhite" data-v-be030f1a><div class="shell" data-v-be030f1a><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "3.5rem" })}" data-v-be030f1a><span class="section-label" data-v-be030f1a>Partnerships &amp; collaborations</span><h2 class="section-title" data-v-be030f1a> Strengthened by <em data-v-be030f1a>Industry Partnerships</em></h2><p class="section-subtitle" data-v-be030f1a> We foster strategic partnerships with farmers, suppliers, buyers, and development organisations — and are proud members of Uganda&#39;s leading industry associations. </p></div><div class="memberships-grid" data-v-be030f1a><!--[-->`);
			ssrRenderList(unref(industryMemberships), (org) => {
				_push(`<article class="membership-card" data-v-be030f1a><div class="membership-icon" data-v-be030f1a>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(org.icon), {
					size: 26,
					"stroke-width": 2
				}, null), _parent);
				_push(`</div><h3 data-v-be030f1a>${ssrInterpolate(org.name)}</h3><p data-v-be030f1a>${ssrInterpolate(org.description)}</p></article>`);
			});
			_push(`<!--]--></div></div></section>`);
			_push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region app/pages/about.vue
var _sfc_setup = about_vue_vue_type_script_setup_true_lang_default.setup;
about_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about_default = /*#__PURE__*/ _plugin_vue_export_helper_default(about_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-be030f1a"]]);

export { about_default as default };
//# sourceMappingURL=about-SfQv-Pj0.mjs.map
