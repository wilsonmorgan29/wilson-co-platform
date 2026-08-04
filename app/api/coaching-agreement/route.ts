import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Build a readable HTML email from the submitted fields
    const row = (label: string, value: string) =>
      value?.trim()
        ? `<tr><td style="padding:6px 12px 6px 0;font-size:12px;color:#666;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${value}</td></tr>`
        : ''

    const section = (title: string, content: string) => `
      <div style="margin-bottom:28px;">
        <div style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#5D6B3D;border-bottom:1px solid #ddd;padding-bottom:6px;margin-bottom:14px;">${title}</div>
        ${content}
      </div>`

    const tableRows = (rows: string) =>
      `<table style="border-collapse:collapse;width:100%;">${rows}</table>`

    const html = `
<div style="font-family:Georgia,serif;max-width:680px;margin:0 auto;color:#1a1a1a;">
  <div style="background:#2E4E61;padding:22px 28px;">
    <div style="color:white;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;">The Wilson Co.</div>
    <div style="color:rgba(255,255,255,0.75);font-size:15px;margin-top:4px;">New Coaching Agreement Submission</div>
    ${data.client_name ? `<div style="color:rgba(255,255,255,0.5);font-size:12px;margin-top:2px;">${data.client_name}</div>` : ''}
  </div>

  <div style="padding:28px;background:#F4F2EE;">

    ${section('Contact Information', tableRows([
      row('Name', data.client_name),
      row('Date', data.date),
      row('Business', data.business_name),
      row('Title', data.title),
      row('Type of Business', data.business_type),
      row('Business Address', [data.business_address, data.business_city, data.business_state_zip].filter(Boolean).join(', ')),
      row('Business Phone', data.business_phone),
      row('Business Email', data.business_email),
      row('Home Address', [data.home_address, data.home_city, data.home_state_zip].filter(Boolean).join(', ')),
      row('Home Phone', data.home_phone),
      row('Home Email', data.home_email),
      row('Cell Phone', data.cell_phone),
      row('Birthday', data.birthday),
      row('EA Name', data.ea_name),
      row('EA Phone', data.ea_phone),
      row('EA Email', data.ea_email),
    ].join('')))}

    ${section('Professional Background', tableRows([
      row('LinkedIn', data.linkedin),
      row('Industry / Practice Area', data.industry),
      row('Employment Status', data.employment_status),
      row('How They Heard', data.how_heard),
    ].join('')))}

    ${section('Session Preferences', tableRows([
      row('Session Format', data.session_format),
      row('Cadence', data.cadence),
      row('Time Zone', data.timezone),
      row('Best Times', data.best_times),
    ].join('')))}

    ${section('Coaching Vision', `
      <div style="background:white;padding:14px 16px;border-left:3px solid #2E4E61;font-size:13px;line-height:1.75;white-space:pre-wrap;font-style:italic;">
        ${data.vision || '(not answered)'}
      </div>
    `)}

    ${section('Agreement', tableRows([
      row('Client Name (Agreement)', data.agreement_client_name),
      row('Termination Initial', data.initial_termination),
      row('Scheduling Initial', data.initial_scheduling),
      row('Client Signature', data.sig_client),
    ].join('')))}

    ${section('Pre-Coaching Inventory', (() => {
      const areas = ['Relationship','Environment','Fun','Finances','Spiritual Life','Career','Health']
      return areas.map(a => {
        const key = `area_${a.toLowerCase().replace(/\s+/g,'_')}`
        const scores = data[key]
        if (!scores || !Array.isArray(scores)) return ''
        const valid = scores.filter((v: string) => v !== '')
        const avg = valid.length ? (valid.reduce((s: number, v: string) => s + parseFloat(v), 0) / valid.length).toFixed(1) : '—'
        return `<div style="margin-bottom:8px;"><strong>${a}:</strong> avg ${avg} &nbsp; <span style="color:#666;font-size:12px;">[${scores.join(', ')}]</span></div>`
      }).join('')
    })())}

    ${data.goal_one || data.goal_two ? section('Coaching Goals', tableRows([
      row('Goal One', data.goal_one),
      row('Goal Two', data.goal_two),
    ].join(''))) : ''}

    ${section('Coachability Self-Assessment (1–5)', (() => {
      const statements = [
        'Punctuality and rescheduling',
        'Coming with an agenda',
        'Willingness to do the work',
        'Trying new behaviors',
        'Speaking straight',
        'Stopping self-defeating behaviors',
        'Financial readiness',
        'Substance clarity',
      ]
      const ratings = data.coachable_ratings || []
      return tableRows(statements.map((s, i) => row(s, ratings[i] || '—')).join(''))
    })())}

  </div>

  <div style="padding:12px 28px;background:#1A1A1A;color:rgba(255,255,255,0.35);font-size:10px;letter-spacing:0.12em;text-transform:uppercase;">
    The Wilson Co. · thewilson.co
  </div>
</div>`

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
          subject: `New Coaching Agreement — ${data.client_name || 'Unknown client'}`,
          html,
        }),
      })
      if (!res.ok) {
        const errText = await res.text()
        console.error('Resend error:', errText)
        return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
      }
    } else {
      console.log('[Coaching Agreement Submission]', JSON.stringify(data, null, 2))
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Coaching agreement route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
