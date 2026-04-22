import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

// --- Footer Data Definition ---
const footerData = {
    brand: {
        logoSrc: "/logos/hh-logo-full.png",
        name: "Happy Homes Community",
        description: "Empowering families with care, support, and community connection.",
        charityNumber: "1215208",
    },
    quickLinks: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ],
    contact: {
        email: "fozia@happyhomescommunity.org.uk",
    },
    socials: [
        { icon: FaFacebookF, ariaLabel: "Facebook", href: "https://www.facebook.com/p/Fozia-Riaz-100091279092571/" },
        { icon: FaInstagram, ariaLabel: "Instagram", href: "https://www.instagram.com/happy_homes_fozia/" },
        { icon: FaLinkedinIn, ariaLabel: "LinkedIn", href: "https://www.linkedin.com/company/happy-homes-community/posts/" },
    ],
    copyrightName: "Happy Homes Community",
};

// --- Footer Component ---
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral text-neutral-content mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-8 py-16">

                {/* Column 1: Brand & Charity Info */}
                <aside className="flex flex-col">
                    <Link href="/" className="inline-block mb-4 hover:opacity-90 transition-opacity">
                        {footerData.brand.logoSrc ? (
                            <img
                                src={footerData.brand.logoSrc}
                                alt={`${footerData.brand.name} Logo`}
                                className="w-32 h-32 object-contain bg-base-100 rounded-lg shadow-sm"
                            />
                        ) : (
                            <div className="w-32 h-32 bg-base-100 text-primary flex items-center justify-center rounded-lg text-sm shadow-md text-center leading-tight">
                                Logo
                            </div>
                        )}
                    </Link>
                    <p className="text-neutral-content/80 mb-4">
                        {footerData.brand.description}
                    </p>
                    <p className="text-neutral-content/80">
                        Charity Org: {footerData.brand.charityNumber}
                    </p>
                </aside>

                {/* Column 2: Useful Links (Moved to the middle and perfectly centered with lg:mx-auto!) */}
                <nav className="flex flex-col gap-3 lg:mx-auto">
                    <h6 className="text-sm font-bold uppercase tracking-wider text-neutral-content mb-2">Quick Links</h6>
                    {footerData.quickLinks.map((link, index) => (
                        <Link key={index} href={link.href} className="hover:text-secondary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Column 3: Contact & Social Media (Moved to the right side to fill the empty space) */}
                <nav className="flex flex-col gap-3 lg:ml-auto">
                    {/* Get in Touch Section */}
                    <h6 className="text-sm font-bold uppercase tracking-wider text-neutral-content mb-2">Get in Touch</h6>
                    <a href={`mailto:${footerData.contact.email}`} className="hover:text-secondary transition-colors break-all mb-4">
                        {footerData.contact.email}
                    </a>

                    {/* Follow Us Section */}
                    <h6 className="text-sm font-bold uppercase tracking-wider text-neutral-content mb-2">Follow Us</h6>
                    <div className="flex gap-4">
                        {footerData.socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.ariaLabel}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-neutral transition-all text-neutral-content"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </nav>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-white/10 bg-black/10">
                <div className="max-w-7xl mx-auto px-8 py-6 text-sm text-center md:text-left text-neutral-content/80">
                    <p>&copy; {currentYear} {footerData.copyrightName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}