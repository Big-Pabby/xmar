import { useEffect, useRef } from "react";
import { useAuthStore } from "@/store/useStore";

const AUTO_LOGOUT_MINUTES = 30;
const AUTO_LOGOUT_MS = AUTO_LOGOUT_MINUTES * 60 * 1000;

export function useAutoLogout() {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const clearAuthInfo = useAuthStore((s) => s.clearAuthInfo);

  useEffect(() => {
    const resetTimer = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        clearAuthInfo();
        window.location.href = "/admin";
      }, AUTO_LOGOUT_MS);
    };

    // List of events that indicate user activity
    const events = [
      "mousemove",
      "mousedown",
      "keydown",
      "touchstart",
      "scroll",
    ];

    events.forEach((event) => window.addEventListener(event, resetTimer, true));

    resetTimer(); // Start timer on mount

    return () => {
      if (timer.current) clearTimeout(timer.current);
      events.forEach((event) =>
        window.removeEventListener(event, resetTimer, true)
      );
    };
  }, [clearAuthInfo]);
}
