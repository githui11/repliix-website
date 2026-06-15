import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { posts } from '../../lib/data';
import Navbar from '../../components/Navbar';
import { BreadcrumbSchema } from '../../components/Schema';

// Define categories based on post content
const categories = {
    'all': 'All Posts',
    'ai-tools': 'AI Tools & Tech',
    'lead-generation': 'Lead Generation',
    'business-strategy': 'Business Strategy',
    'automation': 'Automation',
    'regional': 'Kenya & Africa'
};

// Map posts to categories based on their IDs and content
const getPostCategory = (postId) => {
    const categoryMap = {
        // AI Tools & Tech
        'claude-opus-4-6-ai-automation-services-2026': 'ai-tools',
        'ai-automation-trends-predictions-2026-2027': 'ai-tools',
        'sales-reps-gemini-claude-code-lead-generation': 'ai-tools',
        'how-to-use-claude-code-for-business': 'ai-tools',
        'best-ai-automation-tools-2026': 'ai-tools',
        'ai-business-prompts': 'ai-tools',
        'everyday-ai-agents': 'ai-tools',
        'implementing-agentic-ai': 'ai-tools',

        // Lead Generation
        'cold-email-roi-39-opportunities-case-study-2026': 'lead-generation',
        'cold-email-campaigns-web-developers-2026': 'lead-generation',
        'ai-powered-outbound-marketing-complete-guide': 'lead-generation',
        'why-outbound-campaigns-fail': 'lead-generation',
        'automate-lead-generation-ai': 'lead-generation',
        'ai-newsletter-growth-systems': 'lead-generation',
        'cold-email-lead-generation-business-guide': 'lead-generation',

        // Business Strategy
        'community-management-daily-engagement-system-2026': 'business-strategy',
        'decision-velocity-vs-decision-quality': 'business-strategy',
        '10x-revenue-1x-headcount': 'business-strategy',
        'boring-is-profitable': 'business-strategy',
        'the-execution-gap': 'business-strategy',
        'the-one-person-service-empire': 'business-strategy',
        'ai-investment-banking': 'business-strategy',

        // Automation
        'how-to-build-agentic-workflows-3-layer-architecture-2026': 'automation',
        '6-ai-automations-running-in-production': 'automation',
        'how-to-use-ai-to-buy-back-your-time': 'automation',
        'getting-started-with-ai-automation-practical-guide': 'automation',
        'proposal-automation-framework': 'automation',
        'when-not-to-automate-ai': 'automation',
        'ai-automation-roi-calculator': 'automation',
        'smart-start': 'automation',
        'deterministic-systems': 'automation',

        // Regional (Kenya & Africa)
        'kenyan-startups-cold-email-growth-2026': 'regional',
        'best-ai-agencies-kenya': 'regional',
        'why-nairobi-is-becoming-the-ai-automation-capital-of-africa': 'regional'
    };
    return categoryMap[postId] || 'business-strategy';
};

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" }
    ];

    // Filter posts based on search and category
    const filteredPosts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return posts.filter(post => {
            if (query === '') return selectedCategory === 'all' || getPostCategory(post.id) === selectedCategory;

            const title = (post.title || '').toLowerCase();
            const excerpt = (post.excerpt || '').toLowerCase();
            const content = (post.content || '').toLowerCase();
            const matchesSearch = title.includes(query) || excerpt.includes(query) || content.includes(query);

            const matchesCategory = selectedCategory === 'all' ||
                getPostCategory(post.id) === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Get post count per category
    const categoryCounts = useMemo(() => {
        const counts = { all: posts.length };
        posts.forEach(post => {
            const cat = getPostCategory(post.id);
            counts[cat] = (counts[cat] || 0) + 1;
        });
        return counts;
    }, []);

    return (
        <>
            <Head>
                <title>AI Automation Blog | Repliix - Insights on AI Growth</title>
                <meta name="description" content="Expert insights on AI-driven outbound marketing, business automation, and building profitable AI systems. Serving clients worldwide." />
                <link rel="canonical" href="https://www.repliix.com/blog" />

                {/* OpenGraph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.repliix.com/blog" />
                <meta property="og:title" content="AI Automation Blog | Repliix - Insights on AI Growth" />
                <meta property="og:description" content="Expert insights on AI-driven outbound marketing, business automation, and building profitable AI systems. Serving clients worldwide." />
                <meta property="og:image" content="https://www.repliix.com/og/blog.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Repliix" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.repliix.com/blog" />
                <meta name="twitter:title" content="AI Automation Blog | Repliix - Insights on AI Growth" />
                <meta name="twitter:description" content="Expert insights on AI-driven outbound marketing, business automation, and building profitable AI systems. Serving clients worldwide." />
                <meta name="twitter:image" content="https://www.repliix.com/og/blog.png" />

                <meta name="robots" content="index, follow" />
            </Head>

            <BreadcrumbSchema items={breadcrumbs} />

            <Navbar />

            <main className="blog-main-container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Insights & <span style={{ color: 'var(--primary)' }}>Strategy</span></h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>Thoughts on AI-driven outbound, scaling with leverage, and building the one-person empire.</p>
                </div>

                {/* Search Bar */}
                <div style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="form-input"
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                borderRadius: '12px',
                                fontSize: '1rem'
                            }}
                        />
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--text-muted)"
                            strokeWidth="2"
                            style={{
                                position: 'absolute',
                                left: '1rem',
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer',
                                    padding: '0.25rem'
                                }}
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Filters */}
                <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginBottom: '3rem'
                }}>
                    {Object.entries(categories).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedCategory(key)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                border: selectedCategory === key
                                    ? '1px solid var(--primary-cyan)'
                                    : '1px solid rgba(255, 255, 255, 0.1)',
                                background: selectedCategory === key
                                    ? 'rgba(6, 182, 212, 0.15)'
                                    : 'rgba(255, 255, 255, 0.03)',
                                color: selectedCategory === key ? 'var(--primary-cyan)' : 'var(--text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            {label}
                            <span style={{
                                fontSize: '0.75rem',
                                opacity: 0.7
                            }}>
                                ({categoryCounts[key] || 0})
                            </span>
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                {(searchQuery || selectedCategory !== 'all') && (
                    <p style={{
                        textAlign: 'center',
                        color: 'var(--text-muted)',
                        marginBottom: '2rem',
                        fontSize: '0.9rem'
                    }}>
                        {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                        {searchQuery && ` for "${searchQuery}"`}
                        {selectedCategory !== 'all' && ` in ${categories[selectedCategory]}`}
                    </p>
                )}

                {/* Blog Posts */}
                <div className="blog-posts-container">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <Link
                                href={`/blog/${post.id}`}
                                key={post.id}
                                className="card blog-post-card"
                            >
                                <div className="blog-post-image">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        width={400}
                                        height={200}
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#f5f5f5'
                                        }}
                                    />
                                </div>
                                <div className="blog-post-content">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                        <span className="blog-post-date">{post.date}</span>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '12px',
                                            background: 'rgba(79, 70, 229, 0.15)',
                                            color: 'var(--primary-indigo)'
                                        }}>
                                            {categories[getPostCategory(post.id)]}
                                        </span>
                                    </div>
                                    <h3 className="blog-post-title">{post.title}</h3>
                                    <p className="blog-post-excerpt">{post.excerpt}</p>
                                    <span className="blog-post-link">Read Article →</span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div style={{
                            textAlign: 'center',
                            padding: '4rem 2rem',
                            color: 'var(--text-muted)'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                            <h3 style={{ marginBottom: '0.5rem' }}>No articles found</h3>
                            <p>Try adjusting your search or filter criteria</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                }}
                                style={{
                                    marginTop: '1rem',
                                    padding: '0.75rem 1.5rem',
                                    background: 'rgba(6, 182, 212, 0.15)',
                                    border: '1px solid var(--primary-cyan)',
                                    borderRadius: '8px',
                                    color: 'var(--primary-cyan)',
                                    cursor: 'pointer'
                                }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>

                <style jsx>{`
                    .blog-posts-container {
                        max-width: 900px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                    }

                    .blog-main-container {
                        padding: 10rem 1.5rem 3rem;
                        width: 100%;
                        max-width: 900px;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }

                    @media (min-width: 768px) {
                        .blog-main-container {
                            padding: 8rem 2rem 4rem;
                        }
                    }

                    .blog-post-card {
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
                        text-decoration: none;
                        color: inherit;
                        transition: transform 0.2s ease;
                    }

                    .blog-post-image {
                        width: 100%;
                        height: 200px;
                        background-color: #2a2a2a;
                        border-radius: 10px;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .blog-post-image img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        object-position: center;
                        background-color: #f5f5f5;
                    }

                    .blog-post-content {
                        flex: 1;
                        min-width: 0;
                    }

                    .blog-post-date {
                        font-size: 0.85rem;
                        color: var(--primary);
                    }

                    .blog-post-title {
                        font-size: 1.5rem;
                        margin-bottom: 0.75rem;
                        line-height: 1.3;
                    }

                    .blog-post-excerpt {
                        font-size: 1rem;
                        color: var(--text-muted);
                        margin-bottom: 0.75rem;
                        line-height: 1.6;
                    }

                    .blog-post-link {
                        color: var(--secondary);
                        font-weight: 600;
                        font-size: 0.95rem;
                    }

                    /* Desktop: Horizontal layout with small icon on left */
                    @media (min-width: 768px) {
                        .blog-post-card {
                            flex-direction: row;
                            align-items: flex-start;
                        }

                        .blog-post-image {
                            width: 120px;
                            height: 120px;
                            min-width: 120px;
                        }
                    }
                `}</style>
            </main>
        </>
    );
}
