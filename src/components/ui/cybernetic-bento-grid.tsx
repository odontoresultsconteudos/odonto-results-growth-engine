import React, { useEffect, useRef, ReactNode } from 'react';

interface BentoItemProps {
  className?: string;
  children: ReactNode;
  href?: string;
}

// Reusable BentoItem component
export const BentoItem = ({ className = '', children, href }: BentoItemProps) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const content = (
        <div ref={itemRef} className={`bento-item ${className}`}>
            {children}
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block h-full">
                {content}
            </a>
        );
    }

    return content;
};
