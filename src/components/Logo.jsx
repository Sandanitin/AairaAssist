import React from 'react';
import navLogo from '../assets/logo.png';

const Logo = ({ className = "w-8 h-8", showText = false, size = "medium", width = null }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return { img: "w-8 h-8", text: "text-lg" };
      case "large":
        return { img: "w-16 h-16", text: "text-3xl" };
      default:
        return { img: "w-12 h-12", text: "text-2xl" };
    }
  };

  const { img: imgSize, text: textSize } = getSizeClasses();

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image - using the actual Aaira Assist logo */}
      <img 
        src={navLogo} 
        alt="Aaira Assist Logo" 
        className={`flex-shrink-0 ${width ? `w-${width}` : imgSize} object-contain`}
      />
      
      {/* Text - matching the logo typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSize} font-bold text-[#FF6B35] leading-tight tracking-wide`}>Aaira</span>
          <span className={`${textSize.replace('xl', 'lg')} font-semibold text-[#6B7280] leading-tight tracking-wide`}>Assist</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
