import React from 'react';

export interface Partner {
    id: string;
    name: string;
    logoUrl: string;
    websiteUrl: string;
}

interface PartnerLogosProps {
    partners: Partner[];
}

export default function PartnerLogos({ partners }: PartnerLogosProps) {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-10 text-primary">Who We Work With</h2>

            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 bg-white/50 p-8 rounded-3xl shadow-sm border border-gray-100">
                {partners.map((partner) => (
                    <a
                        key={partner.id}
                        href={partner.websiteUrl}
                        title={`Visit ${partner.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-16 w-auto max-w-[200px] flex items-center justify-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {partner.logoUrl ? (
                            <img src={partner.logoUrl} alt={`${partner.name} logo`} className="h-full w-auto object-contain" />
                        ) : (
                            <span className="text-xs text-gray-400 font-medium">{partner.name}</span>
                        )}
                    </a>
                ))}
            </div>
        </section>
    );
}