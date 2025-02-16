import React from 'react';
import ContactForm from '../components/ContactForm';

interface ContactInfoCardProps {
    title: string;
    content: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ title, content }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
    </div>
);

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <section className="bg-primary text-white py-16 text-center">
                <h1 className="mb-4">Get in Touch</h1>
                <p className="text-lg">Have questions? We'd love to hear from you.</p>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <ContactInfoCard
                        title="Email"
                        content="rnsinnovativesolutions@gmail.com"
                    />
                    <ContactInfoCard
                        title="Phone"
                        content="+91 9361599018"
                    />
                    <ContactInfoCard
                        title="Address"
                        content="Annur, Coimbatore , Tamil Nadu , India"
                    />
                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default Contact; 