import React, { useState } from 'react';
import { FaGlobe, FaMobile, FaDesktop, FaServer, FaLink, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Projectcard from './ProjectCard';
import { projects } from '../data/projects'; // Assuming you have a projects data file

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

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<string>("all");

    const categories = ["all", "Web Development", "Mobile Apps", "UI/UX", "Full Stack"];

    const filteredProjects = projects.filter(project => {
        return filter === "all" || project.category.includes(filter);
    });

    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
            <div className="flex justify-center mb-6">
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

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                {filteredProjects.map(project => (
                    <motion.div key={project.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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