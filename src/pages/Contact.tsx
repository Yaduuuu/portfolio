import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    window.location.href = `mailto:your.email@example.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <p className="text-lg mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-4">
                  <SocialLink
                    icon={<Mail />}
                    text="your.email@example.com"
                    href="mailto:your.email@example.com"
                  />
                  <SocialLink
                    icon={<Github />}
                    text="GitHub"
                    href="https://github.com/Yaduuuu"
                  />
                  <SocialLink
                    icon={<Linkedin />}
                    text="LinkedIn"
                    href="https://linkedin.com/in/your-profile"
                  />
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors"
  >
    {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
    <span>{text}</span>
  </a>
);

export default Contact;