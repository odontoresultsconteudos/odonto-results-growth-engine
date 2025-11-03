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
        >
            <style>{`
                @keyframes beam-drift {
                    0%, 100% { transform: rotate(-30deg) translateY(0); }
                    50% { transform: rotate(-30deg) translateY(-5%); }
                }
                
                @keyframes beam-pulse {
                    0%, 100% { opacity: 0.12; }
                    50% { opacity: 0.18; }
                }
                
                .beam-1 {
                    animation: beam-drift 25s ease-in-out infinite, beam-pulse 8s ease-in-out infinite;
                }
                
                .beam-2 {
                    animation: beam-drift 30s ease-in-out infinite 2s, beam-pulse 10s ease-in-out infinite 2s;
                }
                
                .beam-3 {
                    animation: beam-drift 28s ease-in-out infinite 4s, beam-pulse 9s ease-in-out infinite 4s;
                }
                
                .beam-4 {
                    animation: beam-drift 32s ease-in-out infinite 1s, beam-pulse 11s ease-in-out infinite 1s;
                }
                
                .beam-5 {
                    animation: beam-drift 26s ease-in-out infinite 3s, beam-pulse 8.5s ease-in-out infinite 3s;
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .beam-1, .beam-2, .beam-3, .beam-4, .beam-5 {
                        animation: none;
                    }
                }
            `}</style>
            
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
