import Head from 'next/head';
import Navbar from '../components/Navbar';

const section = { color: 'white', marginTop: '2rem', marginBottom: '1rem' };
const p = { marginBottom: '1rem', lineHeight: '1.7' };
const ul = { paddingLeft: '1.5rem', margin: '1rem 0', lineHeight: '1.8' };

export default function Support() {
    return (
        <>
            <Head>
                <title>Support | Repliix</title>
                <meta name="description" content="Repliix support — FAQs and contact for the Repliix self-improvement app." />
            </Head>

            <main>
                <Navbar />

                <section style={{ padding: '8rem 0 6rem', background: 'var(--bg-carbon)', minHeight: '100vh', color: 'var(--text-muted)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Support</h1>
                        <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>
                            Need help with Repliix? We're here.
                        </p>

                        <h2 style={section}>Contact Us</h2>
                        <p style={p}>
                            For any questions, issues, or feedback, email us at:{' '}
                            <a href="mailto:githuimaina11@gmail.com" style={{ color: '#aaa' }}>githuimaina11@gmail.com</a>
                        </p>
                        <p style={p}>We aim to respond within 24–48 hours.</p>

                        <h2 style={section}>Frequently Asked Questions</h2>

                        <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>What is Repliix?</h3>
                        <p style={p}>
                            Repliix is a self-improvement app that gives you a personalized, evidence-based protocol for face, body, and health. You describe what you want to improve, and we map it to 190+ interventions — no photo required.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>How do I get my personalized plan?</h3>
                        <p style={p}>
                            Complete the short onboarding questionnaire inside the app. Your answers about your goals, skin tone, gender, and prior treatments are used to filter and rank the most relevant interventions for you.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Is my data private?</h3>
                        <p style={p}>
                            Yes. Your onboarding answers and protocol data are stored locally on your device by default. Paying subscribers have their data synced to a secure cloud database (Supabase). We do not sell your data. See our{' '}
                            <a href="/privacy" style={{ color: '#aaa' }}>Privacy Policy</a> for full details.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>How do I cancel my subscription?</h3>
                        <p style={p}>
                            Subscriptions are managed by the App Store (iOS) or Google Play (Android). To cancel:
                        </p>
                        <ul style={ul}>
                            <li><strong>iOS:</strong> Settings → Apple ID → Subscriptions → Repliix → Cancel</li>
                            <li><strong>Android:</strong> Google Play → Subscriptions → Repliix → Cancel</li>
                        </ul>

                        <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>How do I delete my account and data?</h3>
                        <p style={p}>
                            Email <a href="mailto:githuimaina11@gmail.com" style={{ color: '#aaa' }}>githuimaina11@gmail.com</a> with the subject "Delete my data" and we will delete your account and all associated data within 30 days.
        </p>

                        <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>The recommendations are educational only — should I consult a doctor?</h3>
                        <p style={p}>
                            Yes. All content in Repliix is for informational and educational purposes only. Always consult a licensed medical professional before starting any new health, skincare, or cosmetic procedure.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>How do I turn off daily reminders?</h3>
                        <p style={p}>
                            Open the app → Settings → Daily Reminder → toggle off. You can also disable notifications entirely in your device's notification settings.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>I found a bug or have a feature request.</h3>
                        <p style={p}>
                            Email <a href="mailto:githuimaina11@gmail.com" style={{ color: '#aaa' }}>githuimaina11@gmail.com</a> with a description of the issue or idea. We read every message.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
