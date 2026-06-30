import Head from 'next/head';
import Navbar from '../components/Navbar';

const section = { color: 'white', marginTop: '2rem', marginBottom: '1rem' };
const p = { marginBottom: '1rem', lineHeight: '1.7' };
const ul = { paddingLeft: '1.5rem', margin: '1rem 0', lineHeight: '1.8' };

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Repliix</title>
                <meta name="description" content="Repliix Privacy Policy — how we collect, use, and protect your data." />
            </Head>

            <main>
                <Navbar />

                <section style={{ padding: '8rem 0 6rem', background: 'var(--bg-carbon)', minHeight: '100vh', color: 'var(--text-muted)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Privacy Policy</h1>
                        <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>Last updated: May 17, 2026</p>

                        <p style={p}>
                            Repliix ("we", "us", or "our") operates the Repliix mobile application and website at repliix.com. This policy explains what data we collect, why we collect it, and how we protect it. By using Repliix, you agree to the practices described here.
                        </p>
                        <p style={p}>
                            Repliix is intended for users aged 18 and older. We do not knowingly collect data from anyone under 18.
                        </p>

                        <h2 style={section}>1. Data We Collect</h2>
                        <p style={p}>When you use the Repliix app, we collect the following:</p>
                        <ul style={ul}>
                            <li><strong>Account data</strong> — your name and email address, collected when you sign in with Google via Supabase Auth.</li>
                            <li><strong>Onboarding answers</strong> — gender, ethnicity, skin tone, self-improvement concerns, commitment level, and prior treatments tried. This data is used solely to generate your personalized protocol.</li>
                            <li><strong>Protocol and tracking data</strong> — the recommendations generated for you, which interventions you are actively tracking, your daily check-ins, and streak history.</li>
                            <li><strong>Subscription data</strong> — your subscription status (free or paid) managed by RevenueCat. We do not store payment card details — these are handled entirely by the App Store or Google Play.</li>
                            <li><strong>Usage data</strong> — app open frequency and feature usage for improving the product. We do not sell this data.</li>
                        </ul>

                        <h2 style={section}>2. How We Use Your Data</h2>
                        <ul style={ul}>
                            <li>To generate and display your personalized self-improvement protocol.</li>
                            <li>To persist your history, tracked interventions, and streak across devices via Supabase.</li>
                            <li>To manage your subscription status via RevenueCat.</li>
                            <li>To send you local notifications you have opted into (daily reminders). We do not send marketing emails without your explicit consent.</li>
                            <li>To improve the app based on anonymized usage patterns.</li>
                        </ul>
                        <p style={p}>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

                        <h2 style={section}>3. Third-Party Services</h2>
                        <p style={p}>Repliix uses the following third-party services, each with their own privacy policies:</p>
                        <ul style={ul}>
                            <li><strong>Supabase</strong> — authentication and cloud data storage. Data is stored on servers in the United States. <a href="https://supabase.com/privacy" style={{ color: '#aaa' }}>supabase.com/privacy</a></li>
                            <li><strong>RevenueCat</strong> — subscription management. <a href="https://www.revenuecat.com/privacy" style={{ color: '#aaa' }}>revenuecat.com/privacy</a></li>
                            <li><strong>OpenRouter / OpenAI</strong> — your free-text concern descriptions are sent to an AI model to extract and categorize your concerns. No personally identifiable information beyond your text input is sent. Inputs are not used to train models.</li>
                            <li><strong>Expo (EAS)</strong> — app build and over-the-air update infrastructure. <a href="https://expo.dev/privacy" style={{ color: '#aaa' }}>expo.dev/privacy</a></li>
                            <li><strong>Google</strong> — sign-in via Google OAuth. <a href="https://policies.google.com/privacy" style={{ color: '#aaa' }}>policies.google.com/privacy</a></li>
                        </ul>

                        <h2 style={section}>4. Data Storage and Security</h2>
                        <p style={p}>
                            Your data is stored locally on your device using AsyncStorage and, for paying subscribers, synced to Supabase cloud storage protected by row-level security — meaning only your authenticated account can access your data. We use HTTPS for all network communication.
                        </p>
                        <p style={p}>
                            No security system is perfect. In the event of a data breach, we will notify affected users within 72 hours of becoming aware.
                        </p>

                        <h2 style={section}>5. Your Rights</h2>
                        <p style={p}>You have the right to:</p>
                        <ul style={ul}>
                            <li><strong>Access</strong> — request a copy of the data we hold about you.</li>
                            <li><strong>Correction</strong> — request we correct inaccurate data.</li>
                            <li><strong>Deletion</strong> — request we delete your account and all associated data. Email us at <a href="mailto:githuimaina11@gmail.com" style={{ color: '#aaa' }}>githuimaina11@gmail.com</a> with the subject "Delete my data" and we will process this within 30 days.</li>
                            <li><strong>Portability</strong> — request a machine-readable export of your data.</li>
                            <li><strong>Opt out of notifications</strong> — disable in your device settings at any time.</li>
                        </ul>

                        <h2 style={section}>6. Data Retention</h2>
                        <p style={p}>
                            We retain your data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days. Anonymized, aggregated usage data may be retained indefinitely.
                        </p>

                        <h2 style={section}>7. Children</h2>
                        <p style={p}>
                            Repliix is not directed at children under 18. We do not knowingly collect personal information from anyone under 18. If we become aware that a user is under 18, we will delete their account immediately.
                        </p>

                        <h2 style={section}>8. Changes to This Policy</h2>
                        <p style={p}>
                            We may update this policy from time to time. We will notify you of material changes by updating the date at the top of this page and, where appropriate, via an in-app notice. Continued use of Repliix after changes constitutes acceptance of the updated policy.
                        </p>

                        <h2 style={section}>9. Contact</h2>
                        <p style={p}>
                            For any privacy-related questions or requests, contact us at:<br />
                            <a href="mailto:githuimaina11@gmail.com" style={{ color: '#aaa' }}>githuimaina11@gmail.com</a><br />
                            Repliix, Nairobi, Kenya
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
