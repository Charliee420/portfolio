import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profilepic.png';

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center md:text-left order-2 md:order-1"
                >
                    <h2 className="text-2xl font-semibold text-primary">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white">
                        HEMANTH
                    </h1>
                    <div className="text-2xl md:text-4xl font-semibold text-gray-300 h-20 md:h-auto">
                        <span className="mr-2">I am a</span>
                        <TypeAnimation
                            sequence={[
                                'Ai Web components Developer',
                                2000,
                                'AI Enthusiast',
                                2000,
                                'Tech Innovator',
                                2000,
                                'Problem Solver',
                                2000,
                                2000,
                                'Artist',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-primary font-bold"
                            repeat={Infinity}
                        />
                    </div>
                    <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                        My goal is simple: build a meaningful career where I can contribute, lead, and inspire.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-primary/25"
                        >
                            Contact Me
                        </Link>
                        <a
                            href="#"
                            className="px-8 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                        >
                            <FaFileDownload /> Resume
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start pt-6 text-2xl text-gray-400">
                        <a href="https://github.com/Charliee420" className="hover:text-white transition-colors hover:scale-110 transform"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/hemu-dk-627756328/" className="hover:text-blue-500 transition-colors hover:scale-110 transform"><FaLinkedin /></a>
                        <a href="#" className="hover:text-pink-500 transition-colors hover:scale-110 transform"><FaInstagram /></a>
                        <a href="#" className="hover:text-sky-400 transition-colors hover:scale-110 transform"><FaTwitter /></a>
                    </div>

                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        <img
                            src={profileImg}
                            alt="Hemanth"
                            className="relative w-full h-full object-cover rounded-full border-4 border-primary/50 shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;
