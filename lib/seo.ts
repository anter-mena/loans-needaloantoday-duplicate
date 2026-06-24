import { Metadata } from "next";

export const baseUrl = 'https://needaloantoday.ca';

/**
 * Generates canonical metadata for a given path.
 * @param path The path of the page (e.g., '/about', '/contact', or '/' for homepage)
 * @returns Metadata object with the canonical alternate
 */
export function getAlternateMetadata(path: string): Metadata["alternates"] {
  return {
    canonical: path,
  };
}

/**
 * Generates BreadcrumbList structured data.
 * @param items List of breadcrumb items with name and path
 * @returns JSON-LD object for BreadcrumbList
 */
export function getBreadcrumbSchema(items: { name: string, path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path.startsWith('/') ? item.path : `/${item.path}`}`
    }))
  };
}
