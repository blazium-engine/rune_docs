import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://blaziumengine.itch.io/rune-interface">
            Download RUNE Interface
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for R.U.N.E. – Routing & Utility Node Editor Interface - A Visual Workflow Editor for Building Flows with Luau">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h2">RUNE Interface</Heading>
                </div>
                <div className="card__body">
                  <p>
                    RUNE Interface is a visual workflow editor that lets you build flows by connecting nodes together. 
                    Instead of writing code, you drag and drop nodes onto a canvas, wire them together, and run your flow immediately.
                    The interface supports multiple languages and can be integrated with external tools via the MCP (Model Context Protocol) server.
                  </p>
                  <p>
                    <strong>Perfect for:</strong> Building automation workflows, data processing pipelines, and complex logic flows without writing boilerplate code.
                  </p>
                  <p>
                    <strong>Key Features:</strong>
                  </p>
                  <ul>
                    <li>Visual node-based editor with drag-and-drop interface</li>
                    <li>Built-in nodes for flow control, data manipulation, file operations, and more</li>
                    <li>Luau scripting support for custom logic</li>
                    <li>Session state management for data persistence</li>
                    <li>Flow execution history and debugging tools</li>
                    <li>Multi-language localization support with .po files</li>
                    <li>MCP Server integration for remote workflow triggering from external tools</li>
                  </ul>
                  <div className="margin-top--md">
                    <Link
                      className="button button--primary"
                      href="https://blaziumengine.itch.io/rune-interface">
                      Download RUNE Interface
                    </Link>
                    <Link
                      className="button button--secondary margin-left--sm"
                      to="/docs/rune-interface/getting-started">
                      Getting Started Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h2">RUNE CLI</Heading>
                </div>
                <div className="card__body">
                  <p>
                    RUNE CLI is a command-line tool for executing R.U.N.E. – Routing & Utility Node Editor flows without the graphical interface. 
                    It's designed for automation, CI/CD pipelines, and headless execution of workflows.
                  </p>
                  <p>
                    <strong>Perfect for:</strong> Running flows from scripts, integrating with build systems, and automating repetitive tasks.
                  </p>
                  <p>
                    <strong>Key Features:</strong>
                  </p>
                  <ul>
                    <li>Execute flows from the command line</li>
                    <li>Pass parameters and environment variables</li>
                    <li>Output results in various formats</li>
                    <li>Integration with shell scripts and automation tools</li>
                  </ul>
                  <div className="margin-top--md">
                    <Link
                      className="button button--primary"
                      href="https://blaziumengine.itch.io/rune-interface">
                      Download RUNE CLI
                    </Link>
                    <Link
                      className="button button--secondary margin-left--sm"
                      to="/docs/rune-cli/getting-started">
                      CLI Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-top--lg">
            <div className="col col--12">
              <div className="card">
                <div className="card__header">
                  <Heading as="h2">What is RUNE?</Heading>
                </div>
                <div className="card__body">
                  <p>
                    R.U.N.E. – Routing & Utility Node Editor is a visual workflow system that makes it easy to build complex automation 
                    and data processing flows. Instead of writing traditional code, you use a visual editor to connect nodes together.
                  </p>
                  <p>
                    <strong>How it works:</strong>
                  </p>
                  <ol>
                    <li><strong>Create a Flow:</strong> Start a new flow or open an existing one</li>
                    <li><strong>Add Nodes:</strong> Drag nodes from the node menu onto the canvas</li>
                    <li><strong>Connect Nodes:</strong> Wire nodes together using execution pins (for flow control) and data pins (for values)</li>
                    <li><strong>Configure Nodes:</strong> Set input values and customize node behavior</li>
                    <li><strong>Run the Flow:</strong> Execute your flow and see results in real-time</li>
                  </ol>
                  <p>
                    <strong>Built by Blazium Engine Contributors</strong> - RUNE Interface is an open-source project designed to make 
                    workflow automation accessible to everyone, from beginners to advanced users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
