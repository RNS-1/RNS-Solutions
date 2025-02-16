import React from 'react';
import { FaCheckCircle, FaLightbulb, FaCog, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CaseStudyProps {
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
    technologies: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({
    title,
    client,
    industry,
    challenge,
    solution,
    results,
    image,
    technologies
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden group">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="md:w-1/2 p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
                        <div className="flex items-center gap-4 text-gray-600">
                            <span className="font-medium">{client}</span>
                            <span>•</span>
                            <span className="text-primary-light">{industry}</span>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <FaLightbulb className="text-primary-light" />
                                <h4 className="font-semibold">The Challenge</h4>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{challenge}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <FaCog className="text-primary-light animate-spin-slow" />
                                <h4 className="font-semibold">Our Solution</h4>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{solution}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <FaChartLine className="text-primary-light" />
                                <h4 className="font-semibold">Results</h4>
                            </div>
                            <ul className="space-y-2">
                                {results.map((result, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="flex items-start gap-2 text-gray-600"
                                    >
                                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                        <span>{result}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-2 pt-4"
                        >
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-50 text-primary-light rounded-full text-sm hover:bg-blue-100 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudy; 