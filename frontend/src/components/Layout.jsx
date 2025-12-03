import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GeminiChatbot from './GeminiChatbot';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-tokyo-bg text-tokyo-fg selection:bg-tokyo-primary selection:text-tokyo-bg">
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-tokyo-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-tokyo-secondary/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="flex-grow pt-20 px-4 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <GeminiChatbot />
      <Footer />
    </div>
  );
};

export default Layout;
