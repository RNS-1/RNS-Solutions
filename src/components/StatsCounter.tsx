import React, { useState, useEffect } from 'react';
import { FaUsers, FaCode, FaCheckCircle, FaClock } from 'react-icons/fa';

interface CounterProps {
    end: number;
    duration: number;
    label: string;
    icon: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ end, duration, label, icon }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            setCount(Math.floor(end * percentage));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration]);

    return (
        <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-primary-light mb-4 flex justify-center">
                {icon}
            </div>
            <div className="text-4xl font-bold text-primary mb-2">
                {count}+
            </div>
            <div className="text-gray-600">{label}</div>
        </div>
    );
};

const StatsCounter: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Counter
                end={100}
                duration={2000}
                label="Happy Clients"
                icon={<FaUsers className="w-8 h-8" />}
            />
            <Counter
                end={150}
                duration={2000}
                label="Projects Completed"
                icon={<FaCheckCircle className="w-8 h-8" />}
            />
            <Counter
                end={50000}
                duration={2000}
                label="Lines of Code"
                icon={<FaCode className="w-8 h-8" />}
            />
            <Counter
                end={24}
                duration={2000}
                label="Support Hours"
                icon={<FaClock className="w-8 h-8" />}
            />
        </div>
    );
};

export default StatsCounter; 