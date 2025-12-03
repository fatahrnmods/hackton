import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Filter } from 'lucide-react';

const products = [
  { id: 1, name: 'GeForce RTX 4090', price: 'Rp 28.500.000', category: 'GPU', image: 'gpu' },
  { id: 2, name: 'Intel Core i9-13900K', price: 'Rp 9.200.000', category: 'CPU', image: 'cpu' },
  { id: 3, name: 'Corsair Vengeance 32GB', price: 'Rp 1.800.000', category: 'RAM', image: 'ram' },
  { id: 4, name: 'Samsung 990 Pro 2TB', price: 'Rp 2.500.000', category: 'Storage', image: 'ssd' },
  { id: 5, name: 'ASUS ROG Maximus Z790', price: 'Rp 11.000.000', category: 'Motherboard', image: 'mobo' },
  { id: 6, name: 'Lian Li O11 Dynamic', price: 'Rp 2.100.000', category: 'Case', image: 'case' },
];

const Marketplace = () => {
  return (
    <div className="py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Marketplace</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-tokyo-dark border border-tokyo-primary/30 rounded-lg hover:bg-tokyo-primary/10">
          <Filter size={18} /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(122, 162, 247, 0.3)' }}
            className="glass rounded-xl overflow-hidden border border-tokyo-primary/10 flex flex-col"
          >
            <div className="h-48 bg-tokyo-dark flex items-center justify-center relative group">
              <span className="text-tokyo-fg/20 font-mono text-4xl font-bold group-hover:text-tokyo-primary/50 transition-colors">
                {product.category}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-tokyo-bg to-transparent opacity-60" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-tokyo-secondary bg-tokyo-secondary/10 px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
              <p className="text-tokyo-primary font-mono text-xl mb-4">{product.price}</p>

              <button className="mt-auto w-full py-2 bg-tokyo-primary/10 border border-tokyo-primary/50 text-tokyo-primary rounded-lg hover:bg-tokyo-primary hover:text-tokyo-bg transition-all font-bold flex items-center justify-center gap-2">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
