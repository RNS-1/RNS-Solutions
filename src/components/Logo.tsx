import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
    return (
        <motion.div
            className="flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                {/* Main Circle */}
                <motion.div
                    className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center bg-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                    {/* RNS Text */}
                    <motion.div
                        className="text-2xl font-bold text-primary"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        RNS
                    </motion.div>
                </motion.div>

                {/* Orbiting Dots */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                    <motion.div
                        className="absolute w-3 h-3 bg-primary-light rounded-full"
                        style={{ top: '0%', left: '50%' }}
                    />
                    <motion.div
                        className="absolute w-3 h-3 bg-primary rounded-full"
                        style={{ top: '50%', right: '0%' }}
                    />
                    <motion.div
                        className="absolute w-3 h-3 bg-primary-dark rounded-full"
                        style={{ bottom: '0%', left: '50%' }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Logo; 