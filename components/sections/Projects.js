import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import ProjectModal from '../ProjectModal';

const projects = [
  {
    title: "Sigma Clothing",
    description: "A full-featured e-commerce platform built with Next.js, featuring product management, cart functionality, and secure payments.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "MongoDB", "RazorPay", "Tailwind CSS"],
    category: "Full Stack",
    liveUrl: "https://sigmaclothing.vercel.app",
    githubUrl: "https://github.com/sapariyaneel/SigmaClothing ",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and management",
      "Admin dashboard for product management",
    ],
  },
  {
    title: "Motor Control System",
    description: "A RESTful API for a blog platform with authentication, authorization, and content management.",
    image: "/projects/motor.png",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Software",
    liveUrl: "https://blog-api-demo.com",
    githubUrl: "https://github.com/username/blog-api",
    features: [
      "User authentication with JWT",
      "Role-based access control",
      "Content CRUD operations",
      "Comment system",
      "Media upload and management",
      "API documentation with Swagger",
    ],
  },
  {
    title: "Temporary Chat App",
    description: "A beautiful weather dashboard with real-time updates, forecasts, and interactive maps.",
    image: "/projects/temporary.png",
    tags: ["React", "OpenWeather API", "Mapbox", "ChartJS"],
    category: "Full Stack",
    liveUrl: "https://temporary-chat-application.onrender.com/",
    githubUrl: "https://github.com/sapariyaneel/Temporary-Chat-Application",
    features: [
      "Real-time weather updates",
      "7-day weather forecast",
      "Interactive weather maps",
      "Location-based weather data",
      "Weather alerts and notifications",
      "Historical weather data visualization",
    ],
  },
  {
    title: "MKCL KLiC Clone",
    description: "An AI-powered content generation tool that helps create high-quality articles and social media posts.",
    image: "/projects/klic.png",
    tags: ["OpenAI", "React", "Express", "MongoDB"],
    category: "Frontend",
    liveUrl: "https://klic.netlify.app/",
    githubUrl: "https://github.com/sapariyaneel",
    features: [
      "AI-powered content generation",
      "Multiple content formats support",
      "Content editing and customization",
      "SEO optimization suggestions",
      "Content history and versioning",
      "Export to various formats",
    ],
  },
  {
    title: "Vegan Store",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/projects/vegan.png",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    category: "Frontend",
    liveUrl: "https://veganstoren.netlify.app/",
    githubUrl: "https://github.com/sapariyaneel/Vegan-Store",
    features: [
      "Real-time task updates and notifications",
      "Team collaboration tools",
      "Project progress tracking",
      "Task assignment and deadline management",
      "File sharing and comments",
      "Activity logs and reporting",
    ],
  },
  {
    title: "Cloud Campus",
    description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.",
    image: "/projects/cloud.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    liveUrl: "https://cloud-campus.netlify.app/",
    githubUrl: "https://github.com/sapariyaneel/Cloud-Campus",
    features: [
      "Responsive design for all devices",
      "Dark mode support",
      "Smooth page transitions",
      "Project filtering and search",
      "Contact form integration",
      "SEO optimization",
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
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
                    className="object-cover transition-transform duration-300"
                    style={{
                      transform: hoveredProject === project.title ? 'scale(1.1)' : 'scale(1)',
                    }}
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