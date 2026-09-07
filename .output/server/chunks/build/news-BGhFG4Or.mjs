import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { n as newsArticles } from './reviewed-CbsaqwN4.mjs';
import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/news/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "News and Stories · AFRICOFF",
			description: "Read AFRICOFF updates, programme stories and evidence from Uganda coffee value chains."
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-0806dfe3><section class="page-intro" data-v-0806dfe3><div class="shell" data-v-0806dfe3><div class="page-intro-inner" data-v-0806dfe3><span class="section-label" data-v-0806dfe3>News &amp; stories</span><h1 data-v-0806dfe3>Field Updates With <em data-v-0806dfe3>Useful Evidence</em></h1><p data-v-0806dfe3>Published stories will include dates, attribution, locations, related programmes, image rights and a short results section.</p></div></div></section><section class="py-section bg-offwhite" data-v-0806dfe3><div class="shell" data-v-0806dfe3>`);
			if (unref(newsArticles).length) {
				_push(`<div class="values-grid" data-v-0806dfe3><!--[-->`);
				ssrRenderList(unref(newsArticles), (article) => {
					_push(`<article class="val-card" data-v-0806dfe3><span class="section-label" data-v-0806dfe3>${ssrInterpolate(article.publishedAt)}</span><h2 data-v-0806dfe3>${ssrInterpolate(article.title)}</h2><p data-v-0806dfe3>${ssrInterpolate(article.summary)}</p>`);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: `/news/${article.slug}`,
						class: "text-link"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`Read story <span data-v-0806dfe3${_scopeId}>`);
								_push(ssrRenderComponent(unref(ArrowRight), {
									size: 16,
									"stroke-width": 2.5
								}, null, _parent, _scopeId));
								_push(`</span>`);
							} else return [createTextVNode("Read story "), createVNode("span", null, [createVNode(unref(ArrowRight), {
								size: 16,
								"stroke-width": 2.5
							})])];
						}),
						_: 2
					}, _parent));
					_push(`</article>`);
				});
				_push(`<!--]--></div>`);
			} else {
				_push(`<div class="empty-state" data-v-0806dfe3><span class="section-label" data-v-0806dfe3>Publishing workflow pending</span><h2 data-v-0806dfe3>Stories Will Appear <em data-v-0806dfe3>When Approved</em></h2><p data-v-0806dfe3>AFRICOFF does not yet have an approved article set in this workspace. The route is ready for publication once an editorial owner confirms the source material, dates, results and image rights.</p>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/contact",
					class: "btn-primary",
					style: { "margin-top": "1.5rem" }
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<span data-v-0806dfe3${_scopeId}>Contact AFRICOFF</span>`);
							_push(ssrRenderComponent(unref(ArrowUpRight), {
								class: "btn-icon",
								size: 18,
								"stroke-width": 2.5
							}, null, _parent, _scopeId));
						} else return [createVNode("span", null, "Contact AFRICOFF"), createVNode(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						})];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			}
			_push(`</div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/news/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var news_default = /*#__PURE__*/ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0806dfe3"]]);

export { news_default as default };
//# sourceMappingURL=news-BGhFG4Or.mjs.map
