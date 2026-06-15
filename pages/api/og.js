// Dynamic OG Image Generation API
// This endpoint generates Open Graph images for social sharing
// Usage: /api/og?title=Your%20Title&subtitle=Optional%20Subtitle

export default function handler(req, res) {
    const { title = 'Repliix', subtitle = 'AI Automation Agency' } = req.query;

    // SVG-based OG image generation (no external dependencies needed)
    const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#050505"/>
                <stop offset="100%" style="stop-color:#0A0A0A"/>
            </linearGradient>
            <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#4F46E5"/>
                <stop offset="100%" style="stop-color:#06B6D4"/>
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        <!-- Background -->
        <rect width="1200" height="630" fill="url(#bg)"/>

        <!-- Decorative elements -->
        <circle cx="1000" cy="100" r="200" fill="#4F46E5" opacity="0.1" filter="url(#glow)"/>
        <circle cx="200" cy="500" r="150" fill="#06B6D4" opacity="0.1" filter="url(#glow)"/>

        <!-- Accent line -->
        <rect x="60" y="280" width="100" height="4" fill="url(#accent)"/>

        <!-- Title -->
        <text x="60" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="700" fill="white">
            ${escapeXml(truncateText(title, 40))}
        </text>
        ${title.length > 40 ? `
        <text x="60" y="430" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="700" fill="white">
            ${escapeXml(truncateText(title.slice(40), 40))}
        </text>
        ` : ''}

        <!-- Subtitle -->
        <text x="60" y="${title.length > 40 ? '500' : '430'}" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#A1A1AA">
            ${escapeXml(subtitle)}
        </text>

        <!-- Logo/Brand -->
        <text x="60" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="600" fill="white">
            Repliix
        </text>
        <text x="180" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#06B6D4">
            repliix.com
        </text>
    </svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.status(200).send(svg);
}

function escapeXml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + '...';
}
