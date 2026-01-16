import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface CounterStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  description?: string;
  color?: string;
}

export function CounterStat({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  label,
  description,
  color = "from-[#D4A43B] to-yellow-500"
}: CounterStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-white font-semibold text-lg mb-1">{label}</div>
      {description && (
        <div className="text-gray-400 text-sm">{description}</div>
      )}
    </motion.div>
  );
}
