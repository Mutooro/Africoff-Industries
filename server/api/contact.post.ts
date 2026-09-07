export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    email?: string
    company?: string
    phone?: string
    inquiryType?: string
    coffeeInterest?: string
    message?: string
  }>(event)

  if (!body?.name || !body?.email || !body?.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, business email, and message are required fields.',
    })
  }

  // Ready for production SMTP, Resend, or CRM forwarding
  return {
    ok: true,
    message: 'Thank you for your inquiry. An AFRICOFF trade representative will respond within 24 hours.',
    received: {
      name: body.name,
      email: body.email,
      inquiryType: body.inquiryType,
    },
  }
})
