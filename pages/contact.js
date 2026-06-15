import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BreadcrumbSchema } from '../components/Schema';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" }
    ];

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Create mailto link with form data
        const subject = encodeURIComponent(`New Contact from ${formData.name} - ${formData.company || 'No Company'}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Company: ${formData.company || 'Not provided'}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open email client
        window.location.href = `mailto:gkiuna@repliix.com?subject=${subject}&body=${body}`;

        // Show success state
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <>
            <Head>
                <title>Contact Us | Repliix - AI Automation Agency</title>
                <meta name="description" content="Get in touch with Repliix for AI automation consulting. Email us directly or book a free consultation call. We respond within 24 hours." />
                <link rel="icon" href="/logo.png" />
                <link rel="canonical" href="https://www.repliix.com/contact" />

                {/* OpenGraph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.repliix.com/contact" />
                <meta property="og:title" content="Contact Us | Repliix - AI Automation Agency" />
                <meta property="og:description" content="Get in touch with Repliix for AI automation consulting. We respond within 24 hours." />
                <meta property="og:image" content="https://www.repliix.com/og/contact.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Repliix" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.repliix.com/contact" />
                <meta name="twitter:title" content="Contact Us | Repliix - AI Automation Agency" />
                <meta name="twitter:description" content="Get in touch with Repliix for AI automation consulting. We respond within 24 hours." />
                <meta name="twitter:image" content="https://www.repliix.com/og/contact.png" />

                <meta name="robots" content="index, follow" />
            </Head>

            <BreadcrumbSchema items={breadcrumbs} />

            <main>
                <Navbar />

                {/* Hero Section */}
                <section style={{
                    minHeight: '40vh',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'var(--bg-carbon)',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '8rem 0 4rem'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                        background: 'radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.08) 0%, transparent 30%), radial-gradient(circle at 80% 30%, rgba(6, 182, 212, 0.08) 0%, transparent 30%)'
                    }} />

                    <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <h1 style={{ marginBottom: '1.5rem' }}>
                            Get in <span style={{
                                background: 'linear-gradient(135deg, var(--primary-indigo) 0%, var(--primary-cyan) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>Touch</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                            Have a question about AI automation? We typically respond within 24 hours.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section style={{ padding: 'clamp(3rem, 8vw, 6rem) 0', background: 'var(--bg-obsidian)' }}>
                    <div className="container">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
                            gap: '3rem',
                            maxWidth: '1000px',
                            margin: '0 auto'
                        }}>
                            {/* Contact Form */}
                            <div className="card" style={{ padding: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Send a Message</h2>

                                {status === 'success' ? (
                                    <div style={{
                                        textAlign: 'center',
                                        padding: '3rem 2rem',
                                        background: 'rgba(6, 182, 212, 0.1)',
                                        borderRadius: '12px'
                                    }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                                        <h3 style={{ color: 'var(--primary-cyan)', marginBottom: '0.5rem' }}>Email Client Opened</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                            Please send the email from your email client. We&apos;ll respond within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            style={{
                                                background: 'transparent',
                                                border: '1px solid var(--primary-cyan)',
                                                color: 'var(--primary-cyan)',
                                                padding: '0.75rem 1.5rem',
                                                borderRadius: '8px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                style={{
                                                    width: '100%',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    fontSize: '1rem'
                                                }}
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="form-input"
                                                style={{
                                                    width: '100%',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    fontSize: '1rem'
                                                }}
                                                placeholder="you@company.com"
                                            />
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="form-input"
                                                style={{
                                                    width: '100%',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    fontSize: '1rem'
                                                }}
                                                placeholder="Your company (optional)"
                                            />
                                        </div>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="form-input"
                                                style={{
                                                    width: '100%',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    fontSize: '1rem',
                                                    resize: 'vertical'
                                                }}
                                                placeholder="Tell us about your automation needs..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn glow-effect"
                                            disabled={status === 'submitting'}
                                            style={{
                                                width: '100%',
                                                opacity: status === 'submitting' ? 0.7 : 1
                                            }}
                                        >
                                            {status === 'submitting' ? 'Opening Email...' : 'Send Message'}
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* Email Direct */}
                                <div className="card" style={{ padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-cyan)' }}>
                                        Email Directly
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                        Prefer to email directly? Reach out anytime.
                                    </p>
                                    <a
                                        href="mailto:gkiuna@repliix.com"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'white',
                                            fontSize: '1.1rem',
                                            fontWeight: 500
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        gkiuna@repliix.com
                                    </a>
                                </div>

                                {/* Book a Call */}
                                <div className="card" style={{ padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-cyan)' }}>
                                        Book a Call
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                        Ready to discuss your automation needs? Book a free 30-minute consultation.
                                    </p>
                                    <Link
                                        href="https://cal.com/repliix-mbmqhb/30min"
                                        target="_blank"
                                        className="btn"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        Schedule Call
                                    </Link>
                                </div>

                                {/* LinkedIn */}
                                <div className="card" style={{ padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-cyan)' }}>
                                        Connect on LinkedIn
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                        Follow us for AI automation insights and updates.
                                    </p>
                                    <Link
                                        href="https://www.linkedin.com/company/109139394"
                                        target="_blank"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'white',
                                            fontSize: '1rem',
                                            fontWeight: 500
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        Repliix on LinkedIn
                                    </Link>
                                </div>

                                {/* Location */}
                                <div className="card" style={{ padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-cyan)' }}>
                                        Location
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                                        Based in Nairobi, Kenya
                                    </p>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>
                                        Serving clients globally
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
