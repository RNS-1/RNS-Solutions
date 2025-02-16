import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: IconType;
    technologies: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, technologies }) => {
    return (
        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-primary-light mb-6 flex justify-center">
                <Icon className="w-16 h-16 group-hover:animate-bounce-slow" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-primary-light rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ServiceCard; 