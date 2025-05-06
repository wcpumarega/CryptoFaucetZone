import { motion } from "framer-motion";
import { LampFloor, Wallet } from "lucide-react";

const withdrawMethods = [
  {
    icon: <LampFloor className="text-white" />,
    name: "FaucetPay",
    color: "bg-blue-500"
  },
  {
    icon: <Wallet className="text-white" />,
    name: "CWallet",
    color: "bg-green-500"
  }
];

export default function PaymentMethods() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">
            Withdraw Methods
          </h2>
        </motion.div>
        
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {withdrawMethods.map((method, index) => (
            <motion.div 
              key={index}
              className="bg-card px-6 py-4 rounded-xl flex items-center space-x-3 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-10 h-10 rounded-full ${method.color} flex items-center justify-center`}>
                {method.icon}
              </div>
              <span className="font-medium">{method.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
