

import Link from 'next/link';

export default function Page() {
  return (
    <main id="top" className="wrap" data-od-id="main">
      
      <Link className="back-link" href="/index">← Back to home</Link>

      <section className="page-header" data-od-id="page-header">
        <span className="eyebrow">About</span>
        <h1>The team behind AEO</h1>
        <p>We're building tools to help developers get cited, not just ranked.</p>
      </section>

      <section className="about-body" data-od-id="about-body">
        <div className="copy" data-od-id="about-story">
          <p>Most documentation teams optimize for Google. We optimize for the tools people actually use now — ChatGPT, Perplexity, Google AI Overviews, and agent-based retrieval systems.</p>
          <p>AEO Skill started as an internal tool. We kept running the same manual checks: Is the page parseable? Does the schema validate? Are the headings structured for extraction? Is the content answering the right questions?</p>
          <p>We built a skill to automate all of it. Now it runs in CI, catches regressions before they ship, and gives developers a single score to track.</p>
          <p>The goal is simple: make your docs the source AI models trust.</p>
        </div>

        <div className="copy" data-od-id="about-values">
          <p><strong>Ship measurable.</strong> Every feature produces a number you can track. No vanity metrics.</p>
          <p><strong>Test against real models.</strong> We run audits against ChatGPT, Perplexity, and Google — not synthetic benchmarks.</p>
          <p><strong>Opinionated defaults.</strong> The strict quality gate is on by default because most docs need it. Override if you want, but start strict.</p>
          <p><strong>Open source.</strong> The skill, the scoring model, and the reports are all public. You can fork, modify, or contribute.</p>
        </div>
      </section>

      <section className="team" data-od-id="team">
        <h2>Contributors</h2>
        <div className="team-grid">
          <div className="person" data-od-id="person-1">
            <div className="avatar">AK</div>
            <h4>Alex Kim</h4>
            <p>Creator & maintainer</p>
          </div>
          <div className="person" data-od-id="person-2">
            <div className="avatar">SR</div>
            <h4>Sara Ramirez</h4>
            <p>Scoring model</p>
          </div>
          <div className="person" data-od-id="person-3">
            <div className="avatar">JM</div>
            <h4>James Mitchell</h4>
            <p>Schema validation</p>
          </div>
          <div className="person" data-od-id="person-4">
            <div className="avatar">LP</div>
            <h4>Lena Park</h4>
            <p>AI crawlability tests</p>
          </div>
        </div>
      </section>

      <section className="sponsor-section" data-od-id="sponsors">
        <h2>Sponsors</h2>
        <p>Supporting the project keeps it free and open source.</p>
        <div className="sponsor-grid">
          <div className="sponsor" data-od-id="sponsor-1">
            <div className="sponsor-logo">V</div>
            <div className="sponsor-info">
              <h4>Vercel</h4>
              <p>Infrastructure partner</p>
            </div>
          </div>
          <div className="sponsor" data-od-id="sponsor-2">
            <div className="sponsor-logo">S</div>
            <div className="sponsor-info">
              <h4>Stripe</h4>
              <p>Funding support</p>
            </div>
          </div>
          <div className="sponsor" data-od-id="sponsor-3">
            <div className="sponsor-logo">N</div>
            <div className="sponsor-info">
              <h4>Netlify</h4>
              <p>Hosting & CDN</p>
            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}
