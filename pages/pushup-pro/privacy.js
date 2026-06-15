import Head from 'next/head';
import Navbar from '../../components/Navbar';

const section = { color: 'white', marginTop: '2rem', marginBottom: '1rem' };
const p = { marginBottom: '1rem', lineHeight: '1.7' };
const ul = { paddingLeft: '1.5rem', margin: '1rem 0', lineHeight: '1.8' };
const link = { color: '#aaa' };

export default function PushupProPrivacy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Pushup Pro</title>
                <meta name="description" content="Pushup Pro Privacy Policy — how we collect, use, and protect your data." />
            </Head>

            <main>
                <Navbar />

                <section style={{ padding: '8rem 0 6rem', background: 'var(--bg-carbon)', minHeight: '100vh', color: 'var(--text-muted)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Privacy Policy</h1>
                        <p style={{ marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Pushup Pro — by Repliix</p>
                        <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>Last updated: June 1, 2026</p>

                        <p style={p}>
                            Repliix ("we", "us", or "our") operates the Pushup Pro mobile application. This policy explains what data we collect, why we collect it, and how we protect it. By using Pushup Pro, you agree to the practices described here.
                        </p>
                        <p style={p}>
                            Pushup Pro is intended for users aged 13 and older. We do not knowingly collect data from anyone under 13.
                        </p>

                        <h2 style={section}>1. Data We Collect</h2>
                        <p style={p}>When you use Pushup Pro, we collect the following:</p>
                        <ul style={ul}>
                            <li><strong>Account data</strong> — your name and email address, provided when you sign in with Google. We also store any display name or username you choose during onboarding.</li>
                            <li><strong>Fitness data</strong> — your current max reps, target goal, training level, weekly workout logs (sets, reps, duration), and personal records. This data is used to generate and track your training program.</li>
                            <li><strong>Social content</strong> — posts, comments, likes, and direct messages you create within the app. This content is visible to other users according to the privacy settings described below.</li>
                            <li><strong>Usage data</strong> — app open events and feature usage for improving the product. We do not sell this data.</li>
                        </ul>

                        <h2 style={section}>2. How We Use Your Data</h2>
                        <ul style={ul}>
                            <li>To generate and update your personalised 12-week pushup training program.</li>
                            <li>To display your progress, streaks, and personal records within the app.</li>
                            <li>To power social features — your display name, posts, and PR announcements are visible to users who follow you.</li>
                            <li>To send you local push notifications you have opted into (daily workout reminders, retest alerts). We do not send marketing emails without your explicit consent.</li>
                            <li>To improve the app based on anonymised usage patterns.</li>
                        </ul>
                        <p style={p}>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

                        <h2 style={section}>3. What Other Users Can See</h2>
                        <ul style={ul}>
                            <li><strong>Public by default:</strong> your display name, username, all-time PR, current training level, and any posts or PR announcements you publish.</li>
                            <li><strong>Followers only:</strong> your workout logs appear in the feed of users who follow you.</li>
                            <li><strong>Private:</strong> your email address, exact workout history, and direct messages are never visible to other users.</li>
                        </ul>

                        <h2 style={section}>4. Third-Party Services</h2>
                        <p style={p}>Pushup Pro uses the following third-party services, each with their own privacy policies:</p>
                        <ul style={ul}>
                            <li><strong>Supabase</strong> — authentication and cloud data storage. Data is stored on servers in the EU (eu-central-1). <a href="https://supabase.com/privacy" style={link}>supabase.com/privacy</a></li>
                            <li><strong>Google</strong> — sign-in via Google OAuth. <a href="https://policies.google.com/privacy" style={link}>policies.google.com/privacy</a></li>
                            <li><strong>Expo (EAS)</strong> — app build and distribution infrastructure. <a href="https://expo.dev/privacy" style={link}>expo.dev/privacy</a></li>
                        </ul>

                        <h2 style={section}>5. Data Storage and Security</h2>
                        <p style={p}>
                            Your data is stored locally on your device and synced to Supabase cloud storage in the EU (Frankfurt). All tables are protected by row-level security — only your authenticated account can read or modify your own data. We use HTTPS for all network communication.
                        </p>
                        <p style={p}>
                            No security system is perfect. In the event of a data breach affecting your personal data, we will notify you within 72 hours of becoming aware.
                        </p>

                        <h2 style={section}>6. Your Rights</h2>
                        <p style={p}>You have the right to:</p>
                        <ul style={ul}>
                            <li><strong>Access</strong> — request a copy of all data we hold about you.</li>
                            <li><strong>Correction</strong> — update your display name or username at any time in the app.</li>
                            <li><strong>Deletion</strong> — delete your account and all associated data instantly from Settings → Account → Delete Account. This permanently removes your profile, workout history, posts, messages, and auth record. Alternatively, email <a href="mailto:githui@repliix.com" style={link}>githui@repliix.com</a> with the subject "Delete my Pushup Pro data".</li>
                            <li><strong>Portability</strong> — request a machine-readable export of your data by emailing us.</li>
                            <li><strong>Opt out of notifications</strong> — disable in your device settings or in the app under Settings → Notifications at any time.</li>
                        </ul>

                        <h2 style={section}>7. Data Retention</h2>
                        <p style={p}>
                            We retain your data for as long as your account is active. When you delete your account (in-app or by request), all personal data is permanently deleted immediately. Anonymised, aggregated statistics may be retained indefinitely.
                        </p>

                        <h2 style={section}>8. Children</h2>
                        <p style={p}>
                            Pushup Pro is not directed at children under 13. We do not knowingly collect personal information from anyone under 13. If we become aware that a user is under 13, we will delete their account immediately.
                        </p>

                        <h2 style={section}>9. Changes to This Policy</h2>
                        <p style={p}>
                            We may update this policy from time to time. We will notify you of material changes by updating the date at the top of this page and, where appropriate, via an in-app notice. Continued use of Pushup Pro after changes constitutes acceptance of the updated policy.
                        </p>

                        <h2 style={section}>10. Contact</h2>
                        <p style={p}>
                            For any privacy-related questions or requests:<br />
                            <a href="mailto:githui@repliix.com" style={link}>githui@repliix.com</a><br />
                            Repliix, Nairobi, Kenya
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
