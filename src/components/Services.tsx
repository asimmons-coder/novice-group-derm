import { motion } from 'motion/react';
import { Shield, Sparkles, Scissors, Microscope } from 'lucide-react';

const services = [
  {
    title: 'Medical Dermatology',
    description: 'Comprehensive care for acne, eczema, psoriasis, and pediatric skin conditions. Expert skin cancer screenings.',
    icon: Shield,
    color: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    title: 'Cosmetic & Aesthetic',
    description: 'World-class injection expertise with Botox and fillers. Advanced laser treatments and skin rejuvenation.',
    icon: Sparkles,
    color: 'bg-amber-50',
    accent: 'text-amber-600',
  },
  {
    title: 'Surgical Dermatology',
    description: 'Precision skin cancer surgeries, Mohs coordination, and benign tumor excisions with minimal scarring.',
    icon: Scissors,
    color: 'bg-rose-50',
    accent: 'text-rose-600',
  },
  {
    title: 'Dermatopathology',
    description: 'Rare in-house microscopic tissue diagnosis by dual board-certified experts for the highest diagnostic accuracy.',
    icon: Microscope,
    color: 'bg-emerald-50',
    accent: 'text-emerald-600',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Comprehensive clinical care <br />
              <span className="italic font-normal text-brand-taupe">tailored to your skin.</span>
            </h2>
          </div>
          <p className="text-brand-charcoal/60 max-w-sm mb-2">
            From routine screenings to complex surgical procedures and aesthetic enhancements, our family provides a full spectrum of dermatological excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl border border-brand-charcoal/5 hover:border-brand-gold/30 transition-all duration-500 bg-brand-cream/30"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                <service.icon className={service.accent} size={28} />
              </div>
              <h3 className="text-xl font-serif mb-4 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <a
                href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
              >
                <span>Learn More</span>
                <div className="w-8 h-[1px] bg-brand-charcoal/20 group-hover:bg-brand-gold transition-colors" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
