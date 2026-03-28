import { useState, useEffect } from "react";
import { SiteContent } from "../types/content";
import { mockContent } from "../content/mockContent";

/**
 * useSiteContent hook for easy access to site content in components.
 * This is a simple implementation that uses local mock data.
 * In a real CMS integration, this would handle loading states and 
 * fetch data from the ContentService.
 */
export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(mockContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // In a real CMS integration, this would fetch data from the ContentService
  useEffect(() => {
    // Simulate fetching
    setIsLoading(true);
    // In the future: contentService.getSiteContent().then(setContent).catch(setError).finally(() => setIsLoading(false));
    setContent(mockContent);
    setIsLoading(false);
  }, []);

  return { content, isLoading, error };
}
