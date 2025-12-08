import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projectsData = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with React, Vite, and Tailwind CSS to showcase my projects and skills.",
        tags: ["React", "Tailwind", "Framer Motion"],
        github: "#",
        demo: "#",
        image: "https://picsum.photos/seed/portfolio1/600/400"
    },
    {
        title: "E-Commerce Platform",
        description: "A fully functional e-commerce app with cart, checkout, and user authentication using MERN stack.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        github: "#",
        demo: "#",
        image: "https://picsum.photos/seed/ecommerce/600/400"
    },
    {
        title: "Chat Application",
        description: "Real-time chat application using Socket.io and React with modern UI/UX.",
        tags: ["React", "Socket.io", "Node.js"],
        github: "#",
        demo: "#",
        image: "https://picsum.photos/seed/chat/600/400"
    },
    {
        title: "Weather Dashboard",
        description: "Weather forecasting app using OpenWeatherMap API with location-based services.",
        tags: ["Javascript", "API", "CSS"],
        github: "#",
        demo: "#",
        image: "https://picsum.photos/seed/weather/600/400"
    },
    {
        title: "Task Manager",
        description: "Productivity tool to manage daily tasks with drag-and-drop features.",
        tags: ["React", "Redux", "Firebase"],
        github: "#",
        demo: "#",
        image: "https://picsum.photos/seed/task/600/400"
    },
    {
        title: "Blog Platform",
        description: "Content management system for bloggers to publish and manage posts.",
        tags: ["Next.js", "Tailwind", "Sanity CMS"],
        github: "#",
        demo: "#",
        image: "https://picsum.photos/seed/blog/600/400"
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300 border border-white/5 group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a href={project.github} className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-colors">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href={project.demo} className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-colors">
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
