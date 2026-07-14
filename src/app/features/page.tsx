

import Link from 'next/link';

export default function Page() {
  return (
    <main id="top" className="wrap" data-od-id="main">
      
      <Link className="back-link" href="/index">← Back to home</Link>

      <section className="page-header" data-od-id="page-header">
        <span className="eyebrow">Capabilities</span>
        <h1>Everything AEO checks</h1>
        <p>12 capabilities that scan your content, test AI crawlability, and score how likely engines are to cite your work.</p>
      </section>

      <section className="features-list" data-od-id="features-list">
        <article className="feat-row" data-od-id="feat-citation">
          <div className="feat-meta">
            <div className="feat-num">01</div>
            <h3>Citation scoring</h3>
            <p>Passage-level analysis of citability across AI search engines.</p>
          </div>
          <div className="feat-content">
            <p>The skill breaks your content into passages and scores each one independently. It measures answer completeness, source attribution potential, and structural rankability — then produces a prioritized list of passages to improve.</p>
            <div className="feat-tags">
              <span className="feat-tag">Passage scoring</span>
              <span className="feat-tag">Answer completeness</span>
              <span className="feat-tag">Source attribution</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-intent">
          <div className="feat-meta">
            <div className="feat-num">02</div>
            <h3>Intent mapping</h3>
            <p>Maps every user query your docs should answer.</p>
          </div>
          <div className="feat-content">
            <p>Extracts search intents from your content and maps them against the queries your audience actually types. Flags intents that are missing, incomplete, or answered by competing pages.</p>
            <div className="feat-tags">
              <span className="feat-tag">Query extraction</span>
              <span className="feat-tag">Gap detection</span>
              <span className="feat-tag">Intent coverage</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-eeat">
          <div className="feat-meta">
            <div className="feat-num">03</div>
            <h3>E-E-A-T scoring</h3>
            <p>Per Google's September 2025 Quality Rater Guidelines.</p>
          </div>
          <div className="feat-content">
            <p>Evaluates Experience, Expertise, Authoritativeness, and Trustworthiness signals across your content. Checks author bios, citation density, factual claims, and trust indicators against current QRG standards.</p>
            <div className="feat-tags">
              <span className="feat-tag">Experience</span>
              <span className="feat-tag">Expertise</span>
              <span className="feat-tag">Authoritativeness</span>
              <span className="feat-tag">Trustworthiness</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-schema">
          <div className="feat-meta">
            <div className="feat-num">04</div>
            <h3>Schema validation</h3>
            <p>Detects, validates, and generates JSON-LD structured data.</p>
          </div>
          <div className="feat-content">
            <p>Scans your pages for existing schema.org markup, validates against current Google requirements, and generates JSON-LD for missing types. Knows HowTo was removed Sept 2023 and FAQPage was restricted Aug 2023.</p>
            <div className="feat-card">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." }
}`}</code>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-chatgpt">
          <div className="feat-meta">
            <div className="feat-num">05</div>
            <h3>ChatGPT access</h3>
            <p>Tests GPTBot crawlability and passage-level citability.</p>
          </div>
          <div className="feat-content">
            <p>Checks whether GPTBot can reach your content, tests robots.txt rules, evaluates llms.txt compliance, and scores how likely ChatGPT's web search is to cite your pages in responses.</p>
            <div className="feat-tags">
              <span className="feat-tag">GPTBot access</span>
              <span className="feat-tag">robots.txt</span>
              <span className="feat-tag">llms.txt</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-perplexity">
          <div className="feat-meta">
            <div className="feat-num">06</div>
            <h3>Perplexity crawl</h3>
            <p>Verifies PerplexityBot can reach and index your key pages.</p>
          </div>
          <div className="feat-content">
            <p>Tests PerplexityBot access, checks crawl budget allocation, and evaluates passage-level rankability for Perplexity's citation engine. Includes response time and content freshness checks.</p>
            <div className="feat-tags">
              <span className="feat-tag">PerplexityBot</span>
              <span className="feat-tag">Crawl budget</span>
              <span className="feat-tag">Freshness</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-google-ai">
          <div className="feat-meta">
            <div className="feat-num">07</div>
            <h3>Google AI Overview</h3>
            <p>Optimizes for citation in Google's AI-generated search summaries.</p>
          </div>
          <div className="feat-content">
            <p>Analyzes your content structure for AI Overview eligibility. Checks passage isolation, answer density, and factual claim formatting that Google's AI Overviews prefer to cite.</p>
            <div className="feat-tags">
              <span className="feat-tag">AI Overviews</span>
              <span className="feat-tag">Passage isolation</span>
              <span className="feat-tag">Answer density</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-llms">
          <div className="feat-meta">
            <div className="feat-num">08</div>
            <h3>LLMs.txt check</h3>
            <p>Ensures your llms.txt is present, valid, and discoverable.</p>
          </div>
          <div className="feat-content">
            <p>Validates your llms.txt file against the emerging standard. Checks file structure, link validity, content freshness, and discoverability from root. Suggests improvements for better AI crawler guidance.</p>
            <div className="feat-card">
              <code># llms.txt — found at root
# Links to key documentation pages
# Helps AI crawlers understand your site</code>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-technical">
          <div className="feat-meta">
            <div className="feat-num">09</div>
            <h3>Technical SEO</h3>
            <p>Crawlability, indexability, Core Web Vitals, mobile, and structured data.</p>
          </div>
          <div className="feat-content">
            <p>Full technical audit across 9 categories: crawlability, indexability, security headers, URL structure, mobile usability, Core Web Vitals (including INP), structured data, JavaScript rendering, and IndexNow support.</p>
            <div className="feat-tags">
              <span className="feat-tag">Crawlability</span>
              <span className="feat-tag">Indexability</span>
              <span className="feat-tag">Core Web Vitals</span>
              <span className="feat-tag">Mobile</span>
              <span className="feat-tag">Security</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-local">
          <div className="feat-meta">
            <div className="feat-num">10</div>
            <h3>Local SEO</h3>
            <p>GBP audit, NAP consistency, citation tiers, and map pack analysis.</p>
          </div>
          <div className="feat-content">
            <p>For local businesses: audits Google Business Profile completeness, checks NAP (Name, Address, Phone) consistency across citations, evaluates review sentiment, and analyzes map pack ranking factors.</p>
            <div className="feat-tags">
              <span className="feat-tag">Google Business Profile</span>
              <span className="feat-tag">NAP consistency</span>
              <span className="feat-tag">Review sentiment</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-content">
          <div className="feat-meta">
            <div className="feat-num">11</div>
            <h3>Content quality</h3>
            <p>Thin content detection, answer depth scoring, and passage-level rankability.</p>
          </div>
          <div className="feat-content">
            <p>Detects thin content below quality thresholds, scores answer depth against competing pages, and evaluates passage-level rankability. Checks for filler, duplicate content, and missing expert signals.</p>
            <div className="feat-tags">
              <span className="feat-tag">Thin content</span>
              <span className="feat-tag">Answer depth</span>
              <span className="feat-tag">Duplicate detection</span>
            </div>
          </div>
        </article>

        <article className="feat-row" data-od-id="feat-sponsor">
          <div className="feat-meta">
            <div className="feat-num">12</div>
            <h3>Sponsor path</h3>
            <p>Contributor visibility, sponsor clarity scoring, and maintainer routing.</p>
          </div>
          <div className="feat-content">
            <p>Evaluates how visible your contributors and sponsors are in your documentation. Scores sponsor clarity, checks contributor attribution, and routes requests to the right maintainer queues.</p>
            <div className="feat-tags">
              <span className="feat-tag">Contributor visibility</span>
              <span className="feat-tag">Sponsor clarity</span>
              <span className="feat-tag">Maintainer routing</span>
            </div>
          </div>
        </article>
      </section>
    
    </main>
  );
}
