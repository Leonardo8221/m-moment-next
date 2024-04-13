import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './tooltip.module.css'

interface TooltipProps {
  children: ReactNode;
  // Add more props as you need
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const [margin, setMargin] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (tooltipRef.current) {
        const tooltipWidth = tooltipRef.current.offsetWidth;
        setMargin(-tooltipWidth / 2); // This centers the tooltip
      }
    };

    // Update margin when component mounts and window resizes
    handleResize();
    window.addEventListener('resize', handleResize);

    // Remove event listener to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect will only run once on mount

  return (
    <span
      ref={tooltipRef}
      style={{ marginLeft: `${margin}px` }} // Apply the calculated margin
      className={styles.tooltip_text}
      {...props}
    >
      {props.children}
    </span>
  );
};

export default Tooltip;
