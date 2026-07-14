

"use client";
import Link from 'next/link';

export default function Page() {
  return (
    <main id="top" className="wrap" data-od-id="main">
      
      <Link className="back-link" href="/index">← Back to home</Link>

      <section className="page-header" data-od-id="page-header">
        <span className="eyebrow">Installation</span>
        <h1>Two commands to your first report</h1>
        <p>Install the skill, point it at your docs, get a full AEO audit in 60 seconds.</p>
      </section>

      <section className="steps" data-od-id="steps">
        <article className="step" data-od-id="step-1">
          <div className="step-num">01</div>
          <div className="step-body">
            <h3>Clone the repository</h3>
            <p>Clone the AEO skill repo to your local machine. This gives you the full skill files, templates, and configuration.</p>
            <div className="code-block">
              Coming soon
            </div>
          </div>
        </article>

        <article className="step" data-od-id="step-2">
          <div className="step-num">02</div>
          <div className="step-body">
            <h3>Install via any coding agent</h3>
            <p>Use your preferred coding agent to register the skill. This adds it to your available skills list.</p>
            <div className="code-block">
              Coming soon
            </div>
          </div>
        </article>

        <article className="step" data-od-id="step-3">
          <div className="step-num">03</div>
          <div className="step-body">
            <h3>Run your first audit</h3>
            <p>Point the skill at your docs directory. It will scan every page, test AI crawlability, and produce a scored report.</p>
            <div className="code-block">
              Coming soon
            </div>
          </div>
        </article>

        <article className="step" data-od-id="step-4">
          <div className="step-num">04</div>
          <div className="step-body">
            <h3>Read your report</h3>
            <p>The audit produces a scored report with prioritized fixes. Each finding includes the issue, why it matters for AEO, and the specific change to make.</p>
            <div className="note">
              <strong>What the report includes:</strong>
              <p>0–100 citation score, passage-level rankings, intent coverage map, E-E-A-T assessment, schema validation, AI crawlability tests for ChatGPT/Perplexity/Google, and a prioritized action list.</p>
            </div>
          </div>
        </article>
      </section>

      <section data-od-id="requirements">
        <h3 style={{margin: "0 0 16px", fontSize: "20px", fontWeight: "700"}}>Requirements</h3>
        <div className="req-grid">
          <div className="req" data-od-id="req-python">
            <h4>Python 3.10+</h4>
            <p>The skill runs on Python. Version 3.10 or higher is required.</p>
          </div>
          <div className="req" data-od-id="req-agent">
            <h4>Any Coding Agent</h4>
            <p>Works with any coding agent (Codex, Cursor, Copilot, etc.) that can register and run AEO audits.</p>
          </div>
          <div className="req" data-od-id="req-git">
            <h4>Git</h4>
            <p>For cloning the repo and connecting to GitHub.</p>
          </div>
        </div>
      </section>
    
    </main>
  );
}
