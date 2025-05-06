import { Button } from "@/components/ui/button";
import { FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div 
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-primary">Complete Tasks,</span><br /> 
            Earn Real Crypto Rewards
          </h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Join thousands of users earning Bitcoin, USDT, Dogecoin and more through simple daily tasks on Telegram.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
            >
              <a 
                href="http://t.me/cryptofaucetzone_bot/cryptofaucet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaTelegram className="mr-2 h-5 w-5" /> Open Telegram Bot
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
            >
              <a 
                href="https://t.me/cryptofaucetzone" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join Official Channel
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-background"></div>
              <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-background"></div>
              <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-background"></div>
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-background"></div>
            </div>
            <p className="ml-4 text-foreground/80">
              <span className="font-medium text-primary">10,000+</span> users earning crypto daily
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-0.5 bg-primary rounded-2xl opacity-20 blur-xl animate-pulse"></div>
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621501103258-d0ae20a4367f?auto=format&fit=crop&q=80&w=1974" 
                alt="Cryptocurrency rewards concept" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <p className="text-xl font-semibold">Easy Tasks, Real Rewards</p>
                <p className="text-sm text-foreground/80 mt-2">Complete simple tasks on Telegram and withdraw to your crypto wallet</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
