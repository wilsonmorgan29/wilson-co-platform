import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const {
      // Section 1 — Who you are
      name, title, company, linkedin, years, situation, verticals,
      // Section 2 — What you want next
      roles, idealRole, walkAway, compFloor, geos,
      // Section 3 — What you've outgrown
      doneWith, badCulture, constraints,
      // Section 4 — Final question + visibility
      hesitation, visibility,
    } = data

    if (!name || !title || !company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const html = `
      <div style="font-family: Georgia, serif; max-width: 680px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #5D6B3D; padding: 24px 32px;">
          <div style="color: white; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;">The Wilson Co.</div>
          <div style="color: rgba(255,255,255,0.7); font-size: 18px; margin-top: 6px;">New Member Application</div>
        </div>

        <div style="padding: 32px; background: #F4F2EE;">

          <h2 style="font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #5D6B3D; border-bottom: 1px solid #c4d0a8; padding-bottom: 8px; margin-bottom: 16px;">
            Section 1 · Who They Are
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>LinkedIn:</strong> <a href="https://${linkedin}">${linkedin}</a></p>
          <p><strong>Years in leadership:</strong> ${years}</p>
          <p><strong>Current situation:</strong> ${situation}</p>
          <p><strong>Verticals:</strong> ${(verticals || []).join(', ')}</p>

          <h2 style="font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #5D6B3D; border-bottom: 1px solid #c4d0a8; padding-bottom: 8px; margin: 24px 0 16px;">
            Section 2 · What They Want Next
          </h2>
          <p><strong>Open to roles:</strong> ${(roles || []).join(', ')}</p>
          <p><strong>Comp floor:</strong> ${compFloor}</p>
          <p><strong>Geography:</strong> ${(geos || []).join(', ')}</p>
          <p style="margin-top: 12px;"><strong>Ideal next role:</strong></p>
          <p style="background: white; padding: 12px 16px; border-left: 3px solid #5D6B3D; margin: 6px 0; font-style: italic; white-space: pre-wrap;">${idealRole}</p>
          <p style="margin-top: 12px;"><strong>What they'd walk away from a bigger title to get:</strong></p>
          <p style="background: white; padding: 12px 16px; border-left: 3px solid #5D6B3D; margin: 6px 0; font-style: italic; white-space: pre-wrap;">${walkAway}</p>

          <h2 style="font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #5D6B3D; border-bottom: 1px solid #c4d0a8; padding-bottom: 8px; margin: 24px 0 16px;">
            Section 3 · What They've Outgrown
          </h2>
          <p><strong>Work they're done with:</strong></p>
          <p style="background: white; padding: 12px 16px; border-left: 3px solid #5D6B3D; margin: 6px 0; white-space: pre-wrap;">${doneWith}</p>
          <p style="margin-top: 12px;"><strong>Culture that doesn't fit:</strong></p>
          <p style="background: white; padding: 12px 16px; border-left: 3px solid #5D6B3D; margin: 6px 0; white-space: pre-wrap;">${badCulture}</p>
          ${constraints ? `<p style="margin-top: 12px;"><strong>Additional constraints / context:</strong></p>
          <p style="background: white; padding: 12px 16px; border-left: 3px solid #8a8880; margin: 6px 0; white-space: pre-wrap;">${constraints}</p>` : ''}

          <h2 style="font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #5D6B3D; border-bottom: 1px solid #c4d0a8; padding-bottom: 8px; margin: 24px 0 16px;">
            Section 4 · The Final Question
          </h2>
          <p><strong>What would make them hesitate to pursue the perfect role:</strong></p>
          <p style="background: white; padding: 12px 16px; border-left: 3px solid #2E4E61; margin: 6px 0; font-style: italic; white-space: pre-wrap;">${hesitation}</p>

          <h2 style="font-size: 13px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #5D6B3D; border-bottom: 1px solid #c4d0a8; padding-bottom: 8px; margin: 24px 0 16px;">
            Visibility Setting
          </h2>
          <p><strong>Starting as:</strong> ${visibility}</p>

        </div>

        <div style="padding: 16px 32px; background: #1A1A1A; color: rgba(255,255,255,0.4); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;">
          The Wilson Co. · Career Coaching · Talent Collective
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
          subject: `New application: ${name} — ${title} at ${company}`,
          html,
        }),
      })

      const resBody = await res.text()
      if (!res.ok) {
        console.error('Resend error status:', res.status)
        console.error('Resend error body:', resBody)
      } else {
        console.log('Resend success:', resBody)
      }
    } else {
      // Dev mode — log to terminal
      console.log('\n[Wilson Co. Intake Submission]')
      console.log(`Name: ${name} | Title: ${title} | Company: ${company}`)
      console.log(`LinkedIn: ${linkedin} | Years: ${years}`)
      console.log(`Situation: ${situation}`)
      console.log(`Verticals: ${(verticals || []).join(', ')}`)
      console.log(`Roles: ${(roles || []).join(', ')}`)
      console.log(`Comp floor: ${compFloor} | Geo: ${(geos || []).join(', ')}`)
      console.log(`Visibility: ${visibility}`)
      console.log('Ideal role:', idealRole)
      console.log('Walk away:', walkAway)
      console.log('Done with:', doneWith)
      console.log('Bad culture:', badCulture)
      console.log('Hesitation:', hesitation)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
