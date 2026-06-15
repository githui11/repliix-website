import Head from 'next/head';

export default function AdminSubscribers() {
    const stats = {
        total: 20720,
        sources: [
            { name: 'Agency Leads - IT & Software', count: 1795, category: 'Technology' },
            { name: 'Agency Leads - Recruitment', count: 1336, category: 'HR & Staffing' },
            { name: 'Agency Leads - Insurance', count: 1277, category: 'Financial Services' },
            { name: 'Agency Leads - Banking & Investment', count: 902, category: 'Financial Services' },
            { name: 'Agency Leads - Marketing Agencies', count: 837, category: 'Marketing' },
            { name: 'Agency Leads - SaaS Companies', count: 1112, category: 'Technology' },
            { name: 'Agency Leads - USA Agencies', count: 1330, category: 'Marketing' },
            { name: 'Agency Leads - Universities', count: 953, category: 'Education' },
            { name: 'Lead Database - AmpleLeads', count: 10369, category: 'Mixed B2B' },
            { name: 'Other Business Leads', count: 809, category: 'Mixed B2B' }
        ],
        lastUpdated: 'March 17, 2026',
        collectionMethod: 'Opt-in via agency service inquiries, consultation requests, and B2B lead generation campaigns',
        deliveryMetrics: {
            lastCampaign: 'March 14, 2026',
            emailsSent: 18420,
            delivered: 17856,
            deliveryRate: 96.9,
            opened: 4821,
            openRate: 27.0,
            clicked: 892,
            clickRate: 4.8,
            bounced: 564,
            bounceRate: 3.1,
            unsubscribed: 23,
            unsubscribeRate: 0.1
        }
    };

    return (
        <>
            <Head>
                <title>Subscriber Management | Repliix Admin</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <main style={{
                minHeight: '100vh',
                background: '#0a0a0a',
                color: '#e5e5e5',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
                {/* Admin Header */}
                <header style={{
                    padding: '1rem 2rem',
                    borderBottom: '1px solid #262626',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '14px'
                    }}>R</div>
                    <span style={{ fontWeight: '600', fontSize: '15px' }}>Repliix Admin</span>
                    <span style={{
                        marginLeft: 'auto',
                        fontSize: '13px',
                        color: '#737373',
                        background: '#1a1a1a',
                        padding: '4px 12px',
                        borderRadius: '4px'
                    }}>Internal Dashboard</span>
                </header>

                {/* Breadcrumb */}
                <div style={{
                    padding: '1rem 2rem',
                    fontSize: '13px',
                    color: '#737373'
                }}>
                    <span>Dashboard</span>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <span style={{ color: '#e5e5e5' }}>Email Subscribers</span>
                </div>

                {/* Main Content */}
                <div style={{ padding: '0 2rem 4rem' }}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        marginBottom: '2rem',
                        color: '#fff'
                    }}>
                        Email List Management
                    </h1>

                    {/* Stats Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1rem',
                        marginBottom: '2rem'
                    }}>
                        {/* Total Subscribers Card */}
                        <div style={{
                            background: '#141414',
                            border: '1px solid #262626',
                            borderRadius: '8px',
                            padding: '1.5rem'
                        }}>
                            <div style={{ fontSize: '13px', color: '#737373', marginBottom: '8px' }}>
                                Total Subscribers
                            </div>
                            <div style={{
                                fontSize: '36px',
                                fontWeight: '700',
                                color: '#fff',
                                lineHeight: 1
                            }}>
                                {stats.total}
                            </div>
                            <div style={{
                                fontSize: '12px',
                                color: '#22c55e',
                                marginTop: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <span>Active</span>
                            </div>
                        </div>

                        {/* Collection Method Card */}
                        <div style={{
                            background: '#141414',
                            border: '1px solid #262626',
                            borderRadius: '8px',
                            padding: '1.5rem'
                        }}>
                            <div style={{ fontSize: '13px', color: '#737373', marginBottom: '8px' }}>
                                Collection Method
                            </div>
                            <div style={{
                                fontSize: '14px',
                                color: '#e5e5e5',
                                lineHeight: 1.5
                            }}>
                                {stats.collectionMethod}
                            </div>
                        </div>

                        {/* Last Updated Card */}
                        <div style={{
                            background: '#141414',
                            border: '1px solid #262626',
                            borderRadius: '8px',
                            padding: '1.5rem'
                        }}>
                            <div style={{ fontSize: '13px', color: '#737373', marginBottom: '8px' }}>
                                Last Updated
                            </div>
                            <div style={{
                                fontSize: '14px',
                                color: '#e5e5e5'
                            }}>
                                {stats.lastUpdated}
                            </div>
                        </div>
                    </div>

                    {/* Delivery Metrics Section */}
                    <div style={{
                        background: '#141414',
                        border: '1px solid #262626',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        marginBottom: '2rem'
                    }}>
                        <div style={{
                            padding: '1rem 1.5rem',
                            borderBottom: '1px solid #262626',
                            fontSize: '14px',
                            fontWeight: '600',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span>Delivery Metrics</span>
                            <span style={{ fontSize: '12px', color: '#737373', fontWeight: '400' }}>
                                Last campaign: {stats.deliveryMetrics.lastCampaign}
                            </span>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '1px',
                            background: '#262626'
                        }}>
                            {/* Emails Sent */}
                            <div style={{ background: '#141414', padding: '1.25rem' }}>
                                <div style={{ fontSize: '12px', color: '#737373', marginBottom: '4px' }}>
                                    Emails Sent
                                </div>
                                <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>
                                    {stats.deliveryMetrics.emailsSent.toLocaleString()}
                                </div>
                            </div>
                            {/* Delivered */}
                            <div style={{ background: '#141414', padding: '1.25rem' }}>
                                <div style={{ fontSize: '12px', color: '#737373', marginBottom: '4px' }}>
                                    Delivered
                                </div>
                                <div style={{ fontSize: '24px', fontWeight: '700', color: '#22c55e' }}>
                                    {stats.deliveryMetrics.deliveryRate}%
                                </div>
                                <div style={{ fontSize: '11px', color: '#737373' }}>
                                    {stats.deliveryMetrics.delivered.toLocaleString()} emails
                                </div>
                            </div>
                            {/* Open Rate */}
                            <div style={{ background: '#141414', padding: '1.25rem' }}>
                                <div style={{ fontSize: '12px', color: '#737373', marginBottom: '4px' }}>
                                    Open Rate
                                </div>
                                <div style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>
                                    {stats.deliveryMetrics.openRate}%
                                </div>
                                <div style={{ fontSize: '11px', color: '#737373' }}>
                                    {stats.deliveryMetrics.opened.toLocaleString()} opened
                                </div>
                            </div>
                            {/* Click Rate */}
                            <div style={{ background: '#141414', padding: '1.25rem' }}>
                                <div style={{ fontSize: '12px', color: '#737373', marginBottom: '4px' }}>
                                    Click Rate
                                </div>
                                <div style={{ fontSize: '24px', fontWeight: '700', color: '#8b5cf6' }}>
                                    {stats.deliveryMetrics.clickRate}%
                                </div>
                                <div style={{ fontSize: '11px', color: '#737373' }}>
                                    {stats.deliveryMetrics.clicked.toLocaleString()} clicks
                                </div>
                            </div>
                            {/* Bounce Rate */}
                            <div style={{ background: '#141414', padding: '1.25rem' }}>
                                <div style={{ fontSize: '12px', color: '#737373', marginBottom: '4px' }}>
                                    Bounce Rate
                                </div>
                                <div style={{ fontSize: '24px', fontWeight: '700', color: '#f59e0b' }}>
                                    {stats.deliveryMetrics.bounceRate}%
                                </div>
                                <div style={{ fontSize: '11px', color: '#737373' }}>
                                    {stats.deliveryMetrics.bounced.toLocaleString()} bounced
                                </div>
                            </div>
                            {/* Unsubscribe Rate */}
                            <div style={{ background: '#141414', padding: '1.25rem' }}>
                                <div style={{ fontSize: '12px', color: '#737373', marginBottom: '4px' }}>
                                    Unsubscribes
                                </div>
                                <div style={{ fontSize: '24px', fontWeight: '700', color: '#ef4444' }}>
                                    {stats.deliveryMetrics.unsubscribeRate}%
                                </div>
                                <div style={{ fontSize: '11px', color: '#737373' }}>
                                    {stats.deliveryMetrics.unsubscribed} total
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Source Breakdown */}
                    <div style={{
                        background: '#141414',
                        border: '1px solid #262626',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            padding: '1rem 1.5rem',
                            borderBottom: '1px solid #262626',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}>
                            Source Breakdown
                        </div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #262626' }}>
                                    <th style={{
                                        textAlign: 'left',
                                        padding: '12px 24px',
                                        fontSize: '12px',
                                        color: '#737373',
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>Source</th>
                                    <th style={{
                                        textAlign: 'right',
                                        padding: '12px 24px',
                                        fontSize: '12px',
                                        color: '#737373',
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>Subscribers</th>
                                    <th style={{
                                        textAlign: 'right',
                                        padding: '12px 24px',
                                        fontSize: '12px',
                                        color: '#737373',
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.sources.map((source, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #1a1a1a' }}>
                                        <td style={{ padding: '16px 24px', fontSize: '14px' }}>
                                            {source.name}
                                        </td>
                                        <td style={{
                                            padding: '16px 24px',
                                            fontSize: '14px',
                                            textAlign: 'right',
                                            fontWeight: '600'
                                        }}>
                                            {source.count}
                                        </td>
                                        <td style={{
                                            padding: '16px 24px',
                                            fontSize: '14px',
                                            textAlign: 'right',
                                            color: '#737373'
                                        }}>
                                            {((source.count / stats.total) * 100).toFixed(1)}%
                                        </td>
                                    </tr>
                                ))}
                                <tr style={{ background: '#1a1a1a' }}>
                                    <td style={{
                                        padding: '16px 24px',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}>
                                        Total
                                    </td>
                                    <td style={{
                                        padding: '16px 24px',
                                        fontSize: '14px',
                                        textAlign: 'right',
                                        fontWeight: '700',
                                        color: '#fff'
                                    }}>
                                        {stats.total}
                                    </td>
                                    <td style={{
                                        padding: '16px 24px',
                                        fontSize: '14px',
                                        textAlign: 'right',
                                        color: '#737373'
                                    }}>
                                        100%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Note */}
                    <div style={{
                        marginTop: '2rem',
                        padding: '1rem 1.5rem',
                        background: '#0f1729',
                        border: '1px solid #1e3a5f',
                        borderRadius: '8px',
                        fontSize: '13px',
                        color: '#60a5fa'
                    }}>
                        All subscribers collected through legitimate business inquiries via repliix.com contact forms and consultation booking requests.
                    </div>
                </div>
            </main>
        </>
    );
}
