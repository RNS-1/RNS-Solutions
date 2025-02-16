import React, { useState, useEffect } from 'react';
import { FaRobot, FaTimes, FaComment, FaSmile } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/chatbotContent';
import { chatEmojis, getRandomEmoji } from '../utils/chatEmojis';

// Note: In a real application, you'd want to secure this
const GEMINI_API_KEY = 'AIzaSyCJswbUfxT2YqZuJaqTPlUS4BcAe9F-Vy0';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

interface Message {
    text: string;
    isBot: boolean;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! How can I help you today?", isBot: true }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const formatResponse = (text: string) => {
        // Add emojis to key phrases
        const enhancedText = text
            .replace(/web development/gi, `web development ${chatEmojis.web}`)
            .replace(/mobile/gi, `mobile ${chatEmojis.mobile}`)
            .replace(/AI|artificial intelligence/gi, `AI ${chatEmojis.ai}`)
            .replace(/cloud/gi, `cloud ${chatEmojis.cloud}`)
            .replace(/security/gi, `security ${chatEmojis.security}`)
            .replace(/team/gi, `team ${chatEmojis.team}`)
            .replace(/innovation/gi, `innovation ${chatEmojis.innovation}`)
            .replace(/success/gi, `success ${chatEmojis.success}`)
            .replace(/contact/gi, `contact ${chatEmojis.email}`)
            .replace(/RNS Solutions/g, `RNS Solutions ${chatEmojis.star}`);

        return enhancedText;
    };

    const generateResponse = async (userInput: string) => {
        try {
            const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are RNS Solution Spark, a direct and professional AI assistant. 
                            Provide concise, informative responses without any conversational prefixes or phrases like "Sure," or "I can help."
                            
                            Company Context: ${JSON.stringify(companyInfo)}
                            
                            User Question: ${userInput}
                            
                            Response (be direct and professional):`
                        }]
                    }]
                })
            });

            const data = await response.json();
            let response_text = data.candidates[0].content.parts[0].text;

            // Clean up common prefixes
            response_text = response_text
                .replace(/^(Sure|I can help|Here's|Let me help|Here is|Based on|According to).*(:|,|\.)?\s*/i, '')
                .replace(/^(the\s)?answer\s(is|would be)\s*:?\s*/i, '')
                .trim();

            return formatResponse(response_text);
        } catch (error) {
            console.error('Error:', error);
            return `${chatEmojis.tools} I'm having trouble connecting right now. Please try again later.`;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { text: input, isBot: false }]);
        setInput("");
        setIsLoading(true);

        const botResponse = await generateResponse(input);

        setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col"
                    >
                        <div className="bg-primary p-4 rounded-t-lg flex justify-between items-center">
                            <div className="flex items-center text-white">
                                <motion.div
                                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    <FaRobot className="mr-2 text-xl" />
                                </motion.div>
                                <span>RNS Solution Spark</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-300"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            <AnimatePresence>
                                {messages.map((message, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: message.isBot ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div className={`rounded-lg p-3 max-w-[80%] ${message.isBot
                                                ? 'bg-gray-100 hover:bg-gray-200'
                                                : 'bg-primary text-white'
                                            } transition-colors duration-200`}
                                        >
                                            {message.text}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-gray-100 rounded-lg p-3">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                        >
                                            {getRandomEmoji()}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="p-4 border-t">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                                >
                                    <FaSmile className="w-6 h-6" />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                ) : (
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
                    >
                        <FaComment className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot; 