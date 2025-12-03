import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, ShoppingBag, BarChart3, Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingBag size={18} /> },
    { name: 'Rakit PC AI', path: '/builder', icon: <Bot size={18} /> },
    { name: 'Cek Harga', path: '/pricing', icon: <BarChart3 size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 glass border-b border-tokyo-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-tokyo-primary font-bold text-xl tracking-wider">
            <Cpu className="animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tokyo-primary to-tokyo-secondary">
              NEO-PARTS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-tokyo-bg bg-tokyo-primary shadow-[0_0_15px_rgba(122,162,247,0.5)]'
                      : 'text-tokyo-fg hover:text-tokyo-primary hover:bg-tokyo-dark'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-tokyo-fg hover:text-white hover:bg-tokyo-dark focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 text-tokyo-fg hover:text-tokyo-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
