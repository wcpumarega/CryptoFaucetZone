import Logo from "@/components/ui/logo";
import { FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";
import { cryptocurrencies } from "@/lib/cryptoData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center">
              <Logo className="h-10 w-auto" />
              <span className="font-bold text-xl ml-3 text-primary">Crypto Faucet Zone</span>
            </div>
            <p className="mt-4 text-foreground/80">
              Complete tasks and earn cryptocurrency rewards through our Telegram bot.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="http://t.me/cryptofaucetzone_bot/cryptofaucet" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram Bot
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/cryptofaucetzone" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Channel
                </a>
              </li>
              <li>
                <a 
                  href="https://acryptominer.io/" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Supported Cryptocurrencies</h3>
            <div className="flex flex-wrap gap-2">
              {cryptocurrencies.map((crypto, index) => (
                <span 
                  key={index} 
                  className="inline-block px-3 py-1 bg-card rounded-full text-xs"
                >
                  {crypto.symbol}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/80">
            &copy; {currentYear} Crypto Faucet Zone. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a 
              href="https://t.me/cryptofaucetzone" 
              className="text-foreground/80 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="text-lg" />
            </a>
            <a 
              href="#" 
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a 
              href="#" 
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <FaDiscord className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
