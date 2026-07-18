interface SEOJsonLDProps {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
}

const SEOJsonLD = ({
  title = 'Kumar Power',
  description = 'Kirloskar-certified generators and turnkey power solutions across India.',
  url = 'https://example.com/',
  imageUrl = 'https://example.com/images/logo.png'
}: SEOJsonLDProps) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kumar Power',
    url: url,
    description: description,
    image: imageUrl,
    brand: {
      '@type': 'Brand',
      name: 'Kirloskar',
    },
    sameAs: [
      'https://www.linkedin.com',
      'https://www.facebook.com',
      'https://twitter.com',
    ],
  } as const;

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    url: url,
    
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
};

export default SEOJsonLD;
