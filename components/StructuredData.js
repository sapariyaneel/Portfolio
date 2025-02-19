const StructuredData = ({ sectionDescriptions }) => {
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
    description: sectionDescriptions.home,
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
      description: sectionDescriptions.home,
      name: 'Neel Sapariya - Full Stack Developer Portfolio',
      about: {
        '@type': 'Thing',
        description: sectionDescriptions.about,
      },
      significantLinks: [
        {
          '@type': 'WebPage',
          '@id': `${baseUrl}/#about`,
          name: 'About',
          description: sectionDescriptions.about,
        },
        {
          '@type': 'WebPage',
          '@id': `${baseUrl}/#experience`,
          name: 'Experience',
          description: sectionDescriptions.experience,
        },
        {
          '@type': 'WebPage',
          '@id': `${baseUrl}/#projects`,
          name: 'Projects',
          description: sectionDescriptions.projects,
        },
        {
          '@type': 'WebPage',
          '@id': `${baseUrl}/#skills`,
          name: 'Skills',
          description: sectionDescriptions.skills,
        },
        {
          '@type': 'WebPage',
          '@id': `${baseUrl}/#contact`,
          name: 'Contact',
          description: sectionDescriptions.contact,
        },
      ],
    },
    potentialAction: {
      '@type': 'ContactAction',
      target: `${baseUrl}/#contact`,
      name: 'Contact Neel Sapariya',
      description: sectionDescriptions.contact,
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