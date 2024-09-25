import React, { useState } from 'react';

function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', details: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send data to your email or API)
        console.log(formData);
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="p-10 bg-gray-50 h-[87vh]">
            <h1 className="text-center text-3xl font-bold mb-6">Contact Me</h1>
            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
                <div className="flex items-center gap-4">
                    <img
                        src="./src/assets/img/email.png"
                        alt="Email"
                        className="w-8 h-8"
                    />
                    <p><a href="mailto:uvvi571@gmail.com">uvvi571@gmail.com</a></p>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src="./src/assets/img/linkedin.png"
                        alt="LinkedIn"
                        className="w-8 h-8"
                    />
                    <p><a href="https://www.linkedin.com">LinkedIn</a></p>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src="./src/assets/img/github.png"
                        alt="GitHub"
                        className="w-8 h-8"
                    />
                    <p><a href="https://github.com/useru1k">GitHub</a></p>
                </div>
            </div>
            <p className="text-center text-lg pt-7 font-medium">Get in Touch</p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center ">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded p-2 mb-4 w-80 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm hover:shadow-md focus:shadow-lg"
                    required
                />
                <input
                    type="email"
                    name="email"  
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded p-2 mb-4 w-80 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm hover:shadow-md focus:shadow-lg"
                    required
                />
                <textarea
                    name="details"
                    placeholder="Your Message"
                    value={formData.details}
                    onChange={handleChange}
                    className="border rounded p-2 mb-4 w-80 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm hover:shadow-md focus:shadow-lg"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2"
                >
                    Send Message
                </button>
                {isSubmitted && <p className="mt-4 text-green-500">Thank you for your message!</p>}
            </form>
        </section>
    );
}

export default ContactSection;
