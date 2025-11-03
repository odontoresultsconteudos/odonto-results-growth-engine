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
            {/* Diagonal light beams */}
            <div className="absolute inset-0 opacity-30" style={{ filter: 'blur(40px)' }}>
                {/* Beam 1 */}
                <div 
                    className="absolute h-[200%] w-32"
                    style={{
                        left: '15%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(200, 85%, 60%) 50%, transparent 100%)',
                    }}
                />
                
                {/* Beam 2 */}
                <div 
                    className="absolute h-[200%] w-24"
                    style={{
                        left: '35%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(210, 80%, 55%) 50%, transparent 100%)',
                    }}
                />
                
                {/* Beam 3 */}
                <div 
                    className="absolute h-[200%] w-40"
                    style={{
                        left: '55%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(220, 75%, 58%) 50%, transparent 100%)',
                    }}
                />
                
                {/* Beam 4 */}
                <div 
                    className="absolute h-[200%] w-28"
                    style={{
                        left: '75%',
                        top: '-50%',
                        transform: 'rotate(-30deg)',
                        background: 'linear-gradient(90deg, transparent 0%, hsl(230, 70%, 53%) 50%, transparent 100%)',
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
