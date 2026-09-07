globalThis.__timing__.logStart('Load chunks/build/contact-C-JSohF3');import { u as useSeoMeta$1 } from '../virtual/entry.mjs';
import { defineComponent, ref, unref, useSSRContext } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/index.mjs';
import { ssrIncludeBooleanAttr, ssrInterpolate } from 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue/server-renderer/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/nostics/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/nostics/dist/formatters/ansi.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/hookable/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unctx/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/h3/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/ufo/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'node:async_hooks';
import '../_/nitro.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/destr/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unstorage/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/ohash/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/klona/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/defu/dist/defu.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/scule/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/pathe/dist/index.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/server.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/legacy.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/devalue/index.js';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/vue-router/vue-router.node.mjs';
import 'file://D:/martin/AFRICOFF-NEW/AFFRICOFF-NEW/node_modules/unhead/dist/utils.mjs';

var contact_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta$1({
      title: "Contact us",
      description: "Talk to AFRICOFF about coffee, partnerships, or our out-growers programme."
    });
    const submitted = ref(false);
    const error = ref("");
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="contact-hero"><div class="shell"><p class="eyebrow light">Contact AFRICOFF</p><h1>Let&#39;s start a<br><em>meaningful conversation.</em></h1><p>Tell us how you would like to work with AFRICOFF. We will connect you with the right person.</p></div></section><section class="shell contact-section"><div><p class="eyebrow">Get in touch</p><h2>We would love to <em>hear from you.</em></h2><p class="lead">For product, partnership, and programme enquiries, use the form or the approved business contact details.</p><p class="contact-note">Contact information will be finalised from the approved company profile before launch.</p></div><form class="contact-form"><label>Your name<input required name="name" autocomplete="name"></label><label>Email address<input required type="email" name="email" autocomplete="email"></label><label>What can we help with?<select name="topic"><option>Product enquiry</option><option>Partnership</option><option>Out-growers scheme</option><option>General enquiry</option></select></label><label>Your message<textarea required name="message" rows="5"></textarea></label><button class="button" type="submit"${ssrIncludeBooleanAttr(unref(pending)) ? " disabled" : ""}>${ssrInterpolate(unref(pending) ? "Sending..." : "Send enquiry")} <span>\u2197</span></button>`);
      if (unref(submitted)) _push(`<p class="form-message">Thank you. Your enquiry has been received.</p>`);
      else _push(`<!---->`);
      if (unref(error)) _push(`<p class="form-error">${ssrInterpolate(unref(error))}</p>`);
      else _push(`<!---->`);
      _push(`</form></section><!--]-->`);
    };
  }
});
var _sfc_setup = contact_vue_vue_type_script_setup_true_lang_default.setup;
contact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contact_default = contact_vue_vue_type_script_setup_true_lang_default;

export { contact_default as default };;globalThis.__timing__.logEnd('Load chunks/build/contact-C-JSohF3');
//# sourceMappingURL=contact-C-JSohF3.mjs.map
