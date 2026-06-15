import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostIds, getPostData, posts, authors } from '../../lib/data';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '../../components/Schema';

// Get related posts based on content similarity
function getRelatedPosts(currentPostId, allPosts, count = 3) {
    // Simple relevance matching based on keywords in titles/excerpts
    const currentPost = allPosts.find(p => p.id === currentPostId);
    if (!currentPost) return allPosts.slice(0, count);

    const currentWords = new Set(
        (currentPost.title + ' ' + currentPost.excerpt)
            .toLowerCase()
            .split(/\s+/)
            .filter(w => w.length > 4)
    );

    const scored = allPosts
        .filter(p => p.id !== currentPostId)
        .map(post => {
            const postWords = (post.title + ' ' + post.excerpt)
                .toLowerCase()
                .split(/\s+/)
                .filter(w => w.length > 4);

            const matchCount = postWords.filter(w => currentWords.has(w)).length;
            return { post, score: matchCount };
        })
        .sort((a, b) => b.score - a.score);

    return scored.slice(0, count).map(s => s.post);
}

export default function Post({ postData, relatedPosts }) {
    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: postData.title, url: `/blog/${postData.id}` }
    ];

    const author = authors[postData.author] || authors.githui;

    return (
        <>
            <Head>
                <title>{postData.title} | Repliix Blog - AI Automation Insights</title>
                <meta name="description" content={postData.excerpt} />
                <link rel="canonical" href={`https://www.repliix.com/blog/${postData.id}`} />

                {/* OpenGraph Meta Tags */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://www.repliix.com/blog/${postData.id}`} />
                <meta property="og:title" content={`${postData.title} | Repliix Blog`} />
                <meta property="og:description" content={postData.excerpt} />
                <meta property="og:image" content={`https://www.repliix.com/api/og?title=${encodeURIComponent(postData.title)}&subtitle=${encodeURIComponent('Repliix Blog')}`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Repliix" />
                <meta property="article:published_time" content={new Date(postData.date).toISOString()} />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={`https://www.repliix.com/blog/${postData.id}`} />
                <meta name="twitter:title" content={`${postData.title} | Repliix Blog`} />
                <meta name="twitter:description" content={postData.excerpt} />
                <meta name="twitter:image" content={`https://www.repliix.com/api/og?title=${encodeURIComponent(postData.title)}&subtitle=${encodeURIComponent('Repliix Blog')}`} />

                <meta name="robots" content="index, follow" />
            </Head>

            <ArticleSchema
                title={postData.title}
                description={postData.excerpt}
                datePublished={new Date(postData.date).toISOString()}
                imageUrl={postData.coverImage}
            />
            <BreadcrumbSchema items={breadcrumbs} />
            {postData.faqs && <FAQSchema faqs={postData.faqs} />}

            <Navbar />

            <article className="animate-fade-in post-container">
                <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{postData.date}</div>
                    <h1 className="post-title">{postData.title}</h1>

                    {/* Author Byline for E-E-A-T */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{author.name}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{author.role}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)', marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
                                <a href={author.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    <img
                        src={postData.coverImage}
                        alt={postData.title}
                        className="post-cover-image"
                    />
                </header>

                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: postData.content }}
                    style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
                />

                {/* Related Posts Section */}
                {relatedPosts && relatedPosts.length > 0 && (
                    <section style={{
                        marginTop: '4rem',
                        paddingTop: '3rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <h2 style={{
                            fontSize: '1.75rem',
                            marginBottom: '2rem',
                            textAlign: 'center'
                        }}>
                            Related <span style={{ color: 'var(--primary-cyan)' }}>Articles</span>
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
                            gap: '1.5rem'
                        }}>
                            {relatedPosts.map(post => (
                                <Link
                                    href={`/blog/${post.id}`}
                                    key={post.id}
                                    style={{
                                        display: 'block',
                                        padding: '1.5rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        transition: 'all 0.2s ease',
                                        textDecoration: 'none'
                                    }}
                                    className="related-post-card"
                                >
                                    <div style={{
                                        width: '100%',
                                        height: '120px',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        marginBottom: '1rem',
                                        background: '#2a2a2a'
                                    }}>
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            width={250}
                                            height={120}
                                            style={{
                                                objectFit: 'contain',
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: '#f5f5f5'
                                            }}
                                        />
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--primary-cyan)', marginBottom: '0.5rem' }}>
                                        {post.date}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.4',
                                        marginBottom: '0.5rem',
                                        color: 'white'
                                    }}>
                                        {post.title}
                                    </h3>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--primary-cyan)',
                                        fontWeight: 500
                                    }}>
                                        Read more →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section style={{
                    marginTop: '4rem',
                    padding: '3rem',
                    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                    borderRadius: '20px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                        Ready to Automate Your Business?
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                        Book a free consultation to discuss how AI automation can save you 40+ hours per month.
                    </p>
                    <Link
                        href="https://cal.com/repliix-mbmqhb/30min"
                        target="_blank"
                        className="btn glow-effect"
                    >
                        Book Free Consultation
                    </Link>
                </section>

                <style jsx global>{`
                    .content h2 { margin-top: 3rem; color: var(--secondary); }
                    .content h3 { margin-top: 2rem; font-size: 1.5rem; }
                    .content ul, .content ol { margin-bottom: 1.5rem; padding-left: 1.2rem; color: var(--text-muted); }
                    .content li { margin-bottom: 0.5rem; }
                    .tip-box {
                        background: rgba(78, 205, 196, 0.1);
                        border-left: 4px solid var(--secondary);
                        padding: 1.5rem;
                        margin: 2rem 0;
                        border-radius: 0 10px 10px 0;
                        color: var(--text-main);
                    }

                    .post-container {
                        padding: 10rem 1.5rem 3rem;
                        width: 100%;
                        max-width: 800px;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .post-title {
                        font-size: 2rem;
                        margin-bottom: 2rem;
                    }
                    .post-cover-image {
                        width: 100%;
                        height: auto;
                        border-radius: 20px;
                        margin-bottom: 2rem;
                        display: block;
                    }

                    @media (min-width: 768px) {
                        .post-container {
                            padding: 8rem 2rem 4rem;
                        }
                        .post-title {
                            font-size: 3rem;
                        }
                        .content ul, .content ol { padding-left: 2rem; }
                    }

                    /* Content specific overrides for markdown HTML */
                    .content table {
                        display: block;
                        width: 100%;
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                        margin-bottom: 1.5rem;
                        border-collapse: collapse;
                    }

                    .content pre {
                        max-width: 100%;
                        overflow-x: auto;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                        background: rgba(0,0,0,0.3);
                        padding: 1rem;
                        border-radius: 8px;
                        margin-bottom: 1.5rem;
                    }

                    .content code {
                        overflow-wrap: break-word;
                        word-break: break-all;
                    }

                    .related-post-card:hover {
                        transform: translateY(-3px);
                        border-color: rgba(255,255,255,0.15);
                        background: rgba(255,255,255,0.05);
                    }
                `}</style>
            </article>

            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    const relatedPosts = getRelatedPosts(params.id, posts, 3);

    return {
        props: {
            postData,
            relatedPosts: relatedPosts.map(p => ({
                id: p.id,
                title: p.title,
                date: p.date,
                excerpt: p.excerpt,
                coverImage: p.coverImage
            }))
        }
    };
}
