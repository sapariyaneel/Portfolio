const StructuredData = ({ sectionDescriptions }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Neel Sapariya",
    "jobTitle": "Full Stack Developer",
    "url": "https://neelsapariya.vercel.app",
    "sameAs": [
      "https://github.com/sapariyaneel",
      "https://twitter.com/sapariyaneel_",
      "https://linkedin.com/in/neelsapariya"
    ],
    "description": "Neel Sapariya is a Full Stack Developer specializing in React, Next.js, and Node.js development.",
    "image": "https://neelsapariya.vercel.app/profile.jpg",
    "mainEntityOfPage": {
      "@type": "WebSite",
      "@id": "https://neelsapariya.vercel.app",
      "name": "Neel Sapariya - Portfolio",
      "url": "https://neelsapariya.vercel.app"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData; 