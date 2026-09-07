import { a as useSeoMeta$1 } from '../virtual/entry.mjs';
import { _ as _plugin_vue_export_helper_default } from './_plugin-vue_export-helper-BOaGB7Aw.mjs';
import { s as siteConfig } from './site-_S4qsMiU.mjs';
import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { MapPin, Mail, Phone, MessageCircle, QrCode, Check, ArrowUpRight } from '@lucide/vue';
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
import 'unhead/utils';

//#region app/pages/contact.vue?vue&type=script&setup=true&lang.ts
var contact_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "contact",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta$1({
			title: "Contact Us & Sample Inquiries · AFRICOFF Industries",
			description: "Connect with AFRICOFF Industries for green coffee sample requests, export inquiries, out-grower cooperative partnerships, and origin visits in Uganda."
		});
		useRoute();
		const form = ref({
			name: "",
			email: "",
			company: "",
			phone: "",
			inquiryType: "Green Coffee Sourcing / Samples",
			coffeeInterest: "",
			message: ""
		});
		const isSubmitting = ref(false);
		const isSubmitted = ref(false);
		ref("");
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-a10bc31c><section class="page-intro" data-v-a10bc31c><div class="shell" data-v-a10bc31c><div class="page-intro-inner" data-v-a10bc31c><span class="section-label" data-v-a10bc31c>Contact &amp; inquiries</span><h1 data-v-a10bc31c>Let’s Build a Sustainable <em data-v-a10bc31c>Coffee Partnership</em></h1><p data-v-a10bc31c>Whether you are requesting green coffee cupping samples, discussing export contracts, or exploring out-grower cooperative enrollment, our team is ready to assist.</p></div></div></section><section class="py-section-lg bg-offwhite" data-v-a10bc31c><div class="shell" data-v-a10bc31c><div class="contact-layout-grid" data-v-a10bc31c><div class="contact-info-col" data-v-a10bc31c><span class="section-label" data-v-a10bc31c>Direct Communication</span><p class="lead" style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-a10bc31c> Reach our trade and agronomy teams directly via email, phone, WhatsApp, or schedule an origin visit to our processing mills in Uganda. </p><div class="info-card-list" data-v-a10bc31c><div class="contact-pill-card" data-v-a10bc31c><div class="pill-icon" data-v-a10bc31c>`);
			_push(ssrRenderComponent(unref(MapPin), {
				size: 22,
				"stroke-width": 2
			}, null, _parent));
			_push(`</div><div data-v-a10bc31c><h4 data-v-a10bc31c>Our Offices</h4><p data-v-a10bc31c>52 Kampala Road, King Fahad Plaza, 3rd Floor<br data-v-a10bc31c>P.O Box 178863, Kampala, Uganda</p><span class="pill-sub" data-v-a10bc31c>Central Office, Dry Mill &amp; Cupping Laboratory</span></div></div><div class="contact-pill-card" data-v-a10bc31c><div class="pill-icon" data-v-a10bc31c>`);
			_push(ssrRenderComponent(unref(Mail), {
				size: 22,
				"stroke-width": 2
			}, null, _parent));
			_push(`</div><div data-v-a10bc31c><h4 data-v-a10bc31c>Email </h4><p data-v-a10bc31c><a href="mailto:info@africoffindustries.com" style="${ssrRenderStyle({
				"color": "var(--forest)",
				"font-weight": "700"
			})}" data-v-a10bc31c>info@africoffindustries.com</a></p><span class="pill-sub" data-v-a10bc31c>Trade inquiries answered within 24 hours</span></div></div><div class="contact-pill-card" data-v-a10bc31c><div class="pill-icon" data-v-a10bc31c>`);
			_push(ssrRenderComponent(unref(Phone), {
				size: 22,
				"stroke-width": 2
			}, null, _parent));
			_push(`</div><div data-v-a10bc31c><h4 data-v-a10bc31c>Phone</h4><p data-v-a10bc31c>+256 784 851 072</p><div style="${ssrRenderStyle({ "margin-top": "0.5rem" })}" data-v-a10bc31c><a href="https://wa.me/256784851072" target="_blank" rel="noopener" class="btn-primary btn-sm" data-v-a10bc31c><span data-v-a10bc31c>Chat on WhatsApp</span>`);
			_push(ssrRenderComponent(unref(MessageCircle), {
				class: "btn-icon",
				size: 16,
				"stroke-width": 2.5
			}, null, _parent));
			_push(`</a></div></div></div><div id="wechat" class="contact-pill-card" data-v-a10bc31c><div class="pill-icon" data-v-a10bc31c>`);
			_push(ssrRenderComponent(unref(QrCode), {
				size: 22,
				"stroke-width": 2
			}, null, _parent));
			_push(`</div><div data-v-a10bc31c><h4 data-v-a10bc31c>WeChat</h4><p data-v-a10bc31c>WeChat ID: <strong style="${ssrRenderStyle({ "color": "var(--forest)" })}" data-v-a10bc31c>${ssrInterpolate(unref(siteConfig).wechat)}</strong></p><span class="pill-sub" data-v-a10bc31c>Search this ID or scan our WeChat QR code to connect with the export desk — preferred channel for buyers in China &amp; Asia.</span></div></div></div></div><div class="contact-form-col" data-v-a10bc31c><div class="form-wrapper-card" data-v-a10bc31c><h3 style="${ssrRenderStyle({ "margin-bottom": "0.5rem" })}" data-v-a10bc31c>Send an Inquiry or Sample Request</h3><p style="${ssrRenderStyle({
				"color": "var(--muted)",
				"font-size": "0.92rem",
				"margin-bottom": "2rem"
			})}" data-v-a10bc31c> Please fill out the form below. We provide sample sets (300g - 1kg) with official SCA cupping reports. </p>`);
			if (isSubmitted.value) {
				_push(`<div class="form-success-banner" data-v-a10bc31c><div class="success-icon" data-v-a10bc31c>`);
				_push(ssrRenderComponent(unref(Check), {
					size: 20,
					"stroke-width": 3
				}, null, _parent));
				_push(`</div><div data-v-a10bc31c><h4 data-v-a10bc31c>Thank you for contacting AFRICOFF!</h4><p data-v-a10bc31c>Your inquiry has been received. Our trade desk will review your details and respond with sample dispatch options or consultation details shortly.</p></div></div>`);
			} else {
				_push(`<form class="interactive-form" data-v-a10bc31c><div class="form-row-2" data-v-a10bc31c><div class="form-group" data-v-a10bc31c><label for="name" data-v-a10bc31c>Your Name *</label><input id="name"${ssrRenderAttr("value", form.value.name)} type="text" required placeholder="e.g. Sarah Nakato" class="custom-input" data-v-a10bc31c></div><div class="form-group" data-v-a10bc31c><label for="email" data-v-a10bc31c>Business Email *</label><input id="email"${ssrRenderAttr("value", form.value.email)} type="email" required placeholder="s.nakato@company.com" class="custom-input" data-v-a10bc31c></div></div><div class="form-row-2" data-v-a10bc31c><div class="form-group" data-v-a10bc31c><label for="company" data-v-a10bc31c>Organization / Roastery</label><input id="company"${ssrRenderAttr("value", form.value.company)} type="text" placeholder="e.g. Nordic Specialty Coffee" class="custom-input" data-v-a10bc31c></div><div class="form-group" data-v-a10bc31c><label for="phone" data-v-a10bc31c>Phone / WhatsApp</label><input id="phone"${ssrRenderAttr("value", form.value.phone)} type="tel" placeholder="+256..." class="custom-input" data-v-a10bc31c></div></div><div class="form-row-2" data-v-a10bc31c><div class="form-group" data-v-a10bc31c><label for="inquiryType" data-v-a10bc31c>Inquiry Purpose *</label><select id="inquiryType" class="custom-input" data-v-a10bc31c><option data-v-a10bc31c${ssrIncludeBooleanAttr(Array.isArray(form.value.inquiryType) ? ssrLooseContain(form.value.inquiryType, null) : ssrLooseEqual(form.value.inquiryType, null)) ? " selected" : ""}>Green Coffee Sourcing / Samples</option><option data-v-a10bc31c${ssrIncludeBooleanAttr(Array.isArray(form.value.inquiryType) ? ssrLooseContain(form.value.inquiryType, null) : ssrLooseEqual(form.value.inquiryType, null)) ? " selected" : ""}>Commercial Full Container (FCL) Order</option><option data-v-a10bc31c${ssrIncludeBooleanAttr(Array.isArray(form.value.inquiryType) ? ssrLooseContain(form.value.inquiryType, null) : ssrLooseEqual(form.value.inquiryType, null)) ? " selected" : ""}>Out-Growers Scheme &amp; Farmer Enrollment</option><option data-v-a10bc31c${ssrIncludeBooleanAttr(Array.isArray(form.value.inquiryType) ? ssrLooseContain(form.value.inquiryType, null) : ssrLooseEqual(form.value.inquiryType, null)) ? " selected" : ""}>Sustainability &amp; EUDR Consultation</option><option data-v-a10bc31c${ssrIncludeBooleanAttr(Array.isArray(form.value.inquiryType) ? ssrLooseContain(form.value.inquiryType, null) : ssrLooseEqual(form.value.inquiryType, null)) ? " selected" : ""}>General Media / Origin Visit</option></select></div><div class="form-group" data-v-a10bc31c><label for="coffeeInterest" data-v-a10bc31c>Coffee Variety Interest</label><input id="coffeeInterest"${ssrRenderAttr("value", form.value.coffeeInterest)} type="text" placeholder="e.g. Bugisu Arabica AA, Drugar..." class="custom-input" data-v-a10bc31c></div></div><div class="form-group" data-v-a10bc31c><label for="message" data-v-a10bc31c>Message / Specifications *</label><textarea id="message" required rows="5" placeholder="Provide lot quantities, target screen sizes, sample delivery address, or any specific inquiries..." class="custom-input" data-v-a10bc31c>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="btn-primary" style="${ssrRenderStyle({
					"width": "100%",
					"justify-content": "center",
					"padding": "1.1rem"
				})}" data-v-a10bc31c>`);
				if (isSubmitting.value) _push(`<span data-v-a10bc31c>Transmitting Request...</span>`);
				else {
					_push(`<!--[--><span data-v-a10bc31c>Submit Official Inquiry</span>`);
					_push(ssrRenderComponent(unref(ArrowUpRight), {
						class: "btn-icon",
						size: 16,
						"stroke-width": 2.5
					}, null, _parent));
					_push(`<!--]-->`);
				}
				_push(`</button></form>`);
			}
			_push(`</div></div></div></div></section></div>`);
		};
	}
});
//#endregion
//#region app/pages/contact.vue
var _sfc_setup = contact_vue_vue_type_script_setup_true_lang_default.setup;
contact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contact_default = /*#__PURE__*/ _plugin_vue_export_helper_default(contact_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-a10bc31c"]]);

export { contact_default as default };
//# sourceMappingURL=contact-BpFmjrjV.mjs.map
