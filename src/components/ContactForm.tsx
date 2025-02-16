import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Save, Mail, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSaved, setIsSaved] = useState(false);

    // Load saved data from localStorage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Save to localStorage
            localStorage.setItem('contactFormData', JSON.stringify(formData));
            setIsSaved(true);

            // Prepare email content
            const subject = `Contact Request from ${formData.name}`;
            const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
            `.trim();

            // Open Gmail with pre-filled data
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=rnsinnovativesolutions@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        setIsSaved(false);
        
        if (errors[name as keyof FormErrors]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: undefined
            }));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                    <div className="text-center mb-8">
                        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                        <p className="mt-2 text-gray-600">We'd love to hear from you!</p>
                    </div>

                    {isSaved && (
                        <div className="mb-6 flex items-center p-4 bg-green-50 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-green-700">Form data saved locally</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                                    errors.name 
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                                        : 'border-gray-300 focus:border-primary focus:ring-primary'
                                } shadow-sm focus:ring-2 focus:ring-opacity-50 transition duration-150`}
                            />
                            {errors.name && (
                                <div className="mt-1 flex items-center text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                                    errors.email 
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                                        : 'border-gray-300 focus:border-primary focus:ring-primary'
                                } shadow-sm focus:ring-2 focus:ring-opacity-50 transition duration-150`}
                            />
                            {errors.email && (
                                <div className="mt-1 flex items-center text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div>
                            <label 
                                htmlFor="message" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`mt-1 block w-full px-4 py-3 rounded-lg border ${
                                    errors.message 
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                                        : 'border-gray-300 focus:border-primary focus:ring-primary'
                                } shadow-sm focus:ring-2 focus:ring-opacity-50 transition duration-150`}
                            />
                            {errors.message && (
                                <div className="mt-1 flex items-center text-sm text-red-500">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errors.message}
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => {
                                    localStorage.setItem('contactFormData', JSON.stringify(formData));
                                    setIsSaved(true);
                                }}
                                className="flex-1 flex items-center justify-center px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-150"
                            >
                                <Save className="h-5 w-5 mr-2" />
                                Save Draft
                            </button>
                            
                            <button
                                type="submit"
                                className="flex-1 flex items-center justify-center px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-150"
                            >
                                <Mail className="h-5 w-5 mr-2" />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;