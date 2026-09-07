import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

//#region app/components/CallToAction.vue?vue&type=script&setup=true&lang.ts
var CallToAction_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "CallToAction",
	__ssrInlineRender: true,
	props: {
		title: {},
		subtitle: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_ArrowUpRight = resolveComponent("ArrowUpRight");
			const _component_ArrowRight = resolveComponent("ArrowRight");
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-banner" }, _attrs))}><div class="shell"><div class="cta-inner"><span class="section-label light">Direct Trade &amp; Partnership</span><h2>${ssrInterpolate(__props.title || "Ready to Source Exceptional, Sustainable Ugandan Coffee?")}</h2><p>${ssrInterpolate(__props.subtitle || "Whether you are an international green coffee buyer, specialty roaster, or local farmer cooperative, AFRICOFF welcomes you to build a shared, sustainable future.")}</p><div class="cta-actions">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn-gold"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span${_scopeId}>Request Green Coffee Samples</span>`);
						_push(ssrRenderComponent(_component_ArrowUpRight, {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Request Green Coffee Samples"), createVNode(_component_ArrowUpRight, {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/out-growers",
				class: "btn-outline"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span${_scopeId}>Join the Out-Growers Scheme</span>`);
						_push(ssrRenderComponent(_component_ArrowRight, {
							class: "btn-icon",
							size: 18,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Join the Out-Growers Scheme"), createVNode(_component_ArrowRight, {
						class: "btn-icon",
						size: 18,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></section>`);
		};
	}
});
//#endregion
//#region app/components/CallToAction.vue
var _sfc_setup = CallToAction_vue_vue_type_script_setup_true_lang_default.setup;
CallToAction_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var CallToAction_default = Object.assign(CallToAction_vue_vue_type_script_setup_true_lang_default, { __name: "CallToAction" });

export { CallToAction_default as C };
//# sourceMappingURL=CallToAction-DOCyRBmK.mjs.map
