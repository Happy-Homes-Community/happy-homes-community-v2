import {PageData} from "@/app/types/content";
import {getDocumentBySlug} from "outstatic/server";

/**
 * Generic function to fetch a single document with custom fields
 * @param collection - The collection name (e.g., 'pages', 'posts', 'testimonials')
 * @param slug - The slug of the document
 * @param fields - Array of fields to retrieve (optional - if not provided, fetches all)
 * @returns The document with requested fields
 *
 * @example
 * // Fetch with specific fields
 * const page = await getPageData<LandingPageData>('pages', 'landing', [
 *   'title',
 *   'welcomeMessage',
 *   'content',
 *   'heroImage'
 * ]);
 *
 * @example
 * // Fetch with default fields (includes content)
 * const page = await getPageData<LandingPageData>('pages', 'landing');
 */
export async function getPageData<T extends PageData>(
    collection: string,
    slug: string,
    fields?: string[]
): Promise<T> {
    // Default fields - always include these
    const defaultFields = [
        'title',
        'publishedAt',
        'status',
        'author',
        'slug',
        'content',
    ];

    // Merge provided fields with defaults, remove duplicates
    const fieldsToFetch = fields
        ? [...new Set([...defaultFields, ...fields])]
        : defaultFields;

    const document = await getDocumentBySlug(collection, slug, fieldsToFetch);

    return document as unknown as T;
}