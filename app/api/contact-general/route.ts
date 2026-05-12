import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #5D6B3D; padding: 20px 28px;">
          <div style="color: white; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;">The Wilson Co.</div>
          <div style="color: rgba(255,255,255,0.7); font-size: 16px; margin-top: 4px;">New website enquiry</div>
        </div>
        <div style="padding: 28px; background: #F4F2EE;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${subject ? `<p><strong>Enquiry type:</strong> ${subject}</p>` : ''}
          <p style="margin-top: 16px;"><strong>Message:</strong></p>
          <p style="background: white; padding: 12px 16px; border-left: 3px solid #5D6B3D; margin: 6px 0; white-space: pre-wrap; font-style: italic;">${message}</p>
        </div>
        <div style="padding: 14px 28px; background: #1A1A1A; color: rgba(255,255,255,0.4); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;">
          The Wilson Co. · thewilson.co
        </div>
      </div>
    `

    if (process.env.RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: process.env.INTAKE_EMAIL || 'wilsonmorgan29@gmail.com',
          subject: `New enquiry from ${name}${subject ? ` — ${subject}` : ''}`,
          html,
        }),
      })
      if (!res.ok) console.error('Resend error:', await res.text())
    } else {
      console.log('\n[Wilson Co. Contact Submission]')
      console.log(`Name: ${name} | Email: ${email}`)
      if (subject) console.log(`Subject: ${subject}`)
      console.log('Message:', message)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
