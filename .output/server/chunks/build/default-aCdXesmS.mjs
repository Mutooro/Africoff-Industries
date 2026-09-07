import { u as useRoute$2 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-WAb99hsX.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { MapPin, Leaf, Mail, Phone, ArrowUpRight, Flag, Briefcase, AtSign, ThumbsUp, Camera, MessageCircle, QrCode, Check } from '@lucide/vue';
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
import 'vue-router';
import 'unhead/plugins';
import 'unhead/utils';
import 'unhead/server';
import 'unhead/legacy';
import 'vue-bundle-renderer/runtime';
import 'devalue';

//#region \0virtual:public?%2Fafricoff.png
var _virtual_public__2Fafricoff_default = publicAssetsURL("/africoff.png");
//#endregion
//#region app/components/SiteHeader.vue?vue&type=script&setup=true&lang.ts
var SiteHeader_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SiteHeader",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute$2();
		const isScrolled = ref(false);
		const isMobileMenuOpen = ref(false);
		const navLinks = [
			{
				name: "Home",
				path: "/"
			},
			{
				name: "About Us",
				path: "/about"
			},
			{
				name: "Activities",
				path: "/activities"
			},
			{
				name: "Out-Growers",
				path: "/out-growers"
			},
			{
				name: "Value Chains",
				path: "/value-chains"
			},
			{
				name: "Products",
				path: "/products"
			},
			{
				name: "Impact",
				path: "/impact"
			},
			{
				name: "News",
				path: "/news"
			},
			{
				name: "Contact",
				path: "/contact"
			}
		];
		function closeMobileMenu() {
			isMobileMenuOpen.value = false;
		}
		function setBodyScrollLock(locked) {
			(void 0).body.style.overflow = locked ? "hidden" : "";
		}
		watch(isMobileMenuOpen, (open) => setBodyScrollLock(open));
		watch(() => route.fullPath, () => closeMobileMenu());
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<header${ssrRenderAttrs(mergeProps({ class: ["header-container", { "is-scrolled": isScrolled.value }] }, _attrs))} data-v-e1fd93d6><div class="top-bar" data-v-e1fd93d6><div class="shell top-bar-inner" data-v-e1fd93d6><div class="top-bar-left" data-v-e1fd93d6><span class="top-badge" data-v-e1fd93d6>`);
			_push(ssrRenderComponent(unref(MapPin), {
				size: 13,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` Kampala, Uganda</span><span class="top-compliance" data-v-e1fd93d6>`);
			_push(ssrRenderComponent(unref(Leaf), {
				size: 13,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` EUDR &amp; Traceability Compliant</span></div><div class="top-bar-right" data-v-e1fd93d6><a href="mailto:info@africoffindustries.com" class="top-link" data-v-e1fd93d6>`);
			_push(ssrRenderComponent(unref(Mail), {
				size: 13,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` info@africoffindustries.com</a><span class="top-divider" data-v-e1fd93d6>|</span><a href="tel:+256784851072" class="top-link" data-v-e1fd93d6>`);
			_push(ssrRenderComponent(unref(Phone), {
				size: 13,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` +256 784 851 072</a></div></div></div><div class="navbar" data-v-e1fd93d6><div class="shell navbar-inner" data-v-e1fd93d6>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "nav-logo",
				onClick: closeMobileMenu
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Fafricoff_default)} alt="AFRICOFF Industries (U) Ltd" data-v-e1fd93d6${_scopeId}>`);
					else return [createVNode("img", {
						src: _virtual_public__2Fafricoff_default,
						alt: "AFRICOFF Industries (U) Ltd"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="desktop-nav" data-v-e1fd93d6><!--[-->`);
			ssrRenderList(navLinks, (link) => {
				_push(ssrRenderComponent(_component_NuxtLink, {
					key: link.path,
					to: link.path,
					class: "nav-link"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(link.name)}`);
						else return [createTextVNode(toDisplayString(link.name), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav><div class="nav-cta-wrapper" data-v-e1fd93d6>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn-gold btn-sm"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-e1fd93d6${_scopeId}>Partner With Us</span>`);
						_push(ssrRenderComponent(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 16,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Partner With Us"), createVNode(unref(ArrowUpRight), {
						class: "btn-icon",
						size: 16,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div><button class="${ssrRenderClass([{ "is-active": isMobileMenuOpen.value }, "nav-toggle"])}"${ssrRenderAttr("aria-expanded", isMobileMenuOpen.value)} aria-controls="mobile-drawer-menu"${ssrRenderAttr("aria-label", isMobileMenuOpen.value ? "Close Navigation Menu" : "Open Navigation Menu")} data-v-e1fd93d6><span data-v-e1fd93d6></span><span data-v-e1fd93d6></span><span data-v-e1fd93d6></span></button></div></div><div class="${ssrRenderClass([{ "is-open": isMobileMenuOpen.value }, "drawer-backdrop"])}" aria-hidden="true" data-v-e1fd93d6></div><div id="mobile-drawer-menu" class="${ssrRenderClass([{ "is-open": isMobileMenuOpen.value }, "mobile-drawer"])}" role="dialog" aria-modal="true" aria-label="Mobile navigation" data-v-e1fd93d6><div class="mobile-drawer-inner" data-v-e1fd93d6><nav class="mobile-nav" data-v-e1fd93d6><!--[-->`);
			ssrRenderList(navLinks, (link) => {
				_push(ssrRenderComponent(_component_NuxtLink, {
					key: link.path,
					to: link.path,
					class: "mobile-nav-link",
					onClick: closeMobileMenu
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(link.name)}`);
						else return [createTextVNode(toDisplayString(link.name), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav><div class="mobile-drawer-footer" data-v-e1fd93d6>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn-gold",
				style: {
					"width": "100%",
					"justify-content": "center"
				},
				onClick: closeMobileMenu
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span data-v-e1fd93d6${_scopeId}>Partner With Us</span>`);
						_push(ssrRenderComponent(unref(ArrowUpRight), {
							class: "btn-icon",
							size: 16,
							"stroke-width": 2.5
						}, null, _parent, _scopeId));
					} else return [createVNode("span", null, "Partner With Us"), createVNode(unref(ArrowUpRight), {
						class: "btn-icon",
						size: 16,
						"stroke-width": 2.5
					})];
				}),
				_: 1
			}, _parent));
			_push(`<div class="mobile-contact-info" data-v-e1fd93d6><p data-v-e1fd93d6><strong data-v-e1fd93d6>AFRICOFF Industries (U) Ltd</strong></p><p data-v-e1fd93d6>Kampala, Uganda</p><p data-v-e1fd93d6>info@africoffindustries.com</p></div></div></div></div></header>`);
		};
	}
});
//#endregion
//#region app/components/SiteHeader.vue
var _sfc_setup$2 = SiteHeader_vue_vue_type_script_setup_true_lang_default.setup;
SiteHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var SiteHeader_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(SiteHeader_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-e1fd93d6"]]), { __name: "SiteHeader" });
//#endregion
//#region app/components/SiteFooter.vue?vue&type=script&setup=true&lang.ts
var SiteFooter_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SiteFooter",
	__ssrInlineRender: true,
	setup(__props) {
		const email = ref("");
		const isSubscribed = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))} data-v-8229496a><div class="shell" data-v-8229496a><div class="footer-grid" data-v-8229496a><div class="footer-col brand-col" data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "footer-logo"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<img${ssrRenderAttr("src", _virtual_public__2Fafricoff_default)} alt="AFRICOFF Industries (U) Ltd" data-v-8229496a${_scopeId}>`);
					else return [createVNode("img", {
						src: _virtual_public__2Fafricoff_default,
						alt: "AFRICOFF Industries (U) Ltd"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<p class="footer-bio" data-v-8229496a> AFRICOFF Industries (U) Limited bridges Ugandan smallholder farmers and global markets through sustainable agro-processing, EUDR-compliant polygon traceability, and specialty export excellence. </p><div class="footer-origin-badge" data-v-8229496a><span data-v-8229496a>`);
			_push(ssrRenderComponent(unref(Flag), {
				size: 14,
				"stroke-width": 2.5
			}, null, _parent));
			_push(` Proudly Ugandan · Mount Elgon &amp; Rwenzori Terroir</span></div><div class="footer-socials" data-v-8229496a><a href="https://linkedin.com" target="_blank" rel="noopener" class="social-pill" aria-label="LinkedIn" data-v-8229496a>`);
			_push(ssrRenderComponent(unref(Briefcase), { size: 16 }, null, _parent));
			_push(`</a><a href="https://twitter.com" target="_blank" rel="noopener" class="social-pill" aria-label="Twitter" data-v-8229496a>`);
			_push(ssrRenderComponent(unref(AtSign), { size: 16 }, null, _parent));
			_push(`</a><a href="https://facebook.com" target="_blank" rel="noopener" class="social-pill" aria-label="Facebook" data-v-8229496a>`);
			_push(ssrRenderComponent(unref(ThumbsUp), { size: 16 }, null, _parent));
			_push(`</a><a href="https://instagram.com" target="_blank" rel="noopener" class="social-pill" aria-label="Instagram" data-v-8229496a>`);
			_push(ssrRenderComponent(unref(Camera), { size: 16 }, null, _parent));
			_push(`</a><a href="https://wa.me/256700000000" target="_blank" rel="noopener" class="social-pill" aria-label="WhatsApp" data-v-8229496a>`);
			_push(ssrRenderComponent(unref(MessageCircle), { size: 16 }, null, _parent));
			_push(`</a>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact#wechat",
				class: "social-pill",
				"aria-label": "WeChat (scan QR code on the contact page)"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(QrCode), { size: 16 }, null, _parent, _scopeId));
					else return [createVNode(unref(QrCode), { size: 16 })];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="footer-col" data-v-8229496a><h4 class="footer-heading" data-v-8229496a>Quick Navigation</h4><ul class="footer-links" data-v-8229496a><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Home Overview`);
					else return [createTextVNode("Home Overview")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`About AFRICOFF`);
					else return [createTextVNode("About AFRICOFF")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/activities" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Integrated Operations`);
					else return [createTextVNode("Integrated Operations")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/out-growers" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Out-Growers Scheme`);
					else return [createTextVNode("Out-Growers Scheme")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/value-chains" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Value Chains`);
					else return [createTextVNode("Value Chains")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/programs" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Programs`);
					else return [createTextVNode("Programs")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/impact" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Sustainability &amp; Impact`);
					else return [createTextVNode("Sustainability & Impact")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/accountability" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Accountability &amp; Resources`);
					else return [createTextVNode("Accountability & Resources")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/news" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`News &amp; Stories`);
					else return [createTextVNode("News & Stories")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Get in Touch`);
					else return [createTextVNode("Get in Touch")];
				}),
				_: 1
			}, _parent));
			_push(`</li></ul></div><div class="footer-col" data-v-8229496a><h4 class="footer-heading" data-v-8229496a>Coffee &amp; Traceability</h4><ul class="footer-links" data-v-8229496a><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Bugisu Arabica AA/AB`);
					else return [createTextVNode("Bugisu Arabica AA/AB")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Rwenzori Natural Drugar`);
					else return [createTextVNode("Rwenzori Natural Drugar")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Screen 18 Washed Robusta`);
					else return [createTextVNode("Screen 18 Washed Robusta")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/activities" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`EUDR Polygon Mapping`);
					else return [createTextVNode("EUDR Polygon Mapping")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/impact" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Women in Coffee Program`);
					else return [createTextVNode("Women in Coffee Program")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Sample Request Service`);
					else return [createTextVNode("Sample Request Service")];
				}),
				_: 1
			}, _parent));
			_push(`</li></ul></div><div class="footer-col" data-v-8229496a><h4 class="footer-heading" data-v-8229496a>Stay Connected</h4><p class="footer-newsletter-desc" data-v-8229496a> Subscribe to our quarterly crop harvest updates, cupping scores, and export offerings. </p><form class="footer-form" data-v-8229496a><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Enter your email address" required class="newsletter-input" data-v-8229496a><button type="submit" class="newsletter-btn" data-v-8229496a>Subscribe</button></form>`);
			if (isSubscribed.value) {
				_push(`<p class="subscribe-success" data-v-8229496a>`);
				_push(ssrRenderComponent(unref(Check), {
					size: 14,
					"stroke-width": 3
				}, null, _parent));
				_push(` Thank you for subscribing!</p>`);
			} else _push(`<!---->`);
			_push(`<div class="footer-contact-brief" data-v-8229496a><p data-v-8229496a><strong data-v-8229496a>HQ:</strong> 52 Kampala Road, King Fahad Plaza, 3rd Floor</p><p data-v-8229496a><strong data-v-8229496a>PO Box:</strong> 178863, Kampala, Uganda</p><p data-v-8229496a><strong data-v-8229496a>Email:</strong> info@africoffindustries.com</p><p data-v-8229496a><strong data-v-8229496a>Phone:</strong> +256 784 851 072</p></div></div></div><div class="footer-bottom" data-v-8229496a><p data-v-8229496a>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} AFRICOFF Industries (U) Limited. All rights reserved.</p><div class="footer-bottom-links" data-v-8229496a>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Privacy &amp; EUDR Policy`);
					else return [createTextVNode("Privacy & EUDR Policy")];
				}),
				_: 1
			}, _parent));
			_push(`<span data-v-8229496a>·</span>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Terms of Supply`);
					else return [createTextVNode("Terms of Supply")];
				}),
				_: 1
			}, _parent));
			_push(`<span data-v-8229496a>·</span><a href="#top" data-v-8229496a>Back to Top ↑</a></div></div></div></footer>`);
		};
	}
});
//#endregion
//#region app/components/SiteFooter.vue
var _sfc_setup$1 = SiteFooter_vue_vue_type_script_setup_true_lang_default.setup;
SiteFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var SiteFooter_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(SiteFooter_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-8229496a"]]), { __name: "SiteFooter" });
//#endregion
//#region app/layouts/default.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_SiteHeader = SiteHeader_default;
	const _component_SiteFooter = SiteFooter_default;
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
	_push(`<main>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</main>`);
	_push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_default as default };
//# sourceMappingURL=default-aCdXesmS.mjs.map
