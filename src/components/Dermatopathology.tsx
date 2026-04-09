import { motion } from 'motion/react';
import { CheckCircle2, Search } from 'lucide-react';

export function Dermatopathology() {
  return (
    <section id="pathology" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
              <img
                src="https://storage.googleapis.com/boon-public-assets/Screenshot%202026-04-08%20at%204.32.23%E2%80%AFPM.png"
                alt="Dermatopathology Lab"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-taupe/10 rounded-full blur-3xl" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 right-[-5%] bg-white p-6 rounded-2xl shadow-xl border border-brand-charcoal/5 max-w-[200px]"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="text-emerald-600" size={16} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold">In-House Lab</span>
              </div>
              <p className="text-[11px] text-brand-charcoal/60 leading-tight">
                Direct clinical correlation for the highest diagnostic accuracy.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              The Diagnostic Edge
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Rare In-House <br />
              <span className="italic font-normal text-brand-taupe">Dermatopathology.</span>
            </h2>
            <p className="text-brand-charcoal/70 text-lg mb-10 leading-relaxed">
              Unlike most private practices, we perform microscopic tissue diagnosis internally. Both Dr. Fred and Dr. Taylor Novice are fellowship-trained dermatopathologists, allowing us to correlate clinical findings directly with pathology results.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Clinicopathologic Correlation', desc: 'The gold standard for diagnostic accuracy in skin diseases.' },
                { title: 'Faster Results', desc: 'Internal processing means quicker turnaround times for your peace of mind.' },
                { title: 'Expert Interpretation', desc: 'Your biopsy is reviewed by the same physicians who treat you.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="mt-1 w-5 h-5 rounded-full border border-brand-gold flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">{item.title}</h4>
                    <p className="text-brand-charcoal/50 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center space-x-4 text-brand-gold uppercase tracking-widest text-xs font-bold"
            >
              <span>Learn about our lab</span>
              <Search size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
