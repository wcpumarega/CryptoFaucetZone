import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Start The Bot",
    description: "Click the \"Open Telegram Bot\" button and start interacting with our crypto faucet bot."
  },
  {
    number: 2,
    title: "Complete Tasks",
    description: "Perform simple tasks like answering quizzes, playing games, or interacting with sponsored content."
  },
  {
    number: 3,
    title: "Get Paid",
    description: "Withdraw your earned crypto through FaucetPay or CWallet once you reach the minimum threshold."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            How <span className="text-primary">It Works</span>
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Start earning cryptocurrency in just a few simple steps
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold absolute -left-2 -top-2 z-10">
                {step.number}
              </div>
              <div className="bg-card p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-4 pl-4">{step.title}</h3>
                <p className="text-foreground/80">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
