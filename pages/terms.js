import Head from 'next/head';
import Navbar from '../components/Navbar';

const section = { color: 'white', marginTop: '2rem', marginBottom: '1rem' };
const p = { marginBottom: '1rem', lineHeight: '1.7' };
const ul = { paddingLeft: '1.5rem', margin: '1rem 0', lineHeight: '1.8' };

export default function Terms() {
    return (
        <>
            <Head>
                <title>Terms of Service | Repliix</title>
                <meta name="robots" content="noindex" />
            </Head>

            <main>
                <Navbar />

                <section style={{ padding: '8rem 0 6rem', background: 'var(--bg-carbon)', minHeight: '100vh', color: 'var(--text-muted)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Terms of Service</h1>
                        <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>Last updated: June 30, 2026</p>

                        <h2 style={section}>1. Agreement to Terms</h2>
                        <p style={p}>By downloading, installing, or using the Repliix mobile application or the website at repliix.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use Repliix. These terms apply to all users of the app and website.</p>

                        <h2 style={section}>2. Not Medical Advice</h2>
                        <p style={p}><strong style={{ color: 'white' }}>Repliix is for informational and educational purposes only. Nothing in this app or website constitutes medical advice, diagnosis, or treatment.</strong></p>
                        <p style={p}>The protocols, recommendations, and content provided by Repliix — including but not limited to skincare routines, grooming guidance, fitness protocols, supplement suggestions, and references to cosmetic or surgical procedures — are general information only. They are not a substitute for professional medical advice from a licensed healthcare provider who has examined you.</p>
                        <p style={p}>Using Repliix does not create a doctor-patient relationship between you and Repliix or any of its personnel. Always consult a qualified medical professional before:</p>
                        <ul style={ul}>
                            <li>Starting any new supplement, medication, or health protocol</li>
                            <li>Undergoing any cosmetic or surgical procedure</li>
                            <li>Making significant changes to your diet or exercise routine</li>
                            <li>Acting on any health-related recommendation if you have a pre-existing medical condition</li>
                        </ul>
                        <p style={p}>Repliix makes no representation that any protocol or recommendation is appropriate for your individual circumstances. Results described or implied in the app are not guaranteed and will vary between individuals.</p>

                        <h2 style={section}>3. Age Requirement</h2>
                        <p style={p}>Repliix is intended for users aged 18 and older. By using the app, you confirm that you are at least 18 years of age. We do not knowingly collect personal information from users under 18. If we become aware that a user is under 18, we will delete their account immediately.</p>

                        <h2 style={section}>4. Use of the Service</h2>
                        <p style={p}>You may use Repliix for personal, non-commercial purposes only. You agree not to:</p>
                        <ul style={ul}>
                            <li>Use Repliix in any way that violates applicable laws or regulations</li>
                            <li>Attempt to reverse engineer, copy, or resell any part of the service</li>
                            <li>Use the service to harm, harass, or deceive other users</li>
                            <li>Circumvent any access controls or security features</li>
                        </ul>

                        <h2 style={section}>5. Account Deletion</h2>
                        <p style={p}>You may request the deletion of your account and all associated data at any time. To do so, email <a href="mailto:githuimaina11@gmail.com" style={{ color: '#aaa' }}>githuimaina11@gmail.com</a> with the subject line "Account Deletion Request" and include the email address associated with your account. We will process your request within 30 days.</p>

                        <h2 style={section}>6. Disclaimer of Warranties</h2>
                        <p style={p}>Repliix is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, error-free, or that any results obtained will be accurate or reliable. We expressly disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

                        <h2 style={section}>7. Limitation of Liability</h2>
                        <p style={p}>To the maximum extent permitted by applicable law, Repliix and its owner shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the service. This includes, without limitation, damages resulting from reliance on any content or recommendations provided by the app. Our total liability to you for any claim shall not exceed the amount you paid for the service in the 12 months prior to the claim.</p>

                        <h2 style={section}>8. Changes to These Terms</h2>
                        <p style={p}>We may update these terms from time to time. We will notify you of material changes by updating the date at the top of this page. Continued use of Repliix after changes constitutes acceptance of the updated terms.</p>

                        <h2 style={section}>9. Contact</h2>
                        <p style={p}>For questions about these terms, contact us at:<br />
                            <a href="mailto:githuimaina11@gmail.com" style={{ color: '#aaa' }}>githuimaina11@gmail.com</a><br />
                            Repliix, Nairobi, Kenya
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
