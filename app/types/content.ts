// Base interface - common to all pages
export interface BasePageData {
    title: string;
    publishedAt: string;
    status: 'published' | 'draft';
    author: {
        name: string;
        picture: string;
    };
    slug: string;
    content: string;
}


export interface LandingPageData extends BasePageData {
    welcomeMessage: string;
    heroImage?: string;
}

export interface AboutPageData extends BasePageData {
    teamMembers?: Array<{
        name: string;
        role: string;
        bio: string;
    }>;
    mission?: string;
    vision?: string;
}


// Union type for type safety
export type PageData = LandingPageData | AboutPageData ;