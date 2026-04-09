import { motion } from 'motion/react';

const doctors = [
  {
    name: 'Dr. Fred M. Novice, MD',
    role: 'Founder & Board-Certified Dermatologist',
    bio: "42+ years of experience. Dual board-certified in dermatology and dermatopathology. Metro Detroit's Best Dermatologist for 10 consecutive years.",
    image: 'https://storage.googleapis.com/boon-public-assets/Screenshot%202026-04-08%20at%204.31.58%E2%80%AFPM.png',
    stats: ['42+ Years Exp.', 'Dermatopathologist', 'Expert Injector'],
  },
  {
    name: 'Dr. Karlee D. Novice, MD',
    role: 'Board-Certified Dermatologist',
    bio: 'Chief Resident at Henry Ford Hospital. Published researcher in drug-induced phototoxicity and skin cancer education.',
    image: 'https://storage.googleapis.com/boon-public-assets/Screenshot%202026-04-08%20at%204.32.11%E2%80%AFPM.png',
    stats: ['11+ Years Exp.', 'Chief Resident', 'AAD Fellow'],
  },
  {
    name: 'Dr. Taylor Novice, MD, MBA',
    role: 'Board-Certified Dermatologist',
    bio: 'Summa Cum Laude from Duke, MD from U of M, MBA from Ross. Academic Chief Resident and Outstanding Resident Award recipient.',
    image: 'https://storage.googleapis.com/boon-public-assets/Screenshot%202026-04-08%20at%204.32.18%E2%80%AFPM.png',
    stats: ['Dermatopathologist', 'MBA Healthcare', 'Top Resident'],
  },
];

export function Family() {
  return (
    <section id="story" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            A Generational Legacy
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Meet the Novice Physicians
          </h2>
          <p className="text-brand-charcoal/60 max-w-2xl mx-auto text-lg">
            A father and his two daughters, all board-certified dermatologists trained at Henry Ford Hospital's prestigious program, working together to care for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative mb-8 overflow-hidden rounded-[2rem] aspect-[3/4] shadow-2xl">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex flex-wrap gap-2">
                    {doc.stats.map((stat) => (
                      <span
                        key={stat}
                        className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif mb-2 group-hover:text-brand-gold transition-colors">
                {doc.name}
              </h3>
              <p className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-4">
                {doc.role}
              </p>
              <p className="text-brand-charcoal/60 text-sm leading-relaxed">{doc.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[3rem] bg-brand-charcoal text-white flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-serif mb-6">
              Independent. Family-Owned. <br />
              <span className="italic text-brand-gold">Patient-First.</span>
            </h3>
            <p className="text-white/60 leading-relaxed">
              In an era of rapid private equity consolidation, Novice Group Dermatology remains fully independent. Our decisions are driven by clinical excellence and patient outcomes, not corporate bottom lines.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif text-brand-gold mb-2">25+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Years in Bloomfield</div>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-serif text-brand-gold mb-2">3</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Board-Certified MDs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
