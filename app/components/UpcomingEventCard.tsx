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

export default function EventCard({ month, day, title, description, imageUrl, link }: EventItem) {
    return (
        <div className="card card-side bg-white shadow-sm border border-primary/20 overflow-hidden h-full">

            {/* Content Section */}
            <div className="card-body p-5 flex flex-col justify-between text-left w-3/5">
                <div>
                    {/* Date Badge */}
                    <div className="bg-primary text-white p-2 rounded-lg text-center leading-none shadow-sm inline-block mb-3">
                        <span className="block text-[10px] font-bold uppercase tracking-wider">{month}</span>
                        <span className="block text-lg font-bold">{day}</span>
                    </div>

                    {/* Text Content */}
                    <h3 className="card-title text-base font-bold text-primary mb-2 leading-tight">{title}</h3>
                    {/* line-clamp-3 ensures the description doesn't push the card too tall if it's really long */}
                    <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
                </div>

                {/* Action Button */}
                <div className="card-actions justify-start mt-4">
                    <Link href={link} className="text-primary text-sm font-bold hover:underline">
                        Read More
                    </Link>
                </div>
            </div>


            {/* Image Section - Designed to hold A4-style poster */}
            <figure className="w-2/5 bg-gray-100 flex-shrink-0 relative">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover object-top" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm text-center p-2 bg-gray-200">
                        A4 Poster
                    </div>
                )}
            </figure>

        </div>
    );
}

