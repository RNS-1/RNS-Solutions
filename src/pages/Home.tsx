    import React, { useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import {
        FaRocket, FaChevronDown, FaAward,
        FaHandshake, FaChartLine, FaGlobe, FaCode, FaMobileAlt,
        FaCheckCircle, FaLightbulb, FaCog, FaUsers
    } from 'react-icons/fa';
    import { motion, useScroll, useTransform } from 'framer-motion';
    import { Section } from 'lucide-react';

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

                {/* Work Flow Section */}
                <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Work Flow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We follow a structured process to ensure your project is delivered on time and to your satisfaction
            </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
            {/* Workflow Steps */}
            <div className="flex flex-col md:flex-row justify-center items-center">
                {/* Step 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-4"
                >
                    <div className="text-blue-600 text-4xl mb-4">
                        <FaAward />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Planning</h3>
                    <p className="text-gray-600">Define project scope, goals, and timeline</p>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:block mx-4 text-blue-600">
                    <FaChevronDown className="transform rotate-90" />
                </div>

                {/* Step 2 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-4"
                >
                    <div className="text-blue-600 text-4xl mb-4">
                        <FaChartLine />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Design</h3>
                    <p className="text-gray-600">Create wireframes and design mockups</p>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:block mx-4 text-blue-600">
                    <FaChevronDown className="transform rotate-90" />
                </div>

                {/* Step 3 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-4"
                >
                    <div className="text-blue-600 text-4xl mb-4">
                        <FaCode />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Development</h3>
                    <p className="text-gray-600">Build and integrate functionalities</p>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:block mx-4 text-blue-600">
                    <FaChevronDown className="transform rotate-90" />
                </div>

                {/* Step 4 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-4"
                >
                    <div className="text-blue-600 text-4xl mb-4">
                        <FaHandshake />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Testing</h3>
                    <p className="text-gray-600">Conduct thorough testing to ensure quality</p>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:block mx-4 text-blue-600">
                    <FaChevronDown className="transform rotate-90" />
                </div>

                {/* Step 5 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-4"
                >
                    <div className="text-blue-600 text-4xl mb-4">
                        <FaGlobe />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Deployment</h3>
                    <p className="text-gray-600">Launch the project and monitor performance</p>
                </motion.div>
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8"
        >
            <Link
                to="/workflow"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
                View Work Flow
                <FaChevronDown className="ml-2 transform rotate-90" />
            </Link>
        </motion.div>
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
