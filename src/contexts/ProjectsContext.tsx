import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string[];
    industry: string;
    demoUrl?: string;
    githubUrl?: string;
}

interface ProjectsContextType {
    projects: Project[];
    addProject: (project: Omit<Project, 'id'>) => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>(() => {
        const saved = localStorage.getItem('admin_projects');
        return saved ? JSON.parse(saved) : [];
    });

    const addProject = (project: Omit<Project, 'id'>) => {
        const newProject = {
            ...project,
            id: Date.now().toString(),
        };
        setProjects(prev => [...prev, newProject]);
    };

    useEffect(() => {
        localStorage.setItem('admin_projects', JSON.stringify(projects));
    }, [projects]);

    return (
        <ProjectsContext.Provider value={{ projects, addProject }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjects = () => {
    const context = useContext(ProjectsContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectsProvider');
    }
    return context;
}; 