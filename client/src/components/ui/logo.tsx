import React from "react";
import logoPath from "@assets/logo512-removebg-preview (2).png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src={logoPath}
      alt="Crypto Faucet Zone Logo"
      className={className}
    />
  );
};

export default Logo;
