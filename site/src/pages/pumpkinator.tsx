import React, { useEffect, useState } from 'react';
import Head from '@docusaurus/Head';

import styles from './pumpkinator.module.css';

// Swap or add entries here to update the video showcase (e.g. after recording a new one).
const VIDEOS = [
  {
    id: '8D-cuuJtzis',
    title: 'Pumpkinator Demo',
    caption: 'Demo (At Night)',
  },
  {
    id: 'WY683S-2anQ',
    title: 'Pumpkinator Case Inside a Pumpkin',
    caption: 'Case Inside A Pumpkin',
  },
  {
    id: 'JXXX8wQJgJw',
    title: 'Pumpkinator Electronics In The Case',
    caption: 'Electronics In The Case',
  },
  {
    id: '08HcJdJ3jpE',
    title: 'Pumpkinator Overview (alpha version)',
    caption: 'Overview (Alpha Version)',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Motion Detected',
    body: 'A hidden PIR sensor senses you creeping closer.',
  },
  {
    n: '02',
    title: 'Sound Triggers',
    body: 'A speaker tucked inside plays a spooky sound effect.',
  },
  {
    n: '03',
    title: 'Lights Ignite',
    body: 'RGB LEDs flash and pulse, glowing up through the lid.',
  },
];

const EMBERS = [
  { left: '6%', delay: '0s', dur: '7s', size: 4 },
  { left: '14%', delay: '1.2s', dur: '9s', size: 3 },
  { left: '23%', delay: '2.4s', dur: '8s', size: 5 },
  { left: '34%', delay: '0.6s', dur: '10s', size: 3 },
  { left: '45%', delay: '3s', dur: '7.5s', size: 4 },
  { left: '58%', delay: '1.8s', dur: '9.5s', size: 3 },
  { left: '68%', delay: '0.3s', dur: '8.5s', size: 5 },
  { left: '77%', delay: '2.1s', dur: '11s', size: 3 },
  { left: '86%', delay: '1.5s', dur: '7.8s', size: 4 },
  { left: '93%', delay: '3.4s', dur: '9.2s', size: 3 },
];

const COMPONENTS = [
  {
    name: 'Arduino Nano',
    blurb: 'The brain. Reads the sensor, cues the sound, and drives the light show.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.6}>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <line x1="7" y1="3" x2="7" y2="6" />
        <line x1="12" y1="3" x2="12" y2="6" />
        <line x1="17" y1="3" x2="17" y2="6" />
        <line x1="7" y1="18" x2="7" y2="21" />
        <line x1="12" y1="18" x2="12" y2="21" />
        <line x1="17" y1="18" x2="17" y2="21" />
      </svg>
    ),
  },
  {
    name: 'PIR Motion Sensor',
    blurb: 'The lookout. Senses body heat moving in from about a foot away.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth={1.6}>
        <path d="M2 12a10 10 0 0 1 20 0" />
        <path d="M6 12a6 6 0 0 1 12 0" />
        <circle cx="12" cy="12" r="2" fill="var(--accent2)" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'JQ6500 Sound Module',
    blurb: 'The voice. Plays a pre-loaded spooky sound effect through the speaker.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.6}>
        <line x1="4" y1="14" x2="4" y2="18" />
        <line x1="8" y1="9" x2="8" y2="18" />
        <line x1="12" y1="5" x2="12" y2="18" />
        <line x1="16" y1="10" x2="16" y2="18" />
        <line x1="20" y1="13" x2="20" y2="18" />
      </svg>
    ),
  },
  {
    name: 'WS2812B RGB LEDs',
    blurb: 'The glow. Two or three LEDs flash and pulse up through the pumpkin lid.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--accent2)" stroke="none">
        <path d="M12 1l2.6 7.2L22 11l-7.4 2.8L12 21l-2.6-7.2L2 11l7.4-2.8L12 1z" />
      </svg>
    ),
  },
  {
    name: '3W Speaker',
    blurb: 'The howl. Faces downward so sound bounces around inside the pumpkin.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.6}>
        <path d="M4 9h4l5-4v14l-5-4H4z" />
        <path d="M16 9a4 4 0 0 1 0 6" />
        <path d="M19 6a8 8 0 0 1 0 12" />
      </svg>
    ),
  },
  {
    name: '4×AA Battery Cradle',
    blurb: 'The fuel. A 3D-printed cradle with spring contacts, good for 15–20+ hours.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth={1.6}>
        <rect x="2" y="8" width="18" height="8" rx="1.5" />
        <line x1="22" y1="11" x2="22" y2="13" />
        <line x1="6" y1="8" x2="6" y2="16" />
        <line x1="10" y1="8" x2="10" y2="16" />
        <line x1="14" y1="8" x2="14" y2="16" />
      </svg>
    ),
  },
];

const DOCS_BASE = 'https://fahrenheitrobotics.org/site/docs/projects/pumpkinator';

export default function Pumpkinator(): JSX.Element {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Pumpkinator | Fahrenheit Robotics 6882</title>
        <meta
          name="description"
          content="A motion-triggered light & sound Halloween prop, hand-built by the students of FIRST Robotics Team 6882. Troubleshoot your kit, build your own, or join the team."
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap"
        />
      </Head>

      <div className={styles.page}>
        <nav className={styles.nav}>
          <a href="#top" className={styles.logo}>
            FAHRENHEIT <span className={styles.logoAccent}>6882</span>
          </a>
          <div className={styles.navRight}>
            <div className={styles.navLinks}>
              <a href="#how-it-works" className={styles.navLink}>How It Works</a>
              <a href="#whats-inside" className={styles.navLink}>What's Inside</a>
              <a href="#get-one" className={styles.navLink}>Get One</a>
              <a href="#team" className={styles.navLink}>Team</a>
            </div>
            <a
              href={`${DOCS_BASE}/troubleshooting`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnGhost} ${styles.navCta}`}>
              Have a kit? &rarr;
            </a>
          </div>
        </nav>

        <section id="top" className={styles.hero}>
          <div className={styles.heroGlow} />

          {EMBERS.map((e, i) => (
            <span
              key={i}
              className={styles.ember}
              style={{
                left: e.left,
                animationDelay: e.delay,
                animationDuration: e.dur,
                width: e.size,
                height: e.size,
              }}
            />
          ))}

          <div className={styles.heroInner}>
            <div className={`${styles.sectionLabel} ${styles.centered}`}>A Fahrenheit Robotics 6882 Original</div>
            <h1 className={`${styles.display} ${styles.heroTitle}`}>
              PUMPKIN<span className={styles.logoAccent}>ATOR</span>
            </h1>
            <p className={styles.heroSub}>
              A motion-triggered light &amp; sound haunt, hand-built by the students of FIRST Robotics Team
              6882, hiding inside a real pumpkin near you this Halloween.
            </p>

            <div className={styles.heroCtas}>
              <a href="#how-it-works" className={styles.btnPrimary}>See It Work</a>
              <a href="#get-one" className={styles.btnGhost}>Get A Kit ($45)</a>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statChip}>Hand-built by students</div>
              <div className={styles.statChip}>15&ndash;20 hrs battery life</div>
              <div className={styles.statChip}>DIY electronics project</div>
            </div>
          </div>

          <div className={styles.pumpkinWrap}>
            <div className={styles.pumpkinBody} />
            <div className={`${styles.eye} ${styles.eyeLeft}`} />
            <div className={`${styles.eye} ${styles.eyeRight}`} />
            <div className={styles.mouth} />
            <div className={styles.stem} />
          </div>
        </section>

        <section id="how-it-works" className={styles.section}>
          <div className={styles.sectionLabel}>How It Works</div>
          <h2 className={`${styles.display} ${styles.sectionHeading}`}>
            Three scares, one very spooked trick-or-treater.
          </h2>

          <div className={styles.stepsRow}>
            {STEPS.map((s, i) => {
              const active = i === step;
              return (
                <div className={styles.stepItem} key={s.n}>
                  <div className={`${styles.stepNum} ${active ? styles.stepNumActive : ''}`}>{s.n}</div>
                  <h3 className={`${styles.stepTitle} ${active ? styles.stepTitleActive : ''}`}>{s.title}</h3>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setStep(0)}
            className={`${styles.btnGhost} ${styles.replayBtn}`}>
            &#8635; Replay The Sequence
          </button>
        </section>

        <section id="showcase" className={styles.showcase}>
          <div className={styles.showcaseInner}>
            <div className={styles.sectionLabel}>See It In The Wild</div>
            <h2 className={`${styles.display} ${styles.sectionHeading}`} style={{ marginBottom: 40, fontSize: 36 }}>
              We think you'll want one on your porch too.
            </h2>
            <div className={styles.videoGrid}>
              {VIDEOS.map((v) => (
                <div className={styles.videoCard} key={v.id}>
                  <iframe
                    className={styles.videoFrame}
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className={styles.videoCaption}>{v.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="whats-inside" className={styles.section}>
          <div className={styles.sectionLabel}>What's Inside</div>
          <h2 className={`${styles.display} ${styles.sectionHeading}`}>
            Six parts, zero magic (okay, maybe a little).
          </h2>
          <div className={styles.grid3}>
            {COMPONENTS.map((c) => (
              <div className={styles.componentCard} key={c.name}>
                {c.icon}
                <h4>{c.name}</h4>
                <p>{c.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.statsBand}>
          <div className={styles.statsRow}>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>12</div>
              <div className={styles.statLabel}>Light And Sound Shows</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>$1,000</div>
              <div className={styles.statLabel}>Fundraiser Goal</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>15&ndash;20</div>
              <div className={styles.statLabel}>Hours Of Battery Life</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statLabel}>Built By Students</div>
            </div>
          </div>
        </section>

        <section id="get-one" className={styles.section}>
          <div className={styles.sectionLabel}>Get One</div>
          <h2 className={`${styles.display} ${styles.sectionHeading}`} style={{ marginBottom: 16 }}>
            Already have a kit? Want to build your own? Check out our guides.
          </h2>
          <p className={styles.getOneCopy}>
            Every kit is handed out for a suggested $45 donation to the team, fully assembled but
            delicate. Whichever situation you're in, here's where to go next.
          </p>

          <div className={styles.linkCardsRow}>
            <a href={`${DOCS_BASE}/troubleshooting`} target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.6}>
                <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
              </svg>
              <h3>Something's not lighting up</h3>
              <p>Troubleshoot your kit: most fixes take under a minute, no tools required.</p>
              <span className={styles.linkCardCta}>Troubleshooting Guide &rarr;</span>
            </a>
            <a href={`${DOCS_BASE}/build-your-own`} target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth={1.6}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
              <h3>Want the full details?</h3>
              <p>How it works, the full parts list and wiring diagrams to build your own, or how to customize a kit's sounds and lights.</p>
              <span className={styles.linkCardCta}>Full Details &rarr;</span>
            </a>
          </div>

          <p className={styles.overviewLink}>
            Want the deep technical write-up too?{' '}
            <a href={`${DOCS_BASE}/overview`} target="_blank" rel="noopener noreferrer">
              Read the full project overview &rarr;
            </a>
          </p>
        </section>

        <section id="team" className={styles.team}>
          <div className={styles.teamInner}>
            <div className={`${styles.sectionLabel} ${styles.centered}`}>Who Built This</div>
            <h2 className={`${styles.display} ${styles.teamHeading}`}>Fahrenheit Robotics Team 6882</h2>
            <p className={styles.teamCopy}>
              We're a FIRST Robotics team based in Fredericksburg, Virginia, formed in 2017.
              We welcome public, private, and homeschool high school students (and ambitious 8th graders)
              from Fredericksburg and the surrounding area. We meet all year, learning not just how to
              build a competition robot, but how to manage and run a successful team.
            </p>
            <p className={styles.teamCopy} style={{ marginBottom: 40 }}>
              The Pumpkinator is one of our student-led fundraisers. Every kit given out helps cover
              travel, parts, and competition fees for the season ahead.
            </p>

            <div className={styles.teamCtas}>
              <a href="https://fahrenheitrobotics.org#contact" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Join The Team
              </a>
              <a href="https://frc-events.firstinspires.org/team/6882" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
                Our FIRST Profile
              </a>
            </div>

            <div className={styles.socialRow}>
              <a href="mailto:fahrenheitrobotics@gmail.com" className={styles.socialIcon} aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
              </a>
              <a href="https://discord.com/channels/505146464037634050" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Discord">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.3 5.4A17.6 17.6 0 0 0 15.9 4l-.3.6a13 13 0 0 1 3.9 1.5 14.6 14.6 0 0 0-12.9 0A13 13 0 0 1 10.4 4L10.1 4A17.6 17.6 0 0 0 3.7 5.4C1.3 9 .6 12.5.9 16a17.7 17.7 0 0 0 5.4 2.7l.7-1.1a11 11 0 0 1-1.8-.9l.4-.3a12.7 12.7 0 0 0 10.9 0l.4.3a11 11 0 0 1-1.8.9l.7 1.1A17.7 17.7 0 0 0 21.1 16c.4-4-.5-7.5-2.8-10.6zM8.7 14c-.8 0-1.4-.8-1.4-1.7 0-.9.6-1.7 1.4-1.7s1.5.8 1.4 1.7c0 .9-.6 1.7-1.4 1.7zm6.6 0c-.8 0-1.4-.8-1.4-1.7 0-.9.6-1.7 1.4-1.7s1.5.8 1.4 1.7c0 .9-.6 1.7-1.4 1.7z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/fahrenheitrobotics" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3C16.5 3.2 15.4 3 14.2 3c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2H10V21h3.5z" />
                </svg>
              </a>
              <a href="https://github.com/Fahrenheit6882" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a4 4 0 0 1 1.1-2.8c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 3 1a10 10 0 0 1 5.4 0c2.1-1.3 3-1 3-1 .6 1.4.2 2.4.1 2.7a4 4 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>&copy; {new Date().getFullYear()} Fahrenheit Robotics Team 6882. Built by students, for students.</span>
          <a href="https://fahrenheitrobotics.org" target="_blank" rel="noopener noreferrer">fahrenheitrobotics.org</a>
        </footer>
      </div>
    </>
  );
}
