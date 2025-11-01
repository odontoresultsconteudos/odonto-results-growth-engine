import { motion, MotionProps } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ReactNode } from "react";

interface OptimizedMotionProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Optimized motion component that:
 * 1. Respects prefers-reduced-motion
 * 2. Uses will-change for GPU acceleration
 * 3. Simplifies animations for better performance
 */
export const OptimizedMotion = ({ 
  children, 
  className = "",
  initial,
  animate,
  whileHover,
  transition,
  ...props 
}: OptimizedMotionProps) => {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Optimize transition for better performance
  const optimizedTransition = transition || {
    duration: 0.3,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={optimizedTransition}
      style={{ willChange: whileHover ? 'transform' : 'auto' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
