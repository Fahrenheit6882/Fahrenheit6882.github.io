import React, { useState } from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './pumpkinator-support.module.css';

const PAYPAL_URL = 'https://www.paypal.com/donate/?hosted_button_id=9W7L5HYSZQZ3G&source=qr';

// Google Form that collects the sign-ups. To wire it up:
//  1. Create a Form with three "Short answer" questions: Name, Email, Source.
//  2. Open the live form → ⋮ → "Get pre-filled link", fill in each question with any text, click
//     "Get link". The URL contains entry.<number>=<text> for each question: copy those numbers.
//  3. Paste the form's ID (the long string between /d/e/ and /viewform) and the entry IDs below.
const FORM_ID = '1FAIpQLSdyBe_A15vgUmqro8iccBQ-ugP5BhWGk1Q7yXvq3u7_o0zZ_g';
const ENTRY_NAME = 'entry.2026200168';
const ENTRY_EMAIL = 'entry.1897706144';
const ENTRY_SOURCE = 'entry.386780462';
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
const FORM_CONFIGURED = !FORM_ID.startsWith('REPLACE');

const SUGGESTED_DONATION = '$45';
const DOCS_BASE = '/docs/projects/pumpkinator';

// Never let a failed or slow sign-up block the payment: wait at most this long, then go to PayPal.
const SUBMIT_TIMEOUT_MS = 2500;

export default function PumpkinatorSupport(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);

    if (FORM_CONFIGURED) {
      const body = new URLSearchParams();
      body.set(ENTRY_NAME, name.trim());
      body.set(ENTRY_EMAIL, email.trim());
      body.set(ENTRY_SOURCE, 'pumpkinator-support page');
      try {
        // no-cors: Google doesn't send CORS headers, and we only need the request to arrive.
        await Promise.race([
          fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body }),
          new Promise((resolve) => setTimeout(resolve, SUBMIT_TIMEOUT_MS)),
        ]);
      } catch {
        // Ignore: the payment matters more than the sign-up.
      }
    }

    window.location.href = PAYPAL_URL;
  }

  return (
    <>
      <Head>
        <title>Support the Team | Pumpkinator | Fahrenheit Robotics 6882</title>
        <meta
          name="description"
          content="Get a Pumpkinator and support FIRST Robotics Team 6882. Leave your email for build updates, then give via PayPal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&display=swap"
        />
      </Head>

      <div className={styles.page}>
        <main className={styles.card}>
          <div className={styles.label}>Fahrenheit Robotics 6882</div>
          <h1 className={styles.title}>
            PUMPKIN<span className={styles.accent}>ATOR</span>
          </h1>
          <p className={styles.lead}>
            Every kit is handed out for a suggested <strong>{SUGGESTED_DONATION}</strong> donation to
            our student robotics team. Pop in your email first so we can send you troubleshooting help
            and news of next year's batch, then pay securely with PayPal.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.field}>
              <span>Your name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <p className={styles.note}>
              By continuing, you're okay with us emailing you a few times a year about Fahrenheit
              Robotics. Unsubscribe anytime. If you're under 18, please use a parent or guardian's email.
            </p>

            <button type="submit" className={styles.btnPrimary} disabled={busy}>
              {busy ? 'Taking you to PayPal…' : 'Continue to PayPal →'}
            </button>
          </form>

          <p className={styles.skip}>
            In a hurry?{' '}
            <a href={PAYPAL_URL}>Skip and go straight to PayPal</a>
          </p>

          <div className={styles.links}>
            <a href={useBaseUrl(`${DOCS_BASE}/overview`)}>About the Pumpkinator</a>
            <a href={useBaseUrl(`${DOCS_BASE}/troubleshooting`)}>Troubleshooting</a>
            <a href="https://fahrenheitrobotics.org">fahrenheitrobotics.org</a>
          </div>
        </main>
      </div>
    </>
  );
}
