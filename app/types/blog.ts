export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    date: string;
    description: string;
    imageUrl: string;
    isPdf: boolean;
    pdfUrl?: string;
    content?: string; // Markdown or text for the actual webpage
};