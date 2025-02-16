import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Portfolio from '../components/Portfolio';
import CaseStudy from '../components/CaseStudy';
import { FaReact, FaMobile, FaRobot, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom web applications built with modern technologies",
            icon: FaReact,
            technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
        },
        {
            title: "App Development",
            description: "We create user-friendly mobile applications for both iOS and Android platforms, ensuring a seamless experience for your users.",
            image: "/images/app-development.jpg",
        },
        {
            title: "Full Stack Development",
            description: "Our full stack development services cover both front-end and back-end technologies, providing end-to-end solutions for your business needs.",
            image: "/images/full-stack-development.jpg",
        },
        {
            title: "2D Game Development",
            description: "We specialize in creating engaging 2D games that captivate players and provide an immersive gaming experience.",
            image: "/images/2d-game-development.jpg",
        },
        // ... other services
    ];

    const caseStudies = [
        {
            title: "E-Commerce Platform Transformation",
            client: "RetailCo",
            industry: "Retail",
            challenge: "Legacy system with poor performance and user experience",
            solution: "Developed a modern, scalable e-commerce platform with real-time inventory management",
            results: [
                "50% increase in conversion rate",
                "30% reduction in cart abandonment",
                "2x faster page load times"
            ],
            image: "/path/to/case-study-image.jpg",
            technologies: ["React", "Node.js", "MongoDB", "AWS"]
        },
        // ... other case studies
    ];

    return (
        <div className="py-12">
            {/* Services Section */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Portfolio</h2>
                    <Portfolio />
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-center text-primary mb-16">Case Studies</h2>
                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <CaseStudy key={index} {...study} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Solutions; 