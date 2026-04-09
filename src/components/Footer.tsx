export function Footer() {
  return (
    <footer className="bg-brand-cream py-20 border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-xl font-serif tracking-widest uppercase font-semibold">
                Novice Group
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 -mt-1">
                Dermatology
              </span>
            </div>
            <p className="text-brand-charcoal/50 text-sm leading-relaxed mb-8">
              A family-built practice providing world-class dermatological care in Bloomfield Hills for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-brand-charcoal/10 flex items-center justify-center hover:bg-brand-charcoal hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-brand-charcoal/10 flex items-center justify-center hover:bg-brand-charcoal hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-brand-charcoal/10 flex items-center justify-center hover:bg-brand-charcoal hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-charcoal/70">
              <li>
                <a href="#story" className="hover:text-brand-gold transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#pathology" className="hover:text-brand-gold transition-colors">Dermatopathology</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
              </li>
              <li>
                <a href="#shop" className="hover:text-brand-gold transition-colors">Skin Shop</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Services</h4>
            <ul className="space-y-4 text-sm text-brand-charcoal/70">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">Medical Dermatology</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">Cosmetic Procedures</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">Surgical Dermatology</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">Pediatric Dermatology</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">Skin Cancer Screening</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Newsletter</h4>
            <p className="text-brand-charcoal/50 text-sm mb-6">Stay updated with skin care tips and practice news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white border border-brand-charcoal/10 px-4 py-3 rounded-l-xl text-sm w-full focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-charcoal text-white px-6 py-3 rounded-r-xl text-xs uppercase tracking-widest font-bold hover:bg-brand-taupe transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">
          <p>&copy; 2026 Novice Group Dermatology. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
