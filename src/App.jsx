import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'

// SafeIcon component - maps icon names to Lucide components
const SafeIcon = ({ name, size = 24, className = '' }) => {
  const iconMap = {
    'plus': Icons.Plus,
    'arrow-down-right': Icons.ArrowDownRight,
    'menu': Icons.Menu,
    'x': Icons.X,
    'arrow-right': Icons.ArrowRight,
    'arrow-up-right': Icons.ArrowUpRight,
    'mail': Icons.Mail,
    'map-pin': Icons.MapPin,
    'phone': Icons.Phone,
    'instagram': Icons.Instagram,
    'twitter': Icons.Twitter,
    'linkedin': Icons.Linkedin,
  }
  
  const IconComponent = iconMap[name] || Icons.Circle
  return <IconComponent size={size} className={className} />
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

function App() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const philosophyRef = useRef(null)
  const footerRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" })
  const footerInView = useInView(footerRef, { once: true, margin: "-50px" })

  const projects = [
    { id: '01', title: 'THE VOID HOUSE', location: 'Tokyo, Japan', year: '2024', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
    { id: '02', title: 'SILENT TOWER', location: 'Berlin, Germany', year: '2023', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80' },
    { id: '03', title: 'RAW CONCRETE MUSEUM', location: 'Mexico City', year: '2023', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
    { id: '04', title: 'BRUTALIST RESIDENCE', location: 'London, UK', year: '2022', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80' },
    { id: '05', title: 'THE OBSERVATORY', location: 'Reykjavik, Iceland', year: '2022', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-zinc-900 selection:text-stone-50">
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-zinc-300">
        <nav className="container mx-auto max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-black tracking-brutal text-zinc-900 uppercase">
            MONOLITH
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('projects')} className="text-sm font-semibold text-zinc-900 uppercase tracking-wider hover:text-zinc-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('philosophy')} className="text-sm font-semibold text-zinc-900 uppercase tracking-wider hover:text-zinc-600 transition-colors">
              Philosophy
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold text-zinc-900 uppercase tracking-wider hover:text-zinc-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-900"
          >
            <SafeIcon name={mobileMenuOpen ? 'x' : 'menu'} size={28} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-stone-50 border-b border-zinc-300 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-lg font-semibold text-zinc-900 uppercase tracking-wider py-2">
                  Projects
                </button>
                <button onClick={() => scrollToSection('philosophy')} className="block w-full text-left text-lg font-semibold text-zinc-900 uppercase tracking-wider py-2">
                  Philosophy
                </button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-lg font-semibold text-zinc-900 uppercase tracking-wider py-2">
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section ref={heroRef} className="min-h-screen bg-stone-50 pt-20 flex items-center">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-7"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="mb-6">
                <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest border-b border-zinc-300 pb-1">
                  Architecture Studio
                </span>
              </div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-zinc-900 uppercase tracking-brutal leading-none mb-8">
                FORM<br />
                FOLLOWS<br />
                FICTION
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 max-w-lg leading-relaxed mb-10 font-light">
                Radical structures for the post-digital era. We design spaces that challenge perception.
              </p>
              <button 
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-4 bg-zinc-900 text-stone-50 px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all"
              >
                Explore
                <span className="inline-flex items-center justify-center w-8 h-8 border border-stone-50/30 group-hover:border-stone-50 transition-colors">
                  <SafeIcon name="plus" size={20} />
                </span>
              </button>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 60 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                  alt="Brutalist Architecture"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-zinc-900/10" />
              </div>
              {/* Technical overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-zinc-900 text-stone-50 p-4 flex justify-between items-center text-xs uppercase tracking-widest">
                <span>REF: 2024-001</span>
                <span>48.8566° N, 2.3522° E</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT INDEX SECTION */}
      <section id="projects" ref={projectsRef} className="min-h-screen bg-stone-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <motion.div 
            className="mb-16 md:mb-24"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest border-b border-zinc-300 pb-1">
              Selected Works
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-brutal mt-6">
              PROJECT<br />INDEX
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="relative border-b border-zinc-300 group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="py-8 md:py-12 flex items-center justify-between transition-all duration-500 group-hover:pl-4 md:group-hover:pl-8">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-sm md:text-base font-mono text-zinc-400">
                      {project.id}.
                    </span>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-zinc-900 uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 md:gap-12">
                    <span className="hidden md:block text-sm text-zinc-500 uppercase tracking-wider">
                      {project.location}
                    </span>
                    <span className="text-sm text-zinc-400 font-mono">
                      {project.year}
                    </span>
                    <div className="w-8 h-8 md:w-10 md:h-10 border border-zinc-300 flex items-center justify-center transition-all group-hover:bg-zinc-900 group-hover:border-zinc-900">
                      <SafeIcon 
                        name="arrow-up-right" 
                        size={16} 
                        className="text-zinc-900 group-hover:text-stone-50 transition-colors" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Hover Preview Image */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="hidden lg:block absolute right-48 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                    >
                      <div className="w-80 h-48 overflow-hidden border border-zinc-300 shadow-2xl grayscale">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 flex justify-end"
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="group flex items-center gap-4 text-zinc-900 font-bold uppercase tracking-wider hover:text-zinc-600 transition-colors">
              View All Projects
              <span className="w-10 h-10 border border-zinc-300 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all">
                <SafeIcon name="arrow-right" size={18} className="group-hover:text-stone-50" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" ref={philosophyRef} className="min-h-screen bg-zinc-950 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Column - Title */}
            <motion.div 
              className="lg:col-span-4"
              initial="hidden"
              animate={philosophyInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1">
                About
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-200 uppercase tracking-brutal mt-6 leading-none">
                OUR<br />MANI<br />FESTO
              </h2>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div 
              className="lg:col-span-8 flex flex-col justify-center"
              initial="hidden"
              animate={philosophyInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-8">
                <p className="text-xl md:text-2xl text-stone-200 leading-relaxed font-light">
                  We reject the ornament. We embrace the raw. In an age of digital excess, we return to the fundamental truth of materials—concrete, steel, glass—expressed with unwavering honesty.
                </p>
                <p className="text-lg text-stone-400 leading-relaxed">
                  Our practice is rooted in the belief that architecture must confront its context, not coddle it. Every structure we conceive is a dialogue between mass and void, permanence and ephemerality. We do not build for the present; we build for the geological time scale.
                </p>
                <p className="text-lg text-stone-400 leading-relaxed">
                  Sustainability is not an add-on. It is embedded in our DNA—through the selection of local materials, the optimization of passive climate control, and the design of spaces that endure beyond trends. A building that lasts two centuries is inherently sustainable.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-zinc-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-black text-stone-200">47</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-stone-200">12</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mt-1">Awards</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-stone-200">08</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mt-1">Countries</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-stone-200">18</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mt-1">Years</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" ref={footerRef} className="bg-stone-50 border-t border-zinc-300">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
          {/* Large Email Link */}
          <motion.div 
            className="mb-16 md:mb-24"
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <a 
              href="mailto:hello@monolith.studio" 
              className="group block text-4xl md:text-6xl lg:text-8xl font-black text-zinc-900 uppercase tracking-brutal leading-none hover:text-zinc-600 transition-colors"
            >
              HELLO@<br className="md:hidden" />MONOLITH.STUDIO
              <span className="inline-block ml-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
                <SafeIcon name="arrow-up-right" size={48} className="hidden md:inline-block" />
                <SafeIcon name="arrow-up-right" size={24} className="md:hidden" />
              </span>
            </a>
          </motion.div>

          {/* Technical Details Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-zinc-300"
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Office</div>
              <div className="text-sm text-zinc-900 leading-relaxed">
                47 Brutalist Avenue<br />
                London EC1A 1BB<br />
                United Kingdom
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Coordinates</div>
              <div className="text-sm text-zinc-900 leading-relaxed font-mono">
                51.5074° N<br />
                0.1278° W<br />
                GMT+0
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Social</div>
              <div className="space-y-1">
                <a href="#" className="block text-sm text-zinc-900 hover:text-zinc-600 transition-colors">Instagram</a>
                <a href="#" className="block text-sm text-zinc-900 hover:text-zinc-600 transition-colors">LinkedIn</a>
                <a href="#" className="block text-sm text-zinc-900 hover:text-zinc-600 transition-colors">Twitter</a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2">Legal</div>
              <div className="text-sm text-zinc-900 leading-relaxed">
                © 2024 Monolith Studio.<br />
                All rights reserved.<br />
                <span className="text-zinc-500">ARBN 847291056</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App