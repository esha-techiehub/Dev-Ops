import type { SearchResult } from "@/types";
import { modules } from "@/data/modules";

export function searchContent(query: string): SearchResult[] {
  if (!query || query.length < 2) {
    return [];
  }

  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();

  // Search modules
  modules.forEach((module) => {
    if (
      module.title.toLowerCase().includes(lowerQuery) ||
      module.description.toLowerCase().includes(lowerQuery) ||
      module.topics.some((topic) => topic.toLowerCase().includes(lowerQuery))
    ) {
      results.push({
        title: module.title,
        slug: `/modules/${module.slug}`,
        excerpt: module.description,
        type: "module",
      });
    }
  });

  // Add more search sources here (labs, commands, etc.)
  
  return results.slice(0, 10); // Limit to 10 results
}

export function highlightText(text: string, query: string): string {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}
