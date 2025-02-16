import React, { useState } from 'react';
import { FaGlobe, FaMobile, FaDesktop, FaServer, FaLink, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string[];
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    industry: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce solution with real-time inventory management",
        image: "/path/to/ecommerce-image.jpg",
        category: ["Web Development", "Full Stack"],
        technologies: ["React", "Node.js", "MongoDB", "Redux"],
        demoUrl: "https://demo.example.com",
        githubUrl: "https://github.com/example",
        industry: "Retail"
    },
    // Add more projects...
];

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<string>("all");
    const [industryFilter, setIndustryFilter] = useState<string>("all");

    const categories = ["all", "Web Development", "Mobile Apps", "UI/UX", "Full Stack"];
    const industries = ["all", "Retail", "Healthcare", "Finance", "Technology"];

    const filteredProjects = projects.filter(project => {
        const categoryMatch = filter === "all" || project.category.includes(filter);
        const industryMatch = industryFilter === "all" || project.industry === industryFilter;
        return categoryMatch && industryMatch;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="py-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex flex-wrap gap-4 justify-center"
            >
                <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-600">Category</h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${filter === category
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-600">Industry</h3>
                    <div className="flex flex-wrap gap-2">
                        {industries.map(industry => (
                            <button
                                key={industry}
                                onClick={() => setIndustryFilter(industry)}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${industryFilter === industry
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {industry.charAt(0).toUpperCase() + industry.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredProjects.map(project => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.demoUrl && (
                        <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaLink className="w-5 h-5" />
                        </motion.a>
                    )}
                    {project.githubUrl && (
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub className="w-5 h-5" />
                        </motion.a>
                    )}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-primary-light rounded-full text-sm hover:bg-blue-100 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-light font-medium">{project.industry}</span>
                    <div className="flex items-center gap-2 text-gray-500">
                        {project.category.map((cat, index) => (
                            <span key={index} className="hover:text-primary-light transition-colors">
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 