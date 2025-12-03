import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-20 py-10">

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tokyo-primary via-tokyo-secondary to-tokyo-accent">
              Future Tech
            </span>
            <br />
            <span className="text-white">For Gamers.</span>
          </h1>
          <p className="text-lg text-tokyo-fg/80 max-w-lg">
            Marketplace sparepart komputer terlengkap dengan asisten AI.
            Rakit PC impianmu dengan analisis kompatibilitas otomatis.
          </p>
          <div className="flex gap-4 pt-4">
            <Link to="/marketplace">
              <button className="px-8 py-3 bg-tokyo-primary text-tokyo-bg font-bold rounded-lg hover:bg-tokyo-secondary hover:shadow-[0_0_20px_rgba(187,154,247,0.4)] transition-all flex items-center gap-2">
                Belanja Sekarang <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/builder">
              <button className="px-8 py-3 border border-tokyo-primary/50 text-tokyo-primary font-bold rounded-lg hover:bg-tokyo-primary/10 transition-all">
                Rakit PC AI
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          {/* Abstract Cyberpunk Graphic */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-tokyo-primary to-tokyo-secondary rounded-full blur-[80px] opacity-40 animate-pulse" />
            <div className="relative z-10 bg-tokyo-bg-dark border border-tokyo-primary/30 p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="space-y-4">
                  <div className="h-40 bg-tokyo-dark rounded-lg flex items-center justify-center border border-tokyo-primary/10">
                    <Cpu size={64} className="text-tokyo-accent" />
                  </div>
                  <div className="h-4 w-2/3 bg-tokyo-dark rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-tokyo-dark rounded animate-pulse" />
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-tokyo-secondary font-mono text-xl">RTX 4090 Ti</span>
                    <span className="text-tokyo-green font-bold">In Stock</span>
                  </div>
               </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-4 bg-tokyo-dark p-4 rounded-xl border border-tokyo-accent/30 shadow-lg z-20"
            >
              <Zap className="text-tokyo-yellow mb-2" />
              <div className="text-xs text-tokyo-fg">Performance</div>
              <div className="font-bold text-tokyo-accent">+240%</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "AI Assistant", desc: "Chatbot pintar yang siap membantu memilih part.", icon: <Cpu /> },
          { title: "Smart Builder", desc: "Cek kompatibilitas otomatis sebelum membeli.", icon: <ShieldCheck /> },
          { title: "Market Data", desc: "Estimasi harga terbaik berdasarkan data pasar.", icon: <Zap /> },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="p-6 glass rounded-xl border border-tokyo-primary/10 hover:border-tokyo-primary/40 transition-colors"
          >
            <div className="w-12 h-12 bg-tokyo-primary/10 rounded-lg flex items-center justify-center text-tokyo-primary mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-tokyo-fg/70">{feature.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;
