import React from 'react';

interface ProjectProps {
    project: {
        id: number;
        title: string;
        type: 'FREE' | 'PAID';
        features: string[];
        price: number;
        downloadLink?: string;
    };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    const handleAction = () => {
        if (project.type === 'FREE' && project.downloadLink) {
            window.open(project.downloadLink, '_blank');
        } else {
            const subject = `Inquiry about ${project.title}`;
            const body = `I'm interested in ${project.title}. Please provide more information.`;
            window.location.href = `mailto:sales@rnssolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
    };

    return (
        <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${project.type.toLowerCase()}`}>
            <div className="mb-4">
                <h3 className="text-primary mb-2">{project.title}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    project.type === 'FREE' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                    {project.type}
                </span>
            </div>
            
            <div className="mb-4">
                <p className="text-2xl font-bold text-primary">
                    {project.price === 0 ? 'FREE' : `$${project.price}`}
                </p>
            </div>

            <ul className="mb-6 space-y-2">
                {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button
                onClick={handleAction}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    project.type === 'FREE'
                        ? 'bg-secondary hover:bg-secondary-dark text-white'
                        : 'bg-primary hover:bg-primary-dark text-white'
                }`}
            >
                {project.type === 'FREE' ? 'Download Now' : 'Get Started'}
            </button>
        </div>
    );
};

export default ProjectCard; 