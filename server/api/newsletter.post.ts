/**
 * Newsletter signup endpoint.
 *
 * NOTE (production): the address is validated but NOT yet stored or forwarded
 * to any mailing provider. Connect this handler to your email marketing tool
 * (Mailchimp, Brevo, Resend audiences, Supabase…) before launch, and set the
 * provider API key as a Vercel environment variable.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default defineEventHandler(async (event) => {
  const body = await readBody<Record<string, unknown>>(event)

  // Honeypot: hidden field humans never fill in.
  if (typeof body?.website === 'string' && body.website.trim() !== '') {
    return { ok: true }
  }

  const email = typeof body?.email === 'string' ? body.email.trim().slice(0, 200) : ''

  if (!email || !EMAIL_RE.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid email address.',
    })
  }

  // TODO: persist/forward `email` to the mailing provider here.
  return { ok: true, message: 'Subscribed.' }
})