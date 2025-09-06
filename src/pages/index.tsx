import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Custom SVG Icons
const ReactIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="#61dafb"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.2"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(120 12 12)"/>
  </svg>
);

const VueIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" fill="#4fc08d"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#3178c6"/>
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="white"/>
  </svg>
);

const AccessibilityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="4" r="2"/>
    <path d="M19 13v-2a7 7 0 0 0-14 0v2"/>
    <path d="M12 14v8"/>
    <path d="M8 18h8"/>
  </svg>
);

const PerformanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
  </svg>
);

const ResponsiveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">
              {siteConfig.tagline}
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>40+</span>
                <span className={styles.statLabel}>Components</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>Frameworks</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>TypeScript</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                <span>Get Started</span>
                <span className={styles.buttonIcon}>→</span>
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/react/getting-started">
                <ReactIcon />
                <span>React</span>
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/vue/getting-started">
                <VueIcon />
                <span>Vue</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.codeLine}>
                  <span className={styles.codeKeyword}>import</span>
                  <span className={styles.codeText}> {`{ Button }`} </span>
                  <span className={styles.codeKeyword}>from</span>
                  <span className={styles.codeString}> '@loom/button'</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeTag}>&lt;</span>
                  <span className={styles.codeComponent}>Button</span>
                  <span className={styles.codeProp}> variant</span>
                  <span className={styles.codeOperator}>=</span>
                  <span className={styles.codeString}>"primary"</span>
                  <span className={styles.codeTag}>&gt;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeText}>  Click me</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.codeTag}>&lt;/</span>
                  <span className={styles.codeComponent}>Button</span>
                  <span className={styles.codeTag}>&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb}></div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  const features = [
    {
      icon: <ReactIcon />,
      title: "Framework Agnostic",
      description: "Works seamlessly with React, Vue, and vanilla JavaScript. Choose the integration that fits your project.",
      color: "var(--ifm-color-primary)"
    },
    {
      icon: <TypeScriptIcon />,
      title: "TypeScript Ready",
      description: "Built with TypeScript from the ground up. Full type safety and excellent developer experience.",
      color: "#3178c6"
    },
    {
      icon: <AccessibilityIcon />,
      title: "Accessible by Default",
      description: "WCAG compliant components with keyboard navigation, screen reader support, and high contrast modes.",
      color: "#10b981"
    },
    {
      icon: <PerformanceIcon />,
      title: "Performance Optimized",
      description: "Minimal bundle size impact with tree-shaking support and efficient rendering for fast applications.",
      color: "#f59e0b"
    },
    {
      icon: <ResponsiveIcon />,
      title: "Responsive Design",
      description: "Mobile-first approach with consistent behavior across all device sizes and screen resolutions.",
      color: "#8b5cf6"
    },
    {
      icon: <VueIcon />,
      title: "Multi-Framework",
      description: "Available for React, Vue.js, and more. Use the same design system across all your projects.",
      color: "#4fc08d"
    }
  ];

  return (
    <Layout
      title={`${siteConfig.title} - Modern CSS Design System`}
      description="A modern, flexible CSS design system built for React and Vue applications. Comprehensive components, utilities, and design tokens.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        
        {/* Why Choose Loom Section */}
        <section className={styles.whyChooseSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why Choose Loom?</h2>
              <p className={styles.sectionSubtitle}>
                Built for modern development workflows with performance and developer experience in mind.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon} style={{ color: feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sectionBackground}>
            <div className={styles.backgroundPattern}></div>
          </div>
        </section>

        {/* Quick Start & Examples Section */}
        <section className={styles.quickStartSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className={styles.quickStartCard}>
                  <div className={styles.cardIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <h2 className={styles.cardTitle}>Quick Start</h2>
                  <p className={styles.cardDescription}>
                    Get started with loom-css in just a few steps. Choose your preferred framework and start building beautiful interfaces.
                  </p>
                  <div className={styles.codeBlock}>
                    <div className={styles.codeHeader}>
                      <div className={styles.codeTabs}>
                        <span className={styles.codeTab}>React</span>
                        <span className={styles.codeTab}>Vue</span>
                        <span className={styles.codeTab}>CSS</span>
                      </div>
                    </div>
                    <pre className={styles.codeContent}>
                      <code>{`npm install @loom/button
npm install @loom-vue/button
npm install @loom/core`}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.quickStartCard}>
                  <div className={styles.cardIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <h2 className={styles.cardTitle}>Live Examples</h2>
                  <p className={styles.cardDescription}>
                    See loom-css components in action with our interactive examples. Try different variants and see the code.
                  </p>
                  <div className={styles.componentShowcase}>
                    <div className={styles.showcaseButtons}>
                      <button className={styles.showcaseButton}>Default</button>
                      <button className={styles.showcaseButtonSecondary}>Secondary</button>
                      <button className={styles.showcaseButtonOutline}>Outline</button>
                    </div>
                    <div className={styles.showcaseLinks}>
                      <Link to="/docs/components/button" className={styles.showcaseLink}>
                        View Button Docs →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
              <p className={styles.ctaDescription}>
                Join thousands of developers building beautiful UIs with Loom Design System.
              </p>
              <div className={styles.ctaButtons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  Start Building
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/docs/components/button">
                  View Components
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.ctaBackground}>
            <div className={styles.ctaGradient}></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
