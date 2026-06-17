import Head from 'next/head';
import Navbar from '../components/Navbar';

const section = { color: 'white', marginTop: '2rem', marginBottom: '1rem' };
const p = { marginBottom: '1rem', lineHeight: '1.7' };

export default function Refund() {
    return (
        <>
            <Head>
                <title>Refund Policy | Repliix</title>
                <meta name="description" content="Repliix refund policy for subscriptions." />
            </Head>

            <main>
                <Navbar />

                <section style={{ padding: '8rem 0 6rem', background: 'var(--bg-carbon)', minHeight: '100vh', color: 'var(--text-muted)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Refund Policy</h1>
                        <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>Last updated: June 2026</p>

                        <h2 style={section}>1. Free Trial</h2>
                        <p style={p}>
                            All new subscriptions include a 3-day free trial. You will not be charged during the trial period. You may cancel at any time before the trial ends and you will not be billed.
                        </p>

                        <h2 style={section}>2. Refund Eligibility</h2>
                        <p style={p}>
                            If you are charged and have not meaningfully used the service (no proposals generated), you may request a full refund within 7 days of the charge by emailing <a href="mailto:githui@repliix.com" style={{ color: '#aaa' }}>githui@repliix.com</a> with the subject "Refund request" and your account email.
                        </p>
                        <p style={p}>
                            Refunds are not issued after 7 days of a charge, or if the service has been used to generate proposals during the billing period.
                        </p>

                        <h2 style={section}>3. Cancellations</h2>
                        <p style={p}>
                            You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period. You will retain access to the service until that date and will not receive a prorated refund for unused time.
                        </p>

                        <h2 style={section}>4. How to Request a Refund</h2>
                        <p style={p}>
                            Email <a href="mailto:githui@repliix.com" style={{ color: '#aaa' }}>githui@repliix.com</a> with:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0', lineHeight: '1.8' }}>
                            <li>Subject: "Refund request"</li>
                            <li>Your account email address</li>
                            <li>The date of the charge</li>
                        </ul>
                        <p style={p}>We process refund requests within 5 business days.</p>

                        <h2 style={section}>5. Contact</h2>
                        <p style={p}>
                            For billing questions, contact us at:<br />
                            <a href="mailto:githui@repliix.com" style={{ color: '#aaa' }}>githui@repliix.com</a>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
