import { motion } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'Dermatopathology', href: '#pathology' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-cream/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-xl md:text-2xl font-serif tracking-widest uppercase font-semibold">
            Novice Group
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-70 -mt-1">
            Dermatology
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors font-medium"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#shop"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 bg-brand-charcoal text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-brand-taupe transition-all"
          >
            <ShoppingBag size={14} />
            <span>Skin Shop</span>
          </motion.a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-charcoal/10 p-8 flex flex-col space-y-6 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#shop"
            className="bg-brand-charcoal text-white px-6 py-4 rounded-xl text-center uppercase tracking-widest text-sm"
          >
            Skin Shop
          </a>
        </motion.div>
      )}
    </nav>
  );
}
