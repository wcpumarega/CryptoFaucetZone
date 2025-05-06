import { motion } from "framer-motion";
import { Coins, CheckSquare, Wallet } from "lucide-react";

const features = [
  {
    icon: <CheckSquare className="text-primary text-xl" />,
    title: "Complete Tasks",
    description: "Earn points by completing simple daily tasks like quizzes, games, and engagement activities."
  },
  {
    icon: <Coins className="text-primary text-xl" />,
    title: "Collect Points",
    description: "Accumulate points through regular participation that can be exchanged for various cryptocurrencies."
  },
  {
    icon: <Wallet className="text-primary text-xl" />,
    title: "Withdraw Crypto",
    description: "Cash out your earnings to FaucetPay or CWallet when you reach the minimum threshold."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary">Simple Tasks</span> to Earn Crypto
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Our Telegram bot makes earning cryptocurrencies accessible to everyone through easy daily activities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="gradient-border p-6 bg-card rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
