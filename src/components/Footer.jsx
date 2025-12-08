import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Charliee. All rights reserved.
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Charliee420" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/hemu-dk-627756328/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xl"><FaLinkedin /></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xl"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xl"><FaInstagram /></a>
                        <a href="/contact" className="text-gray-400 hover:text-primary transition-colors text-xl"><FaEnvelope /></a>
                    </div>

                    <div className="text-gray-500 text-xs">
                        Built with React & Tailwind
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
