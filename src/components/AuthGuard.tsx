"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useStore";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration state
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return; // Wait for hydration to complete

    // Check if user is authenticated
    if (!user || !user.token) {
      // Redirect to admin login if not authenticated
      router.push("/admin");
    } else {
      setIsLoading(false);
    }
  }, [user, router, isHydrated]);

  // Show loading state while checking authentication or during hydration
  if (!isHydrated || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render children
  if (!user || !user.token) {
    return null;
  }

  // If authenticated, render children
  return <>{children}</>;
};

export default AuthGuard;
