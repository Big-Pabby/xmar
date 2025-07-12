import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/user";

interface AuthState {
  user: User | null; // eslint-disable-line @typescript-eslint/no-explicit-any
  setAuthInfo: (user: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
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
