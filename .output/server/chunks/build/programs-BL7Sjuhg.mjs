import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { S as SafeImage_default } from './SafeImage-Dg0xeSOY.mjs';
import { p as programs } from './reviewed-CbsaqwN4.mjs';
import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { ArrowRight } from '@lucide/vue';
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

//#region app/pages/programs/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Programs and Partnerships · AFRICOFF",
			description: "Explore AFRICOFF programme areas and partnership opportunities across climate-smart agriculture, enterprise development and community well-being."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SafeImage = SafeImage_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-18905aaa><section class="page-intro" data-v-18905aaa><div class="shell" data-v-18905aaa><div class="page-intro-inner" data-v-18905aaa><span class="section-label" data-v-18905aaa>Programs</span><h1 data-v-18905aaa>Programs Built Around <em data-v-18905aaa>Practical Outcomes</em></h1><p data-v-18905aaa>Explore AFRICOFF&#39;s programme areas. Detailed objectives, partners, dates and results will be published as each programme is approved for external use.</p></div></div></section><section class="py-section bg-offwhite" data-v-18905aaa><div class="shell" data-v-18905aaa><div class="values-grid" data-v-18905aaa><!--[-->`);
			ssrRenderList(unref(programs), (program) => {
				_push(`<article class="val-card" data-v-18905aaa>`);
				_push(ssrRenderComponent(_component_SafeImage, {
					src: program.image,
					alt: program.name,
					class: "program-image",
					loading: "lazy"
				}, null, _parent));
				_push(`<span class="section-label" data-v-18905aaa>${ssrInterpolate(program.type)} · ${ssrInterpolate(program.location)}</span><h2 data-v-18905aaa>${ssrInterpolate(program.name)}</h2><p data-v-18905aaa>${ssrInterpolate(program.summary)}</p><ul class="program-details" data-v-18905aaa><!--[-->`);
				ssrRenderList(program.details, (detail) => {
					_push(`<li data-v-18905aaa>${ssrInterpolate(detail)}</li>`);
				});
				_push(`<!--]--></ul>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: `/programs/${program.slug}`,
					class: "text-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(` View programme record <span data-v-18905aaa${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowRight), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode(" View programme record "), createVNode("span", null, [createVNode(unref(ArrowRight), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 2
				}, _parent));
				_push(`</article>`);
			});
			_push(`<!--]--></div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/programs/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/programs/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var programs_default = /*#__PURE__*/ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-18905aaa"]]);

export { programs_default as default };
//# sourceMappingURL=programs-BL7Sjuhg.mjs.map
