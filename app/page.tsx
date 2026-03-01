import ReactMarkdown from "react-markdown";
import { getPageData } from "@/app/lib/contentParser";
import { LandingPageData } from "@/app/types/content";

export default async function Home() {
  const page = await getPageData<LandingPageData>("pages", "landing", [
    "welcomeMessage",
    "heroImage",
    "cta",
  ]);

  return (
    <div>
      <main>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">
              <img src="/logo-full.png" alt="Logo" className="h-17 w-auto" />
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-8">{page.welcomeMessage}</h1>

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
}

export const revalidate = 60; // ISR: Revalidate ever
