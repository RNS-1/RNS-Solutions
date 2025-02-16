import React from 'react';

const About: React.FC = () => {
    const values = [
        'Innovation in everything we do',
        'Customer satisfaction is our priority',
        'Quality and reliability in our solutions',
        'Continuous improvement and learning'
    ];

    return (
        <div className="about-page py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-primary text-center mb-12">About RNS Solutions</h1>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <section className="mb-12">
                        <h2 className="text-primary mb-4">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed">
                            RNS Solutions is a leading software development company dedicated to providing
                            innovative solutions for businesses worldwide.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-primary mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To deliver high-quality software solutions that help businesses grow and
                            succeed in the digital age.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-primary mb-4">Our Values</h2>
                        <ul className="space-y-3">
                            {values.map((value, index) => (
                                <li
                                    key={index}
                                    className="flex items-center text-gray-600"
                                >
                                    <span className="text-secondary mr-3">•</span>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About; 