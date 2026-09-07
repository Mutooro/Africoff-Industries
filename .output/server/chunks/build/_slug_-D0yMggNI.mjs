import { u as useRoute$2, c as createError$1, a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { n as newsArticles } from './reviewed-CbsaqwN4.mjs';
import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { ArrowLeft } from '@lucide/vue';
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

//#region app/pages/news/[slug].vue?vue&type=script&setup=true&lang.ts
var _slug__vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "[slug]",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$2();
		const article = newsArticles.find((item) => item.slug === route.params.slug);
		if (!article || article.status !== "published") throw createError$1({
			statusCode: 404,
			statusMessage: "Story not found"
		});
		useSeoMeta$1({
			title: () => `${article?.title || "Story"} · AFRICOFF`,
			description: () => article?.summary || "AFRICOFF news and field story."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			if (unref(article)) {
				_push(`<article${ssrRenderAttrs(_attrs)} data-v-24ac809f><section class="page-intro" data-v-24ac809f><div class="shell" data-v-24ac809f><div class="page-intro-inner" data-v-24ac809f><span class="section-label" data-v-24ac809f>${ssrInterpolate(unref(article).publishedAt)} · AFRICOFF</span><h1 data-v-24ac809f>${ssrInterpolate(unref(article).title)}</h1><p data-v-24ac809f>${ssrInterpolate(unref(article).summary)}</p></div></div></section><section class="py-section bg-cream" data-v-24ac809f><div class="shell article-body" data-v-24ac809f><p class="lead" data-v-24ac809f>This article route is reserved for approved publication content, including location, related programme, attribution, results and image rights.</p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/news",
					class: "text-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`Back to news <span data-v-24ac809f${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowLeft), {
								size: 16,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
							_push(`</span>`);
						} else return [createTextVNode("Back to news "), createVNode("span", null, [createVNode(unref(ArrowLeft), {
							size: 16,
							"stroke-width": 2.5
						})])];
					}),
					_: 1
				}, _parent));
				_push(`</div></section></article>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region app/pages/news/[slug].vue
var _sfc_setup = _slug__vue_vue_type_script_setup_true_lang_default.setup;
_slug__vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _slug__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_slug__vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-24ac809f"]]);

export { _slug__default as default };
//# sourceMappingURL=_slug_-D0yMggNI.mjs.map
