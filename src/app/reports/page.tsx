

import Link from 'next/link';

export default function Page() {
  return (
    <main id="top" className="wrap" data-od-id="main">
      
      <Link className="back-link" href="/index">← Back to home</Link>

      <section className="page-header" data-od-id="page-header">
        <span className="eyebrow">Reports</span>
        <h1>AEO rankings</h1>
        <p>How projects score when run through the AEO skill. Updated monthly.</p>
      </section>

      <section className="leaderboard" data-od-id="leaderboard">
        <div className="leaderboard-header" data-od-id="leaderboard-header">
          <span>#</span>
          <span>Project</span>
          <span style={{textAlign: "right"}}>Score</span>
          <span style={{textAlign: "right"}}>Intent</span>
          <span style={{textAlign: "right"}}>Schema</span>
        </div>

        <div className="leaderboard-row" data-od-id="row-1">
          <span className="rank top">01</span>
          <div className="proj-info">
            <h4>React Docs</h4>
            <p>react.dev — Official React documentation</p>
          </div>
          <span className="score score-high">94</span>
          <span className="score" style={{textAlign: "right"}}>88%</span>
          <span className="score" style={{textAlign: "right"}}>96%</span>
        </div>

        <div className="leaderboard-row" data-od-id="row-2">
          <span className="rank top">02</span>
          <div className="proj-info">
            <h4>Tailwind CSS</h4>
            <p>tailwindcss.com — Utility-first CSS framework</p>
          </div>
          <span className="score score-high">91</span>
          <span className="score" style={{textAlign: "right"}}>92%</span>
          <span className="score" style={{textAlign: "right"}}>89%</span>
        </div>

        <div className="leaderboard-row" data-od-id="row-3">
          <span className="rank top">03</span>
          <div className="proj-info">
            <h4>Next.js</h4>
            <p>nextjs.org — The React framework for the web</p>
          </div>
          <span className="score score-high">89</span>
          <span className="score" style={{textAlign: "right"}}>90%</span>
          <span className="score" style={{textAlign: "right"}}>87%</span>
        </div>

        <div className="leaderboard-row" data-od-id="row-4">
          <span className="rank">04</span>
          <div className="proj-info">
            <h4>Astro</h4>
            <p>astro.build — Build faster websites</p>
          </div>
          <span className="score">86</span>
          <span className="score" style={{textAlign: "right"}}>85%</span>
          <span className="score" style={{textAlign: "right"}}>84%</span>
        </div>

        <div className="leaderboard-row" data-od-id="row-5">
          <span className="rank">05</span>
          <div className="proj-info">
            <h4>Supabase</h4>
            <p>supabase.com — Open source Firebase alternative</p>
          </div>
          <span className="score">83</span>
          <span className="score" style={{textAlign: "right"}}>82%</span>
          <span className="score" style={{textAlign: "right"}}>81%</span>
        </div>

        <div className="leaderboard-row" data-od-id="row-6">
          <span className="rank">06</span>
          <div className="proj-info">
            <h4>Vite</h4>
            <p>vitejs.dev — Next generation frontend tooling</p>
          </div>
          <span className="score">81</span>
          <span className="score" style={{textAlign: "right"}}>79%</span>
          <span className="score" style={{textAlign: "right"}}>83%</span>
        </div>

        <div className="leaderboard-row" data-od-id="row-7">
          <span className="rank">07</span>
          <div className="proj-info">
            <h4>Zod</h4>
            <p>zod.dev — TypeScript-first schema validation</p>
          </div>
          <span className="score">78</span>
          <span className="score" style={{textAlign: "right"}}>80%</span>
          <span className="score" style={{textAlign: "right"}}>75%</span>
        </div>
      </section>

      <section className="detail-list" data-od-id="methodology">
        <h2>How scoring works</h2>

        <div className="detail-item">
          <span className="detail-label">Citation score (0–100)</span>
          <span className="detail-value">Weighted average of AI crawlability (30%), intent coverage (25%), schema markup (20%), heading structure (15%), and internal linking (10%). Higher means more likely to be cited.</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Intent coverage</span>
          <span className="detail-value">Percentage of common user questions about the topic that your docs actually answer. Tested against 200 representative queries per category.</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Schema completeness</span>
          <span className="detail-value">Percentage of required and recommended Schema.org properties present in your structured data. Covers Article, TechArticle, HowTo, FAQPage, and BreadcrumbList.</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Update frequency</span>
          <span className="detail-value">Rankings refresh on the first of each month. Scores are snapshot-based — your current score may differ if you've updated content since the last run.</span>
        </div>
      </section>

      <section data-od-id="score-dist">
        <h2 style={{margin: "0 0 24px", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.03em"}}>Score distribution</h2>

        <div className="bar-row" data-od-id="bar-90">
          <span className="bar-label">90–100 (Excellent)</span>
          <div className="bar"><div className="bar-fill top" style={{width: "18%"}}></div></div>
          <span className="bar-val">18%</span>
        </div>

        <div className="bar-row" data-od-id="bar-80">
          <span className="bar-label">80–89 (Strong)</span>
          <div className="bar"><div className="bar-fill" style={{width: "34%"}}></div></div>
          <span className="bar-val">34%</span>
        </div>

        <div className="bar-row" data-od-id="bar-70">
          <span className="bar-label">70–79 (Average)</span>
          <div className="bar"><div className="bar-fill" style={{width: "28%"}}></div></div>
          <span className="bar-val">28%</span>
        </div>

        <div className="bar-row" data-od-id="bar-below">
          <span className="bar-label">Below 70 (Needs work)</span>
          <div className="bar"><div className="bar-fill" style={{width: "20%"}}></div></div>
          <span className="bar-val">20%</span>
        </div>
      </section>
    
    </main>
  );
}
