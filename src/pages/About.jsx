import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card p-8 rounded-2xl shadow-xl border border-white/5 mb-12"
                >
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I’m a B.Tech second-year student with a deep passion for technology, problem-solving, and discipline.
                        Along with my academics, I’m preparing for the defence sector because serving the nation has always been one of my biggest dreams
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I enjoy reading tech blogs, gaming, streaming , travling and photography with videography
                    </p>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
                <div className="space-y-6">
                    {/* Timeline Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-card p-6 rounded-xl border-l-4 border-primary shadow-lg hover:bg-white/5 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                            <h4 className="text-xl font-bold text-white">Bachelor of Technology (B.Tech)</h4>
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">2024 - 2028</span>
                        </div>
                        <p className="text-gray-400 mb-2">Computer Science & Engineering (AI/ML)</p>
                        <p className="text-gray-500">Relevant Coursework: Data Structures, Algorithms, Operating System, DBMS,RDBMS, AI/ML, SQL, Python, C Excel & Power BI</p>
                    </motion.div>

                    {/* Timeline Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-card p-6 rounded-xl border-l-4 border-primary shadow-lg hover:bg-white/5 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                            <h4 className="text-xl font-bold text-white">Higher Secondary (12th Grade)</h4>
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">2024</span>
                        </div>
                        <p className="text-gray-400">Science Stream (PCMB)+IT</p>
                        <p className="text-gray-500">Jawahar Navodaya Vidyalaya Yadgir, Hothpet</p>
                         <p className="text-gray-500">80.30% Percentage</p>
                    </motion.div>

                    {/* Timeline Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-card p-6 rounded-xl border-l-4 border-primary shadow-lg hover:bg-white/5 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                            <h4 className="text-xl font-bold text-white">Secondary School (10th Grade)</h4>
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">2022</span>
                        </div>
                        <p className="text-gray-500">Jawahar Navodaya Vidyalaya Yadgir, Hothpet</p>
                        <p className="text-gray-500">75% Percentage</p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;
