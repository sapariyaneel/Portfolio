const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Neel Sapariya',
    jobTitle: 'Full Stack Developer',
    url: 'https://neelsapariya.com', // Replace with your actual domain
    sameAs: [
      'https://github.com/yourusername', // Replace with your actual profiles
      'https://linkedin.com/in/yourusername',
      'https://twitter.com/yourusername',
    ],
    description: 'Neel Sapariya is a passionate Full Stack Developer crafting beautiful and functional web experiences.',
    image: 'https://neelsapariya.com/profile.jpg', // Replace with your actual domain and image path
    email: 'contact@example.com', // Replace with your actual email
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Your University Name', // Replace with your actual education
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData; 