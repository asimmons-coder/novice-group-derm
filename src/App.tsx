import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Family } from './components/Family';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { SkinShop } from './components/SkinShop';
import { Dermatopathology } from './components/Dermatopathology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Family />
        <InteractiveShowcase />
        <SkinShop />
        <Dermatopathology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
