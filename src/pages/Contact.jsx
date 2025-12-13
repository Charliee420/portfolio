import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

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
                            <p className="text-gray-400 mb-4">contacthemu@gmail.com</p>
                            <a href="mailto:contacthemu@gmail.com" className="text-primary hover:underline">Send Email</a>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                            <p className="text-gray-400">Bengalore, India</p>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                        onSubmit={sendEmail}
                    >
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500"
                                placeholder="Hey there..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-3 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 ${status === 'sending' ? 'bg-gray-600 cursor-not-allowed' : 'bg-primary hover:bg-sky-600'} text-white`}
                        >
                            {status === 'sending' ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                        </button>

                        {status === 'success' && <p className="text-green-500 text-center">Message sent successfully!</p>}
                        {status === 'error' && <p className="text-red-500 text-center">Failed to send message. Please try again.</p>}
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
