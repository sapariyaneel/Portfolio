import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import ProjectModal from '../ProjectModal';

const projects = [
  {
    title: "Sigma Clothing",
    description: "Sigma Clothing is a modern MERN stack e-commerce platform with seamless shopping, secure payments, and a sleek user experience.",
    image: "/projects/ecommerce.jpg",
      tags: ["MERN", "RazorPay", "Cloudinary", "TailwindCSS"],
    category: "Full Stack",
    liveUrl: "https://sigmaclothing.vercel.app",
    githubUrl: "https://github.com/sapariyaneel/SigmaClothing ",
    features: [
      "Modern UI with smooth animations",
      "MERN stack: React, Node.js, MongoDB, Express.js",
      "Secure payment processing with Razorpay",
      "Product catalog with category filtering",
      "Wishlist and shopping cart functionality",
      "User authentication and profile management",
      "Order tracking and management",
      "Admin dashboard for product management",
      "Responsive design optimized for all devices",
    ],    
  },
  {
    title: "Motor Control System",
    description: "Motor Control System automates operations with precision, real-time monitoring, and easycontrols for efficiency.",
    image: "/projects/motor.png",
    tags: ["Python", "PyQt5", "Gyro", "Arduino"],
    category: "Software",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Automated motor operation with precision control",
      "Real-time monitoring and status updates",
      "User-friendly interface for easy control",
      "Customizable speed and direction settings",
      "Safety mechanisms to prevent overheating",
      "Remote access and control functionality",
      "Error detection and alert notifications",
      "Energy-efficient operation for cost savings",
      "Data logging for performance analysis",
      "Compatible with various motor types"
    ],
  },
  {
    title: "Temporary Chat App",
    description: "Temporary Chat App enables secure, real-time messaging with self-destructing chats, ensuring privacy and seamless user experience.",
    image: "/projects/temporary.png",
    tags: ["React+Vite", "NodeJS", "Socket.io","TailwindCSS"],
    category: "Full Stack",
    liveUrl: "https://temporary-chat-application.onrender.com/",
    githubUrl: "https://github.com/sapariyaneel/Temporary-Chat-Application",
    features: [
      "Real-time messaging with instant delivery",
      "Self-destructing chats for enhanced privacy",
      "User authentication for secure access",
      "Minimalistic and user-friendly interface",
      "No chat history stored after session ends",
      "Lightweight and fast performance",
      "Cross-device compatibility",
      "End-to-end encryption for secure communication",
      "Temporary chat rooms for quick conversations",
      "Easy to deploy and use"
    ],    
  },
  {
    title: "MKCL KLiC Clone",
    description: "MKCL KLiC Clone is an e-learning platform offering interactive courses, assessments, and certification for skill development.",
    image: "/projects/klic.png",
    tags: ["HTML5", "CSS3", "Responsive", "Clone"],
    category: "Frontend",
    liveUrl: "https://klic.netlify.app/",
    githubUrl: "https://github.com/sapariyaneel",
    features: [
      "Pure HTML and CSS with no external frameworks",
      "Structured course sections with descriptions",
      "Attractive homepage with course highlights",
      "Navigation bar with easy access to sections",
      "Footer with social media and contact details",
    ],
  },
  {
    title: "Vegan Store",
    description: "Vegan Store is a static website showcasing plant-based products with a clean layout, category-wise product, & easy navigation.",
    image: "/projects/vegan.png",
    tags: ["HTML5", "CSS3", "Responsive", "Static"],
    category: "Frontend",
    liveUrl: "https://veganstoren.netlify.app/",
    githubUrl: "https://github.com/sapariyaneel/Vegan-Store",
    features: [
        "Clean and simple UI design",
        "Category-wise product display",
        "Static layout with basic responsiveness",
        "Navigation bar for easy browsing",
        "Homepage highlighting vegan products",
        "Contact and inquiry section",
        "No animations or dynamic functionalities",
        "Fast-loading and lightweight performance",
        "Cross-browser compatibility",
        "Built using pure HTML and CSS"      
    ],
  },
  {
    title: "Cloud Campus",
    description: "Cloud Campus is a static landing page built with HTML, CSS, and Bootstrap, featuring a clean design and structured content layout.",
    image: "/projects/cloud.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "Responsive"],
    category: "Frontend",
    liveUrl: "https://cloud-campus.netlify.app/",
    githubUrl: "https://github.com/sapariyaneel/Cloud-Campus",
    features: [
      "Responsive design using Bootstrap",
      "Clean and modern UI layout",
      "Informative sections about Cloud Campus",
      "Navigation bar for easy access",
      "Call-to-action buttons for engagement",
      "Footer with contact and social links",
      "Fast-loading and lightweight structure",
      "Cross-browser compatibility",
      "Static content with no dynamic functionality",
      "Built using HTML, CSS, and Bootstrap"
    ],    
  },
];

const categories = ["All", "Full Stack", "Frontend", "Software"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="heading text-center">Featured Projects</h2>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
        
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300"
                    style={{
                      transform: hoveredProject === project.title ? 'scale(1.1)' : 'scale(1)',
                    }}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMTU1LTlCPj5APkJFRUpFQj5CQkL/2wBDAQoLCw4NDhwQEBxCLiYuQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    onError={(e) => {
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      Click to view details
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 dark:text-gray-400 mt-8"
          >
            No projects found matching your criteria.
          </motion.p>
        )}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects; 