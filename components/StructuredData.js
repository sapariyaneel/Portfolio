const StructuredData = ({ sectionDescriptions }) => {
  // Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Neel Sapariya",
    "givenName": "Neel",
    "familyName": "Sapariya",
    "alternateName": "Neel Sapariya Portfolio",
    "jobTitle": "Full Stack Developer",
    "url": "https://neelsapariya.vercel.app",
    "sameAs": [
      "https://github.com/sapariyaneel",
      "https://twitter.com/sapariyaneel_",
      "https://linkedin.com/in/neelsapariya"
    ],
    "description": "Neel Sapariya is a Full Stack Developer specializing in React, Next.js, and Node.js development.",
    "image": "/profile.jpg",
    "mainEntityOfPage": {
      "@type": "WebSite",
      "@id": "https://neelsapariya.vercel.app",
      "name": "Neel Sapariya - Portfolio",
      "url": "https://neelsapariya.vercel.app"
    },
    "knowsAbout": [
      "React.js",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development"
    ]
  };

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://neelsapariya.vercel.app",
    "name": "Neel Sapariya - Personal Portfolio",
    "alternateName": "Neel Sapariya",
    "description": "Personal portfolio website of Neel Sapariya, a Full Stack Developer specializing in modern web technologies.",
    "author": {
      "@type": "Person",
      "name": "Neel Sapariya"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://neelsapariya.vercel.app/#search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Professional Service schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Neel Sapariya - Web Development Services",
    "legalName": "Neel Sapariya",
    "image": "/profile.jpg",
    "url": "https://neelsapariya.vercel.app",
    "description": "Professional web development services by Neel Sapariya, specializing in full stack solutions with React, Next.js, and Node.js.",
    "founder": {
      "@type": "Person",
      "name": "Neel Sapariya"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Full Stack Web Development",
        "description": "End-to-end web application development using modern technologies"
      },
      {
        "@type": "Offer",
        "name": "Frontend Development",
        "description": "Creating responsive, interactive user interfaces with React and Next.js"
      },
      {
        "@type": "Offer",
        "name": "Backend Development",
        "description": "Building robust server-side applications with Node.js and Express"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
};

export default StructuredData; 