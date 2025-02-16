import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTimes, FaSave } from 'react-icons/fa';
import { useProjects } from '../contexts/ProjectsContext';

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

    const saveProject = () => {
        if (newProject.title && newProject.description && newProject.image) {
            addProject(newProject as Omit<Project, 'id'>);
            setIsAddingProject(false);
            setNewProject({});
        }
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
                                <h3 className="text-xl font-bold text-blue-900 mb-4">Add New Project</h3>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Project Title"
                                        value={newProject.title || ''}
                                        onChange={e => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <textarea
                                        placeholder="Project Description"
                                        value={newProject.description || ''}
                                        onChange={e => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Image URL"
                                        value={newProject.image || ''}
                                        onChange={e => setNewProject(prev => ({ ...prev, image: e.target.value }))}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Technologies (comma-separated)"
                                        value={newProject.technologies?.join(', ') || ''}
                                        onChange={e => setNewProject(prev => ({
                                            ...prev,
                                            technologies: e.target.value.split(',').map(t => t.trim())
                                        }))}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <div className="flex gap-4">
                                        <button
                                            onClick={saveProject}
                                            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                        >
                                            <FaSave className="mr-2" />
                                            Save Project
                                        </button>
                                        <button
                                            onClick={() => setIsAddingProject(false)}
                                            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                        >
                                            <FaTimes className="mr-2" />
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default AdminPanel; 