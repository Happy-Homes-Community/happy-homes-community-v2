import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';
import { dummyBlogs } from "@/app/blog/blogData";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {

    const resolvedParams = await params;

    const post = dummyBlogs.find((p) => p.slug === resolvedParams.slug);

    if (!post || post.isPdf) {
        notFound();
    }

    // Render the beautiful article page
    return (
        <main className="bg-base-100 font-sans pb-20">

            {/* Hero Banner (Uses the blog image!) */}
            <section className="relative w-full h-[40vh] min-h-[300px] bg-neutral">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold mb-6 transition-colors">
                            <ArrowLeft size={20} /> Back to Hub
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-2 text-secondary font-bold">
                            <Calendar size={18} /> {post.date}
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="max-w-4xl mx-auto px-8 py-16">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral/5">

                    {/* When you connect Outstatic CMS, you will replace this <p> tag
                        with <ReactMarkdown>{post.content}</ReactMarkdown>
                        just like we did on the homepage!
                    */}
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <p>{post.content}</p>
                    </div>

                </div>
            </section>

        </main>
    );
}