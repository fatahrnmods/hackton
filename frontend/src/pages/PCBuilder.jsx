import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle, AlertTriangle, PlayCircle } from 'lucide-react';
import { analyzePCBuild } from '../services/gemini';
import ReactMarkdown from 'react-markdown';

const PCBuilder = () => {
  const [build, setBuild] = useState({
    cpu: '',
    motherboard: '',
    gpu: '',
    ram: '',
    psu: ''
  });
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuild({ ...build, [e.target.name]: e.target.value });
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzePCBuild(build);
      setAnalysis(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white">AI PC Builder Assistant</h2>
        <p className="text-tokyo-fg/70">Masukkan komponen pilihanmu, biarkan AI mengecek kompatibilitasnya.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="glass p-6 rounded-2xl border border-tokyo-primary/20 space-y-4">
          <h3 className="text-xl font-bold text-tokyo-secondary mb-4 flex items-center gap-2">
            <Cpu size={20} /> Komponen
          </h3>

          {['cpu', 'motherboard', 'gpu', 'ram', 'psu'].map((part) => (
            <div key={part} className="space-y-1">
              <label className="text-xs uppercase font-bold text-tokyo-fg/60 ml-1">{part}</label>
              <input
                type="text"
                name={part}
                value={build[part]}
                onChange={handleChange}
                placeholder={`Contoh: ${part === 'cpu' ? 'Intel i5 13600K' : part === 'gpu' ? 'RTX 3060' : '...'}`}
                className="w-full bg-tokyo-bg-dark border border-tokyo-primary/20 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-tokyo-primary focus:border-tokyo-primary outline-none transition-all"
              />
            </div>
          ))}

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full mt-4 py-3 bg-gradient-to-r from-tokyo-primary to-tokyo-secondary text-tokyo-bg font-bold rounded-lg hover:shadow-[0_0_20px_rgba(122,162,247,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <span className="animate-pulse">Analyzing...</span> : <><PlayCircle size={20} /> Analisa Rakitan</>}
          </button>
        </div>

        {/* Result Panel */}
        <div className="relative">
          {!analysis && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-tokyo-fg/30 border-2 border-dashed border-tokyo-fg/10 rounded-2xl p-8">
              <Cpu size={64} className="mb-4" />
              <p>Hasil analisis akan muncul di sini.</p>
            </div>
          )}

          {loading && (
            <div className="h-full flex flex-col items-center justify-center text-tokyo-primary">
              <div className="w-16 h-16 border-4 border-tokyo-primary border-t-transparent rounded-full animate-spin mb-4" />
              <p className="animate-pulse">AI sedang berpikir...</p>
            </div>
          )}

          {analysis && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`h-full glass p-6 rounded-2xl border ${
                analysis.status === 'Compatible' ? 'border-tokyo-green' : 'border-tokyo-red'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Hasil Analisis</h3>
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                    analysis.status === 'Compatible' ? 'bg-tokyo-green/20 text-tokyo-green' : 'bg-tokyo-red/20 text-tokyo-red'
                  }`}>
                    {analysis.status === 'Compatible' ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
                    {analysis.status}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{analysis.score}</div>
                  <div className="text-xs text-tokyo-fg/60">Score</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-tokyo-bg-dark/50 p-4 rounded-lg">
                  <p className="text-sm text-white">{analysis.message}</p>
                </div>

                {analysis.issues && analysis.issues.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-tokyo-red uppercase">Issues Found</h4>
                    <ul className="list-disc list-inside text-sm text-tokyo-fg/80 space-y-1">
                      {analysis.issues.map((issue, idx) => (
                        <li key={idx}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {analysis.suggestions && analysis.suggestions.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-tokyo-yellow uppercase">AI Suggestions</h4>
                    <ul className="list-disc list-inside text-sm text-tokyo-fg/80 space-y-1">
                      {analysis.suggestions.map((sug, idx) => (
                        <li key={idx}>{sug}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PCBuilder;
