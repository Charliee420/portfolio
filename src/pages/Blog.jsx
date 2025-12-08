import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: "Getting Started with React 19",
        excerpt: "React 19 brings exciting new features like the Compiler. Here is what you need to know...",
        date: "Oct 10, 2024",
        readTime: "5 min read"
    },
    {
        title: "Why Tailwind CSS is the Future",
        excerpt: "Utility-first CSS frameworks are changing the way we design web apps. Let's explore why.",
        date: "Sep 25, 2024",
        readTime: "4 min read"
    },
    {
        title: "Understanding AI Agents",
        excerpt: "AI Agents are the next big thing. How do they work and what can they do for us?",
        date: "Sep 15, 2024",
        readTime: "6 min read"
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">My Blog</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-6">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-8 rounded-xl border border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2 hover:text-primary transition-colors">{post.title}</h3>
                            <div className="flex gap-4 text-sm text-gray-500 mb-4">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                            <div className="mt-4">
                                <span className="text-primary font-medium hover:underline">Read more →</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
