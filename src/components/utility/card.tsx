
// import React, { PropsWithChildren } from 'react';
// import { motion, useMotionTemplate, useSpring } from 'framer-motion';

// export const Card: React.FC<PropsWithChildren> = ({ children }) => {
//     const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
//     const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

//     function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
//         const { left, top } = currentTarget.getBoundingClientRect();
//         mouseX.set(clientX - left);
//         mouseY.set(clientY - top);
//     }

//     const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
//     const style = { maskImage, WebkitMaskImage: maskImage };

//     return (
//         <div
//         onMouseMove={onMouseMove}
//         className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 h-full"
//         >
//             <div className="pointer-events-none">
//                 <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
//                 <motion.div
//                     className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
//                     style={style}
//                 />
//                 <motion.div
//                     className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
//                     style={style}
//                 />
//             </div>
//             {children}
//         </div>
//     );
// }

import React, { PropsWithChildren, useState, useCallback } from 'react';
import { motion, useMotionTemplate, useSpring, useMotionValue } from 'framer-motion';

interface CardProps extends PropsWithChildren {
    className?: string;
    hoverScale?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hoverScale = 1.05 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(0, { stiffness: 500, damping: 30 });
    const rotateY = useSpring(0, { stiffness: 500, damping: 30 });
    const scale = useSpring(1, { stiffness: 500, damping: 30 });

    const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        mouseX.set(x);
        mouseY.set(y);
        rotateX.set(10 * ((y - height / 2) / height));
        rotateY.set(-10 * ((x - width / 2) / width));
    }, [mouseX, mouseY, rotateX, rotateY]);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
        scale.set(hoverScale);
    }, [hoverScale, scale]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
    }, [mouseX, mouseY, rotateX, rotateY, scale]);

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ${className}`}
            style={{
                transformStyle: "preserve-3d",
                transform: isHovered ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : "none",
                scale: scale
            }}
            aria-haspopup="true"
            role="button"
            tabIndex={0}
        >
            <div className="pointer-events-none">
                <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                <motion.div
                    className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
                    style={style}
                />
                <motion.div
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                    style={style}
                />
            </div>
            {children}
        </motion.div>
    );
}