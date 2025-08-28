import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  className = "",
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extrair número do valor (ex: "40+" -> 40, "US$ 1.3B" -> 1.3, "73.7%" -> 73.7)
  const extractNumber = (str: string): number => {
    const match = str.match(/([0-9]+\.?[0-9]*)/g);
    return match ? parseFloat(match[0]) : 0;
  };

  // Extrair prefixo e sufixo (ex: "US$ 1.3B" -> prefix: "US$ ", suffix: "B")
  const extractParts = (str: string) => {
    const numberMatch = str.match(/([0-9]+\.?[0-9]*)/g);
    if (!numberMatch) return { prefix: "", suffix: str };

    const number = numberMatch[0];
    const numberIndex = str.indexOf(number);
    const prefix = str.substring(0, numberIndex);
    const suffix = str.substring(numberIndex + number.length);

    return { prefix, suffix };
  };

  const targetNumber = extractNumber(value);
  const { prefix, suffix } = extractParts(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function para suavizar a animação
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentNumber = targetNumber * easeOutQuart;

      // Formatação baseada no tipo de número
      let formattedNumber: string;
      if (targetNumber >= 1) {
        formattedNumber = Math.floor(currentNumber).toString();
      } else {
        formattedNumber = currentNumber.toFixed(1);
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Garantir valor final exato
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, targetNumber, value, prefix, suffix, duration]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-300 ${className}`}
    >
      {displayValue}
    </div>
  );
};

export default AnimatedCounter;
