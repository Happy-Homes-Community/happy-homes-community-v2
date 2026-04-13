"use client";

import React, { useState, useEffect } from 'react';

const images = [
    '/images/civic-award-winners-25.jpg',
    '/images/arts-crafts-boats.jpg',
    '/images/coach-trip.jpg'
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const TIME_INTERVAL = 10 * 1000;

    // Auto-play the carousel every TIME_INTERVAL milliseconds.
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, TIME_INTERVAL);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-lg group bg-black">

            {/* Images */}
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={src}
                        alt={`Hero slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Text Overlay - Frosted Glass Box */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center px-4 pb-20">
                <div className="relative z-20 bg-[#fcf3e7]/90 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl max-w-xl border border-white/20">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2 drop-shadow-sm">
                        Welcome to Happy Homes
                    </h1>
                    <p className="text-base md:text-lg font-medium text-gray-800">
                        Empowering families with care, support, and community connection.
                    </p>
                </div>
            </div>

            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center backdrop-blur-sm"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center backdrop-blur-sm"
            >
                ❯
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                            index === currentIndex ? 'bg-primary w-8' : 'bg-white/60 w-2 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}