import React from 'react';
import Link from 'next/link';
import { Home, MapPinOff } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-[70vh] bg-base-100 font-sans flex flex-col items-center justify-center px-4 py-16">

            {/* Centered Error Card */}
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border-t-4 border-primary text-center max-w-2xl w-full border border-neutral/5">

                {/* Playful Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-secondary/10 p-6 rounded-full text-secondary">
                        <MapPinOff className="w-16 h-16" />
                    </div>
                </div>

                {/* Big 404 Text */}
                <h1 className="text-7xl md:text-9xl font-black text-neutral mb-2 tracking-tighter">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Looks like you're lost!
                </h2>

                {/* Friendly Error Message */}
                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md mx-auto">
                    The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back home.
                </p>

                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white hover:bg-primary/90 font-bold text-lg py-4 px-10 rounded-xl transition-all hover:scale-105 shadow-sm"
                >
                    <Home className="w-6 h-6" />
                    Back to Homepage
                </Link>

            </div>

        </main>
    );
}