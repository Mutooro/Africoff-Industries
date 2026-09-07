import { defineComponent, ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

//#region app/components/SafeImage.vue?vue&type=script&setup=true&lang.ts
var SafeImage_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SafeImage",
	__ssrInlineRender: true,
	props: {
		src: {},
		alt: {},
		fallbackSrc: { default: "/assets/images/3.jfif" },
		loading: { default: "lazy" }
	},
	setup(__props) {
		const props = __props;
		const currentSrc = ref(props.src);
		watch(() => props.src, (source) => {
			currentSrc.value = source;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<img${ssrRenderAttrs(mergeProps({
				src: currentSrc.value,
				alt: __props.alt,
				loading: __props.loading
			}, _attrs))}>`);
		};
	}
});
//#endregion
//#region app/components/SafeImage.vue
var _sfc_setup = SafeImage_vue_vue_type_script_setup_true_lang_default.setup;
SafeImage_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SafeImage.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var SafeImage_default = Object.assign(SafeImage_vue_vue_type_script_setup_true_lang_default, { __name: "SafeImage" });

export { SafeImage_default as S };
//# sourceMappingURL=SafeImage-Dg0xeSOY.mjs.map
