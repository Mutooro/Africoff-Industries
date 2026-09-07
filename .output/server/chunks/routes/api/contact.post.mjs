import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const contact_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.name) || !(body == null ? void 0 : body.email) || !(body == null ? void 0 : body.message)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Name, business email, and message are required fields."
    });
  }
  return {
    ok: true,
    message: "Thank you for your inquiry. An AFRICOFF trade representative will respond within 24 hours.",
    received: {
      name: body.name,
      email: body.email,
      inquiryType: body.inquiryType
    }
  };
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
