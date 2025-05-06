import { motion } from "framer-motion";
import { cryptocurrencies } from "@/lib/cryptoData";

export default function Cryptocurrencies() {
  return (
    <section id="cryptocurrencies" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Supported <span className="text-primary">Cryptocurrencies</span>
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Choose from multiple popular cryptocurrencies to earn and withdraw
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {cryptocurrencies.map((crypto, index) => (
            <motion.div
              key={index}
              className="crypto-icon bg-card rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={crypto.iconUrl} 
                alt={`${crypto.name} (${crypto.symbol})`} 
                className="w-12 h-12 mb-3"
              />
              <span className="text-sm font-medium">{crypto.name}</span>
              <span className="text-xs text-primary">{crypto.symbol}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
