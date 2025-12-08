import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allImages = [
    {
        id: 1,
        src: "https://picsum.photos/seed/photo1/800/600",
        category: "Photographs",
        title: "Nature Shot"
    },
    {
        id: 2,
        src: "https://picsum.photos/seed/achieve1/800/600",
        category: "Achievements",
        title: "Hackathon Winner"
    },
    {
        id: 3,
        src: "https://picsum.photos/seed/crazy1/800/600",
        category: "Crazy Stuff",
        title: "Skydiving"
    },
    {
        id: 4,
        src: "https://picsum.photos/seed/photo2/800/600",
        category: "Photographs",
        title: "City Lights"
    },
    {
        id: 5,
        src: "https://picsum.photos/seed/achieve2/800/600",
        category: "Achievements",
        title: "Best Code Award"
    },
    {
        id: 6,
        src: "https://picsum.photos/seed/crazy2/800/600",
        category: "Crazy Stuff",
        title: "Midnight Coding"
    },
    {
        id: 7,
        src: "https://picsum.photos/seed/photo3/800/600",
        category: "Photographs",
        title: "Mountain View"
    },
];

const categories = ["All", "Photographs", "Achievements", "Crazy Stuff"];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? allImages
        : allImages.filter(img => img.category === activeCategory);

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                        : 'bg-card text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredImages.map((image) => (
                            <motion.div
                                layout
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="relative group overflow-hidden rounded-xl h-64 border border-white/5"
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                                    <span className="text-primary text-sm font-medium bg-primary/10 px-2 py-1 rounded">{image.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredImages.length === 0 && (
                    <div className="text-center text-gray-500 mt-12">
                        No images found in this category yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
