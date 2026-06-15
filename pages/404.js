import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found | Repliix</title>
                <meta name="robots" content="noindex" />
            </Head>

            <main>
                <Navbar />

                <section style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'var(--bg-carbon)',
                    textAlign: 'center',
                    padding: '2rem'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 10vw, 6rem)',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, var(--primary-cyan), var(--primary-indigo))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                    }}>
                        404
                    </h1>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>Page Not Found</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', marginBottom: '3rem' }}>
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/" className="btn glow-effect">
                            Return Home
                        </Link>
                        <Link href="/services" className="btn" style={{ background: 'transparent', border: '1px solid var(--border-glass)' }}>
                            View Services
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
