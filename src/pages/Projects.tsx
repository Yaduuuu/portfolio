import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Admin Migration Dashboard",
    description: "A full-stack React & Flask web application for efficient resource management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    github: "https://github.com/Yaduuuu/Admin_migration_dashboard",
    features: [
      "Data visualization with Chart.js",
      "Role-based authentication",
      "Bulk data management",
      "MongoDB-powered fast queries"
    ]
  },
  {
    title: "Car Management System API",
    description: "RESTful API built with Spring Boot & Hibernate for car inventory management.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800",
    github: "https://github.com/Yaduuuu/CarManagementSystem",
    features: [
      "RESTful APIs with Swagger documentation",
      "MySQL database integration",
      "JWT-based authentication",
      "Comprehensive vehicle tracking endpoints"
    ]
  },
  {
    title: "Travel Planner",
    description: "Dynamic JSP, Servlet, and AJAX based travel management platform.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800",
    github: "https://github.com/Yaduuuu/Travel-Planner",
    features: [
      "Real-time search & booking",
      "Multi-bus booking",
      "AJAX-powered UX",
      "Email notifications"
    ]
  },
  {
    title: "HYPE (Instagram Clone)",
    description: "Django-based social media platform with Instagram-like features.",
    image: "https://images.unsplash.com/photo-1585247226801-bc613c441316?auto=format&fit=crop&w=800",
    github: "https://github.com/Yaduuuu/HYPE-",
    features: [
      "User authentication",
      "Post management",
      "Media uploads",
      "Social interactions"
    ]
  },
  {
    title: "Diabetes Prediction & Detection",
    description: "ML-powered solution for early diabetes detection using advanced predictive analytics.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
    github: "https://github.com/Yaduuuu/Diabetes-Prediction-and-Detection-project-",
    features: [
      "Predictive analytics using ML models",
      "Dataset preprocessing & feature engineering",
      "Flask API for model deployment",
      "User-friendly web interface"
    ]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-gray-800 rounded-lg overflow-hidden"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="space-y-2">
        {project.features.map((feature: string, i: number) => (
          <div key={i} className="flex items-center text-sm text-gray-300">
            <ExternalLink className="w-4 h-4 mr-2 text-blue-500" />
            {feature}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Projects;