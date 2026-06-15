import Head from 'next/head';

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Repliix",
    "url": "https://www.repliix.com",
    "logo": "https://www.repliix.com/logo.png",
    "description": "Top AI automation agency building custom AI systems for lead generation, sales automation, and business operations. Serving clients in the US, UK, and worldwide.",
    "foundingDate": "2024",
    "slogan": "We Build AI Systems That Scale Your Business",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://cal.com/repliix-mbmqhb/30min"
    },
    "sameAs": [
      "https://www.linkedin.com/company/repliix"
    ],
    "areaServed": [
      {
        "@type": "Place",
        "name": "Worldwide"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "Continent",
        "name": "Europe"
      },
      {
        "@type": "Country",
        "name": "Kenya"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "knowsAbout": [
      "AI Automation",
      "AI Agency Services",
      "Business Process Automation",
      "AI Lead Generation",
      "AI Project Management",
      "AI Sales Automation",
      "AI Hiring Systems",
      "Custom AI Systems"
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function ServiceSchema({ services }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation Agency",
    "provider": {
      "@type": "Organization",
      "name": "Repliix",
      "url": "https://www.repliix.com"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Worldwide"
      },
      {
        "@type": "Place",
        "name": "Kenya"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description || service.items.join(', ')
        }
      }))
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function ArticleSchema({ title, description, datePublished, dateModified, imageUrl, authorName = "Repliix Team" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl ? `https://www.repliix.com${imageUrl}` : "https://www.repliix.com/logo.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Repliix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.repliix.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.repliix.com"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.repliix.com${item.url}`
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function FAQSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Repliix - AI Automation Agency",
    "alternateName": "Repliix",
    "description": "Top AI automation agency building custom AI systems for lead generation, sales automation, and business operations. Serving clients in the US, UK, and worldwide.",
    "url": "https://www.repliix.com",
    "logo": "https://www.repliix.com/logo.png",
    "image": "https://www.repliix.com/logo.png",
    "email": "hello@repliix.com",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Worldwide"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "Continent",
        "name": "Europe"
      },
      {
        "@type": "Country",
        "name": "Kenya"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "serviceType": [
      "AI Automation Agency",
      "AI Lead Generation",
      "AI Sales Automation",
      "Business Process Automation",
      "Custom AI Systems",
      "AI Consulting"
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.linkedin.com/company/repliix"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Lead Generation",
            "description": "Automated lead scraping and qualification systems that save 40+ hours per month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Sales Automation",
            "description": "Personalized outbound email campaigns and CRM automation at scale"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Process Automation",
            "description": "Custom AI systems for project management, hiring, and operations"
          }
        }
      ]
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function HowToSchema({ name, description, steps }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url || `https://www.repliix.com/#step-${index + 1}`
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

