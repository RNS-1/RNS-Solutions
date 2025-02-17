import React from 'react';
import { motion } from 'framer-motion';

const ModernBlueLogoAnimation: React.FC = () => {
    return (
        <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="relative mr-4">
                {/* Main Circle with Gradient */}
                <motion.div
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{
                        background: "linear-gradient(135deg, #2563eb, #1e40af)",
                        boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)"
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2
                    }}
                >
                    {/* RNS Text */}
                    <motion.div
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        RNS
                    </motion.div>
                </motion.div>

                {/* Orbiting Blue Pulse Rings */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...Array(3)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400"
                            style={{ 
                                width: `${100 + index * 40}%`, 
                                height: `${100 + index * 40}%`,
                                opacity: 0.4 - index * 0.1
                            }}
                            animate={{ 
                                scale: [0.8, 0.8, 0.5],
                                opacity: [0.4 - index * 0.1, 0.6 - index * 0.1, 0.4 - index * 0.1],
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.8
                            }}
                        />
                    ))}
                </motion.div>

                {/* Animated Blue Dots */}
                <motion.div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(6)].map((_, index) => {
                        const angle = (index / 6) * 2 * Math.PI;
                        const radius = 16;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        
                        return (
                            <motion.div
                                key={index}
                                className="absolute w-2 h-2 bg-white rounded-full"
                                style={{ 
                                    left: `calc(50% + ${x}px)`, 
                                    top: `calc(50% + ${y}px)`,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ 
                                    scale: [0, 1, 1, 0],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.3,
                                    times: [0, 0.2, 0.8, 1]
                                }}
                            />
                        );
                    })}
                </motion.div>

                {/* Particle Flow Effect - White Dots */}
                {[...Array(12)].map((_, index) => {
                    const delay = index * 0.5;
                    const duration = 1.5 + Math.random();
                    const size = 1 + Math.random() * 2;
                    
                    return (
                        <motion.div
                            key={`particle-${index}`}
                            className="absolute bg-white rounded-full opacity-70"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `calc(50% + ${(Math.random() * 40) - 20}px)`,
                                top: `calc(50% + ${(Math.random() * 40) - 20}px)`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 0.8, 0],
                                x: [0, (Math.random() * 40) - 20],
                                y: [0, (Math.random() * 40) - 20],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: "easeOut"
                            }}
                        />
                    );
                })}
            </div>

            {/* Company Name with Fade-in Animation */}
            <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <motion.span 
                    className="text-3xl font-bold text-blue-600"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    RNS
                </motion.span>
                
                <motion.span 
                    className="text-xl text-blue-500"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    Solutions
                </motion.span>

                {/* Animated Underline */}
                <motion.div 
                    className="h-0.5 bg-blue-400 mt-1"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ModernBlueLogoAnimation;