import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { useState, useRef, Suspense, useEffect, type ReactNode } from 'react';
import {
  Microscope,
  Layers,
  History,
  User,
  ChevronRight,
  GraduationCap,
  Home,
  Heart,
  Box,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text, Float, ContactShadows } from '@react-three/drei';

// --- 3D Skin Model Component ---
function SkinModel() {
  return (
    <group>
      {/* Epidermis */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[4, 0.2, 4]} />
        <meshStandardMaterial color="#fce7d2" />
      </mesh>
      <Text position={[2.5, 1.1, 0]} fontSize={0.2} color="#1a1a1a" anchorX="left">
        Epidermis
      </Text>

      {/* Dermis */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="#f8bbd0" />
      </mesh>
      <Text position={[2.5, 0, 0]} fontSize={0.2} color="#1a1a1a" anchorX="left">
        Dermis
      </Text>

      {/* Hypodermis / Subcutaneous */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[4, 1, 4]} />
        <meshStandardMaterial color="#fff59d" />
      </mesh>
      <Text position={[2.5, -1.5, 0]} fontSize={0.2} color="#1a1a1a" anchorX="left">
        Hypodermis
      </Text>

      {/* Hair Follicle */}
      <mesh position={[-0.5, 0.5, 0.5]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.05, 0.05, 2.5, 16]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
    </group>
  );
}

function WebGLErrorBoundary({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) setHasError(true);
    } catch {
      setHasError(true);
    }
  }, []);

  if (hasError) return <>{fallback}</>;
  return <>{children}</>;
}

function Skin3DFallback() {
  const layers = [
    { name: 'Epidermis', depth: '0.1 - 1.5mm', color: 'bg-[#fce7d2]', border: 'border-[#f5d0a9]' },
    { name: 'Dermis', depth: '1.5 - 4mm', color: 'bg-[#f8bbd0]', border: 'border-[#f48fb1]' },
    { name: 'Hypodermis', depth: '4mm+', color: 'bg-[#fff59d]', border: 'border-[#fff176]' },
  ];

  return (
    <div className="w-full h-[500px] bg-brand-cream/30 rounded-3xl overflow-hidden border border-brand-charcoal/5 flex items-center justify-center p-12">
      <div className="w-full max-w-md space-y-3">
        {layers.map((layer) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            className={`${layer.color} ${layer.border} border-2 rounded-2xl p-6 flex justify-between items-center cursor-default`}
          >
            <span className="font-serif text-lg">{layer.name}</span>
            <span className="text-xs text-brand-charcoal/50 uppercase tracking-widest">{layer.depth}</span>
          </motion.div>
        ))}
        <p className="text-center text-brand-charcoal/30 text-xs mt-6 italic">
          3D view requires a WebGL-capable browser
        </p>
      </div>
    </div>
  );
}

function Skin3DView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Box className="text-brand-gold" size={24} />
        <h3 className="text-2xl font-serif">Interactive 3D Anatomy</h3>
      </div>
      <p className="text-brand-charcoal/60 text-sm mb-8">
        Rotate and zoom to explore the structural layers of the skin. Understanding anatomy is the first step to effective treatment.
      </p>

      <WebGLErrorBoundary fallback={<Skin3DFallback />}>
        <div className="w-full h-[500px] bg-brand-cream/30 rounded-3xl overflow-hidden border border-brand-charcoal/5 relative">
          <Canvas shadows>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={40} />
              <OrbitControls enableDamping dampingFactor={0.05} />

              <ambientLight intensity={0.7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />

              <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <SkinModel />
              </Float>

              <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
            </Suspense>
          </Canvas>

          <div className="absolute bottom-6 right-6 flex flex-col items-end space-y-2 pointer-events-none">
            <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm">
              Drag to Rotate
            </div>
            <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm">
              Scroll to Zoom
            </div>
          </div>
        </div>
      </WebGLErrorBoundary>
    </div>
  );
}

// --- Microscope Component (fixed reactivity) ---
function MicroscopeView() {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const lensX = useSpring(mouseX, springConfig);
  const lensY = useSpring(mouseY, springConfig);

  // Reactive transforms for the background image position
  const bgX = useTransform(lensX, (v) => -v + 128);
  const bgY = useTransform(lensY, (v) => -v + 128);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Microscope className="text-brand-gold" size={24} />
        <h3 className="text-2xl font-serif">The Diagnostic Lens</h3>
      </div>
      <p className="text-brand-charcoal/60 text-sm mb-8">
        Move your cursor over the skin to see the microscopic pathology view. This "Clinicopathologic Correlation" is our specialty.
      </p>

      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-none border border-brand-charcoal/5 shadow-inner"
      >
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200"
          className="w-full h-full object-cover"
          alt="Clinical Skin View"
          crossOrigin="anonymous"
        />

        {isHovering && (
          <motion.div
            style={{
              left: lensX,
              top: lensY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            className="absolute w-64 h-64 rounded-full border-4 border-brand-gold shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden pointer-events-none z-20"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200"
              style={{
                position: 'absolute',
                width: 1200,
                maxWidth: 'none',
                left: bgX,
                top: bgY,
                scale: 1.5,
              }}
              className="object-cover grayscale sepia-[.2]"
              alt="Pathology View"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 border-[12px] border-brand-gold/20 rounded-full" />
          </motion.div>
        )}

        <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">
          Clinical View
        </div>
      </div>
    </div>
  );
}

// --- Depth of Care Component ---
function DepthOfCare() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      name: 'Epidermis',
      depth: '0.1mm - 1.5mm',
      treatments: ['Chemical Peels', 'Topical Retinoids', 'Laser Resurfacing'],
      color: 'bg-orange-100',
      border: 'border-orange-200',
    },
    {
      name: 'Dermis',
      depth: '1.5mm - 4mm',
      treatments: ['Botox/Dysport', 'Microneedling', 'PRP Therapy'],
      color: 'bg-rose-100',
      border: 'border-rose-200',
    },
    {
      name: 'Subcutaneous',
      depth: '4mm+',
      treatments: ['Dermal Fillers', 'Kybella', 'Surgical Excision'],
      color: 'bg-amber-100',
      border: 'border-amber-200',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Layers className="text-brand-gold" size={24} />
        <h3 className="text-2xl font-serif">Depth of Care</h3>
      </div>
      <p className="text-brand-charcoal/60 text-sm mb-8">
        Understanding where treatments take effect. Hover over the skin layers to see targeted procedures.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-2">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              onMouseEnter={() => setActiveLayer(i)}
              className={`relative p-8 rounded-2xl border-2 transition-all cursor-pointer ${
                activeLayer === i ? `${layer.color} ${layer.border} scale-[1.02]` : 'bg-white border-brand-charcoal/5'
              }`}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-serif text-xl">{layer.name}</h4>
                <span className="text-[10px] uppercase tracking-widest opacity-40">{layer.depth}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-cream p-8 rounded-[2rem] min-h-[300px] flex flex-col justify-center border border-brand-charcoal/5">
          {activeLayer !== null ? (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key={activeLayer}>
              <h5 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-6">Targeted Treatments</h5>
              <ul className="space-y-4">
                {layers[activeLayer].treatments.map((t) => (
                  <li key={t} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="text-lg font-serif">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <div className="text-center text-brand-charcoal/30 italic">Hover a skin layer to explore treatments</div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Generation Timeline ---
function GenerationTimeline() {
  const timeline = [
    { year: '1983', title: 'The Foundation', desc: 'Dr. Fred Novice completes residency at Henry Ford Hospital.', icon: GraduationCap },
    { year: '1999', title: 'Practice Opens', desc: 'Novice Group Dermatology established in Bloomfield Hills.', icon: Home },
    { year: '2015', title: 'Second Generation', desc: 'Dr. Karlee Novice joins as Chief Resident at Henry Ford.', icon: User },
    { year: '2023', title: 'The Trio Complete', desc: 'Dr. Taylor Novice joins with dual MD/MBA expertise.', icon: Heart },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <History className="text-brand-gold" size={24} />
        <h3 className="text-2xl font-serif">Generational Legacy</h3>
      </div>

      <div className="relative pt-12 pb-20">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-brand-charcoal/10 -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-block bg-brand-cream border border-brand-charcoal/10 p-4 rounded-2xl mb-6 group-hover:bg-brand-charcoal group-hover:text-white transition-all duration-500">
                <span className="text-xl font-serif font-bold">{item.year}</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-brand-gold mx-auto mb-6 border-4 border-brand-cream shadow-sm" />
              <h4 className="font-serif text-lg mb-2">{item.title}</h4>
              <p className="text-xs text-brand-charcoal/50 leading-relaxed px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Cosmetic Canvas ---
function CosmeticCanvas() {
  const [selected, setSelected] = useState<string | null>(null);

  const hotspots = [
    { id: 'temples', top: '25%', left: '42%', title: 'Temple Volumization', desc: 'Restoring youthful contours with advanced fillers.' },
    { id: 'eyes', top: '32%', left: '50%', title: 'Periorbital Rejuvenation', desc: 'Precision Botox for a rested, natural appearance.' },
    { id: 'jaw', top: '65%', left: '42%', title: 'Jawline Definition', desc: 'Sculpting and tightening for a refined profile.' },
    { id: 'lips', top: '58%', left: '50%', title: 'Lip Enhancement', desc: 'Subtle, generational beauty focused on symmetry.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <User className="text-brand-gold" size={24} />
        <h3 className="text-2xl font-serif">The Cosmetic Canvas</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] bg-brand-cream rounded-[3rem] overflow-hidden border border-brand-charcoal/5">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
            className="w-full h-full object-cover opacity-60 grayscale"
            alt="Facial Map"
            crossOrigin="anonymous"
          />

          {hotspots.map((spot) => (
            <motion.button
              key={spot.id}
              onClick={() => setSelected(spot.id)}
              style={{ top: spot.top, left: spot.left }}
              whileHover={{ scale: 1.2 }}
              className={`absolute w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selected === spot.id ? 'bg-brand-gold border-brand-gold' : 'bg-white/50 border-brand-gold/50'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${selected === spot.id ? 'bg-white' : 'bg-brand-gold'}`} />
            </motion.button>
          ))}
        </div>

        <div className="space-y-8">
          <p className="text-brand-charcoal/60 text-sm">
            Click on the markers to explore our specialized approach to aesthetic harmony.
          </p>

          <div className="min-h-[200px]">
            {selected ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={selected}
                className="p-8 rounded-3xl bg-white border border-brand-charcoal/5 shadow-sm"
              >
                <h4 className="text-2xl font-serif mb-4">{hotspots.find((s) => s.id === selected)?.title}</h4>
                <p className="text-brand-charcoal/60 leading-relaxed">
                  {hotspots.find((s) => s.id === selected)?.desc}
                </p>
                <button className="mt-6 text-brand-gold uppercase tracking-widest text-[10px] font-bold flex items-center space-x-2">
                  <span>View Procedure Details</span>
                  <ChevronRight size={14} />
                </button>
              </motion.div>
            ) : (
              <div className="p-12 border-2 border-dashed border-brand-charcoal/10 rounded-3xl flex items-center justify-center text-brand-charcoal/20 italic">
                Select a feature to begin
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Cosmetic Carousel ---
function CosmeticCarousel() {
  const [index, setIndex] = useState(0);
  const carouselServices = [
    {
      title: 'Botox & Dysport',
      description: 'Precision injections to smooth fine lines and prevent wrinkles while maintaining natural expression.',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Dermal Fillers',
      description: 'Restoring lost volume and enhancing facial contours for a youthful, lifted appearance.',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Laser Resurfacing',
      description: 'Advanced laser technology to improve skin texture, reduce pigmentation, and stimulate collagen.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Chemical Peels',
      description: 'Medical-grade peels tailored to your skin type to reveal a brighter, smoother complexion.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Microneedling',
      description: "Minimally invasive treatment that triggers the body's natural healing process for firmer skin.",
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const next = () => setIndex((prev) => (prev + 1) % carouselServices.length);
  const prev = () => setIndex((prev) => (prev - 1 + carouselServices.length) % carouselServices.length);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Sparkles className="text-brand-gold" size={24} />
          <h3 className="text-2xl font-serif">Aesthetic Offerings</h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-brand-charcoal/10 hover:bg-brand-charcoal hover:text-white transition-all"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full border border-brand-charcoal/10 hover:bg-brand-charcoal hover:text-white transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative h-[450px] overflow-hidden rounded-[2.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="relative h-full overflow-hidden">
              <img
                src={carouselServices[index].image}
                alt={carouselServices[index].title}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center bg-brand-cream/30 backdrop-blur-sm">
              <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
                Featured Treatment
              </span>
              <h4 className="text-3xl md:text-4xl font-serif mb-6">{carouselServices[index].title}</h4>
              <p className="text-brand-charcoal/60 text-lg leading-relaxed mb-10">
                {carouselServices[index].description}
              </p>
              <button className="group flex items-center space-x-4 text-brand-charcoal uppercase tracking-widest text-xs font-bold">
                <span>Explore Treatment</span>
                <div className="w-12 h-[1px] bg-brand-charcoal/20 group-hover:w-20 group-hover:bg-brand-gold transition-all" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center space-x-2">
        {carouselServices.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              index === i ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-charcoal/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// --- Main Showcase Component ---
export function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Microscope', icon: Microscope },
    { name: 'Skin Layers', icon: Layers },
    { name: '3D Anatomy', icon: Box },
    { name: 'Aesthetics', icon: Sparkles },
    { name: 'Legacy', icon: History },
    { name: 'Cosmetic', icon: User },
  ];

  return (
    <section className="py-24 bg-brand-cream/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Interactive Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Explore our World-Class Practice</h2>
        </div>

        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-brand-charcoal/5">
          <div className="flex flex-wrap border-b border-brand-charcoal/5">
            {tabs.map((tab, i) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(i)}
                className={`flex-1 flex items-center justify-center space-x-3 py-8 px-6 transition-all ${
                  activeTab === i ? 'bg-brand-charcoal text-white' : 'hover:bg-brand-cream text-brand-charcoal/60'
                }`}
              >
                <tab.icon size={20} />
                <span className="text-xs uppercase tracking-widest font-bold hidden sm:inline">{tab.name}</span>
              </button>
            ))}
          </div>

          <div className="p-10 md:p-20">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {activeTab === 0 && <MicroscopeView />}
              {activeTab === 1 && <DepthOfCare />}
              {activeTab === 2 && <Skin3DView />}
              {activeTab === 3 && <CosmeticCarousel />}
              {activeTab === 4 && <GenerationTimeline />}
              {activeTab === 5 && <CosmeticCanvas />}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
