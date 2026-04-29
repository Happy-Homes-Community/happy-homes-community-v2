import React from 'react';
import BlogCard from '../components/BlogCard';
import { dummyBlogs } from "@/app/blog/blogData";

export default function BlogPage() {

    // Sort blogs by date (Newest first / Descending order)
    const sortedBlogs = [...dummyBlogs].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <main className="bg-base-100 font-sans min-h-screen pb-20">

            {/* Hero Section */}
            <section className="bg-neutral text-neutral-content py-20 px-8">
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Community Blog</h1>
                    <p className="text-xl text-neutral-content/80 max-w-2xl">
                        Latest news, upcoming events, and valuable resources for our families.
                    </p>
                    <div className="w-24 h-2 bg-secondary rounded-full mt-6 hidden md:block"></div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Map over our newly sorted array instead of the raw dummyBlogs */}
                    {sortedBlogs.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>

        </main>
    );
}