import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTimes, FaSave, FaEdit, FaTrash } from 'react-icons/fa';
import { useProjects } from '../contexts/ProjectsContext';
import { projects } from '../data/projects'; // Import the projects data

interface Project {
    id: string;
    title: string;
    description: string;
    image: string; // This will now be a URL
    technologies: string[];
    category: string[];
    industry: string;
}

const AdminPanel: React.FC = () => {
    const { addProject } = useProjects();
    const [isAddingProject, setIsAddingProject] = useState(false);
    const [newProject, setNewProject] = useState<Partial<Project>>({});
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (!newProject.title || !newProject.description || !newProject.image || !newProject.category || !newProject.technologies || !newProject.industry) {
            setError('All fields are required.');
            return;
        }

        // Prepare project data
        const projectData = {
            ...newProject,
            category: newProject.category?.map(cat => cat.trim()), // Convert to array
            technologies: newProject.technologies?.map(tech => tech.trim()), // Convert to array
        };

        // Add the new project
        addProject(projectData as Omit<Project, 'id'>);
        setIsAddingProject(false);
        setNewProject({});
        setError(''); // Clear error on successful submission
    };

    const handleDelete = (id: string) => {
        // deleteProject(id);
    };

    const handleEdit = (project: Project) => {
        setNewProject(project);
        setIsAddingProject(true);
    };

    const handleInputChange = (field: string, value: string) => {
        setNewProject({ ...newProject, [field]: value });
        setError(''); // Clear error when user starts typing
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-900/95 z-50 overflow-y-auto"
        >
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-blue-900">Admin Panel</h2>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="mb-8">
                        <button
                            onClick={() => setIsAddingProject(true)}
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <FaPlus className="mr-2" />
                            Add New Project
                        </button>
                    </div>

                    <AnimatePresence>
                        {isAddingProject && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="mb-8 bg-gray-50 p-6 rounded-xl"
                            >
                                <h3 className="text-xl font-bold text-blue-900 mb-4">Upload New Project</h3>
                                {error && <p className="text-red-500">{error}</p>}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Project Title"
                                        value={newProject.title || ''}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <textarea
                                        placeholder="Project Description"
                                        value={newProject.description || ''}
                                        onChange={(e) => handleInputChange('description', e.target.value)}
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Image URL"
                                        value={newProject.image || ''}
                                        onChange={(e) => handleInputChange('image', e.target.value)}
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Category (comma separated)"
                                        value={newProject.category?.join(', ') || ''}
                                        onChange={(e) => handleInputChange('category', e.target.value)}
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Technologies (comma separated)"
                                        value={newProject.technologies?.join(', ') || ''}
                                        onChange={(e) => handleInputChange('technologies', e.target.value)}
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Demo URL"
                                        // value={newProject.demoUrl || ''}
                                        onChange={(e) => handleInputChange('demoUrl', e.target.value)}
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="GitHub URL"
                                        // value={newProject.githubUrl || ''}
                                        onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Industry"
                                        value={newProject.industry || ''}
                                        onChange={(e) => handleInputChange('industry', e.target.value)}
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <button type="submit" className="bg-primary text-white p-2 rounded">
                                        Upload Project
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <h3 className="text-xl font-bold text-blue-900 mb-4">Existing Projects</h3>
                    <div className="space-y-4">
                        {projects.map(project => (
                            <div key={project.id} className="flex justify-between items-center p-4 border rounded-lg">
                                <div>
                                    <h4 className="font-bold">{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button onClick={() => handleEdit(project as unknown as Project)} className="text-blue-600 hover:text-blue-800">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(project.id.toString())} className="text-red-600 hover:text-red-800">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AdminPanel; 