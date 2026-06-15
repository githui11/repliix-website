import { useState } from 'react';

export default function NewsletterSignup({ variant = 'default' }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            return;
        }

        setStatus('submitting');

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbzwMArysQDMgr05WF4vNq72qmRb_AK_en2Pkb1QQTr4HIvGeovye_fEQ6OdlyAznWaIGQ/exec',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        source: 'website_newsletter'
                    }),
                }
            );

            // With no-cors mode, we can't read the response, but the request goes through
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Newsletter signup error:', error);
            setStatus('error');
        }
    };

    const isCompact = variant === 'compact';

    if (status === 'success') {
        return (
            <div style={{
                padding: isCompact ? '1rem' : '2rem',
                background: 'rgba(6, 182, 212, 0.1)',
                borderRadius: '12px',
                textAlign: 'center'
            }}>
                <div style={{ color: 'var(--primary-cyan)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>✓</div>
                <p style={{ color: 'var(--primary-cyan)', marginBottom: '0.5rem', fontWeight: 500 }}>
                    You're in!
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 0 }}>
                    You'll receive AI automation insights weekly.
                </p>
            </div>
        );
    }

    return (
        <div style={{
            padding: isCompact ? '0' : '2rem',
            background: isCompact ? 'transparent' : 'rgba(255, 255, 255, 0.02)',
            borderRadius: isCompact ? '0' : '16px',
            border: isCompact ? 'none' : '1px solid rgba(255, 255, 255, 0.05)'
        }}>
            {!isCompact && (
                <>
                    <h3 style={{
                        fontSize: '1.25rem',
                        marginBottom: '0.5rem',
                        color: 'white'
                    }}>
                        Get AI Automation Insights
                    </h3>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem'
                    }}>
                        Weekly tips on AI automation, lead generation, and scaling your business. No spam.
                    </p>
                </>
            )}

            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                gap: '0.75rem',
                flexDirection: isCompact ? 'row' : 'column'
            }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <input
                        type="email"
                        placeholder={isCompact ? 'Subscribe to newsletter' : 'Enter your email'}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                        }}
                        className="form-input"
                        style={{
                            width: '100%',
                            padding: isCompact ? '0.75rem 1rem' : '1rem',
                            borderRadius: '10px',
                            fontSize: isCompact ? '0.9rem' : '1rem',
                            borderColor: status === 'error' ? '#ef4444' : undefined
                        }}
                    />
                    {status === 'error' && (
                        <span style={{
                            position: 'absolute',
                            bottom: '-1.25rem',
                            left: 0,
                            fontSize: '0.75rem',
                            color: '#ef4444'
                        }}>
                            Please enter a valid email
                        </span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn"
                    style={{
                        padding: isCompact ? '0.75rem 1.5rem' : '1rem 2rem',
                        fontSize: isCompact ? '0.9rem' : '1rem',
                        whiteSpace: 'nowrap',
                        opacity: status === 'submitting' ? 0.7 : 1
                    }}
                >
                    {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>

            {!isCompact && (
                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.75rem',
                    marginTop: '1rem',
                    marginBottom: 0,
                    opacity: 0.7
                }}>
                    Join business owners getting weekly AI insights.
                </p>
            )}
        </div>
    );
}
