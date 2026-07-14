
'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <main id="top" className="wrap" data-od-id="main">
      
      <section className="hero" data-od-id="hero-section">
        <h1 data-od-id="hero-heading">AEO that is always online</h1>
        <div className="hero-side" data-od-id="hero-side">
          <p data-od-id="hero-copy">You can publish your skill, install guide, GitHub report, quality checks, and sponsor path whenever you want.</p>
          <div className="hero-actions" data-od-id="hero-actions">
            <a className="cta" href="#install" data-od-id="hero-primary-cta">Open skill report</a>
            <a className="mini-link" href="#install" data-od-id="hero-secondary-cta"><span className="round-btn">›</span> Get the skill</a>
          </div>
        </div>
      </section>

      <section className="dashboard" data-od-id="dashboard-section">
        <div className="left-stack">
          <article className="card pad" id="account" data-od-id="what-aeo-card">
            <div className="card-header">
              <h2>What AEO does</h2>
              <span className="version">answer engine optimization</span>
            </div>
            <div className="update-body">
              <div className="update-copy">
                <h3>Your content, cited by AI</h3>
                <p>Answer Engine Optimization makes your docs the source that ChatGPT, Perplexity, and Google AI Overviews pull from. The skill scans your content for citation gaps, intent coverage, and passage-level rankability — then gives you a fix list.</p>
                <a className="read-link" href="#quality" data-od-id="read-full-version"><span>↗</span> See what it checks</a>
              </div>
              <svg className="layered-svg" viewBox="0 0 430 260" role="img" aria-label="Stacked AEO report cards illustration">
                <g transform="translate(38 18)">
                  <rect x="42" y="78" width="285" height="92" rx="14" fill="#f6f6f3" stroke="#11111b" strokeWidth="3" transform="rotate(-16 184 124)"/>
                  <rect x="42" y="96" width="285" height="92" rx="14" fill="#f6f6f3" stroke="#11111b" strokeWidth="3" transform="rotate(-9 184 142)"/>
                  <rect x="42" y="114" width="285" height="92" rx="14" fill="#f6f6f3" stroke="#11111b" strokeWidth="3" transform="rotate(-3 184 160)"/>
                  <rect x="74" y="70" width="245" height="84" rx="12" fill="#f6f6f3" stroke="#11111b" strokeWidth="3" transform="rotate(-19 196 112)"/>
                  <rect x="94" y="77" width="180" height="18" fill="#ff735f" transform="rotate(-19 184 86)"/>
                  <rect x="110" y="122" width="82" height="22" fill="#11111b" transform="rotate(-19 151 133)"/>
                  <rect x="254" y="95" width="46" height="16" fill="#11111b" transform="rotate(-19 277 103)"/>
                </g>
              </svg>
            </div>
          </article>

          <article className="card pad expert-card" data-od-id="expert-card">
            <div>
              <h3>Built for the people who ship docs</h3>
              <p>Developer advocates, technical writers, open-source maintainers — anyone whose work needs to show up when someone asks an AI a question. Connect your repo, point it at your docs, get a ranking report.</p>
            </div>
            <div className="portrait-row" aria-hidden="true">
              <div className="portrait">
                <svg viewBox="0 0 126 150">
                  <rect width="126" height="150" fill="#e8e6dc"/>
                  <circle cx="63" cy="49" r="28" fill="#11111b"/>
                  <path d="M27 150 C34 94 92 94 99 150" fill="#ff735f"/>
                </svg>
              </div>
              <div className="portrait">
                <svg viewBox="0 0 126 150">
                  <rect width="126" height="150" fill="#ff735f"/>
                  <circle cx="63" cy="50" r="27" fill="#11111b"/>
                  <path d="M22 150 C28 102 98 102 104 150" fill="#f6f6f3"/>
                </svg>
              </div>
              <div className="portrait">
                <svg viewBox="0 0 126 150">
                  <rect width="126" height="150" fill="#f6f6f3"/>
                  <circle cx="63" cy="50" r="27" fill="#11111b"/>
                  <path d="M24 150 C30 98 96 98 102 150" fill="#e8e6dc"/>
                </svg>
              </div>
            </div>
          </article>
        </div>

        <div className="right-stack">
          <article className="small-card coral" id="products" data-od-id="send-money-card">
            <h3>Citation score <span className="icon-circle">−</span></h3>
            <p>Measures how likely AI engines are to cite your content. Passages, not just pages.</p>
          </article>
          <article className="small-card" data-od-id="receive-money-card">
            <h3>Intent coverage <span className="icon-circle">+</span></h3>
          </article>
          <article className="small-card" data-od-id="cashback-card">
            <h3>Quality gates <span className="icon-circle">+</span></h3>
          </article>
        </div>
      </section>

      <section className="features" id="features" data-od-id="features-section">
        <div className="features-header">
          <h2>What you get</h2>
          <span className="tag">12 capabilities</span>
        </div>
        <div className="features-grid">
          <article className="feat" data-od-id="feat-citation">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <h4>Citation scoring</h4>
            <p>Passage-level analysis of how likely AI engines are to cite your content.</p>
          </article>
          <article className="feat" data-od-id="feat-intent">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <h4>Intent mapping</h4>
            <p>Maps every user query your docs should answer and flags the gaps.</p>
          </article>
          <article className="feat" data-od-id="feat-eeat">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <h4>E-E-A-T scoring</h4>
            <p>Experience, Expertise, Authoritativeness, Trust — per Google's 2025 QRG.</p>
          </article>
          <article className="feat" data-od-id="feat-schema">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
            </div>
            <h4>Schema validation</h4>
            <p>Detects, validates, and generates JSON-LD structured data markup.</p>
          </article>
          <article className="feat" data-od-id="feat-chatgpt">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h4>ChatGPT access</h4>
            <p>Tests GPTBot crawlability and passage-level citability for your pages.</p>
          </article>
          <article className="feat" data-od-id="feat-perplexity">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <h4>Perplexity crawl</h4>
            <p>Verifies PerplexityBot can reach and index your key pages.</p>
          </article>
          <article className="feat" data-od-id="feat-google-ai">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h4>Google AI Overview</h4>
            <p>Optimizes for citation in Google's AI-generated search summaries.</p>
          </article>
          <article className="feat" data-od-id="feat-llms">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h4>LLMs.txt check</h4>
            <p>Ensures your llms.txt is present, valid, and discoverable by AI crawlers.</p>
          </article>
          <article className="feat" data-od-id="feat-technical">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h4>Technical SEO</h4>
            <p>Crawlability, indexability, Core Web Vitals, mobile, and structured data.</p>
          </article>
          <article className="feat" data-od-id="feat-local">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h4>Local SEO</h4>
            <p>GBP audit, NAP consistency, citation tiers, and map pack analysis.</p>
          </article>
          <article className="feat" data-od-id="feat-schema-gen">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/></svg>
            </div>
            <h4>Content quality</h4>
            <p>Thin content detection, answer depth scoring, and passage-level rankability.</p>
          </article>
          <article className="feat" data-od-id="feat-sponsor">
            <div className="feat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h4>Sponsor path</h4>
            <p>Contributor visibility, sponsor clarity scoring, and maintainer routing.</p>
          </article>
        </div>
      </section>

      <section className="quality-grid" id="quality" data-od-id="quality-grid">
        <article className="quality-card" data-od-id="tests-card">
          <h3>AI citability</h3>
          <ul>
            <li><span>Passage-level ranking</span><strong>scored</strong></li>
            <li><span>Answer completeness</span><strong>measured</strong></li>
            <li><span>Source attribution</span><strong>checked</strong></li>
          </ul>
        </article>
        <article className="quality-card" data-od-id="github-card">
          <h3>Content signals</h3>
          <ul>
            <li><span>Intent coverage</span><strong>mapped</strong></li>
            <li><span>E-E-A-T alignment</span><strong>scored</strong></li>
            <li><span>Schema markup</span><strong>validated</strong></li>
          </ul>
        </article>
        <article className="quality-card" data-od-id="ranking-card">
          <h3>Engine readiness</h3>
          <ul>
            <li><span>ChatGPT access</span><strong>tested</strong></li>
            <li><span>Perplexity crawl</span><strong>verified</strong></li>
            <li><span>Google AI Overview</span><strong>ready</strong></li>
          </ul>
        </article>
      </section>

      <section className="card pad install-card" id="install" data-od-id="install-card">
        <h3>Two commands. Your first AEO report in 60 seconds.</h3>
        <div className="code-box">
          <div className="code-line"><code>Coming soon</code></div>
        </div>
      </section>

      <section className="footer-cta" id="signup" data-od-id="footer-cta">
        <h2>Your docs should show up when AI is asked.</h2>
        <a className="cta" href="https://github.com/your-org/aeo-skill" data-od-id="footer-github" target="_blank" rel="noopener">View on GitHub</a>
      </section>
    
    </main>
  );
}
