import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/boon-public-assets/Screenshot%202026-04-08%20at%204.31.33%E2%80%AFPM.png"
          alt="Novice Group Dermatology Team"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-brand-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
              Est. 1999 &bull; Bloomfield Hills, MI
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 tracking-tight">
              Love your skin &mdash; <br />
              <span className="italic font-normal text-brand-taupe">from generation</span> <br />
              to generation.
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 mb-10 leading-relaxed max-w-lg">
              A private, family-owned practice led by a father-daughter trio of board-certified dermatologists. Providing world-class medical, surgical, and cosmetic care for over 25 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-charcoal text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest font-semibold flex items-center justify-center space-x-3 shadow-xl hover:bg-brand-taupe transition-all"
              >
                <span>Schedule a Visit</span>
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-brand-charcoal/20 px-10 py-5 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-brand-charcoal hover:text-white transition-all"
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-10%] top-[20%] hidden lg:block w-96 h-96 rounded-full border border-brand-gold/20 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[5%] bottom-[10%] hidden lg:block w-64 h-64 rounded-full border border-brand-taupe/20 pointer-events-none"
      />
    </section>
  );
}
