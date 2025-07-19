import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/user";
import { Blog } from "@/types/blog";

interface AuthState {
  user: User | null;
  setAuthInfo: (user: User) => void;
  clearAuthInfo: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setAuthInfo: (user) => set({ user }),
      clearAuthInfo: () => set({ user: null }),
    }),
    {
      name: "auth-storage", // unique name for localStorage key
      partialize: (state) => ({ user: state.user }), // only persist user data
    }
  )
);

interface BlogState {
  blogs: Blog[];
  lastFetched: number | null;
  setBlogs: (blogs: Blog[]) => void;
  addBlog: (blog: Blog) => void;
  updateBlog: (id: string, blog: Blog) => void;
  removeBlog: (id: string) => void;
  clearBlogs: () => void;
  isStale: () => boolean; // Check if cache is older than 5 minutes
}

export const useBlogStore = create<BlogState>()(
  persist(
    (set, get) => ({
      blogs: [],
      lastFetched: null,
      setBlogs: (blogs) => set({ blogs, lastFetched: Date.now() }),
      addBlog: (blog) =>
        set((state) => ({
          blogs: [...state.blogs, blog],
        })),
      updateBlog: (id, blog) =>
        set((state) => ({
          blogs: state.blogs.map((b) => (b.id === id ? blog : b)),
        })),
      removeBlog: (id) =>
        set((state) => ({
          blogs: state.blogs.filter((b) => b.id !== id),
        })),
      clearBlogs: () => set({ blogs: [], lastFetched: null }),
      isStale: () => {
        const { lastFetched } = get();
        if (!lastFetched) return true;
        // Cache is stale if older than 5 minutes
        return Date.now() - lastFetched > 5 * 60 * 1000;
      },
    }),
    {
      name: "blog-storage",
      partialize: (state) => ({
        blogs: state.blogs,
        lastFetched: state.lastFetched,
      }),
    }
  )
);

interface LegalState {
  legals: Blog[];
  lastFetched: number | null;
  setLegals: (legals: Blog[]) => void;
  addLegal: (legal: Blog) => void;
  updateLegal: (id: string, legal: Blog) => void;
  removeLegal: (id: string) => void;
  clearLegals: () => void;
  isStale: () => boolean; // Check if cache is older than 5 minutes
}

export const useLegalStore = create<LegalState>()(
  persist(
    (set, get) => ({
      legals: [],
      lastFetched: null,
      setLegals: (legals) => set({ legals, lastFetched: Date.now() }),
      addLegal: (legal) =>
        set((state) => ({
          legals: [...state.legals, legal],
        })),
      updateLegal: (id, legal) =>
        set((state) => ({
          legals: state.legals.map((l) => (l.id === id ? legal : l)),
        })),
      removeLegal: (id) =>
        set((state) => ({
          legals: state.legals.filter((l) => l.id !== id),
        })),
      clearLegals: () => set({ legals: [], lastFetched: null }),
      isStale: () => {
        const { lastFetched } = get();
        if (!lastFetched) return true;
        // Cache is stale if older than 5 minutes
        return Date.now() - lastFetched > 5 * 60 * 1000;
      },
    }),
    {
      name: "legal-storage",
      partialize: (state) => ({
        legals: state.legals,
        lastFetched: state.lastFetched,
      }),
    }
  )
);
