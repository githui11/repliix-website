import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { OrganizationSchema, FAQSchema } from '../components/Schema';

export default function Home() {
  const faqs = [
    {
      question: "Does the app take a photo of my face?",
      answer: "No. Repliix is entirely text-based. You type what you want to improve: your jawline, skin, energy levels, gut health, whatever. Then and we generate a protocol for it. No camera, no face scan, no score."
    },
    {
      question: "What kinds of things can I improve with Repliix?",
      answer: "Face (jawline, skin, eyes, nose, hair, beard), body (composition, physique, training), and health (gut health, energy, inflammation, nutrition). If it's something you want to work on, you can type it in."
    },
    {
      question: "What's the difference between Lifestyle Changes and Advanced Protocols?",
      answer: "Lifestyle Changes are diet, training, supplementation, and grooming interventions you can start today with no prescription. Advanced Protocols include pharmacological or surgical options. Higher impact, higher complexity. We always recommend consulting a licensed professional before starting those."
    },
    {
      question: "How personalized is the plan?",
      answer: "Highly. The app asks about your gender, goals, commitment level, and specific concerns. It uses that context to filter interventions. If you're just exploring, you won't be shown aggressive protocols. If you're fully committed, you get the full stack."
    },
    {
      question: "Is this based on real research?",
      answer: "Yes. Every intervention in the database cites evidence: randomized controlled trials, clinical studies, or strong community consensus from peer-reviewed frameworks. We label the evidence level for each protocol."
    },
    {
      question: "How much does Repliix cost?",
      answer: "Repliix is $9.99/month or $39/year. New users can opt into a 3-day free trial before being charged. You get full access to your personalized protocol, all intervention details, and updates as we add new content."
    }
  ];

  const pillars = [
    {
      icon: '◻',
      title: 'Face',
      items: ['Jawline & chin definition', 'Skin quality & texture', 'Eye area & under-eye', 'Nose harmony', 'Hair density & hairline', 'Beard density & coverage']
    },
    {
      icon: '◻',
      title: 'Body',
      items: ['Body composition & leanness', 'Muscle group prioritization', 'Physique aesthetics', 'Posture & frame', 'Training approach', 'Hormone optimization']
    },
    {
      icon: '◻',
      title: 'Health',
      items: ['Gut health & digestion', 'Energy & metabolism', 'Inflammation & bloat', 'Seed oil elimination', 'Nutrition fundamentals', 'Sleep & recovery']
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Tell us what you want to improve',
      description: 'Type anything: your jawline, your skin, your energy, your gut. Or select from our categories. No photo, no rating.'
    },
    {
      number: '02',
      title: 'Get a personalized protocol',
      description: 'We filter 190+ evidence-based interventions to your gender, goals, and commitment level, then rank them by efficacy.'
    },
    {
      number: '03',
      title: 'Execute and see results',
      description: 'Your plan is organized into Lifestyle Changes (start today) and Advanced Protocols (when you\'re ready to go deeper).'
    }
  ];

  const differentiators = [
    { label: 'No photo required', desc: 'We don\'t need your face. You know what you want to improve.' },
    { label: 'No rating or score', desc: 'You won\'t get a number that makes you feel worse. You\'ll get a plan.' },
    { label: 'Evidence-based', desc: 'Every protocol is tagged with its evidence level, from RCTs to community consensus.' },
    { label: 'Protocols, not opinions', desc: 'Specific steps, timelines, and risk levels. Not vague lifestyle advice.' }
  ];

  return (
    <>
      <Head>
        <title>Repliix: Build the Best Version of Yourself</title>
        <meta name="description" content="Repliix gives you a personalized self-improvement plan, covering face, body, and health. No photo required. No face rating. Just a clear protocol to execute." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Repliix: Build the Best Version of Yourself" />
        <meta property="og:description" content="Tell us what you want to improve. Get an evidence-based protocol for your face, body, or health. No photo required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.repliix.com" />
        <link rel="canonical" href="https://www.repliix.com" />
      </Head>

      <OrganizationSchema />
      <FAQSchema faqs={faqs} />

      <Navbar />

      <main>
        {/* Hero */}
        <section style={{
          paddingTop: 'clamp(7rem, 16vw, 11rem)',
          paddingBottom: 'clamp(5rem, 10vw, 8rem)',
          textAlign: 'center',
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)'
        }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div style={{
              display: 'inline-block',
              background: 'var(--accent-dim)',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.4rem 1rem',
              borderRadius: 20,
              marginBottom: '2rem',
              border: '1px solid var(--border)'
            }}>
              Self-improvement, made personal
            </div>
            <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Build the best version<br />of yourself.
            </h1>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Repliix gives you a personalized improvement plan. No face ratings, no toxic comparisons. Just a clear protocol to execute.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="#how-it-works"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  fontWeight: 500
                }}
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section style={{
          padding: 'clamp(4rem, 8vw, 7rem) 0',
          background: 'var(--bg-subtle)',
          borderBottom: '1px solid var(--border)'
        }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              The problem
            </p>
            <h2 style={{ marginBottom: '1.5rem' }}>Most self-improvement apps are built wrong.</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              They take a photo of your face and spit out a score. That&apos;s not helpful. It&apos;s harmful. You already know what you want to work on. You don&apos;t need a number to confirm it.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--text)' }}>
              Repliix is different. <strong>You tell us what you want to improve. We give you a plan.</strong> Evidence-based, filtered to your commitment level, organized into steps you can actually execute.
            </p>
          </div>
        </section>

        {/* 3 Pillars */}
        <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', background: 'var(--bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                What you can improve
              </p>
              <h2>Face. Body. Health.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {pillars.map((pillar) => (
                <div key={pillar.title} style={{
                  background: 'var(--bg-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '2rem'
                }}>
                  <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{pillar.title}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {pillar.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" style={{
          padding: 'clamp(4rem, 8vw, 7rem) 0',
          background: 'var(--bg-subtle)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                How it works
              </p>
              <h2>Three steps to a plan.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
              {steps.map((step) => (
                <div key={step.number} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--border-strong)', letterSpacing: '-0.05em', lineHeight: 1 }}>
                    {step.number}
                  </span>
                  <h3 style={{ marginBottom: 0 }}>{step.title}</h3>
                  <p style={{ marginBottom: 0, lineHeight: 1.7 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it's different */}
        <section style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', background: 'var(--bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Why it&apos;s different
              </p>
              <h2>Built on principles, not gimmicks.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
              {differentiators.map((d) => (
                <div key={d.label} style={{
                  background: 'var(--bg-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '1.5rem'
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{ color: '#fff', fontSize: '1rem' }}>✓</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{d.label}</h3>
                  <p style={{ marginBottom: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beta signup CTA */}
        <section id="beta" style={{
          padding: 'clamp(4rem, 8vw, 7rem) 0',
          background: 'var(--accent)',
          textAlign: 'center'
        }}>
          <div className="container" style={{ maxWidth: 560 }}>
            <p style={{
              display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)', marginBottom: '1rem'
            }}>
              Now in Beta
            </p>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
              Try the app before launch.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginBottom: '2rem' }}>
              Available now on Android. Tap below to join the closed beta on Google Play.
            </p>
            <a
              href="https://play.google.com/apps/testing/com.repliix.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '0.85rem 2rem', borderRadius: 8,
                background: '#fff', color: 'var(--accent)', fontWeight: 700,
                fontSize: '0.95rem', textDecoration: 'none', whiteSpace: 'nowrap'
              }}
            >
              Join Beta →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section style={{
          padding: 'clamp(4rem, 8vw, 7rem) 0',
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)'
        }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                FAQ
              </p>
              <h2>Common questions.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {faqs.map((faq) => (
                <div key={faq.question} style={{
                  background: 'var(--bg-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '1.5rem 2rem'
                }}>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{faq.question}</h3>
                  <p style={{ marginBottom: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
