import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function GoogleAnalytics({ measurementId }) {
    const router = useRouter();

    useEffect(() => {
        // Track page views on route change
        const handleRouteChange = (url) => {
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('config', measurementId, {
                    page_path: url,
                });
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events, measurementId]);

    useEffect(() => {
        // Track Cal.com booking button clicks
        const handleCalClick = () => {
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click', {
                    event_category: 'engagement',
                    event_label: 'Book Consultation',
                    value: 1
                });
            }
        };

        // Add click tracking to all Cal.com links
        const calLinks = document.querySelectorAll('a[href*="cal.com"]');
        calLinks.forEach(link => {
            link.addEventListener('click', handleCalClick);
        });

        return () => {
            calLinks.forEach(link => {
                link.removeEventListener('click', handleCalClick);
            });
        };
    }, []);

    if (!measurementId) {
        return null;
    }

    return (
        <>
            {/* Google Analytics 4 */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
            </Script>

            {/* Microsoft Clarity - Free Heatmaps & Session Recording */}
            <Script id="microsoft-clarity" strategy="afterInteractive">
                {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "p3rwt0djw8");
        `}
            </Script>
        </>
    );
}
