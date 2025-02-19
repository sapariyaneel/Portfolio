const StructuredData = ({ sectionDescriptions }) => {
  const baseUrl = 'https://neelsapariya.vercel.app'; // Update to Vercel domain

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
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Your University Name'
    },
    knowsAbout: [
      'Web Development',
      'JavaScript',
      'React',
      'Node.js',
      'Next.js',
      'MongoDB',
      'AWS',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'RESTful APIs',
      'Database Design',
      'UI/UX Design',
      'Web Performance Optimization'
    ],
    workExperience: [
      {
        '@type': 'WorkExperience',
        jobTitle: 'Junior Software Developer',
        employer: {
          '@type': 'Organization',
          name: 'PRYM Aerospace Pvt. Ltd.'
        },
        dateFrom: '2025-01',
        description: 'Led development of multiple high-impact web applications using React and Node.js'
      },
      {
        '@type': 'WorkExperience',
        jobTitle: 'Software Developer Intern',
        employer: {
          '@type': 'Organization',
          name: 'Octanet Services Pvt. Ltd.'
        },
        dateFrom: '2024-10',
        dateTo: '2024-12',
        description: 'Developed and maintained client websites using Next.js and MongoDB'
      }
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': baseUrl,
      description: sectionDescriptions.home,
      name: 'Neel Sapariya - Full Stack Developer Portfolio',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        contentUrl: `${baseUrl}/profile.jpg`
      },
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