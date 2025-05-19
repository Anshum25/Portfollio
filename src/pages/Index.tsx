
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to my portfolio!",
      description: "Feel free to explore and get in touch if you have any questions.",
    });
    
    // Add tilt effect to cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    const handleTilt = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const resetTilt = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', handleTilt as EventListener);
      card.addEventListener('mouseleave', resetTilt as EventListener);
    });
    
    // Add scroll trigger for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          
          // Unobserve after animation has been triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });
    
    // Apply observer to all animated elements
    document.querySelectorAll('.animated-fade-in, .animated-slide-up, .animated-slide-right, .animated-slide-left, .animated-scale, .animated-rotate')
      .forEach(el => observer.observe(el));

    return () => {
      // Clean up event listeners
      tiltCards.forEach(card => {
        card.removeEventListener('mousemove', handleTilt as EventListener);
        card.removeEventListener('mouseleave', resetTilt as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-navy text-slate w-full">
      <CodeRain />
      <Navbar />
      
      <div className="w-full mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      <Footer />

      {/* Fixed side elements with animations */}
      <div className="fixed left-8 bottom-0 hidden lg:block animated-fade-in" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-5 text-slate mb-5 stagger">
            <a href="https://www.linkedin.com/in/anshum-dev-11115a288/" className="text-slate hover:text-highlight transform transition-transform hover:scale-110 duration-300 float">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://github.com/Anshum25" className="text-slate hover:text-highlight transform transition-transform hover:scale-110 duration-300 float" style={{ animationDelay: "0.5s" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://x.com/Anshum_Dev_" className="text-slate hover:text-highlight transform transition-transform hover:scale-110 duration-300 float" style={{ animationDelay: "1s" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        </a>
        <a href="https://www.instagram.com/anshumdev/" className="text-slate hover:text-highlight transform transition-transform hover:scale-110 duration-300 float" style={{ animationDelay: "1.5s" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        </a>
          </div>
          <div className="h-24 w-px bg-slate-dark animated-slide-up" style={{ transitionDelay: "400ms" }}></div>
        </div>
      </div>

      <div className="fixed right-8 bottom-0 hidden lg:block animated-fade-in" style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}>
        <div className="flex flex-col items-center">
          <a href="mailto:anshum25506@email.com" className="text-slate font-mono text-xs tracking-widest hover:text-highlight transform hover:-translate-y-1 transition-all duration-300" style={{ writingMode: 'vertical-rl' }}>anshum.dev@email.com</a>
          <div className="h-24 w-px bg-slate-dark mt-5 animated-slide-up" style={{ transitionDelay: "400ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
