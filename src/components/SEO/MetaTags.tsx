import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags: React.FC = () => {
  return (
    <Helmet>
      <title>HeadStart Digital - Digital Marketing Strategy Experts</title>
      <meta name="description" content="Transform your digital presence with HeadStart Digital's expert marketing strategies. We specialize in data-driven solutions for sustainable business growth." />
      <meta name="keywords" content="digital marketing, marketing strategy, SEO, social media marketing, content marketing" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="HeadStart Digital - Digital Marketing Strategy Experts" />
      <meta property="og:description" content="Transform your digital presence with HeadStart Digital's expert marketing strategies." />
      <meta property="og:image" content="/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="HeadStart Digital - Digital Marketing Strategy Experts" />
      <meta name="twitter:description" content="Transform your digital presence with HeadStart Digital's expert marketing strategies." />
      <meta name="twitter:image" content="/og-image.jpg" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HeadStart Digital",
            "description": "Digital Marketing Strategy Company",
            "image": "/logo.svg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Digital Avenue",
              "addressLocality": "Tech City",
              "addressRegion": "TC",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "url": "https://headstartdigital.com",
            "telephone": "+1-234-567-8900",
            "priceRange": "$$"
          }
        `}
      </script>
    </Helmet>
  );
};

export default MetaTags;