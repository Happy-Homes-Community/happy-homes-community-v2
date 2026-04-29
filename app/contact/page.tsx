import React from 'react';
import { Mail, Info, Send } from 'lucide-react';

// --- Contact Page Data ---
const contactData = {
    hero: {
        title: "Contact Us",
        subtitle: "We're here to help. Use the contact details below to get in touch.",
    },
    instructions: {
        title: "How to reach us",
        body: "If you need to contact us regarding our services, events, volunteering, or general enquiries, please use the email below. When emailing, please include:",
        checklist: [
            "Your full name",
            "The reason for your contact",
            "Your phone number and email address",
            "Preferred times for a response",
        ],
        footer: "This helps us ensure we can assist you as promptly as possible!"
    },
    contacts: [
        {
            id: "primary",
            name: "Fozia Riaz",
            role: "General Enquiries & Services",
            email: "fozia@happyhomescommunity.org.uk",
            icon: Mail,
            description: "For all questions regarding programs, volunteering, and community support."
        }
    ]
};

export default function ContactUsPage() {
    return (
        <main className="bg-base-100 font-sans pb-16">

            {/* 1. Hero Section (Teal Top Bun) - Slightly tightened padding to save vertical space */}
            <section className="bg-neutral text-neutral-content py-12 md:py-16 px-8">
                <div className="max-w-6xl mx-auto text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{contactData.hero.title}</h1>
                    <p className="text-xl text-neutral-content/80 max-w-2xl">
                        {contactData.hero.subtitle}
                    </p>
                    <div className="w-24 h-2 bg-secondary rounded-full mt-6 hidden md:block"></div>
                </div>
            </section>

            {/* 2. Combined Content Section */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 py-10">
                {/* One single, beautiful Split Card */}
                <div className="bg-white rounded-3xl shadow-sm border-t-4 border-secondary overflow-hidden flex flex-col lg:flex-row">

                    {/* LEFT SIDE: Instructions */}
                    <div className="p-8 md:p-12 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <Info className="text-secondary w-8 h-8" />
                            <h2 className="text-2xl font-bold text-gray-900">{contactData.instructions.title}</h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            {contactData.instructions.body}
                        </p>
                        <ul className="space-y-3 mb-6 pl-4">
                            {contactData.instructions.checklist.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-800 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 italic">
                            {contactData.instructions.footer}
                        </p>
                    </div>

                    {/* RIGHT SIDE: Contact Details */}
                    <div className="p-8 md:p-12 lg:w-1/2 bg-gray-50 flex flex-col justify-center">
                        {contactData.contacts.map((contact) => {
                            const Icon = contact.icon;
                            return (
                                <div key={contact.id} className="flex flex-col h-full">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="bg-white p-4 rounded-full text-primary shadow-sm flex-shrink-0">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{contact.name}</h3>
                                            <p className="text-secondary font-bold uppercase tracking-wider text-sm mt-1">
                                                {contact.role}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-8 text-lg">
                                        {contact.description}
                                    </p>

                                    {/* Visible Email Address Box */}
                                    <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200 text-center shadow-sm">
                                        <span className="text-gray-500 text-sm block mb-1">Direct Email Address:</span>
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="text-lg md:text-xl font-bold text-gray-800 hover:text-primary transition-colors break-all"
                                        >
                                            {contact.email}
                                        </a>
                                    </div>

                                    {/* Easy Action Button */}
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center justify-center gap-3 w-full bg-primary text-white hover:bg-primary/90 font-bold text-lg py-4 rounded-xl transition-colors mt-auto shadow-sm"
                                    >
                                        <Send className="w-6 h-6" />
                                        Click here to email {contact.name.split(' ')[0]}
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

        </main>
    );
}