import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaRocket, FaUsersCog, FaTools, FaChevronDown, FaAward,
    FaHandshake, FaChartLine, FaGlobe, FaCode, FaMobileAlt,
    FaCheckCircle, FaLightbulb, FaCog, FaUsers
} from 'react-icons/fa';

const Workflow: React.FC = () => {
    return (
        <div className="p-8 bg-gradient-to-b from-gray-100 to-white min-h-screen">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Work Flow</h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                    We follow a structured process to ensure your project is delivered on time and to your satisfaction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Requirement Gathering</h3>
                        <p className="text-gray-600">Understanding your needs and expectations to define project scope.</p>
                        <p className="text-gray-500 mt-2">This phase involves meetings and discussions to gather all necessary information.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p className="text-gray-600">Creating user-friendly designs that enhance user experience.</p>
                        <p className="text-gray-500 mt-2">We create wireframes and prototypes to visualize the user interface.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Development</h3>
                        <p className="text-gray-600">Building robust and scalable applications using modern technologies.</p>
                        <p className="text-gray-500 mt-2">Our developers write clean, maintainable code to implement the designs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Testing</h3>
                        <p className="text-gray-600">Ensuring quality through rigorous testing and feedback loops.</p>
                        <p className="text-gray-500 mt-2">We conduct various tests to ensure the application is bug-free and meets requirements.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Deployment</h3>
                        <p className="text-gray-600">Launching the application and making it available to users.</p>
                        <p className="text-gray-500 mt-2">We deploy the application to a live environment and monitor its performance.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <FaCheckCircle className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Feedback and Iteration</h3>
                        <p className="text-gray-600">Gathering user feedback and making necessary improvements.</p>
                        <p className="text-gray-500 mt-2">We continuously improve the application based on user feedback and analytics.</p>
                    </div>
                </div>
                <div className="mt-8">
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Workflow; 