import {Offer} from "@/app/components/OfferCard";
import {EventItem} from "@/app/components/UpcomingEventCard";

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
        imageUrl: '',
    },
    {
        id: 'offer-2',
        title: 'Support Groups',
        description: 'Safe, welcoming spaces for families to connect, share, and grow together.',
        imageUrl: '',
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
        month: 'Oct',
        day: '12',
        title: 'Womens Self-Care Workshop',
        description: 'Empowering well-being and confidence.',
        imageUrl: '',
        link: '#'
    },
    {
        id: 'event-2',
        month: 'Oct',
        day: '12',
        title: "Women's Kit Workshop",
        description: 'Empowering well-being and confidence.',
        imageUrl: '',
        link: '#'
    },
    {
        id: 'event-3',
        month: 'Oct',
        day: '12',
        title: 'Womens Self-Care Workshop',
        description: 'Empowering well-being and confidence.',
        imageUrl: '',
        link: '#'
    }
];