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
          <h1 className={styles.heroTitle}>Welcome to the <br />PURL type JSON Schema</h1>
          <p className={styles.heroSubtitle}>
            Explore documentation, JSON Schemas, and tools for working with structured data.
          </p>
          <div className={styles.heroButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Two-Column Section */}
      <div className={styles.twoColumn}>
        {/* Left column: schema list */}
        <div className={styles.column}>
          <h2>Available JSON Schemas</h2>
          <ul>
            <li><Link to="/schemas/schema1.json">schema1.json</Link></li>
            <li><Link to="/schemas/schema2.json">schema2.json</Link></li>
            <li><Link to="/schemas/schema3.json">schema3.json</Link></li>
          </ul>
        </div>

        {/* Right column: example announcements */}
        <div className={styles.column}>
          <h2>Project News</h2>
          <div className={styles.card}>
            <h3>Release 0.2.0</h3>
            <p>Our schemas are now aligned with the latest PURL draft.</p>
          </div>
          <div className={styles.card}>
            <h3>Community Call</h3>
            <p>Join our next call on Sept 10th to discuss validation tools.</p>
          </div>
        </div>
      </div>



      <div className={styles.twoColumn}>
        {/* Left: JSON Schema links */}
        <div className={styles.column}>
          <h2>Available JSON Schemas</h2>
          <ul>
            <li><Link to="/schemas/schema1.json">schema1.json</Link></li>
            <li><Link to="/schemas/schema2.json">schema2.json</Link></li>
            <li><Link to="/schemas/schema3.json">schema3.json</Link></li>
          </ul>
        </div>

        {/* Right: mixed content */}
        <div className={styles.column}>
          <h2>Project Highlights</h2>

          {/* Card style */}
          <div className={styles.card}>
            <h3>Release 0.2.0</h3>
            <p>Schemas updated to match latest PURL draft.</p>
          </div>

          {/* Callout style */}
          <div className={styles.callout}>
            <strong>Next Community Call:</strong> Sept 10th. Discuss validation tools.
          </div>

          {/* Image + text */}
          <div className={styles.card}>
            <img
              src="/img/schema-diagram-placeholder.png"
              alt="Schema diagram"
              style={{ width: '100%', borderRadius: '6px', marginBottom: '0.5rem' }}
            />
            <p>Visual overview of how schemas relate to each other.</p>
          </div>
        </div>
      </div>






    </Layout>
  );
}
