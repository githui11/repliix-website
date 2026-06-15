import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            padding: 'clamp(1.5rem, 4vw, 2rem) 0',
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-subtle)'
        }}>
            <div className="container">
                {/* Bottom Bar */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--text-faint)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
                        © 2025 Repliix. All rights reserved.
                    </span>
                    <Link href="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        Privacy Policy
                    </Link>
                    <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
