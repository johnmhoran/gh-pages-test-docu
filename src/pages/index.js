import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Home" description="Landing page for schema project">
      {/* Hero Section */}
      <div className={styles.fullHero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Welcome to the <br />PURL type JSON Schema*</h1>
          <p className={styles.heroSubtitle}>
            Explore documentation, JSON Schemas, and tools for working with structured data.
          </p>
          <div className={styles.heroButtons}>
            {/* <Link className="button button--primary button--lg" to="/docs/intro"> */}
            {/* <Link className="button button--primary button--lg" to="/docs/index"> */}
            <Link className="button button--primary button--lg" to="/docs/">
              Get Started
            </Link>
          </div>
          <p className={styles.heroSubtitle}>
            * Not really -- this is just a mockup to learn a bit about Docusaurus and GH Pages.
          </p>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className={styles.twoColumn}>
        {/* Left column: schema list */}
        <div className={styles.column}>
          <h2>Available JSON Schemas</h2>
          {/* <ul>
            <li><Link to="/schemas/purl-test.schema.json">purl-test.schema.json</Link></li>
            <li><Link to="/schemas/purl-type-definition.schema.json">purl-type-definition.schema.json</Link></li>
            <li><Link to="/schemas/purl-types-index.schema.json">purl-types-index.schema.json</Link></li>
          </ul>
          <h2>JMH link to the GH repo</h2> */}
          <ul>
            <li><a class="a_page" href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-test.schema.json">purl-test.schema.json</a></li>
            <li><a class="a_page" href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-type-definition.schema.json">purl-type-definition.schema.json</a></li>
            <li><a class="a_page" href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-types-index.schema.json">purl-types-index.schema.json</a></li>
          </ul>
        </div>

        {/* Right column: example announcements */}
        <div className={styles.column}>
          <h2>Project News</h2>
          <div className={styles.card}>
            <h3>Release 1.0.0</h3>
            <p>Coming soon . . .</p>
          </div>
          <div className={styles.card}>
            <h3>Community Call</h3>
            <p>Join our next PURL community call on 2025-09-03 to discuss validation tools.</p>
            <p>For the schedule of PURL community and TC54-TG2 calls, please take a look at the <a class="a_page" href="https://calendar.google.com/calendar/u/0/embed?src=c_884decde5a152902bb51a62f89550d0f3748484534f08c63792f2e654f2a7ebc@group.calendar.google.com" target="_blank'">OWASP Software Supply Chain Community Calendar</a>.</p>
          </div>
        </div>
      </div>










    </Layout>
  );
}
