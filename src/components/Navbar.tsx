import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, User, FolderKanban, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Yadnesh</span>
          </Link>
          <div className="flex items-center space-x-8">
            <NavLink to="/" icon={<Code2 className="w-5 h-5" />} text="Home" isActive={isActive('/')} />
            <NavLink to="/about" icon={<User className="w-5 h-5" />} text="About" isActive={isActive('/about')} />
            <NavLink to="/projects" icon={<FolderKanban className="w-5 h-5" />} text="Projects" isActive={isActive('/projects')} />
            <NavLink to="/contact" icon={<Mail className="w-5 h-5" />} text="Contact" isActive={isActive('/contact')} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text, isActive }: { to: string; icon: React.ReactNode; text: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-1 transition-colors duration-200 hover:text-blue-400 ${
      isActive ? 'text-blue-500' : 'text-gray-300'
    }`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;