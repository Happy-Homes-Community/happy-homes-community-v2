"use client";

import Link from "next/link";
import React from "react";

// --- Navbar Data Definition ---
const navData = {
  brand: {
    logoSrc: "/logos/hh-logo-full.png",
    altText: "Happy Homes Community",
  },
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

// --- Navbar Component ---
export default function Navbar() {
  return (
  <header className="bg-neutral text-neutral-content shadow-md sticky top-0 z-50">

    <div className="navbar max-w-7xl mx-auto px-4 md:px-8 py-2 min-h-0">

      {/* Left side (Logo) */}
      <div className="flex-1">
        <Link href="/" className="hover:opacity-90 transition-opacity flex items-center">
          <img
              src={navData.brand.logoSrc}
              alt={navData.brand.altText}
              className="h-16 md:h-20 w-auto object-contain bg-base-100 rounded-lg p-2 shadow-sm"
          />
        </Link>
      </div>

      {/* Right side */}
      <div className="flex-none">

        <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2 lg:mr-4">
          {navData.links.map((link, index) => (
              <li key={index}>
                <Link
                    href={link.href}
                    className="text-lg font-bold text-neutral-content hover:text-secondary hover:bg-white/10 rounded-lg px-4 py-2 transition-all"
                >
                  {link.label}
                </Link>
              </li>
          ))}
        </ul>

        {/* Mobile Burger */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-neutral-content hover:bg-white/10">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* Mobile Menu Dropdown matching the Teal theme */}
          <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-xl bg-neutral p-2 shadow-xl border border-white/10"
          >
            {navData.links.map((link, index) => (
                <li key={index}>
                  <Link
                      href={link.href}
                      className="text-lg font-bold text-neutral-content hover:text-secondary hover:bg-white/10 py-3"
                  >
                    {link.label}
                  </Link>
                </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </header>
);
}