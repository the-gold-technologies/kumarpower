import { create } from "zustand";
import { useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_CMS_API_URL || "";

interface PageState {
  loading: boolean;
  error: string | null;
  sections: Record<string, any>;
  seo?: any;
  fetched: boolean;
}

interface CMSState {
  pages: Record<string, PageState>;
  globalSEO: any;
  fetchPage: (slug: string) => Promise<void>;
  fetchGlobalSEO: () => Promise<void>;
}

export const useCMSStore = create<CMSState>((set, get) => ({
  pages: {},
  globalSEO: null,
  fetchGlobalSEO: async () => {
    if (get().globalSEO) return; // Already fetched
    try {
      const response = await fetch(`${API_BASE_URL}/api/seo/global`);
      if (response.ok) {
        const json = await response.json();
        if (json.success && json.data) {
          set({ globalSEO: json.data });
        }
      }
    } catch (err) {
      console.warn("Error fetching global SEO:", err);
    }
  },
  fetchPage: async (slug: string) => {
    const existing = get().pages[slug];
    if (existing?.loading || existing?.fetched) return;

    set((state) => ({
      pages: {
        ...state.pages,
        [slug]: {
          loading: true,
          error: null,
          sections: state.pages[slug]?.sections || {},
          fetched: false,
        },
      },
    }));

    try {
      // Try dedicated page route first (/api/home, /api/our-profile, etc), fallback to /api/pages/:slug
      let response = await fetch(`${API_BASE_URL}/api/${slug}`);
      if (!response.ok) {
        response = await fetch(`${API_BASE_URL}/api/pages/${slug}`);
      }
      if (!response.ok) {
        response = await fetch(`${API_BASE_URL}/api/seo/pages/${slug}`);
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch page data: ${response.statusText}`);
      }

      const json = await response.json();
      if (!json.success || !json.data) {
        throw new Error(json.error || "Invalid API response format");
      }

      const sectionsMap: Record<string, any> = {};
      if (Array.isArray(json.data.sections)) {
        for (const sec of json.data.sections) {
          sectionsMap[sec.type] = sec.content;
        }
      } else if (typeof json.data === "object") {
        Object.assign(sectionsMap, json.data);
      }

      const pageData =
        json.page ||
        (typeof json.data === "object" && !Array.isArray(json.data)
          ? json.data
          : {});

      set((state) => ({
        pages: {
          ...state.pages,
          [slug]: {
            loading: false,
            error: null,
            sections: sectionsMap,
            seo: {
              metaTitle: pageData.metaTitle,
              metaDescription: pageData.metaDescription,
              keywords: pageData.keywords,
              canonicalUrl: pageData.canonicalUrl,
              noIndex: pageData.noIndex,
              ogTitle: pageData.ogTitle,
              ogDescription: pageData.ogDescription,
              ogImage: pageData.ogImage,
              schema: pageData.schema,
              headingOptions: pageData.headingOptions,
            },
            fetched: true,
          },
        },
      }));
    } catch (err: any) {
      console.warn(`CMS Fetch Error for "${slug}":`, err.message);
      set((state) => ({
        pages: {
          ...state.pages,
          [slug]: {
            loading: false,
            error: err.message || "Unknown error",
            sections: state.pages[slug]?.sections || {},
            fetched: true,
          },
        },
      }));
    }
  },
}));

export function useSectionData<T>(
  pageSlug: string,
  sectionType?: string,
  defaultData?: T,
): { data: T; loading: boolean; error: string | null } {
  const pageState = useCMSStore((state) => state.pages[pageSlug]);
  const fetchPage = useCMSStore((state) => state.fetchPage);

  useEffect(() => {
    if (!pageState) {
      fetchPage(pageSlug);
    }
  }, [pageSlug, pageState, fetchPage]);

  const loading = pageState?.loading ?? true;
  const error = pageState?.error ?? null;
  const sectionContent = sectionType
    ? pageState?.sections?.[sectionType]
    : (pageState?.sections?.[pageSlug] ?? pageState?.sections);

  const data = (
    sectionContent
      ? defaultData
        ? { ...defaultData, ...sectionContent }
        : sectionContent
      : defaultData || {}
  ) as T;

  return { data, loading, error };
}

export function usePageHeadingTag(
  pageSlug: string,
): keyof JSX.IntrinsicElements {
  const pageState = useCMSStore((state) => state.pages[pageSlug]);
  const globalSEO = useCMSStore((state) => state.globalSEO);
  return (pageState?.seo?.headingOptions ||
    globalSEO?.headingOptions ||
    "h1") as keyof JSX.IntrinsicElements;
}
