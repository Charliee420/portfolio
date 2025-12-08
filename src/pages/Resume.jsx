import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">My Resume</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>

                    <div className="flex justify-center gap-4 mb-10">
                        <a
                            href="#"
                            target="_blank"
                            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-sky-600 transition-colors flex items-center gap-2"
                        >
                            <FaFileDownload /> Download PDF
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative bg-white text-black p-10 rounded-lg shadow-2xl mx-auto w-full max-w-4xl text-left min-h-[800px]"
                >
                    {/* Mock Resume Content */}
                    <div className="border-b-2 border-gray-300 pb-6 mb-6">
                        <h1 className="text-4xl font-bold text-gray-800">HANAMANTH</h1>
                        <p className="text-xl text-primary font-medium">AI Web components Developer | AI Engineer </p>
                        <p className="text-gray-600 mt-2">Bengalore • contacthemu@gmail.com</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3 uppercase tracking-wider">Summary</h3>
                        <p className="text-gray-700">
                           I love exploring new skills—whether it’s coding, analytics, or creative problem-solving and
                           I constantly push myself to grow. I’m driven, focused, and never afraid of challenges.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3 uppercase tracking-wider">Experience</h3>
                        <div className="mb-4">
                            <h4 className="font-bold text-lg">Fresher (2nd year student)</h4>
                            {/* <p className="text-gray-600 italic">XYZ Tech Solutions | June 2024 - Aug 2024</p> */}
                            {/* <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li>Developed responsive user interfaces using React.js and Tailwind CSS.</li>
                                <li>Optimized backend API performance reducing latency by 20%.</li>
                                <li>Collaborated with senior developers to implement new features.</li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3 uppercase tracking-wider">Education</h3>
                        <div className="mb-2">
                            <h4 className="font-bold text-lg">Bachelor of Technology (Computer Science)</h4>
                            <p className="text-gray-600">RAI TECHNOLOGY INSTITUTE | 2024- 2028</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3 uppercase tracking-wider">Skills</h3>
                        <p className="text-gray-700">
                            <span className="font-bold">Languages:</span> Python, C <br />
                            <span className="font-bold">Frameworks:</span> React, Node.js, Tailwind CSS<br />
                            <span className="font-bold">Tools:</span> Git, GitHub, Vercel, Netlify , Figma , Canva
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
