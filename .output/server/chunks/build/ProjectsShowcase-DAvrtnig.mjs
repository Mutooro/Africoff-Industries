import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { S as SafeImage_default } from './SafeImage-Dg0xeSOY.mjs';
import { m as projects } from './site-_S4qsMiU.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowRight } from '@lucide/vue';

//#region app/components/ProjectsShowcase.vue?vue&type=script&setup=true&lang.ts
var ProjectsShowcase_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ProjectsShowcase",
	__ssrInlineRender: true,
	setup(__props) {
		const activeCategory = ref("All");
		const categories = [
			"All",
			"Quality",
			"Empowerment",
			"Climate",
			"Traceability"
		];
		const filteredProjects = computed(() => {
			if (activeCategory.value === "All") return projects;
			return projects.filter((p) => p.category === activeCategory.value);
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SafeImage = SafeImage_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-section bg-cream" }, _attrs))}><div class="shell"><div class="center-text" style="${ssrRenderStyle({ "margin-bottom": "2.5rem" })}"><span class="section-label">Proven Impact &amp; Initiatives</span><h2 class="section-title"> Transforming Uganda’s Coffee Landscape <em>Through Action</em></h2><p class="section-subtitle"> Explore our strategic field programs elevating bean quality, empowering female farmers, and safeguarding biodiversity. </p></div><div class="service-filters"><!--[-->`);
			ssrRenderList(categories, (cat) => {
				_push(`<button class="${ssrRenderClass([{ active: activeCategory.value === cat }, "filter-btn"])}">${ssrInterpolate(cat)}</button>`);
			});
			_push(`<!--]--></div><div class="projects-grid"><!--[-->`);
			ssrRenderList(filteredProjects.value, (proj) => {
				_push(`<div class="project-card">`);
				_push(ssrRenderComponent(_component_SafeImage, {
					src: proj.image,
					alt: proj.title,
					loading: "lazy"
				}, null, _parent));
				_push(`<div class="project-overlay"></div><div class="project-header-tags"><!--[-->`);
				ssrRenderList(proj.tags, (tag) => {
					_push(`<span class="project-tag">${ssrInterpolate(tag)}</span>`);
				});
				_push(`<!--]--></div><div class="project-content"><div class="project-metric-box"><span class="project-metric-val">${ssrInterpolate(proj.metric)}</span><span class="project-metric-lbl">${ssrInterpolate(proj.metricLabel)}</span></div><h3>${ssrInterpolate(proj.title)}</h3><p>${ssrInterpolate(proj.summary)}</p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/impact",
					class: "text-link light"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` Explore initiative results <span${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowRight), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode(" Explore initiative results "), createVNode("span", null, [createVNode(unref(ArrowRight), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 2
				}, _parent));
				_push(`</div></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
});
//#endregion
//#region app/components/ProjectsShowcase.vue
var _sfc_setup = ProjectsShowcase_vue_vue_type_script_setup_true_lang_default.setup;
ProjectsShowcase_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsShowcase.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ProjectsShowcase_default = Object.assign(ProjectsShowcase_vue_vue_type_script_setup_true_lang_default, { __name: "ProjectsShowcase" });

export { ProjectsShowcase_default as P };
//# sourceMappingURL=ProjectsShowcase-DAvrtnig.mjs.map
