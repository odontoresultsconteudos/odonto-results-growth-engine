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
            {/* Glow effect layers */}
            <div className="absolute inset-0">
                {/* Main center glow */}
                <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `
                            radial-gradient(
                                circle at 50% 40%,
                                hsl(200, 80%, 50%) 0%,
                                hsl(220, 70%, 40%) 20%,
                                transparent 60%
                            )
                        `,
                    }}
                />
                
                {/* Secondary ambient glow */}
                <div 
                    className="absolute inset-0 opacity-25"
                    style={{
                        background: `
                            radial-gradient(
                                ellipse at 30% 60%,
                                hsl(240, 60%, 35%) 0%,
                                transparent 50%
                            ),
                            radial-gradient(
                                ellipse at 70% 50%,
                                hsl(190, 65%, 40%) 0%,
                                transparent 50%
                            )
                        `,
                    }}
                />

                {/* Subtle texture overlay */}
                <div 
                    className="absolute inset-0 opacity-10 mix-blend-overlay"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 2px,
                                hsl(220, 70%, 50%) 2px,
                                hsl(220, 70%, 50%) 4px
                            )
                        `,
                        backgroundSize: '100% 4px',
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
