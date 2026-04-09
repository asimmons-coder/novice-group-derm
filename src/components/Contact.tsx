import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Visit Our Practice
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-12">
              We look forward to <br />
              <span className="italic font-normal text-brand-gold/70">seeing you.</span>
            </h2>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-2">Location</h4>
                  <p className="text-lg">
                    4120 West Maple Road, Suite 206
                    <br />
                    Bloomfield Hills, MI 48301
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-2">Phone</h4>
                  <p className="text-lg">(248) 932-3376</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-2">Email</h4>
                  <p className="text-lg">Skin@novicegroupderm.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-white/40 uppercase tracking-widest text-[10px] font-bold mb-2">Hours</h4>
                  <p className="text-lg">
                    Monday &ndash; Friday
                    <br />
                    8:30 AM &ndash; 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10"
          >
            <h3 className="text-2xl font-serif mb-8">Request an Appointment</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Service Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                  <option className="bg-brand-charcoal">Medical Dermatology</option>
                  <option className="bg-brand-charcoal">Cosmetic Procedures</option>
                  <option className="bg-brand-charcoal">Surgical Consultation</option>
                  <option className="bg-brand-charcoal">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-brand-gold text-brand-charcoal py-5 rounded-xl uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all shadow-lg">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
