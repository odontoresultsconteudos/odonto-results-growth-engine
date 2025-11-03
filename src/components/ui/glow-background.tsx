import { cn } from "@/lib/utils";

interface GlowBackgroundProps {
    className?: string;
    children?: React.ReactNode;
}

export function GlowBackground({
    className,
    children,
}: GlowBackgroundProps) {
    return (
        <div
            className={cn(
                "relative w-full overflow-hidden",
                className
            )}
            style={{ 
                contain: 'layout style paint',
                contentVisibility: 'auto'
            }}
        >
            
            {/* Diagonal light beams - varied widths and spacing */}
            <div className="absolute inset-0 opacity-15" style={{ filter: 'blur(50px)' }}>
                {/* Beam 1 - thin */}
                <div 
                    className="beam-1 absolute h-[200%] w-16"
                    style={{
                        left: '10%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(200, 80%, 55%) 50%, transparent 100%)',
                    }}
                />
                
                {/* Beam 2 - wide */}
                <div 
                    className="beam-2 absolute h-[200%] w-48"
                    style={{
                        left: '28%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(210, 75%, 52%) 50%, transparent 100%)',
                    }}
                />
                
                {/* Beam 3 - medium */}
                <div 
                    className="beam-3 absolute h-[200%] w-24"
                    style={{
                        left: '58%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(220, 70%, 50%) 50%, transparent 100%)',
                    }}
                />
                
                {/* Beam 4 - thin */}
                <div 
                    className="beam-4 absolute h-[200%] w-20"
                    style={{
                        left: '78%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(230, 65%, 48%) 50%, transparent 100%)',
                    }}
                />
                
                {/* Beam 5 - very thin accent */}
                <div 
                    className="beam-5 absolute h-[200%] w-12"
                    style={{
                        left: '45%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(215, 72%, 53%) 50%, transparent 100%)',
                    }}
                />
            </div>

            {/* Ambient glow underneath */}
            <div className="absolute inset-0 opacity-20">
                <div 
                    style={{
                        background: `
                            radial-gradient(
                                circle at 50% 40%,
                                hsl(210, 80%, 55%) 0%,
                                transparent 60%
                            )
                        `,
                        height: '100%',
                        width: '100%',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
