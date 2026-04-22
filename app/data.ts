import {Offer} from "@/app/components/OfferCard";
import {EventItem} from "@/app/components/UpcomingEventCard";
import {Partner} from "@/app/components/PartnerLogos";

export const missionData = {
    title: "Our Mission",
    description: "To promote social inclusion for the public benefit amongst primarily South Asian families, with a focus on women in the UK who are socially excluded on the grounds of their social and economic position, by providing:",
    points: [
        "Educational workshops and training on a variety of topics",
        "Practical support services and other related activities to assist with adapting within a new community",
        "A safe and welcoming environment to share experiences and build confidence",
        "Advocacy and raising awareness to highlight the needs of socially excluded families"
    ]
};

export const offersData: Offer[] = [
    {
        id: 'offer-1',
        title: 'Educational Workshops',
        description: 'Empowering parents and children through practical skill-building and emotional support sessions.',
        imageUrl: '/images/meeting.jpg',
    },
    {
        id: 'offer-2',
        title: 'Support Groups',
        description: 'Safe, welcoming spaces for families to connect, share, and grow together.',
        imageUrl: '/images/community.jpg',
    },
    {
        id: 'offer-3',
        title: 'Community Advocacy',
        description: 'We champion better resources and policies for families in need, amplifying their voices in the community.',
        imageUrl: '/images/fozia-award.jpg',
    }
];

export const eventsData: EventItem[] = [
    {
        id: 'event-1',
        month: 'May',
        day: '11',
        title: "Women's Badminton",
        description: 'Empowering well-being and confidence through sport',
        imageUrl: '/posters/badminton-poster.jpg',
        link: '#'
    },
    {
        id: 'event-2',
        month: 'May',
        day: '13',
        title: "Tea with Sisters",
        description: 'Tea, snacks and conversations',
        imageUrl: '/posters/tea-with-sisters-poster.jpg',
        link: '#'
    },
    {
        id: 'event-3',
        month: 'May',
        day: '16',
        title: 'Picnic in the park',
        description: 'Brunch, walk in the park and sight seeing together',
        imageUrl: '/posters/picnic-poster.jpg',
        link: '#'
    }
];

export const partnersData: Partner[] = [
    {
        id: 'partner-1',
        name: "Wandsworth Council",
        logoUrl: "/logos/Wandsworth_Council_logo.png",
        websiteUrl: "https://www.wandsworth.gov.uk/",
    },
    {
        id: 'partner-2',
        name: "NHS",
        logoUrl: "/logos/National_Health_Service_logo.png",
        websiteUrl: "https://www.england.nhs.uk/",
    },
    {
        id: 'partner-3',
        name: "WCA",
        logoUrl: "/logos/WCA_logo.png",
        websiteUrl: "https://www.wandsworthcarealliance.org.uk/",
    },
];