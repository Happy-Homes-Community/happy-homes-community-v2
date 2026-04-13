import React from 'react';
import Link from 'next/link';

export interface EventItem {
    id: string;
    month: string;
    day: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export default function UpcomingEventCard({ month, day, title, description, imageUrl, link }: EventItem) {
    return (
        <div className="card bg-white shadow-sm border border-primary/20">
            <div className="card-body text-left">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-white p-3 rounded-lg text-center leading-none">
                        <span className="block text-sm font-bold uppercase">{month}</span>
                        <span className="block text-2xl font-bold">{day}</span>
                    </div>
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-600 overflow-hidden">
                        {imageUrl ? <img src={imageUrl} alt={title} className="w-full h-full object-cover" /> : 'Image'}
                    </div>
                </div>
                <h3 className="card-title text-lg text-primary">{title}</h3>
                <p className="text-sm mt-2 text-gray-700">{description}</p>
                <div className="card-actions justify-start mt-4">
                    <Link href={link} className="text-primary font-bold hover:underline">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}