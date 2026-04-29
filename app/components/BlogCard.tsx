import React from 'react';
import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import {BlogPost} from "@/app/types/blog";


export default function BlogCard({ post }: { post: BlogPost }) {

    const isPdfLink = post.isPdf && post.pdfUrl;

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-neutral/5 overflow-hidden flex flex-col hover:shadow-lg transition-all group">
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Visual badge if it's a PDF */}
                {post.isPdf && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <FileText size={14} /> PDF Download
                    </div>
                )}
            </div>

            {/* Content Box */}
            <div className="p-6 flex flex-col flex-grow">
                <span className="text-secondary font-bold text-sm mb-2">{post.date}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                    {post.description}
                </p>

                {/* The Smart Link */}
                {isPdfLink ? (
                    <a
                        href={post.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                    >
                        Download File <ArrowRight size={18} />
                    </a>
                ) : (
                    <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                    >
                        Read Article <ArrowRight size={18} />
                    </Link>
                )}
            </div>
        </div>
    );
}