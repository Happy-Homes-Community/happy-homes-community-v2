import React from 'react';

export interface Offer {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default function OfferCard({ title, description, imageUrl }: Offer) {
    return (
        <div className="card bg-white shadow-xl">
            <figure className="h-64 bg-gray-200 flex items-center justify-center text-gray-600">
                {imageUrl ? <img src={imageUrl} alt={title} className="w-full h-full object-cover" /> : 'Image Placeholder'}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}