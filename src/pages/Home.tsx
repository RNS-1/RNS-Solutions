import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaRocket, FaUsersCog, FaTools, FaChevronDown, FaAward,
    FaHandshake, FaChartLine, FaGlobe, FaCode, FaMobileAlt,
    FaCheckCircle, FaLightbulb, FaCog, FaUsers
} from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ServiceCardProps {
    icon: React.ComponentType;
    title: string;
    description: string;
    features: string[];
    delay: number;
}

interface StatCardProps {
    value: string;
    label: string;
    icon: React.ComponentType;
    delay: number;
}

const Home = () => {
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const services = [
        {
            title: "Web Development",
            description: "Cutting-edge web applications built with modern technologies",
            icon: FaGlobe,
            features: ["React & Next.js", "Node.js & Express", "TypeScript", "MongoDB & PostgreSQL"]
        },
        {
            title: "Mobile Development",
            description: "Seamless native and cross-platform mobile experiences",
            icon: FaMobileAlt,
            features: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"]
        },
        {
            title: "Enterprise Solutions",
            description: "Scalable software solutions for business growth",
            icon: FaCode,
            features: ["Cloud Integration", "API Development", "Legacy Modernization", "Technical Consulting"]
        }
    ];

    const stats = [
        { value: "150+", label: "Projects Completed", icon: FaLightbulb },
        { value: "50+", label: "Enterprise Clients", icon: FaUsers },
        { value: "99%", label: "Client Satisfaction", icon: FaHandshake },
        { value: "24/7", label: "Support Available", icon: FaCog }
    ];

    return (
        <div className="overflow-hidden bg-white">
            {/* Hero Section with Parallax */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{ y: backgroundY }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('../public/grid.svg')] bg-repeat opacity-30" />
                </motion.div>

                {/* Animated Circles */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                        }}
                        className="absolute w-96 h-96 -top-10 -left-10 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            delay: 2,
                            repeat: Infinity,
                        }}
                        className="absolute w-96 h-96 -bottom-10 -right-10 bg-white rounded-full mix-blend-multiply filter blur-xl"
                    />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            Transforming Ideas Into
                            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
                                Digital Excellence
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            We craft innovative software solutions that drive growth and deliver exceptional results for forward-thinking businesses
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center px-8 py-4 text-blue-600 bg-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Start Your Journey
                                    <FaRocket className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/portfolio"
                                    className="group inline-flex items-center px-8 py-4 text-white border-2 border-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    Explore Our Work
                                    <FaChevronDown className="ml-2 transform group-hover:translate-y-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section with Card Hover Effects */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive software solutions tailored to elevate your business
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                {...service}
                                delay={index * 0.2}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section with Counter Animation */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <StatCard
                                key={index}
                                {...stat}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 shadow-xl"
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's collaborate to bring your vision to life with our innovative solutions
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Schedule a Consultation
                                <FaChevronDown className="ml-2 transform rotate-90" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
    >
        <div className="text-blue-600 text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
            <Icon />
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
            {features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-gray-600">
                    <FaCheckCircle className="text-blue-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const StatCard: React.FC<StatCardProps> = ({ value, label, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="text-center p-6"
    >
        <div className="text-5xl mb-4 text-blue-100">
            <Icon />
        </div>
        <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay }}
            className="text-4xl font-bold mb-2"
        >
            {value}
        </motion.div>
        <div className="text-blue-100">{label}</div>
    </motion.div>
);

export default Home;