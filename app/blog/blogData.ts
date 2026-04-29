import {BlogPost} from "@/app/types/blog";

export const dummyBlogs: BlogPost[] = [
    {
        id: "1",
        title: "How to Build a Resilient Home",
        slug: "how-to-build-resilient-home",
        date: "April 29, 2026",
        description: "A comprehensive guide on the tools and resources available to families facing socioeconomic challenges in our local area.",
        imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800&auto=format&fit=crop",
        isPdf: false,
        content: "This is where your CMS content will go! For now, imagine a beautifully written article here discussing resilience, community support, and practical steps families can take..."
    },
    {
        id: "2",
        title: "Happy Homes VE Day Report",
        slug: "hh-ve-day-report-2025",
        date: "June 1, 2025",
        description: "Find out how we celebrated VE Day with our community and the impact of our events.",
        imageUrl: "/blog/images/hh-ve-day-blog.png",
        isPdf: true,
        pdfUrl: "/blog/documents/VEDAYReport2025.pdf",
    },
    {
        id: "3",
        title: "Happy Homes Annual Report",
        slug: "hh-annual-report",
        date: "April 1, 2025",
        description: "View our detailed yearly report covering progress, initiatives, and community impact.",
        imageUrl: "/blog/images/hh-annual-report-blog.png",
        isPdf: true,
        pdfUrl: "/blog/documents/annualreport2025.pdf",
    }
];