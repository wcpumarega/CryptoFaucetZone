import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl">
        <motion.div 
          className="absolute -inset-1 bg-primary opacity-20 blur-xl"
          animate={{ 
            opacity: [0.1, 0.2, 0.1], 
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="relative bg-card p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <motion.h2 
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to <span className="text-primary">Start Earning?</span>
              </motion.h2>
              <motion.p 
                className="mt-4 text-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of users already earning cryptocurrency through our Telegram bot. It takes less than a minute to get started!
              </motion.p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
                  size="lg"
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
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
                  size="lg"
                >
                  <a 
                    href="https://t.me/cryptofaucetzone" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Official Channel
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  asChild
                  variant="secondary"
                  className="w-full"
                  size="lg"
                >
                  <a 
                    href="https://acryptominer.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
