import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="min-h-screen py-12 px-4 flex items-center justify-center">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400">
                        Whether it’s a new project, a collaboration, or just to say hi!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-card p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
                            <p className="text-gray-400 mb-4">kunj@example.com</p>
                            <a href="mailto:kunj@example.com" className="text-primary hover:underline">Send Email</a>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                            <p className="text-gray-400">India</p>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500"
                                placeholder="Hey there..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaPaperPlane /> Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
