import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const certificatesData = [
    {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "Aug 2023",
        link: "#"
    },
    {
        title: "React Basic",
        issuer: "HackerRank",
        date: "July 2023",
        link: "#"
    },
    {
        title: "AWS Fundamentals",
        issuer: "AWS",
        date: "June 2023",
        link: "#"
    },
    {
        title: "Python for Data Science",
        issuer: "Coursera",
        date: "May 2023",
        link: "#"
    }
];

const Certificates = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-xl border border-white/5 flex items-center justify-between hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-full">
                                    <FaAward size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
                                </div>
                            </div>
                            <a href={cert.link} className="text-gray-400 hover:text-primary transition-colors">
                                <FaExternalLinkAlt />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
