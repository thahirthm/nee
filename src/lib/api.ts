import { useQuery, useMutation } from "@tanstack/react-query";

// Always call the backend directly — no proxy needed since the server accepts cross-origin requests
export const API_BASE_URL = "https://admin.nkefloor.com/api";

/* ==================== INTERFACES ==================== */

export interface BlogPost {
  id: number | string;
  title: string;
  image: string | null;
  short_description: string;
  date: string;
  formatted_date?: string;
  pdf_link?: string | null;
  slug: string;
  sequence?: number;
  created_at?: string;
  excerpt?: string;
  category?: string;
  author?: string;
  content?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number | string;
  name: string;
  designation: string;
  image?: string | null;
  text: string;
  youtube_link?: string | null;
  sequence?: number;
  created_at?: string;
}

export interface ProjectCategory {
  id: number;
  name: string;
  slug: string;
  sequence: number;
}

export interface Project {
  id: number | string;
  title: string;
  location: string;
  category: ProjectCategory | string | null;
  image: string | null;
  youtube_link?: string | null;
  audio?: string | null;
  short_description: string;
  sequence?: number;
  created_at?: string;
}

export interface ContactPayload {
  name: string;
  mail: string;
  number: string;
  subject: string;
  message: string;
  bot_check?: string;
  image_attachment?: File | null;
}

export interface SubscribePayload {
  email: string;
}

/* ==================== HELPERS ==================== */

async function apiFetch(path: string, options?: RequestInit): Promise<any> {
  const url = `${API_BASE_URL}/${path.replace(/^\//, "")}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout

  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        ...(options?.headers || {}),
      },
    });
    clearTimeout(timeout);
    return res;
  } catch (err: any) {
    clearTimeout(timeout);
    if (err.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw err;
  }
}

async function safeJson(res: Response): Promise<any> {
  try {
    const text = await res.text();
    return text ? JSON.parse(text) : {};
  } catch {
    return { message: `Server error (${res.status})` };
  }
}

/* ==================== API FUNCTIONS ==================== */

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await apiFetch("blogs/");
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((item: any) => ({
      ...item,
      excerpt: item.short_description || "",
      category: item.category || "Restoration",
      author: item.author || "NKE Floorcare Team",
    }));
  } catch {
    return [];
  }
}

export async function getBlogById(idOrSlug: string | number): Promise<BlogPost | null> {
  try {
    const res = await apiFetch(`blogs/${idOrSlug}/`);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      ...data,
      excerpt: data.short_description || "",
      category: data.category || "Restoration",
      author: data.author || "NKE Floorcare Team",
    };
  } catch {
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await apiFetch("testimonials/");
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function getProjects(category?: string | number): Promise<Project[]> {
  try {
    let path = "projects/";
    if (category && category !== "All") {
      path += `?category=${encodeURIComponent(category)}`;
    }
    const res = await apiFetch(path);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function getProjectById(id: string | number): Promise<Project | null> {
  try {
    const res = await apiFetch(`projects/${id}/`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function postContact(payload: ContactPayload) {
  try {
    let res: Response;

    if (payload.image_attachment) {
      const formData = new FormData();
      formData.append("name", payload.name || "");
      formData.append("mail", payload.mail || "");
      formData.append("number", payload.number || "");
      formData.append("subject", payload.subject || "");
      formData.append("message", payload.message || "");
      formData.append("bot_check", payload.bot_check || "");
      formData.append("image_attachment", payload.image_attachment);

      res = await apiFetch("contact/", {
        method: "POST",
        body: formData,
      });
    } else {
      res = await apiFetch("contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          mail: payload.mail,
          number: payload.number,
          subject: payload.subject,
          message: payload.message,
          bot_check: payload.bot_check || "",
        }),
      });
    }

    const data = await safeJson(res);
    return { ok: res.ok, status: res.status, data };
  } catch (err: any) {
    return { ok: false, status: 0, data: { message: err?.message || "Network error" } };
  }
}

export async function postSubscribe(payload: SubscribePayload) {
  try {
    const res = await apiFetch("subscribe/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: payload.email }),
    });
    const data = await safeJson(res);
    return { ok: res.ok, status: res.status, data };
  } catch (err: any) {
    return { ok: false, status: 0, data: { message: err?.message || "Network error" } };
  }
}

/* ==================== REACT QUERY HOOKS ==================== */

export function useBlogsQuery() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function useBlogDetailQuery(idOrSlug: string | number) {
  return useQuery({
    queryKey: ["blog", idOrSlug],
    queryFn: () => getBlogById(idOrSlug),
    enabled: Boolean(idOrSlug),
    retry: 1,
  });
}

export function useTestimonialsQuery() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function useProjectsQuery(category?: string | number) {
  return useQuery({
    queryKey: ["projects", category],
    queryFn: () => getProjects(category),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function useSubmitContactMutation() {
  return useMutation({
    mutationFn: postContact,
  });
}

export function useSubscribeMutation() {
  return useMutation({
    mutationFn: postSubscribe,
  });
}
