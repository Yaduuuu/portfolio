import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Github as Git } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer and AI enthusiast who loves solving real-world
              problems through technology. With experience in backend development, frontend frameworks,
              and machine learning, I focus on creating scalable, efficient, and user-friendly applications.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6">What Drives Me</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              icon={<Code />}
              title="Building Scalable Applications"
              description="I enjoy optimizing code for performance and efficiency, ensuring applications can handle growth."
            />
            <SkillCard
              icon={<Brain />}
              title="Problem Solving"
              description="From database design to AI-powered predictions, I love tackling complex challenges."
            />
            <SkillCard
              icon={<Database />}
              title="Continuous Learning"
              description="I stay updated with the latest technologies and best practices in software development."
            />
            <SkillCard
              icon={<Git />}
              title="Collaboration & Open Source"
              description="I believe in knowledge-sharing and contributing to the developer community."
            />
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6">Tech Stack</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React", "Flask", "Spring Boot", "Django",
              "MySQL", "MongoDB", "PostgreSQL",
              "TensorFlow", "Scikit-learn", "Docker", "Git"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-600 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 rounded-lg p-6"
  >
    <div className="text-blue-500 mb-4">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
    </div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default About;