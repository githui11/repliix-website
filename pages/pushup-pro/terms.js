import Head from 'next/head';
import Navbar from '../../components/Navbar';

const section = { color: 'white', marginTop: '2rem', marginBottom: '1rem' };
const p = { marginBottom: '1rem', lineHeight: '1.7' };
const ul = { paddingLeft: '1.5rem', margin: '1rem 0', lineHeight: '1.8' };
const link = { color: '#aaa' };

export default function PushupProTerms() {
    return (
        <>
            <Head>
                <title>Terms of Service | Pushup Pro</title>
                <meta name="description" content="Pushup Pro Terms of Service." />
                <meta name="robots" content="noindex" />
            </Head>

            <main>
                <Navbar />

                <section style={{ padding: '8rem 0 6rem', background: 'var(--bg-carbon)', minHeight: '100vh', color: 'var(--text-muted)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Terms of Service</h1>
                        <p style={{ marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Pushup Pro — by Repliix</p>
                        <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>Last updated: June 1, 2026</p>

                        <p style={p}>
                            These Terms of Service ("Terms") govern your use of the Pushup Pro mobile application ("App") operated by Repliix ("we", "us", or "our"). By creating an account or using the App, you agree to these Terms. If you do not agree, do not use the App.
                        </p>

                        <h2 style={section}>1. Eligibility</h2>
                        <p style={p}>
                            You must be at least 13 years old to use Pushup Pro. By using the App, you represent that you meet this requirement. We do not knowingly provide the App to anyone under 13.
                        </p>

                        <h2 style={section}>2. Your Account</h2>
                        <ul style={ul}>
                            <li>You sign in using your Google account. You are responsible for keeping your account secure.</li>
                            <li>You are responsible for all activity that occurs under your account.</li>
                            <li>You may not create accounts for other people without their consent or use automated means to create accounts.</li>
                            <li>You may delete your account at any time from Settings → Account → Delete Account. This immediately and permanently deletes all your data.</li>
                        </ul>

                        <h2 style={section}>3. Acceptable Use</h2>
                        <p style={p}>You agree not to:</p>
                        <ul style={ul}>
                            <li>Post content that is abusive, threatening, harassing, obscene, or otherwise harmful to other users.</li>
                            <li>Impersonate another person or entity.</li>
                            <li>Use the App for any unlawful purpose.</li>
                            <li>Attempt to gain unauthorised access to another user's account or data.</li>
                            <li>Reverse engineer, decompile, or otherwise attempt to extract the source code of the App.</li>
                            <li>Scrape, crawl, or use automated tools to collect data from the App without our written consent.</li>
                        </ul>
                        <p style={p}>
                            We reserve the right to suspend or permanently ban any account that violates these rules.
                        </p>

                        <h2 style={section}>4. User Content</h2>
                        <p style={p}>
                            You retain ownership of content you post (workout results, comments, messages). By posting content, you grant Repliix a non-exclusive, worldwide, royalty-free licence to display and distribute that content within the App for the purpose of operating the service.
                        </p>
                        <p style={p}>
                            You are solely responsible for the content you post. We may remove content that violates these Terms or that we determine is otherwise harmful.
                        </p>

                        <h2 style={section}>5. Health and Fitness Disclaimer</h2>
                        <p style={p}>
                            Pushup Pro provides general fitness programming for informational purposes only. The App is not a substitute for professional medical advice, diagnosis, or treatment. Before starting any new exercise programme, consult a qualified healthcare provider, particularly if you have any pre-existing medical conditions or injuries.
                        </p>
                        <p style={p}>
                            You exercise at your own risk. Repliix is not liable for any injury, illness, or other harm that results from following the training programmes or content in the App.
                        </p>

                        <h2 style={section}>6. Intellectual Property</h2>
                        <p style={p}>
                            All App content, design, code, and branding are the property of Repliix or its licensors and are protected by copyright and other intellectual property laws. You may not copy, modify, or distribute any part of the App without our written consent.
                        </p>

                        <h2 style={section}>7. Privacy</h2>
                        <p style={p}>
                            Your use of the App is also governed by our <a href="/pushup-pro/privacy" style={link}>Privacy Policy</a>, which is incorporated into these Terms by reference.
                        </p>

                        <h2 style={section}>8. Availability</h2>
                        <p style={p}>
                            We do not guarantee that the App will be available at all times or free from errors. We may suspend, modify, or discontinue any part of the App at any time without liability.
                        </p>

                        <h2 style={section}>9. Limitation of Liability</h2>
                        <p style={p}>
                            To the maximum extent permitted by applicable law, Repliix and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the App — including any injuries sustained during exercise, loss of data, or loss of profits.
                        </p>
                        <p style={p}>
                            Our total aggregate liability to you for any claims arising from these Terms or your use of the App shall not exceed USD $100.
                        </p>

                        <h2 style={section}>10. Governing Law</h2>
                        <p style={p}>
                            These Terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya, unless applicable consumer protection laws in your jurisdiction require otherwise.
                        </p>

                        <h2 style={section}>11. Changes to These Terms</h2>
                        <p style={p}>
                            We may update these Terms from time to time. We will notify you of material changes via an in-app notice or by updating the date above. Continued use of the App after changes constitutes acceptance of the updated Terms.
                        </p>

                        <h2 style={section}>12. Contact</h2>
                        <p style={p}>
                            Questions about these Terms? Contact us at:<br />
                            <a href="mailto:githui@repliix.com" style={link}>githui@repliix.com</a><br />
                            Repliix, Nairobi, Kenya
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
