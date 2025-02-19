const StructuredData = () => {
  const baseUrl = 'https://neelsapariya.com'; // Replace with your domain

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Neel Sapariya',
    jobTitle: 'Full Stack Developer',
    url: baseUrl,
    sameAs: [
      'https://github.com/sapariyaneel',
      'https://linkedin.com/in/neelsapariya',
      'https://twitter.com/sapariyaneel_',
    ],
    description: 'Neel Sapariya is a passionate Full Stack Developer crafting beautiful and functional web experiences.',
    image: `${baseUrl}/profile.jpg`,
    email: 'sapariyaneel9156@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maharashtra',
      addressRegion: 'MH',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Web Development',
      'JavaScript',
      'React',
      'Node.js',
      'Next.js',
      'MongoDB',
      'AWS',
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': baseUrl,
    },
    potentialAction: {
      '@type': 'ContactAction',
      target: `${baseUrl}/#contact`,
      name: 'Contact Neel Sapariya',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData; 