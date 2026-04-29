import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Heart, ShieldCheck, Globe, Sprout, Brain, Trophy, Scale, Handshake } from 'lucide-react';

// --- About Page Data ---
const aboutContent = {
    goal: {
        title: "Our Goal",
        paragraphs: [
            "At Happy Homes Community, we provide families with the tools, resources, and training needed to build strong, resilient homes. Through community support and advocacy, we aim to create a space where every family can feel safe and empowered.",
            "Our goals include fostering independence, enhancing well-being, and promoting a sense of belonging among families facing adversity. We aim to do this through workshops and forums raising awareness about socioeconomic challenges and local services available to tackle them."
        ]
    },
    constitution: {
        title: "Our Constitution",
        description: "Our constitution defines our purpose, structure, and commitment to transparency and inclusion.",
        points: [
            "Promote the welfare of families in need",
            "Provide inclusive educational programs",
            "Ensure accessible, non-discriminatory services",
            "Maintain transparent governance and funding"
        ]
    },
    work: {
        title: "Our Work",
        description: "We provide practical, emotional, and advocacy support to families through diverse programs:",
        programs: [
            { label: "Climate Change Awareness", icon: "🌲" },
            { label: "Health and Wellbeing", icon: "🧠" },
            { label: "Sports Activities", icon: "🏅" },
            { label: "Community Advocacy", icon: "🏡" },
            { label: "Equality & Diversity", icon: "☮️" },
            { label: "Cultural Inclusion", icon: "👥" },
            { label: "Signposting Local Services", icon: "🧭" },
        ]
    },
    people: {
        title: "Our People",
        description: "Meet the committed team behind Happy Homes. From leadership to volunteers, every person matters.",
        leadership: [
            { role: "Chairperson", name: "Fozia Riaz", emoji: "🧕" },
            { role: "Trustee", name: "Amtul Bari", emoji: "👩‍⚕️" },
            { role: "Trustee", name: "Asma Shahid", emoji: "👩‍🏫" },
        ],
        volunteers: {
            role: "Volunteer Team",
            names: ["Hina Hanif", "Saira Dawood", "Mahid Gondal", "Qasid Gondal"],
            emoji: "🧑‍💻"
        },
        cta: {
            message: "Interested in joining our team and making a difference?",
            buttonText: "Contact Us",
            href: "/contact"
        }
    }
};

export default function AboutPage() {
    return (
    <main className="bg-base-100 font-sans">

        {/* 1. Hero Section */}
        <section className="bg-neutral text-neutral-content py-20 px-8">
            <div className="max-w-7xl mx-auto text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                <div className="w-24 h-2 bg-secondary rounded-full hidden md:block"></div>
            </div>
        </section>

        {/* 2. Our Goal Section */}
        <section className="max-w-7xl mx-auto px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">{aboutContent.goal.title}</h2>
                    {aboutContent.goal.paragraphs.map((p, i) => (
                        <p key={i} className="text-lg text-gray-700 leading-relaxed mb-4">
                            {p}
                        </p>
                    ))}
                </div>
                <div className="bg-neutral/5 p-10 rounded-3xl border border-neutral/10 flex items-center justify-center">
                    <Heart className="w-32 h-32 text-secondary opacity-40" />
                </div>
            </div>
        </section>

        {/* 3. Our Constitution Section */}
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-8 text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">{aboutContent.constitution.title}</h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">{aboutContent.constitution.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aboutContent.constitution.points.map((point, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-base-100 rounded-2xl shadow-sm border-b-4 border-secondary">
                            <CheckCircle2 className="text-secondary w-8 h-8 mb-4" />
                            <p className="font-bold text-gray-800">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. Our Work Section */}
        <section className="max-w-7xl mx-auto px-8 py-16">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">{aboutContent.work.title}</h2>
            <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">{aboutContent.work.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {aboutContent.work.programs.map((program, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral/5 flex flex-col items-center text-center">
                        <span className="text-4xl mb-3">{program.icon}</span>
                        <h3 className="font-bold text-gray-800">{program.label}</h3>
                    </div>
                ))}
            </div>
        </section>

        {/* 5. Our People Section */}
        {/* FIX 2: Removed bg-neutral/5 so this blends perfectly with the cream bg-base-100! */}
        <section className="py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">{aboutContent.people.title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{aboutContent.people.description}</p>
                </div>

                {/* Leadership Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {aboutContent.people.leadership.map((person, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-black/5">
                            <div className="text-5xl mb-4 bg-base-100 w-20 h-20 flex items-center justify-center rounded-full mx-auto">
                                {person.emoji}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                            <p className="text-secondary font-bold uppercase tracking-wider text-xs">{person.role}</p>
                        </div>
                    ))}
                </div>

                {/* Volunteer Bar */}
                <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm border-l-8 border-secondary mb-10">
                    <div className="text-5xl">{aboutContent.people.volunteers.emoji}</div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-900">{aboutContent.people.volunteers.role}</h3>
                        <p className="text-gray-600 mt-1">
                            {aboutContent.people.volunteers.names.join(", ")}
                        </p>
                    </div>
                </div>

                {/* Join the Team CTA */}
                <div className="text-center bg-white/50 backdrop-blur-sm border border-neutral/10 rounded-2xl py-6 px-4 max-w-2xl mx-auto">
                    <p className="text-gray-700 text-lg">
                        {aboutContent.people.cta.message}{" "}
                        <Link
                            href={aboutContent.people.cta.href}
                            className="text-primary font-bold hover:text-secondary underline decoration-2 underline-offset-4 transition-colors"
                        >
                            {aboutContent.people.cta.buttonText}
                        </Link>
                    </p>
                </div>

            </div>
        </section>

    </main>
);
}