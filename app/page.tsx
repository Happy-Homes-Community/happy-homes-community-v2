<<<<<<< HEAD
import ReactMarkdown from "react-markdown";
import { getPageData } from "@/app/lib/contentParser";
import { LandingPageData } from "@/app/types/content";
import Navbar from "./components/Navbar";
=======
import ReactMarkdown from 'react-markdown';
import {getPageData} from "@/app/lib/contentParser";
import {LandingPageData} from "@/app/types/content";
import HeroCarousel from "@/app/components/HeroCarousel";
import {eventsData, missionData, offersData, partnersData} from "@/app/data";
import OfferCard from "@/app/components/OfferCard";
import UpcomingEventCard from "@/app/components/UpcomingEventCard";
import PartnerLogos from "@/app/components/PartnerLogos";

function EventCard(props: {
    id: string,
    month: string,
    day: string,
    title: string,
    description: string,
    imageUrl: string,
    link: string
}) {
    return null;
}
>>>>>>> origin/main

export default async function Home() {
  const page = await getPageData<LandingPageData>("pages", "landing", [
    "welcomeMessage",
    "heroImage",
    "cta",
  ]);

  return (
    <div>
       <Navbar />
      <main>
        <h1 className="text-4xl font-bold mb-8">{page.welcomeMessage}</h1>

<<<<<<< HEAD
        {page.heroImage && (
          <img
            src={page.heroImage}
            alt={page.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}

        <ReactMarkdown className="prose prose-lg max-w-none mb-8">
          {page.content}
        </ReactMarkdown>

        <div className="mt-12 flex items-center gap-4">
          <img
            src={page.author.picture}
            alt={page.author.name}
            className="w-12 h-12 rounded-full"
          />
          <p className="text-gray-600">By {page.author.name}</p>
        </div>
      </main>
    </div>
  );
=======
    return (
        <main className="min-h-screen bg-base-100 font-sans pb-16">

            {/* Hero Section */}
            <section className="relative w-full max-w-7xl mx-auto px-4 pt-8">
                <HeroCarousel />
            </section>

            {/* Mission Section */}
            <section className="max-w-4xl mx-auto px-4 py-20">
                <div className="bg-white bg-opacity-50 rounded-3xl p-8 md:p-12 shadow-sm text-center">
                    <h2 className="text-3xl font-bold mb-6 text-primary">{missionData.title}</h2>
                    <p className="mb-6 font-medium text-gray-800">
                        {missionData.description}
                    </p>

                    {/* Updated Clean Bullet Points */}
                    <ul className="text-left space-y-4 max-w-2xl mx-auto font-medium text-gray-800">
                        {missionData.points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                {/* Sleek custom bullet using your secondary green brand color */}
                                <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0"></span>
                                <span className="leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </section>

            {/* What We Offer Section */}
            <section className="max-w-7xl mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-bold mb-10 text-primary">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offersData.map((offer) => (
                        <OfferCard key={offer.id} {...offer} />
                    ))}
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-10 text-primary">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {eventsData.map((event) => (
                        <UpcomingEventCard key={event.id} {...event} />
                    ))}
                </div>
            </section>

            {/* Who we work with Section */}
            <PartnerLogos partners={partnersData} />

        </main>
    );
>>>>>>> origin/main
}

export const revalidate = 60; // ISR: Revalidate ever
