import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
        };
    
        fetchProjects();
    }, []);
    
    return (
        <div>
        <h1>My Projects</h1>
        {projects.length === 0 ? (
        <p>No projects found.</p>
        ) : (
        <ul>
            {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
            ))}
        </ul>
        )}
                </div>
            );
        };
export default ProjectList;