import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tokyo-bg-dark border-t border-tokyo-primary/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-tokyo-fg/60">
        <p>&copy; {new Date().getFullYear()} NEO-PARTS. Powered by Gemini AI.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-tokyo-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-tokyo-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-tokyo-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
