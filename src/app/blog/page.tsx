

import Link from 'next/link';

export default function Page() {
  return (
    <main id="top" className="wrap" data-od-id="main">
      
      <Link className="back-link" href="/index">← Back to home</Link>

      <section className="page-header" data-od-id="page-header">
        <span className="eyebrow">Blog</span>
        <h1>Writing on AEO</h1>
        <p>Practical guides on optimizing your docs for AI-powered search, citation engines, and agent retrieval.</p>
      </section>

      <section className="post-grid" data-od-id="post-grid">
        <article className="post" data-od-id="post-1">
          <div className="post-meta">
            <span className="tag">Guide</span>
            <span>June 2026</span>
          </div>
          <h2>Why your docs aren't getting cited by ChatGPT</h2>
          <p>AI models pull answers from sources they can parse cleanly. If your docs use long paragraph blocks, nested divs, or JavaScript-rendered content, they skip you. Here's how to structure for citation.</p>
          <a className="read-more" href="#">Read more</a>
        </article>

        <article className="post" data-od-id="post-2">
          <div className="post-meta">
            <span className="tag">Technical</span>
            <span>May 2026</span>
          </div>
          <h2>Schema.org for developers: what actually matters for AEO</h2>
          <p>Most schema markup guides list every type. This one covers the 6 types that directly impact how AI agents index and reference your content. Nothing else.</p>
          <a className="read-more" href="#">Read more</a>
        </article>

        <article className="post" data-od-id="post-3">
          <div className="post-meta">
            <span className="tag">Research</span>
            <span>May 2026</span>
          </div>
          <h2>How Perplexity decides which sources to cite</h2>
          <p>We ran 500 queries through Perplexity and tracked which sources got cited. Page structure, heading depth, and internal linking were the top signals. Here's the data.</p>
          <a className="read-more" href="#">Read more</a>
        </article>

        <article className="post" data-od-id="post-4">
          <div className="post-meta">
            <span className="tag">Guide</span>
            <span>April 2026</span>
          </div>
          <h2>The developer's checklist for AI-crawlable documentation</h2>
          <p>A 14-point checklist you can run against your docs today. Covers structure, metadata, schema, performance, and link architecture. Takes 20 minutes.</p>
          <a className="read-more" href="#">Read more</a>
        </article>

        <article className="post" data-od-id="post-5">
          <div className="post-meta">
            <span className="tag">Opinion</span>
            <span>April 2026</span>
          </div>
          <h2>SEO is dead. Long live AEO.</h2>
          <p>Google's AI Overviews, ChatGPT Search, and Perplexity are rerouting traffic away from blue links. Traditional SEO tactics are losing ground. Here's what replaces them.</p>
          <a className="read-more" href="#">Read more</a>
        </article>

        <article className="post" data-od-id="post-6">
          <div className="post-meta">
            <span className="tag">Technical</span>
            <span>March 2026</span>
          </div>
          <h2>Building AEO-aware CI pipelines</h2>
          <p>Run AEO audits on every pull request. Catch regressions before they hit production. This guide walks through integrating the AEO skill into GitHub Actions.</p>
          <a className="read-more" href="#">Read more</a>
        </article>
      </section>
    
    </main>
  );
}
