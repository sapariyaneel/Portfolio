const StructuredData = ({ sectionDescriptions }) => {
  const baseUrl = "https://neelsapariya.vercel.app";
  const profileImageUrl = `${baseUrl}/profile.jpg`;

  // Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Neel Sapariya",
    "givenName": "Neel",
    "familyName": "Sapariya",
    "alternateName": "Neel Sapariya Portfolio",
    "jobTitle": "Full Stack Developer",
    "url": baseUrl,
    "sameAs": [
      "https://github.com/sapariyaneel",
      "https://twitter.com/sapariyaneel_",
      "https://linkedin.com/in/neelsapariya"
    ],
    "description": "Neel Sapariya is a Full Stack Developer specializing in React, Next.js, and Node.js development.",
    "image": {
      "@type": "ImageObject",
      "url": profileImageUrl,
      "width": "800",
      "height": "800",
      "caption": "Neel Sapariya - Full Stack Developer"
    },
    "mainEntityOfPage": {
      "@type": "WebSite",
      "@id": baseUrl,
      "name": "Neel Sapariya - Portfolio",
      "url": baseUrl
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
    "url": baseUrl,
    "name": "Neel Sapariya - Personal Portfolio",
    "alternateName": "Neel Sapariya",
    "description": "Personal portfolio website of Neel Sapariya, a Full Stack Developer specializing in modern web technologies.",
    "author": {
      "@type": "Person",
      "name": "Neel Sapariya",
      "image": profileImageUrl
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/#search={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "keywords": [
      "Neel Sapariya",
      "Neel Sapariya Portfolio",
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Node.js Developer",
      "Web Developer",
      "JavaScript Developer",
      "Frontend Developer",
      "Backend Developer",
      "MERN Stack Developer",
      "Portfolio Website",
      "Hire Web Developer",
      "Freelance Developer"
    ],
    "image": {
      "@type": "ImageObject",
      "url": profileImageUrl,
      "width": "800",
      "height": "800"
    }
  };

  // Professional Service schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Neel Sapariya - Web Development Services",
    "legalName": "Neel Sapariya",
    "image": {
      "@type": "ImageObject",
      "url": profileImageUrl,
      "width": "800",
      "height": "800"
    },
    "url": baseUrl,
    "description": "Professional web development services by Neel Sapariya, specializing in full stack solutions with React, Next.js, and Node.js.",
    "founder": {
      "@type": "Person",
      "name": "Neel Sapariya",
      "image": profileImageUrl
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

  // ImageObject schema for profile image
  const imageObjectSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": profileImageUrl,
    "url": profileImageUrl,
    "representativeOfPage": true,
    "caption": "Neel Sapariya - Full Stack Developer",
    "description": "Profile photo of Neel Sapariya, a Full Stack Developer specializing in React, Next.js, and Node.js",
    "name": "Neel Sapariya Profile Photo",
    "width": "800",
    "height": "800",
    "creator": {
      "@type": "Person",
      "name": "Neel Sapariya"
    }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />
    </>
  );
};

export default StructuredData; 