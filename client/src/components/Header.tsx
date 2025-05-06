import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";
import { motion } from "framer-motion";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full py-4 px-4 sm:px-6 md:px-8 fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="h-10 w-auto" />
          <span className="font-bold text-xl ml-3 text-primary">Crypto Faucet Zone</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#features" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Features
          </a>
          <a 
            href="#cryptocurrencies" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Currencies
          </a>
          <a 
            href="#how-it-works" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <Button 
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
          >
            <a 
              href="http://t.me/cryptofaucetzone_bot/cryptofaucet" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Start Earning
            </a>
          </Button>
        </nav>
        
        <button 
          className="md:hidden text-foreground text-2xl flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4 bg-card/95 backdrop-blur-md rounded-lg p-4 absolute w-[calc(100%-2rem)] mx-4 shadow-xl"
        >
          <nav className="flex flex-col space-y-3">
            <a 
              href="#features" 
              className="text-foreground/80 py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Features
            </a>
            <a 
              href="#cryptocurrencies" 
              className="text-foreground/80 py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Currencies
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground/80 py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              How It Works
            </a>
            <Button 
              asChild
              className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
            >
              <a 
                href="http://t.me/cryptofaucetzone_bot/cryptofaucet" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Start Earning
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
