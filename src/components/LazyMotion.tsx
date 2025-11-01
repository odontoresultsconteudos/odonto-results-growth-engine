import { lazy, Suspense, ComponentType } from 'react';

// Lazy load motion components to reduce initial bundle
const MotionDiv = lazy(() => 
  import('motion/react').then(mod => ({ default: mod.motion.div }))
);

interface LazyMotionProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileHover?: any;
  transition?: any;
}

export const LazyMotionDiv = ({ children, className, ...props }: LazyMotionProps) => {
  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <MotionDiv className={className} {...props}>
        {children}
      </MotionDiv>
    </Suspense>
  );
};
