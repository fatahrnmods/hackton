import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { estimateMarketPrice } from '../services/gemini';

const PriceEstimator = () => {
  const [productName, setProductName] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEstimate = async () => {
    if (!productName) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await estimateMarketPrice(productName);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Smart Price Estimator</h2>
        <p className="text-tokyo-fg/70">Cek harga wajar pasaran sparepart bekas atau baru menggunakan AI.</p>
      </div>

      <div className="glass p-8 rounded-2xl border border-tokyo-primary/20">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Masukkan nama produk (misal: RTX 3070 Used)"
            className="flex-1 bg-tokyo-bg-dark border border-tokyo-primary/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tokyo-primary focus:ring-1 focus:ring-tokyo-primary"
          />
          <button
            onClick={handleEstimate}
            disabled={loading}
            className="px-6 bg-tokyo-primary text-tokyo-bg font-bold rounded-lg hover:bg-tokyo-secondary transition-colors flex items-center gap-2"
          >
            {loading ? 'Checking...' : <><DollarSign size={20} /> Check</>}
          </button>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center p-6 bg-tokyo-bg-dark rounded-xl border border-tokyo-primary/10">
              <span className="text-sm text-tokyo-fg/60 uppercase font-bold tracking-wider">Estimasi Harga</span>
              <div className="text-4xl font-mono font-bold text-white my-2">
                Rp {result.estimatedPrice.toLocaleString('id-ID')}
              </div>
              <div className={`inline-flex items-center gap-1 text-sm ${result.trend === 'up' ? 'text-tokyo-green' : 'text-tokyo-red'}`}>
                {result.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                Trend {result.trend === 'up' ? 'Naik' : 'Turun'}
              </div>
            </div>

            <div className="space-y-2 text-sm text-tokyo-fg/80 bg-tokyo-primary/5 p-4 rounded-lg">
              <div className="flex justify-between">
                <span>Confidence Level:</span>
                <span className="font-bold text-tokyo-primary">{result.confidence}</span>
              </div>
              <p className="pt-2 border-t border-tokyo-primary/10 italic">
                "{result.marketData}"
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PriceEstimator;
