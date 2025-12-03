"use client";
import { useEffect, useState } from "react";

export default function CursorSpotlight() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Spotlight Effect */}
            <div
                className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(157, 78, 221, 0.25), transparent 50%)`,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Secondary Glow */}
            <div
                className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(80, 200, 255, 0.15), transparent 60%)`,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Custom Cursor Ring */}
            <div
                className="pointer-events-none fixed z-[10000] w-8 h-8 rounded-full border-2 border-primary/60 transition-transform duration-100"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />

            {/* Custom Cursor Dot */}
            <div
                className="pointer-events-none fixed z-[10000] w-2 h-2 rounded-full bg-primary transition-transform duration-75"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 10px rgba(157, 78, 221, 0.8)',
                }}
            />
        </>
    );
}
