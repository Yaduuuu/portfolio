import React from 'react';
import Scene3D from '../components/Scene3D';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      <div className="relative z-10 pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500">Yadnesh</span> 👋
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full-Stack Developer | AI & ML Enthusiast | Problem Solver
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <SocialLink href="https://github.com/Yaduuuu" icon={<Github />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/yadnesh-ingale" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="yadneshingale97@gmail.com" icon={<Mail />} label="Email" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-6 rounded-lg"
            >
              <p className="text-lg leading-relaxed">
                I'm passionate about building scalable applications and solving complex problems.
                With expertise in both frontend and backend development, I create efficient,
                user-friendly solutions that make a difference.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform hover:scale-110 transition-transform duration-200"
    aria-label={label}
  >
    <div className="bg-gray-800 p-3 rounded-full">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-blue-500' })}
    </div>
  </a>
);

export default Home;