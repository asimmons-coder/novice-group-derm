import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Advanced Recovery Serum',
    brand: 'Novice Selection',
    price: '$85',
    image: 'https://storage.googleapis.com/boon-public-assets/Screenshot%202026-04-08%20at%204.32.31%E2%80%AFPM.png',
    tag: 'Bestseller',
  },
  {
    name: 'Mineral Sunscreen SPF 50',
    brand: 'EltaMD',
    price: '$38',
    image: 'https://storage.googleapis.com/boon-public-assets/Screenshot%202026-04-08%20at%204.32.39%E2%80%AFPM.png',
    tag: 'Derm-Favorite',
  },
  {
    name: 'Retinol Rejuvenation',
    brand: 'SkinBetter Science',
    price: '$120',
    image: 'https://storage.googleapis.com/boon-public-assets/Screenshot%202026-04-08%20at%204.32.44%E2%80%AFPM.png',
    tag: 'New',
  },
];

export function SkinShop() {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              The Skin Shop
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Dermatologist-curated <br />
              <span className="italic font-normal text-brand-taupe">skincare essentials.</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center space-x-3 text-brand-charcoal uppercase tracking-widest text-xs font-bold border-b border-brand-charcoal/20 pb-2"
          >
            <span>Visit Full Shop</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-cream mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/10 transition-colors duration-500 flex items-center justify-center">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white text-brand-charcoal w-14 h-14 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingBag size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-1">
                  {product.brand}
                </p>
                <h4 className="text-xl font-serif mb-2">{product.name}</h4>
                <p className="text-brand-charcoal/40 font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
