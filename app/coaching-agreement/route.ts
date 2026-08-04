import { NextResponse } from 'next/server'

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Wilson Co. — Executive Coaching Packet</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');
  :root{--denim:#2E4E61;--denim-dim:#416278;--oak:#5D6B3D;--hydrangea:#A8BCCE;--hydrangea-soft:#EDF2F5;--paper:#FBFAF7;--ink:#26333B;--line:#D7DEE2;}
  *{box-sizing:border-box;}
  body{margin:0;background:var(--paper);color:var(--ink);font-family:'Jost',sans-serif;font-weight:300;line-height:1.6;}
  .sheet{max-width:800px;margin:0 auto;padding:0 0 80px;}
  header{padding:56px 48px 40px;text-align:center;border-bottom:1px solid var(--line);}
  .mark{width:64px;height:64px;margin:0 auto 18px;border-radius:50%;border:1px solid var(--denim);display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:22px;letter-spacing:2px;color:var(--denim);}
  .brand{font-family:'Jost',sans-serif;font-size:12px;letter-spacing:5px;text-transform:uppercase;color:var(--denim);margin:0 0 6px;}
  .brand-sub{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--oak);margin:0 0 26px;}
  h1.title{font-family:'Cormorant Garamond',serif;font-weight:500;font-style:italic;font-size:40px;color:var(--denim);margin:0 0 10px;}
  .tagline{font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--denim-dim);}
  .tagline span{color:var(--hydrangea);margin:0 8px;}
  section{padding:44px 48px;border-bottom:1px solid var(--line);}
  section:last-of-type{border-bottom:none;}
  .eyebrow{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--oak);margin:0 0 4px;}
  h2{font-family:'Cormorant Garamond',serif;font-weight:500;font-size:27px;color:var(--denim);margin:0 0 22px;}
  p.lede{font-size:15px;color:var(--denim-dim);max-width:620px;margin:-10px 0 26px;}
  .field-group-title{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:500;font-size:18px;color:var(--denim);margin:36px 0 18px;padding-top:22px;border-top:1px dashed var(--line);}
  .field-group-title:first-child{border-top:none;padding-top:0;margin-top:0;}
  .hint{font-size:11.5px;color:var(--denim-dim);margin:-12px 0 18px;}
  .grid{display:grid;gap:22px 28px;}
  .g2{grid-template-columns:1fr 1fr;}
  .g3{grid-template-columns:1.4fr 1fr 0.7fr;}
  .g4{grid-template-columns:1fr 1fr 1fr 1fr;}
  .field{display:flex;flex-direction:column;}
  .field label{font-size:10.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--oak);margin-bottom:7px;}
  .field input,.field textarea,.field select{font-family:'Jost',sans-serif;font-weight:400;font-size:15px;color:var(--ink);background:transparent;border:none;border-bottom:1px solid var(--line);padding:6px 2px 9px;outline:none;transition:border-color .2s ease;}
  .field input:focus,.field textarea:focus,.field select:focus{border-bottom:1px solid var(--denim);}
  .field textarea{resize:vertical;min-height:46px;line-height:1.6;border:1px solid var(--line);border-radius:3px;padding:12px;}
  .field textarea:focus{border-color:var(--denim);}
  .vision-box textarea{min-height:150px;}
  .clause{margin-bottom:26px;}
  .clause h3{font-family:'Jost',sans-serif;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:var(--denim);margin:0 0 8px;}
  .clause p{font-size:14.5px;color:var(--ink);margin:0 0 8px;}
  .clause ul{margin:8px 0;padding-left:20px;}
  .clause li{font-size:14.5px;margin-bottom:6px;}
  .parties-line{font-size:15px;margin-bottom:30px;}
  .parties-line input{border:none;border-bottom:1px solid var(--denim);background:transparent;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:17px;color:var(--denim);padding:2px 6px;width:260px;outline:none;}
  .parties-line b{color:var(--denim);font-weight:500;}
  .initial-row{display:flex;align-items:center;gap:14px;margin:14px 0 4px;padding:14px 16px;background:var(--hydrangea-soft);border-radius:4px;}
  .initial-row p{margin:0;font-size:14px;flex:1;}
  .initial-box{width:64px;border:none;border-bottom:1px solid var(--denim);background:transparent;text-align:center;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:16px;padding:4px 0;outline:none;color:var(--denim);}
  .initial-label{font-size:9.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--oak);}
  .sig-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:34px;}
  .sig-block label{display:block;font-size:10.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--oak);margin-bottom:24px;}
  .sig-line{border-bottom:1px solid var(--denim);padding-bottom:8px;margin-bottom:8px;min-height:30px;}
  .sig-line input{width:100%;border:none;background:transparent;outline:none;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:18px;color:var(--denim);}
  .sig-sub{font-size:10px;color:var(--denim-dim);letter-spacing:0.5px;}
  .area-block{margin-bottom:30px;padding-bottom:26px;border-bottom:1px dashed var(--line);}
  .area-block:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
  .area-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px;}
  .area-head h3{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:19px;color:var(--denim);margin:0;}
  .area-avg{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--oak);}
  .area-avg output{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:20px;color:var(--denim);margin-left:6px;}
  .q-row{display:grid;grid-template-columns:1fr 70px;align-items:center;gap:16px;padding:8px 0;border-bottom:1px solid var(--line);}
  .q-row:last-child{border-bottom:none;}
  .q-row p{margin:0;font-size:14px;color:var(--ink);}
  .q-row input{width:100%;text-align:center;border:1px solid var(--line);border-radius:3px;padding:6px 4px;font-family:'Jost',sans-serif;font-size:14px;outline:none;background:#fff;}
  .q-row input:focus{border-color:var(--denim);}
  .scale-key{font-size:11px;color:var(--denim-dim);letter-spacing:0.5px;margin-bottom:24px;padding:10px 16px;background:var(--hydrangea-soft);border-radius:4px;display:inline-block;}
  .summary-box{margin-top:8px;padding:24px;background:var(--denim);border-radius:6px;color:#fff;}
  .summary-box h3{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:500;font-size:20px;margin:0 0 16px;color:#fff;}
  .summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
  .summary-item{text-align:center;}
  .summary-item .lbl{font-size:9.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--hydrangea);margin-bottom:6px;}
  .summary-item output{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:24px;}
  .goals{margin-top:26px;}
  .goals .field{margin-bottom:18px;}
  .coach-row{padding:18px 0;border-bottom:1px solid var(--line);}
  .coach-row:last-child{border-bottom:none;}
  .coach-row p{margin:0 0 12px;font-size:14.5px;}
  .coach-row.note p{font-size:12.5px;color:var(--denim-dim);font-style:italic;}
  .scale{display:flex;gap:10px;}
  .scale label{display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;font-size:10px;color:var(--denim-dim);}
  .scale input[type=radio]{appearance:none;width:26px;height:26px;border-radius:50%;border:1px solid var(--hydrangea);display:grid;place-items:center;margin:0;cursor:pointer;transition:border-color .15s ease;}
  .scale input[type=radio]::before{content:"";width:12px;height:12px;border-radius:50%;background:var(--denim);transform:scale(0);transition:transform .15s ease;}
  .scale input[type=radio]:checked::before{transform:scale(1);}
  .scale input[type=radio]:checked{border-color:var(--denim);}
  footer{text-align:center;padding:40px 48px 0;}
  footer .brand-foot{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--denim);margin-bottom:6px;}
  footer .url{font-size:11px;color:var(--denim-dim);}
  .action-bar{position:sticky;top:0;z-index:10;background:var(--denim);padding:14px 48px;display:flex;justify-content:flex-end;gap:12px;}
  .action-bar button{font-family:'Jost',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#fff;background:transparent;border:1px solid rgba(255,255,255,0.5);border-radius:3px;padding:9px 18px;cursor:pointer;transition:all .15s ease;}
  .action-bar button:hover{background:rgba(255,255,255,0.12);border-color:#fff;}
  .action-bar button.primary{background:var(--oak);border-color:var(--oak);}
  .action-bar button.primary:hover{background:#4d5931;}
  .action-bar button:disabled{opacity:0.5;cursor:default;}
  .toast{display:none;position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:#1a2e1a;color:#fff;padding:14px 24px;border-radius:6px;font-size:13px;letter-spacing:0.05em;z-index:100;box-shadow:0 4px 20px rgba(0,0,0,0.25);}
  .toast.show{display:block;}
  @media print{.action-bar{display:none;}body{background:#fff;}section{break-inside:avoid;}}
  @media (max-width:640px){header,section,footer{padding-left:24px;padding-right:24px;}.g2,.g3,.g4{grid-template-columns:1fr;}.sig-grid{grid-template-columns:1fr;}.summary-grid{grid-template-columns:1fr 1fr;}.scale{flex-wrap:wrap;}}
</style>
</head>
<body>

<div class="action-bar">
  <button type="button" onclick="window.print()">Print / Save PDF</button>
  <button type="button" class="primary" id="submitBtn" onclick="submitForm()">Submit to Coach →</button>
</div>

<div id="toast" class="toast"></div>

<div class="sheet">

  <header>
    <p class="brand">The Wilson Co.</p>
    <p class="brand-sub">Coaching &amp; Consulting</p>
    <h1 class="title">Executive Coaching Packet</h1>
    <p class="tagline">Clarity <span>·</span> Confidence <span>·</span> Purpose</p>
  </header>

  <!-- CONTACT -->
  <section>
    <p class="eyebrow">Step One</p>
    <h2>Your Information</h2>
    <div class="grid g2">
      <div class="field"><label>Name</label><input type="text" id="f_client_name"></div>
      <div class="field"><label>Date</label><input type="date" id="f_date"></div>
    </div>
    <div class="grid g3" style="margin-top:22px;">
      <div class="field"><label>Name of Business</label><input type="text" id="f_business_name"></div>
      <div class="field"><label>Title</label><input type="text" id="f_title"></div>
      <div class="field"><label>Type of Business</label><input type="text" id="f_business_type"></div>
    </div>
    <div class="grid g4" style="margin-top:22px;">
      <div class="field" style="grid-column:span 2;"><label>Business Address</label><input type="text" id="f_business_address"></div>
      <div class="field"><label>City</label><input type="text" id="f_business_city"></div>
      <div class="field"><label>State / Zip</label><input type="text" id="f_business_state_zip"></div>
    </div>
    <div class="grid g2" style="margin-top:22px;">
      <div class="field"><label>Business Phone</label><input type="tel" id="f_business_phone"></div>
      <div class="field"><label>Business E-mail</label><input type="email" id="f_business_email"></div>
    </div>
    <div class="grid g4" style="margin-top:22px;">
      <div class="field" style="grid-column:span 2;"><label>Home Address</label><input type="text" id="f_home_address"></div>
      <div class="field"><label>City</label><input type="text" id="f_home_city"></div>
      <div class="field"><label>State / Zip</label><input type="text" id="f_home_state_zip"></div>
    </div>
    <div class="grid g2" style="margin-top:22px;">
      <div class="field"><label>Home Phone</label><input type="tel" id="f_home_phone"></div>
      <div class="field"><label>Home E-mail</label><input type="email" id="f_home_email"></div>
    </div>
    <div class="grid g3" style="margin-top:22px;">
      <div class="field"><label>Cell Phone</label><input type="tel" id="f_cell_phone"></div>
      <div class="field"><label>Birthday (m/d)</label><input type="text" placeholder="MM/DD" id="f_birthday"></div>
      <div class="field"><label>Executive Assistant Name (optional)</label><input type="text" id="f_ea_name"></div>
    </div>
    <div class="grid g2" style="margin-top:22px;">
      <div class="field"><label>Executive Assistant Phone (optional)</label><input type="tel" id="f_ea_phone"></div>
      <div class="field"><label>Executive Assistant E-mail (optional)</label><input type="email" id="f_ea_email"></div>
    </div>

    <p class="field-group-title">Professional Background</p>
    <div class="grid g2">
      <div class="field"><label>LinkedIn URL</label><input type="url" placeholder="linkedin.com/in/" id="f_linkedin"></div>
      <div class="field"><label>Industry / Practice Area</label><input type="text" placeholder="e.g. litigation, private equity, corporate banking" id="f_industry"></div>
    </div>
    <div class="grid g2" style="margin-top:22px;">
      <div class="field">
        <label>Employment Status</label>
        <select id="f_employment_status">
          <option value="">Select one</option>
          <option>Employed</option>
          <option>In Transition</option>
          <option>Actively Searching</option>
        </select>
      </div>
      <div class="field">
        <label>How Did You Hear About The Wilson Co.?</label>
        <input type="text" placeholder="e.g. referral, LinkedIn, Substack" id="f_how_heard">
      </div>
    </div>

    <p class="field-group-title">Session Preferences</p>
    <div class="grid g2">
      <div class="field">
        <label>Preferred Session Format</label>
        <select id="f_session_format">
          <option value="">Select one</option>
          <option>Phone</option>
          <option>Video (Zoom / FaceTime)</option>
          <option>In Person (NYC only)</option>
        </select>
      </div>
      <div class="field">
        <label>Preferred Cadence</label>
        <select id="f_cadence">
          <option value="">Select one</option>
          <option>Weekly</option>
          <option>Biweekly</option>
          <option>Monthly</option>
          <option>As needed</option>
        </select>
      </div>
    </div>
    <p class="hint">In-person sessions are available for New York City–based clients only. All other clients meet by phone or video.</p>
    <div class="grid g2">
      <div class="field"><label>Time Zone</label><input type="text" placeholder="e.g. ET, CT, PT" id="f_timezone"></div>
      <div class="field"><label>Best Times to Reach You</label><input type="text" placeholder="e.g. weekday mornings" id="f_best_times"></div>
    </div>
  </section>

  <!-- WELCOME / VISION -->
  <section>
    <p class="eyebrow">Step Two</p>
    <h2>Welcome to Coaching</h2>
    <p class="lede">I look forward to working with you to reach the goals and results that are important to you.</p>
    <div class="field vision-box">
      <label>What do you want to achieve in coaching by the end of our time? What would your personal and professional life look like if, in 3–4 months, this was a wildly successful engagement for you?</label>
      <textarea id="f_vision"></textarea>
    </div>
  </section>

  <!-- AGREEMENT -->
  <section>
    <p class="eyebrow">Step Three</p>
    <h2>Executive Coaching Agreement</h2>

    <p class="parties-line">This is a coaching agreement between the client, <input type="text" placeholder="client name" id="f_agreement_client_name">, and the coach, <b>Morgan Wilson</b>.</p>

    <div class="clause">
      <h3>Confidentiality</h3>
      <p>All information — documented or verbal — that the client conveys to the coach is confidential and is not shared with anyone else, unless the client chooses to share it. We recognize the client may disclose future plans, business dealings, and other proprietary information; the coach will not, directly or indirectly, use any such information for the coach's own benefit.</p>
      <p>The coaching relationship is not privileged, and a coach's records on a client can be subpoenaed. I do not reveal or discuss any aspect of it with anyone else, unless under subpoena or required to report — as a professional — a threat of serious harm to yourself or others.</p>
    </div>

    <div class="clause">
      <h3>Nature of the Relationship</h3>
      <p>A client enters coaching with the understanding that they are responsible for creating their own goals, choices, and results. The client employs the coach to advise and support them on life skills, communication skills, business and professional objectives, networking skills, interpersonal relationships, and/or to provide a structure for identifying and moving toward goals.</p>
      <p>The coaching relationship is in no way to be construed as psychological counseling or any type of psychotherapy. My signature on this document means I understand and accept that I am a client for a coaching program, not for therapy.</p>
    </div>

    <div class="clause">
      <h3>Extra Time</h3>
      <p>You are welcome to — and encouraged to — call between scheduled sessions if you need advice, have a problem, or can't wait to share a success.</p>
    </div>

    <div class="clause">
      <h3>Termination</h3>
      <p>The client may cancel this contract at any time. Notice of cancellation must be in the form of a conversation.</p>
      <div class="initial-row">
        <p>I acknowledge that if paying monthly, payments made are considered payment-in-full for the coming month; if I cancel, that month's payment will not be returned except in the event of an emergency. Monies owed at cancellation remain due and payable. Advance payments for future sessions may be refunded proportionately by agreement between parties.</p>
        <div>
          <input type="text" class="initial-box" maxlength="4" id="f_initial_termination">
          <div class="initial-label">Initial</div>
        </div>
      </div>
    </div>

    <div class="clause">
      <h3>Scheduling</h3>
      <div class="initial-row">
        <p>I understand that at least 12 hours' notice is required for rescheduling. I may text anytime regarding a scheduling issue — if inside the 12-hour window, the session is billable. In a true emergency, the coach will work with me to reschedule the missed session. If meeting in person isn't possible, we may use a phone call, FaceTime, or Zoom.</p>
        <div>
          <input type="text" class="initial-box" maxlength="4" id="f_initial_scheduling">
          <div class="initial-label">Initial</div>
        </div>
      </div>
    </div>

    <p style="font-size:13.5px;color:var(--denim-dim);margin-top:24px;">The preceding Coaching Agreement is intended to provide clarity and establish the business framework we agree to work within. Please sign below — one copy is retained by each party.</p>

    <div class="sig-grid">
      <div class="sig-block">
        <label>Client Signature</label>
        <div class="sig-line"><input type="text" placeholder="" id="f_sig_client"></div>
        <div class="sig-sub">Date: _______________</div>
      </div>
      <div class="sig-block">
        <label>Coach Signature</label>
        <div class="sig-line"><input type="text" value="Morgan Wilson" readonly></div>
        <div class="sig-sub">Date: _______________</div>
      </div>
    </div>
  </section>

  <!-- PRE-COACHING INVENTORY -->
  <section id="inventory">
    <p class="eyebrow">Step Four</p>
    <h2>Pre-Coaching Inventory</h2>
    <p class="lede">Rate your level of fulfillment in each area of your life below, from 0 (unfulfilled) to 10 (ultimate fulfillment). Leave a question blank if it isn't applicable — averages are calculated automatically.</p>
    <p class="scale-key">0 — Unfulfilled &nbsp;·&nbsp; 5 — Fulfilled &nbsp;·&nbsp; 10 — Ultimate Fulfillment</p>

    <div id="areas"></div>

    <div class="summary-box">
      <h3>Your Averages, at a Glance</h3>
      <div class="summary-grid" id="summary-grid"></div>
    </div>

    <div class="goals">
      <p class="lede" style="margin-top:26px;">Based on your scores, what are the areas you'd like to focus on during coaching? Choose your top two goals.</p>
      <div class="field"><label>Goal One</label><textarea id="f_goal_one"></textarea></div>
      <div class="field"><label>Goal Two</label><textarea id="f_goal_two"></textarea></div>
    </div>
  </section>

  <!-- HOW COACHABLE -->
  <section>
    <p class="eyebrow">Step Five</p>
    <h2>How Coachable Are You?</h2>
    <p class="lede">Check the box closest to how true each statement is for you right now. This helps your coach — and you — discover how coachable you are at this time.</p>
    <p class="scale-key">1 — Less True &nbsp;·&nbsp; 5 — More True</p>

    <div id="coachable"></div>
  </section>

  <footer>
    <p class="brand-foot">The Wilson Co.</p>
    <p class="url">www.thewilson.co</p>
  </footer>

</div>

<script>
  const areas = [
    { name: "Relationship", questions: [
      "How fulfilled are you with your most intimate relationship?",
      "How fulfilled are you with the relationship with your immediate family members?",
      "How fulfilled are you with your work relationships?",
      "How fulfilled are you with your friendships?"
    ]},
    { name: "Environment", questions: [
      "How fulfilled are you with the current location of your home?",
      "How fulfilled are you with the current organization of your home?",
      "How fulfilled are you with the work space of your business?",
      "How fulfilled are you with the amount of natural beauty and tranquility in your environment?"
    ]},
    { name: "Fun", questions: [
      "How fulfilled are you with the amount of time you have to relax?",
      "How fulfilled are you with the amount of time you have to spend on fun activities?",
      "How fulfilled are you with the quality of your fun time?",
      "How fulfilled are you with the number of fun people in your life?"
    ]},
    { name: "Finances", questions: [
      "How fulfilled are you with the amount of money you have?",
      "How fulfilled are you with the amount of money you keep?",
      "How fulfilled are you with how you spend your money?",
      "How fulfilled are you with your relationship to money?"
    ]},
    { name: "Spiritual Life", questions: [
      "How fulfilled are you with your spiritual life?",
      "How fulfilled are you with your plan for personal growth?",
      "How fulfilled are you with your relationship with yourself?",
      "How fulfilled are you with your relationship with, or without, a higher power?"
    ]},
    { name: "Career", questions: [
      "How fulfilled are you with the way you use your talents on the job?",
      "How fulfilled are you that you are doing something in your career that you love?",
      "How fulfilled are you that the work you do has value to society?",
      "How fulfilled are you with knowing and living a higher purpose in life?"
    ]},
    { name: "Health", questions: [
      "How fulfilled are you with your diet?",
      "How fulfilled are you with the amount of time you exercise?",
      "How fulfilled are you with the amount of rest you are currently getting?",
      "How fulfilled are you with the amount of self-care you currently give yourself?"
    ]}
  ];

  const areasEl = document.getElementById('areas');
  const summaryGrid = document.getElementById('summary-grid');

  areas.forEach((area, ai) => {
    const block = document.createElement('div');
    block.className = 'area-block';
    block.innerHTML = \`
      <div class="area-head">
        <h3>\${ai+1}. \${area.name}</h3>
        <span class="area-avg">Average<output id="avg-\${ai}">—</output></span>
      </div>
      \${area.questions.map((q,qi) => \`
        <div class="q-row">
          <p>\${q}</p>
          <input type="number" min="0" max="10" step="1" data-area="\${ai}" data-qi="\${qi}" class="score-input" />
        </div>
      \`).join('')}
    \`;
    areasEl.appendChild(block);

    const item = document.createElement('div');
    item.className = 'summary-item';
    item.innerHTML = \`<div class="lbl">\${area.name}</div><output id="sum-\${ai}">—</output>\`;
    summaryGrid.appendChild(item);
  });

  function recalc(ai){
    const inputs = document.querySelectorAll(\`.score-input[data-area="\${ai}"]\`);
    let total = 0, count = 0;
    inputs.forEach(inp => {
      const v = parseFloat(inp.value);
      if(!isNaN(v)){ total += v; count++; }
    });
    const avg = count ? (total/count).toFixed(1) : '—';
    document.getElementById(\`avg-\${ai}\`).textContent = avg;
    document.getElementById(\`sum-\${ai}\`).textContent = avg;
  }

  document.querySelectorAll('.score-input').forEach(inp => {
    inp.addEventListener('input', () => recalc(inp.dataset.area));
  });

  const coachable = [
    "I can be relied upon to be on time for scheduled calls and appointments, and to call the coach and reschedule when needed.",
    "I will come to our sessions with an agenda or an idea about how I would like to use our time together.",
    "I am fully willing to do the work required of me to achieve my goals. I will commit to writing 30 minutes a day, first thing in the morning.",
    "I'll give my coach the benefit of the doubt and \\u201Ctry on\\u201D new behaviors or different ways of thinking.",
    "I will speak straight (tell the whole truth) to my coach.",
    "I am willing to stop or change the self-defeating behaviors that limit my success.",
    "I can financially afford coaching without going into debt.",
    "I have no dependency on substances that alter my ability to think clearly and act responsibly at all times, or I am in recovery and receiving the support I need."
  ];

  const coachEl = document.getElementById('coachable');
  coachable.forEach((text, i) => {
    const row = document.createElement('div');
    row.className = 'coach-row' + (i === coachable.length - 1 ? ' note' : '');
    row.innerHTML = \`
      <p>\${text}\${i === coachable.length -1 ? ' *' : ''}</p>
      <div class="scale">
        \${[1,2,3,4,5].map(n => \`
          <label>
            <input type="radio" name="coach-\${i}" value="\${n}">
            \${n}
          </label>
        \`).join('')}
      </div>
    \`;
    coachEl.appendChild(row);
  });

  function val(id){ return (document.getElementById(id)||{}).value || ''; }

  function showToast(msg, isError){
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.style.background = isError ? '#6b1a1a' : '#1a2e1a';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
  }

  async function submitForm(){
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Submitting…';

    const areaData = {};
    areas.forEach((area, ai) => {
      const key = 'area_' + area.name.toLowerCase().replace(/\\s+/g,'_');
      const inputs = document.querySelectorAll(\`.score-input[data-area="\${ai}"]\`);
      areaData[key] = Array.from(inputs).map(i => i.value);
    });

    const coachableRatings = coachable.map((_, i) => {
      const checked = document.querySelector(\`input[name="coach-\${i}"]:checked\`);
      return checked ? checked.value : '';
    });

    const payload = {
      client_name: val('f_client_name'),
      date: val('f_date'),
      business_name: val('f_business_name'),
      title: val('f_title'),
      business_type: val('f_business_type'),
      business_address: val('f_business_address'),
      business_city: val('f_business_city'),
      business_state_zip: val('f_business_state_zip'),
      business_phone: val('f_business_phone'),
      business_email: val('f_business_email'),
      home_address: val('f_home_address'),
      home_city: val('f_home_city'),
      home_state_zip: val('f_home_state_zip'),
      home_phone: val('f_home_phone'),
      home_email: val('f_home_email'),
      cell_phone: val('f_cell_phone'),
      birthday: val('f_birthday'),
      ea_name: val('f_ea_name'),
      ea_phone: val('f_ea_phone'),
      ea_email: val('f_ea_email'),
      linkedin: val('f_linkedin'),
      industry: val('f_industry'),
      employment_status: val('f_employment_status'),
      how_heard: val('f_how_heard'),
      session_format: val('f_session_format'),
      cadence: val('f_cadence'),
      timezone: val('f_timezone'),
      best_times: val('f_best_times'),
      vision: val('f_vision'),
      agreement_client_name: val('f_agreement_client_name'),
      initial_termination: val('f_initial_termination'),
      initial_scheduling: val('f_initial_scheduling'),
      sig_client: val('f_sig_client'),
      goal_one: val('f_goal_one'),
      goal_two: val('f_goal_two'),
      coachable_ratings: coachableRatings,
      ...areaData,
    };

    try {
      const res = await fetch('/api/coaching-agreement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if(res.ok){
        showToast('✓ Submitted successfully — Morgan will be in touch soon.');
        btn.textContent = '✓ Submitted';
      } else {
        showToast('Something went wrong. Please try again.', true);
        btn.disabled = false;
        btn.textContent = 'Submit to Coach →';
      }
    } catch(e){
      showToast('Network error — please try again.', true);
      btn.disabled = false;
      btn.textContent = 'Submit to Coach →';
    }
  }
</script>

</body>
</html>`

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
