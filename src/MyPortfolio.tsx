import { FormEvent, useEffect, useRef, useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'Financial website',
    year: '2026',
    title: 'Diamond Gate Capital',
    description: 'A polished investment-partnership website with clear strategy, portfolio, risk, and founder information.',
    tags: ['Web design', 'Finance', 'Responsive'],
    className: 'project-gold',
    visual: 'diamond',
    url: 'https://www.diamondgatecapital.com/',
  },
  {
    number: '02',
    type: 'Social marketing platform',
    year: '2026',
    title: 'Embra Boost',
    description: 'A practical social-growth service experience for content, strategy, and managed campaign orders.',
    tags: ['UI/UX', 'Social growth', 'Frontend'],
    className: 'project-blue',
    visual: 'social',
    url: 'https://naira-social-studio.vercel.app/',
  },
] as const

const commands: Record<string, string> = {
  help: 'available commands: about / work / skills / contact / clear',
  about: 'Oke Emmanuel Seun is a web designer and developer building clear, useful digital experiences.',
  work: 'selected work: Diamond Gate Capital / Embra Boost',
  skills: 'UI/UX, responsive web design, frontend development, visual systems, and website optimisation.',
  contact: 'opening a direct email conversation for Oke Emmanuel Seun',
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.reveal')
    if (!items) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return ref
}

function ProjectVisual({ type }: { type: (typeof projects)[number]['visual'] }) {
  if (type === 'diamond') {
    return (
      <div className="project-visual visual-diamond" aria-hidden="true">
        <div className="diamond-window">
          <span>DG</span>
          <div className="market-line"><i /><i /><i /><i /><i /></div>
        </div>
        <div className="diamond-seal">CAPITAL<br /><small>01</small></div>
      </div>
    )
  }

  return (
    <div className="project-visual visual-social" aria-hidden="true">
      <div className="social-bubble bubble-one">IG</div>
      <div className="social-bubble bubble-two">YT</div>
      <div className="social-bubble bubble-three">TT</div>
      <div className="social-phone">
        <span />
        <strong>GROW</strong>
        <i />
      </div>
    </div>
  )
}

export default function MyPortfolio() {
  const pageRef = useReveal()
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [command, setCommand] = useState('')

  function runCommand(event: FormEvent) {
    event.preventDefault()
    const value = command.trim().toLowerCase()
    if (!value) return

    if (value === 'clear') {
      setTerminalLines([])
    } else {
      setTerminalLines((lines) => [
        ...lines,
        `➜ ~/oke ${value}`,
        commands[value] ?? `command not found: ${value}. try "help".`,
      ])
      if (value === 'contact') document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
    }
    setCommand('')
  }

  return (
    <div className="page-shell" ref={pageRef}>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 2 }).flatMap((_, copy) =>
            ['WEB DESIGN', 'FRONTEND DEVELOPMENT', 'RESPONSIVE EXPERIENCES', 'DIGITAL PRODUCTS'].map((item) => (
              <span key={`${copy}-${item}`}>{item}<b>✳</b></span>
            )),
          )}
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Oke Emmanuel Seun home">
          <span className="brand-mark">OS</span>
          <span>Oke Emmanuel<span className="brand-dot">.</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#lab">Lab</a>
        </nav>
        <a className="button button-dark" href="#work">View my work <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero ruled">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Web designer / frontend developer / Lagos, Nigeria</p>
            <h1>I shape ideas into <span className="marker">clear digital</span> experiences.</h1>
            <p className="hero-intro">
              I’m Oke Emmanuel Seun, a web designer and developer focused on building expressive,
              responsive interfaces that feel as good as they work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
              <a className="text-link" href="#about">Meet Oke <span>↗</span></a>
            </div>
          </div>

          <div className="hero-art reveal reveal-delay" aria-label="Oke Emmanuel Seun portrait">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <img className="profile-photo" src="/oke-emmanuel-seun.jpg" alt="Oke Emmanuel Seun" />
            <div className="code-card">
              <span><i>&lt;section</i> <b>className</b>="bold"&gt;</span>
              <span><em>build</em>(); <strong>→</strong></span>
            </div>
            <div className="hero-symbol" aria-hidden="true">
              <svg viewBox="0 0 160 160">
                <path d="M80 12 142 44v72l-62 32-62-32V44z" fill="#ffcc00" stroke="#181714" strokeWidth="8" strokeLinejoin="round" />
                <path d="m51 80 19 19 39-43" fill="none" stroke="#181714" strokeWidth="11" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </div>
            <span className="sticker sticker-left">DESIGN<br />WITH<br />PURPOSE</span>
            <span className="sticker sticker-right">01<br /><small>/ 02</small></span>
          </div>
        </section>

        <section className="stats-band">
          <div><strong>02</strong><span>live digital<br />platforms</span></div>
          <div><strong>03+</strong><span>core design<br />disciplines</span></div>
          <div><strong>100%</strong><span>responsive<br />focus</span></div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading reveal">
            <p className="eyebrow">01 / Selected work</p>
            <h2>Digital work built<br /><span className="outline-text">with intent.</span></h2>
            <p className="section-note">A selection of commercial and growth-focused web experiences.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.className} reveal external-card`}
                key={project.title}
                role="link"
                tabIndex={0}
                onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    window.open(project.url, '_blank', 'noopener,noreferrer')
                  }
                }}
              >
                <div className="project-topline">
                  <span>{project.number} / {project.type}</span>
                  <span>{project.year}</span>
                </div>
                <ProjectVisual type={project.visual} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="visit-mark" aria-hidden="true">
                  <svg viewBox="0 0 160 72">
                    <path d="M148 36C137 12 58 9 25 24C8 32 12 52 32 59C65 71 138 63 148 36Z" />
                    <path d="M148 36l-15-8M148 36l-16 7" />
                  </svg>
                  <span>visit site</span>
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section ruled">
          <div className="about-stamp">OKE<br /><span>SEUN</span></div>
          <div className="about-copy reveal">
            <p className="eyebrow">02 / About the designer</p>
            <h2>Sharp taste.<br /><span className="marker marker-lilac">Strong systems.</span></h2>
            <p>
              I’m Oke Emmanuel Seun, a web designer and developer who turns ideas into polished,
              accessible, and easy-to-use digital experiences.
            </p>
            <p>
              My work combines visual hierarchy, responsive layout, frontend implementation, and
              thoughtful interaction design. From financial services to social marketing platforms,
              I build interfaces that make complex information feel direct and approachable.
            </p>
            <a className="text-link" href="#work">Explore selected work <span>↗</span></a>
          </div>
          <div className="about-totem reveal reveal-delay">
            <div className="totem-head">
              <span className="eye" /><span className="eye" /><span className="mouth" />
            </div>
            <div className="totem-body">
              <span>DESIGN<br />BUILD<br />REFINE<br /><em>SHIP</em></span>
            </div>
            <span className="totem-label">OKE / WEB-01</span>
          </div>
        </section>

        <section id="lab" className="lab-section">
          <div className="section-heading reveal">
            <p className="eyebrow">03 / The lab</p>
            <h2>Ideas, interfaces,<br /><span className="outline-text">and sharp details.</span></h2>
          </div>
          <div className="terminal-wrap reveal">
            <div className="terminal-bar">
              <div className="terminal-lights"><span /><span /><span /></div>
              <span>oke@studio: ~/now</span>
              <span className="terminal-status">● available</span>
            </div>
            <div className="terminal-body" aria-live="polite">
              <p><span className="terminal-prompt">➜</span> <span className="terminal-path">~/now</span> <span className="terminal-command">cat current-focus.txt</span></p>
              <p className="terminal-response">responsive websites, clear user journeys,<br />and visual systems that stay consistent.</p>
              <p><span className="terminal-prompt">➜</span> <span className="terminal-path">~/now</span> <span className="terminal-command">ls -la projects/</span></p>
              <p className="terminal-response file-list">diamond-gate-capital/ &nbsp; embra-boost/<br />responsive-ui/ &nbsp; brand-systems/</p>
              {terminalLines.map((line, index) => (
                <p className={index % 2 ? 'terminal-response' : ''} key={`${line}-${index}`}>{line}</p>
              ))}
              <p className="terminal-hint">Try <b>help</b>, <b>about</b>, <b>work</b>, <b>skills</b>, or <b>clear</b>.</p>
            </div>
            <form className="terminal-form" onSubmit={runCommand}>
              <label htmlFor="terminal-input"><span className="terminal-prompt">➜</span> <span className="terminal-path">~/now</span></label>
              <input id="terminal-input" value={command} onChange={(event) => setCommand(event.target.value)} autoComplete="off" spellCheck={false} aria-label="Terminal command" />
            </form>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-scribble">LET’S CREATE<br />WITH PURPOSE.</div>
          <div className="contact-content reveal">
            <p className="eyebrow">Have a project in mind?</p>
            <h2>Let’s build<br /><span className="marker">something clear.</span></h2>
            <a className="email-link" href="#work">Explore selected work <span>↗</span></a>
          </div>
          <div className="contact-icon" aria-hidden="true">✦</div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Oke Emmanuel Seun</span>
        <span>Web design + frontend development</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}
