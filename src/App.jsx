import { useState } from "react";
import pharmacistLogin from "./assets/pharmacist-login.png";
import reactApp from "./assets/react-app.png";
import taskManager from "./assets/task-manager.png";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Pharmacy inventory system",
    type: "Full-stack · Inventory management",
    description:
      "A pharmacy dashboard for signing in and keeping medicine inventory organized. A project in building practical interfaces around a real-world workflow.",
    repo: "https://github.com/aljromev-pixel/drugs-and-medicine-inventory-system",
    tags: ["Laravel", "Inventory", "Authentication"],
    preview: "pharmacy",
  },
  {
    number: "02",
    name: "Laravel task manager",
    type: "Full-stack · Data routing",
    description:
      "A clean, focused task manager for adding tasks and removing completed items, exploring the connection between frontend interactions and Laravel data routes.",
    repo: "https://github.com/aljromev-pixel/laravel-data-routing-and-frontend-integration",
    tags: ["Laravel", "Routing", "CRUD"],
    preview: "tasks",
  },
  {
    number: "03",
    name: "React API explorer",
    type: "Frontend · API integration",
    description:
      "A React landing page built around modular components, routes, and app state—made while learning to fetch and send data through an API.",
    repo: "https://github.com/aljromev-pixel/react-API-fetching-and-sending-data",
    tags: ["React", "REST API", "Components"],
    preview: "react",
  },
];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "arrow")
    return (
      <svg {...common}>
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
    );
  if (name === "github")
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 .1.76 1.84 3.85 1.31.1-.74.4-1.24.72-1.53-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.21 1.15-2.99-.11-.28-.5-1.42.1-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.6 1.53.22 2.67.11 2.95.72.78 1.14 1.77 1.14 2.99 0 4.29-2.6 5.24-5.1 5.51.4.35.76 1.02.76 2.07v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  if (name === "spark")
    return (
      <svg {...common}>
        <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
        <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ProjectPreview({ type }) {
  const screenshot =
    type === "pharmacy"
      ? pharmacistLogin
      : type === "tasks"
        ? taskManager
        : type === "react"
          ? reactApp
          : null;

  if (screenshot) {
    const alt =
      type === "pharmacy"
        ? "Pharmacist Login project screen"
        : type === "tasks"
          ? "Task Manager project screen"
          : "React App project screen";

    return (
      <div className="preview screenshot-preview">
        <img src={screenshot} alt={alt} />
      </div>
    );
  }

  if (type === "pharmacy") {
    return (
      <div className="preview pharmacy-preview">
        <div className="pharmacy-window">
          <div className="pharmacy-brand">
            <span className="brand-mark">+</span>
            <span>
              med<span className="brand-muted">care</span>
              <small>PHARMACY PORTAL</small>
            </span>
          </div>
          <h3>Good morning, pharmacist</h3>
          <p>Sign in to manage your inventory.</p>
          <label>USERNAME</label>
          <div className="mock-input">pharmacist@example.com</div>
          <label>PASSWORD</label>
          <div className="mock-input password-field">
            •••••••••• <span>Show</span>
          </div>
          <div className="mock-signin">
            Sign in to your account <span>→</span>
          </div>
          <div className="secure-note">
            <span>✳</span> Your information is securely protected
          </div>
        </div>
        <div className="preview-chip">
          <span /> Secure sign in
        </div>
      </div>
    );
  }
  if (type === "tasks") {
    return (
      <div className="preview tasks-preview">
        <div className="task-window">
          <div className="task-topline">
            <span className="task-app-icon">↗</span>
            <span>
              DAYLIGHT <small>WORKSPACE</small>
            </span>
            <span className="task-avatar">A</span>
          </div>
          <div className="task-date">MONDAY, OCTOBER 14</div>
          <h3>
            A little progress
            <br />
            goes a long way.
          </h3>
          <div className="task-summary">
            <span>YOUR TASKS</span>
            <strong>
              3 <small>this week</small>
            </strong>
            <div className="progress-track">
              <span />
            </div>
          </div>
          <div className="task-item">
            <span className="unchecked" />
            <span>
              Design medicine dashboard<small>Personal project</small>
            </span>
            <span className="task-priority">HIGH</span>
          </div>
          <div className="task-item">
            <span className="unchecked done" />
            <span>
              Read about API routes<small>Learning</small>
            </span>
            <span className="task-dot" />
          </div>
          <div className="task-item">
            <span className="unchecked" />
            <span>
              Sketch new ideas<small>Just for fun</small>
            </span>
            <span className="task-dot" />
          </div>
          <div className="task-add">＋ Add a task for today</div>
        </div>
        <div className="preview-chip">
          <span /> A little more organized
        </div>
      </div>
    );
  }
  return (
    <div className="preview react-preview">
      <div className="react-browser">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <div className="browser-address">my-first-react-app.dev</div>
        </div>
        <div className="react-nav">
          <span className="react-logo">✳</span>
          <span className="react-nav-title">
            CREATIVE<span>SPACE</span>
          </span>
          <div>
            <a href="#projects">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Explore</a>
          </div>
          <span className="react-nav-cta">Search</span>
        </div>
        <div className="react-banner">
          <span className="react-kicker">BUILD SOMETHING WONDERFUL</span>
          <h3>
            Ideas into <span>interfaces.</span>
          </h3>
          <p>
            A little React, a curious mind, and a world
            <br />
            of things still left to create.
          </p>
          <div className="react-button">
            Explore the project <span>↗</span>
          </div>
          <div className="react-orb orb-one" />
          <div className="react-orb orb-two" />
          <div className="react-orb orb-three" />
        </div>
        <div className="react-lower">
          <span>MADE OF COMPONENTS</span>
          <div className="react-feature">
            <span>◈</span>
            <strong>React Components</strong>
            <small>Small pieces, one bigger picture.</small>
          </div>
          <div className="react-feature">
            <span>↗</span>
            <strong>API Integration</strong>
            <small>Fetching, sending, and learning.</small>
          </div>
          <div className="react-feature">
            <span>◉</span>
            <strong>App State</strong>
            <small>A UI that responds to you.</small>
          </div>
        </div>
      </div>
      <div className="preview-chip">
        <span /> Growing with every build
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <ProjectPreview type={project.preview} />
        <span className="project-index">PROJECT {project.number}</span>
        <a
          className="project-visual-link"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.name} repository`}
        >
          <Icon name="arrow" size={17} />
        </a>
      </div>
      <div className="project-details">
        <div className="project-type">
          <span />
          {project.type}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a
          className="project-link"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          Explore repository <Icon name="arrow" size={15} />
        </a>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#home">
            <span className="wordmark-icon">
              A<span>.</span>
            </span>
            <span>
              aljrome<span className="wordmark-last">v</span>
            </span>
          </a>
          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <div className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About me
            </a>
            <a
              className="nav-contact"
              href="mailto:aljromevasquez@gmail.com"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch <Icon name="arrow" size={14} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="availability">
                <span /> OPEN TO WHAT'S NEXT
              </div>
              <h1>
                Turning curiosity
                <br />
                into <span>creation.</span>
              </h1>
              <p className="hero-description">
                Hey, I’m <strong>Aljrome Vasquez</strong> — a computer science
                student, passionate artist, and aspiring developer, learning by
                building things that are useful, beautiful, or both.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#projects">
                  Explore my projects <Icon name="arrow" size={16} />
                </a>
                <a className="secondary-button" href="#about">
                  A little about me
                </a>
              </div>
              <div className="hero-interests">
                <span>
                  <Icon name="spark" size={15} /> Currently curious about
                </span>
                <div>
                  <span>Web development</span>
                  <i /> <span>Digital art</span>
                  <i /> <span>Everything new</span>
                </div>
              </div>
            </div>
            <div
              className="hero-art"
              aria-label="Abstract blue and violet digital composition"
              role="img"
            >
              <div className="profile-panel">
                <div className="profile-panel-topbar">
                  <div className="panel-window-dots"><i /><i /><i /></div>
                  <span>PROFILE / 001</span>
                  <span className="panel-status"><i /> AVAILABLE</span>
                </div>
                <div className="profile-panel-body">
                  <div className="profile-initials">AV<span>.</span></div>
                  <div className="profile-panel-intro">
                    <span className="panel-label">COMPUTER SCIENCE STUDENT</span>
                    <h2>Curious by nature.<br /><span>Developer in progress.</span></h2>
                    <p>Learning through thoughtful design and practical projects.</p>
                  </div>
                </div>
                <div className="profile-panel-footer">
                  <span>FOCUS AREAS</span>
                  <div><i>Frontend</i><i>Laravel</i><i>Digital art</i></div>
                  <span className="panel-footer-mark">01 — 03</span>
                </div>
              </div>
              <div className="art-frame">
                <div className="art-grid" />
                <div className="art-sun" />
                <div className="art-ring art-ring-one" />
                <div className="art-ring art-ring-two" />
                <div className="art-ring art-ring-three" />
                <div className="art-orbit orbit-one" />
                <div className="art-orbit orbit-two" />
                <div className="art-orbit orbit-three" />
                <div className="art-star star-one">✳</div>
                <div className="art-star star-two">✳</div>
                <div className="art-star star-three">✳</div>
                <div className="art-caption">
                  A LITTLE BIT OF
                  <br />
                  <span>IMAGINATION</span>
                </div>
                <div className="art-side-note">DESIGN · CODE · REPEAT</div>
              </div>
              <div className="floating-note">
                <span className="note-icon">✎</span>
                <span>
                  making things
                  <br />
                  <strong>one idea at a time</strong>
                </span>
              </div>
              <div className="art-counter">
                <span>FIG. 001</span>
                <i />
              </div>
            </div>
            <a className="scroll-hint" href="#projects">
              <span className="scroll-line" /> SCROLL TO EXPLORE
            </a>
          </div>
          <div className="hero-bottom-glow" />
        </section>

        <section className="projects-section" id="projects">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span>01</span> A FEW THINGS I’VE BUILT
                </div>
                <h2>
                  Learning by <span>making.</span>
                </h2>
              </div>
              <p>
                Little projects, lots of lessons.
                <br />
                Here’s what I’ve been working on.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
            <div className="projects-footnote">
              <span>MORE IDEAS IN THE WORKS</span>
              <span>
                GROWING ONE PROJECT AT A TIME <i>✳</i>
              </span>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-shell">
            <div className="about-card">
              <div className="about-art">
                <div className="about-blob about-blob-back" />
                <div className="about-blob about-blob-front" />
                <img
                  className="profile-photo"
                  src="https://github.com/aljromev-pixel.png?size=400"
                  alt="Aljrome Vasquez"
                />
                <div className="about-doodle doodle-star">✳</div>
                <div className="about-doodle doodle-loop">◎</div>
                <span className="about-stamp">
                  A LITTLE
                  <br />
                  ABOUT ME
                  <br />
                  <b>✳</b>
                </span>
                <span className="about-orbit-word">CURIOUS, ALWAYS</span>
              </div>
              <div className="about-copy">
                <div className="eyebrow">
                  <span>02</span> A HUMAN BEHIND THE PIXELS
                </div>
                <h2>
                  Hi, I’m <span>Aljrome.</span>
                </h2>
                <p>
                  I’m a computer science student who likes figuring out how
                  things work — then making something of my own. I spend my free
                  time playing video games, sketching all kinds of things, and
                  learning whatever catches my attention.
                </p>
                <p>
                  Art has always been a big part of my world. I’ve joined many
                  art contests and collected achievements along the way — every
                  new piece is a chance to try another idea, find my style, and
                  improve. These days, I’m bringing that same imagination to the
                  web.
                </p>
                <div className="about-favorites">
                  <span>THINGS I LOVE</span>
                  <div>
                    <span>✳ Sketching</span>
                    <span>◈ Video games</span>
                    <span>↗ Building for the web</span>
                  </div>
                </div>
                <a
                  href="https://github.com/aljromev-pixel"
                  target="_blank"
                  rel="noreferrer"
                  className="about-github"
                >
                  <span className="github-circle">
                    <Icon name="github" size={16} />
                  </span>
                  <span>
                    Find me on GitHub<small>@aljromev-pixel</small>
                  </span>
                  <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner">
            <div className="contact-spark">✳</div>
            <div className="eyebrow">
              <span>03</span> SOMETHING ON YOUR MIND?
            </div>
            <h2>
              Let’s make something
              <br />
              <span>that matters.</span>
            </h2>
            <p>
              Always up for an interesting idea, creative challenge, or good
              conversation.
            </p>
            <a
              href="mailto:aljromevasquez@gmail.com"
              className="primary-button"
            >
              Say hello <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="contact-orb contact-orb-left" />
          <div className="contact-orb contact-orb-right" />
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-icon">
            a<span>.</span>
          </span>
          <span>
            aljrome<span className="wordmark-last">v</span>
          </span>
        </a>
        <span className="footer-note">
          Made with curiosity, a little code, and a lot of coffee.
        </span>
        <a className="back-top" href="#home">
          BACK TO TOP <span>↑</span>
        </a>
        <span className="footer-year">© 2026 ALJROME VASQUEZ</span>
      </footer>
    </>
  );
}

export default App;
