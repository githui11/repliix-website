import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();

    const isActive = (path) => router.pathname === path;

    const links = [
        { name: 'Home', path: '/' },
    ];

    return (
        <nav style={{
            padding: 'clamp(1rem, 2vw, 1.5rem) 0',
            position: 'absolute',
            width: '100%',
            zIndex: 10,
            borderBottom: '1px solid var(--border)',
            background: 'rgba(248, 247, 243, 0.92)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'clamp(0.5rem, 2vw, 1rem)', rowGap: '0.75rem' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
                    <img src="/logo-nav.webp" alt="Repliix" style={{ width: 28, height: 28, borderRadius: 6 }} />
                    <span style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)' }}>Repliix</span>
                </Link>
                <div style={{ display: 'flex', gap: 'clamp(0.75rem, 3vw, 1.5rem)', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            style={{
                                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                                color: isActive(link.path) || (link.path !== '/' && router.pathname.startsWith(link.path) && link.path !== '/') ? 'var(--text)' : 'var(--text-muted)',
                                fontWeight: isActive(link.path) ? 600 : 400
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
