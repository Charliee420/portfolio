import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Framer Motion"]
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API"]
    },
    {
        category: "Tools & Others",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"]
    },
    {
        category: "Soft Skills",
        skills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability", "crazy Creative "]
    }
];

const Skills = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-dark rounded-lg text-gray-300 font-medium border border-white/5 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
