import fs from 'fs';
import { posts } from '../lib/data.js';

async function generateSiteMap() {
    const baseUrl = 'https://www.repliix.com';

    // Static pages
    const staticPages = [
        { url: '', priority: '1.0', changefreq: 'weekly' },
        { url: '/services', priority: '0.9', changefreq: 'monthly' },
        { url: '/about', priority: '0.9', changefreq: 'monthly' },
        { url: '/process', priority: '0.9', changefreq: 'monthly' },
        { url: '/ai-automation', priority: '0.9', changefreq: 'weekly' },
        { url: '/blog', priority: '0.8', changefreq: 'daily' },
        { url: '/resources', priority: '0.7', changefreq: 'monthly' },
        { url: '/ai-tools', priority: '0.9', changefreq: 'weekly' },
        { url: '/ai-automation-agency', priority: '0.9', changefreq: 'weekly' },
        { url: '/hire-ai-automation-experts', priority: '0.9', changefreq: 'weekly' },
        { url: '/ai-cold-email-agency', priority: '0.9', changefreq: 'weekly' },
        { url: '/lead-magnets', priority: '0.8', changefreq: 'weekly' },
        { url: '/kenya', priority: '1.0', changefreq: 'weekly' },
        { url: '/nairobi', priority: '0.95', changefreq: 'weekly' },
    ];

    // Blog posts
    const blogPosts = posts.map((post) => {
        const date = new Date(post.date);
        return {
            url: `/blog/${post.id}`,
            priority: '0.7',
            changefreq: 'monthly',
            lastmod: date.toISOString().split('T')[0]
        };
    });

    const allPages = [...staticPages, ...blogPosts];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${allPages
            .map((page) => {
                return `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    fs.writeFileSync('public/sitemap.xml', sitemap);
    console.log('✅ Sitemap generated successfully!');
}

generateSiteMap();
