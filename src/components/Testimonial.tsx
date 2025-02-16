import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface TestimonialProps {
    name: string;
    company: string;
    image: string;
    testimonial: string;
    rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, company, image, testimonial, rating }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="relative">
                    <FaQuoteLeft className="text-primary-light/20 text-4xl absolute -top-2 -left-2" />
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        {[...Array(rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">{testimonial}</p>
                    <div>
                        <h4 className="font-bold text-primary">{name}</h4>
                        <p className="text-sm text-gray-500">{company}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial; 