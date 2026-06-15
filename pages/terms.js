import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Terms() {
    return (
        <>
            <Head>
                <title>Terms of Service | Repliix</title>
                <meta name="robots" content="noindex" />
            </Head>

            <main>
                <Navbar />

                <section style={{ padding: '8rem 0 4rem', background: 'var(--bg-carbon)', minHeight: '100vh', color: 'var(--text-muted)' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h1 style={{ color: 'white', marginBottom: '2rem' }}>Terms of Service</h1>
                        <p style={{ marginBottom: '1rem' }}>Last updated: January 2026</p>

                        <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
                        <p>By viewing or using this website, which can be accessed at https://www.repliix.com, you are agreeing to be bound by all these Website’s Terms of Use in compliance with any applicable local laws.</p>

                        <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials on Repliix's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose or for any public display;</li>
                            <li>attempt to reverse engineer any software contained on Repliix's Website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>

                        <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>3. Disclaimer</h2>
                        <p>All the materials on Repliix's Website are provided "as is". Repliix makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Repliix does not make any representations concerning the accuracy or likely results of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this Website.</p>

                        <h2 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>4. Limitations</h2>
                        <p>Repliix or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Repliix's Website, even if Repliix or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.</p>
                    </div>
                </section>
            </main>
        </>
    );
}
