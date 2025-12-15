import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminPanel = ({ onUploadSuccess }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Upload States
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState('');
    const fileInputRef = useRef(null);

    const togglePanel = () => {
        setIsOpen(!isOpen);
        setPassword('');
        setError('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'HDK@125412541') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect Password');
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setError("Please select an image");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;

            const newImage = {
                id: Date.now(),
                src: base64String,
                category: "Crazy Stuff", // Default category for uploads
                title: description || "My Upload"
            };

            // Save to LocalStorage
            const existingUploads = JSON.parse(localStorage.getItem('gallery_uploads') || '[]');
            const updatedUploads = [...existingUploads, newImage];
            localStorage.setItem('gallery_uploads', JSON.stringify(updatedUploads));

            // Reset
            setSelectedFile(null);
            setDescription('');
            if (fileInputRef.current) fileInputRef.current.value = '';
            alert("Upload Successful! Check the Gallery.");
            if (onUploadSuccess) onUploadSuccess();
        };
        reader.readAsDataURL(selectedFile);
    };

    return (
        <>
            <button
                onClick={togglePanel}
                className="fixed bottom-4 right-4 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-sky-600 transition-all hover:scale-110 font-bold"
                title="Admin Login"
            >
                Me
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-card w-full max-w-md p-8 rounded-2xl border border-white/10 shadow-2xl relative"
                        >
                            <button
                                onClick={togglePanel}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white font-bold"
                            >
                                ✕
                            </button>

                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                {isAuthenticated ? "Upload to Gallery" : "Admin Access"}
                            </h2>

                            {!isAuthenticated ? (
                                <form onSubmit={handleLogin} className="space-y-4">
                                    <div>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter Password"
                                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                                            autoFocus
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-sky-600 transition-colors"
                                    >
                                        It's Me
                                    </button>
                                </form>
                            ) : (
                                <form onSubmit={handleUpload} className="space-y-4">
                                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer"
                                        onClick={() => fileInputRef.current.click()}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                        />
                                        <div className="text-4xl mb-2">☁️</div>
                                        <p className="text-gray-400">
                                            {selectedFile ? selectedFile.name : "Click to select photo"}
                                        </p>
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Description (e.g. Not always from code so...)"
                                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-sm">{error}</p>} {/* Keep error display for file selection */}

                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        Upload Photo
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AdminPanel;
