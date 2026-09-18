/**
 * Contact inquiry endpoint.
 *
 * NOTE (production): submissions are validated here but NOT yet persisted or
 * emailed anywhere. Wire this handler to your mail/CRM provider (Resend,
 * SendGrid, Formspree, SMTP, HubSpot…) and store `RESEND_API_KEY` (or
 * equivalent) as a Vercel environment variable before launch.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Field length caps — keeps abusive payloads from bloating logs/mail bodies. */
const LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  phone: 40,
  inquiryType: 80,
  coffeeInterest: 200,
  message: 5000,
} as const

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Record<string, unknown>>(event)

  // Honeypot: the "website" field is hidden from humans; bots fill it in.
  // Return a plausible success so the bot does not adapt, but do nothing.
  if (typeof body?.website === 'string' && body.website.trim() !== '') {
    return { ok: true }
  }

  const name = clean(body?.name, LIMITS.name)
  const email = clean(body?.email, LIMITS.email)
  const company = clean(body?.company, LIMITS.company)
  const phone = clean(body?.phone, LIMITS.phone)
  const inquiryType = clean(body?.inquiryType, LIMITS.inquiryType)
  const coffeeInterest = clean(body?.coffeeInterest, LIMITS.coffeeInterest)
  const message = clean(body?.message, LIMITS.message)

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, business email, and message are required fields.',
    })
  }

  if (!EMAIL_RE.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid email address.',
    })
  }

  // Ready for production SMTP, Resend, or CRM forwarding (see note above).
  return {
    ok: true,
    message: 'Thank you for your inquiry. An AFRICOFF trade representative will respond within 24 hours.',
    received: {
      name,
      email,
      company,
      phone,
      inquiryType,
      coffeeInterest,
      messageLength: message.length,
    },
  }
})
