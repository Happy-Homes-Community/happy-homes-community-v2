import ReactMarkdown from 'react-markdown';
import {getPageData} from "@/app/lib/contentParser";
import {LandingPageData} from "@/app/types/content";

export default async function Home() {
    const page = await getPageData<LandingPageData>('pages', 'landing', [
        'welcomeMessage',
        'heroImage',
        'cta',
    ]);


    return (
        <main className="min-h-screen bg-base-100 font-sans pb-16">

            {/* Hero Section */}
            <section className="relative w-full max-w-7xl mx-auto px-4 pt-8">
                {/* Main Hero Image Placeholder */}
                <div className="relative w-full h-[500px] bg-gray-200 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center px-4 shadow-lg">
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Optional overlay */}
                    <div className="relative z-10 text-white space-y-4 max-w-2xl">
                        <h1 className="text-5xl font-bold tracking-tight">Welcome to Happy Homes</h1>
                        <p className="text-xl font-medium">Empowering families with care, support, and community connection.</p>
                    </div>
                </div>

                {/* Floating Hero Cards */}
                <div className="relative -mt-16 z-20 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    <div className="bg-secondary text-secondary-content rounded-2xl p-6 shadow-md flex items-center gap-4">
                        <div className="w-24 h-24 bg-white/50 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-800">Image</div>
                        <h3 className="text-xl font-bold text-gray-800">Support That Matters:<br/><span className="text-base font-normal">Workshops and safe spaces for growth</span></h3>
                    </div>
                    <div className="bg-secondary text-secondary-content rounded-2xl p-6 shadow-md flex items-center gap-4">
                        <div className="w-24 h-24 bg-white/50 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-800">Image</div>
                        <h3 className="text-xl font-bold text-gray-800">Together We Rise:<br/><span className="text-base font-normal">Advocating for resilient families</span></h3>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="max-w-4xl mx-auto px-4 py-20">
                <div className="bg-white bg-opacity-50 rounded-3xl p-8 md:p-12 shadow-sm text-center">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                    <p className="mb-6 font-medium text-gray-800">
                        To promote social inclusion for the public benefit amongst primarily South Asian families, with a focus on women in the UK who are socially excluded on the grounds of their social and economic position, by providing:
                    </p>
                    <ul className="text-left space-y-4 max-w-2xl mx-auto font-medium text-gray-800">
                        <li className="flex gap-3"><span>✅</span> Educational workshops and training on a variety of topics</li>
                        <li className="flex gap-3"><span>✅</span> Practical support services and other related activities to assist with adapting within a new community</li>
                        <li className="flex gap-3"><span>✅</span> A safe and welcoming environment to share experiences and build confidence</li>
                        <li className="flex gap-3"><span>✅</span> Advocacy and raising awareness to highlight the needs of socially excluded families</li>
                    </ul>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="max-w-7xl mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-bold mb-10 text-primary">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="card bg-white shadow-xl">
                        <figure className="h-48 bg-gray-200 flex items-center justify-center text-gray-600">Image Placeholder</figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Educational Workshops</h2>
                            <p className="text-gray-700">Empowering parents and children through practical skill-building and emotional support sessions.</p>
                        </div>
                    </div>

                    <div className="card bg-white shadow-xl">
                        <figure className="h-48 bg-gray-200 flex items-center justify-center text-gray-600">Image Placeholder</figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Support Groups</h2>
                            <p className="text-gray-700">Safe, welcoming spaces for families to connect, share, and grow together</p>
                        </div>
                    </div>


                    {/* Card 3 */}
                    <div className="card bg-white shadow-xl">
                        <figure className="h-48 bg-gray-200 flex items-center justify-center text-gray-600">Image Placeholder</figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Community Advocacy</h2>
                            <p className="text-gray-700">We champion better resources and policies for families in need, amplifying their voices in the community.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-10 text-primary">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Event Card 1 */}
                    <div className="card bg-white shadow-sm border border-primary/20">
                        <div className="card-body text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary text-white p-3 rounded-lg text-center leading-none">
                                    <span className="block text-sm font-bold uppercase">Oct</span>
                                    <span className="block text-2xl font-bold">12</span>
                                </div>
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-600">Image</div>
                            </div>
                            <h3 className="card-title text-lg text-primary">Womens Self-Care Workshop</h3>
                            <p className="text-sm mt-2 text-gray-700">Empowering well-being and confidence.</p>
                            <div className="card-actions justify-start mt-4">
                                <button className="text-primary font-bold hover:underline">Read More</button>
                            </div>
                        </div>
                    </div>

                    {/* Event Card 2 */}
                    <div className="card bg-white shadow-sm border border-primary/20">
                        <div className="card-body text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary text-white p-3 rounded-lg text-center leading-none">
                                    <span className="block text-sm font-bold uppercase">Oct</span>
                                    <span className="block text-2xl font-bold">12</span>
                                </div>
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-600">Image</div>
                            </div>
                            <h3 className="card-title text-lg text-primary">Women's Kit Workshop</h3>
                            <p className="text-sm mt-2 text-gray-700">Empowering well-being and confidence.</p>
                            <div className="card-actions justify-start mt-4">
                                <button className="text-primary font-bold hover:underline">Read More</button>
                            </div>
                        </div>
                    </div>

                    {/* Event Card 3 */}
                    <div className="card bg-white shadow-sm border border-primary/20">
                        <div className="card-body text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary text-white p-3 rounded-lg text-center leading-none">
                                    <span className="block text-sm font-bold uppercase">Oct</span>
                                    <span className="block text-2xl font-bold">12</span>
                                </div>
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-600">Image</div>
                            </div>
                            <h3 className="card-title text-lg text-primary">Womens Self-Care Workshop</h3>
                            <p className="text-sm mt-2 text-gray-700">Empowering well-being and confidence.</p>
                            <div className="card-actions justify-start mt-4">
                                <button className="text-primary font-bold hover:underline">Read More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}

export const revalidate = 60; // ISR: Revalidate ever