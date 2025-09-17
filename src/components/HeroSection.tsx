import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
const profileImage = '/lovable-uploads/225ed0e3-f2d6-42a8-85d6-a01180afec78.png';
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10 transition-all duration-1000 ease-out" style={{
      backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      backgroundSize: '200% 200%'
    }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-primary rounded-full opacity-20" animate={{
        y: [0, -100, 0],
        x: [0, Math.sin(i) * 50, 0],
        opacity: [0.2, 0.5, 0.2]
      }} transition={{
        duration: 8 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} />)}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Welcome Message */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.8
      }} className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50">
          
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.5
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-full blur-xl opacity-50 animate-glow"></div>
              <img src={profileImage} alt="Mohamed Rasal" className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/20 shadow-glow-primary animate-float" />
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 flex-1 text-center max-w-2xl mx-auto lg:mx-0">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              {/* Main Heading */}
              
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }} className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Focus on user experience and technical skills and creative mindset
              </motion.p>
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.8
            }} className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-center">
                <Button onClick={() => scrollToSection('projects')} className="bg-hero-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-glow-primary hover:scale-105">
                  Explore My Work
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  Get In Touch
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 1.0
            }} className="flex justify-center gap-8">
                <a href="https://github.com/rasal786" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-glow-primary hover:scale-110 border border-foreground/10">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com/in/mohamed-rasal" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-glow-primary hover:scale-110 border border-foreground/10">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="mailto:rasaljafreennj@gmail.com" className="p-4 rounded-full bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:shadow-glow-primary hover:scale-110 border border-foreground/10">
                  <Mail className="w-7 h-7" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.5
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection('about')}>
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;