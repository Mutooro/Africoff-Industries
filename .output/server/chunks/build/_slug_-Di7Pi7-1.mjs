import { u as useRoute$2, c as createError$1, a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { S as SafeImage_default } from './SafeImage-Dg0xeSOY.mjs';
import { p as programs } from './reviewed-CbsaqwN4.mjs';
import { defineComponent, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { ArrowUpRight } from '@lucide/vue';
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

//#region app/pages/programs/[slug].vue?vue&type=script&setup=true&lang.ts
var _slug__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[slug]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$2();
		const program = programs.find((item) => item.slug === route.params.slug);
		if (!program) throw createError$1({
			statusCode: 404,
			statusMessage: "Programme not found"
		});
		useSeoMeta$1({
			title: () => `${program?.name || "Programme"} · AFRICOFF`,
			description: () => program?.summary || "AFRICOFF programme information."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SafeImage = SafeImage_default;
			const _component_NuxtLink = NuxtLink;
			if (unref(program)) {
				_push(`<div${ssrRenderAttrs(_attrs)} data-v-dd862aad><section class="page-intro" data-v-dd862aad><div class="shell" data-v-dd862aad><div class="page-intro-inner" data-v-dd862aad><span class="section-label" data-v-dd862aad>${ssrInterpolate(unref(program).type)} · ${ssrInterpolate(unref(program).location)}</span><h1 data-v-dd862aad>${ssrInterpolate(unref(program).name)}</h1><p data-v-dd862aad>${ssrInterpolate(unref(program).summary)}</p></div></div></section><section class="py-section bg-cream" data-v-dd862aad><div class="shell program-detail-grid" data-v-dd862aad><div data-v-dd862aad>`);
				_push(ssrRenderComponent(_component_SafeImage, {
					src: unref(program).image,
					alt: unref(program).name,
					class: "program-detail-image",
					loading: "eager"
				}, null, _parent));
				_push(`</div><div data-v-dd862aad><span class="section-label" data-v-dd862aad>Programme record</span><h2 class="section-title" data-v-dd862aad>Evidence Before <em data-v-dd862aad>Expectation</em></h2><p class="lead" data-v-dd862aad>This programme is sourced from AFRICOFF&#39;s project records. Public details will be expanded after the programme owner approves its objectives, geography, dates, partners, beneficiaries and results.</p><ul class="program-details" data-v-dd862aad><!--[-->`);
				ssrRenderList(unref(program).details, (detail) => {
					_push(`<li data-v-dd862aad>${ssrInterpolate(detail)}</li>`);
				});
				_push(`<!--]--></ul>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/contact",
					class: "btn-primary"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<span data-v-dd862aad${_scopeId}>Discuss a partnership</span>`);
							_push(ssrRenderComponent(unref(ArrowUpRight), {
								class: "btn-icon",
								size: 18,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
						} else return [createVNode("span", null, "Discuss a partnership"), createVNode(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						})];
					}),
					_: 1
				}, _parent));
				_push(`</div></div></section></div>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region app/pages/programs/[slug].vue
var _sfc_setup = _slug__vue_vue_type_script_setup_true_lang_default.setup;
_slug__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/programs/[slug].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _slug__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_slug__vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-dd862aad"]]);

export { _slug__default as default };
//# sourceMappingURL=_slug_-Di7Pi7-1.mjs.map
