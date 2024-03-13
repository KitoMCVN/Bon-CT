import React from "react";

interface ButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, onClick, className, children }) => {
  const buttonStyle = "h-9 px-4 rounded-full cursor-pointer font-medium transition-all duration-300  hover:underline text-sm uppercase flex items-center";
  const combinedClassName = className ? `${buttonStyle} ${className}` : buttonStyle;

  if (href) {
    return (
      <a className={combinedClassName} href={href} onClick={onClick}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={combinedClassName} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
