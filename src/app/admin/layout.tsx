"use client";

import SideBar from "@/components/SideBar";
import AuthGuard from "@/components/AuthGuard";
import { FaPlus } from "react-icons/fa6";
import { LuCalendar1 } from "react-icons/lu";
import { TbMessage2 } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useAutoLogout } from "@/hooks/useAutoLogout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAutoLogout(); // <-- Call this at the top, before any returns
  const pathname = usePathname();
  const isAdminRoot = pathname === "/admin" || pathname === "/admin/otp";

  // Return just the children if we're on the admin root page (login/OTP)
  if (isAdminRoot) {
    return <div className="w-full">{children}</div>;
  }

  // Wrap protected admin pages with AuthGuard
  return (
    <AuthGuard>
      <div className="">
        <div className="fixed z-[100] top-0 left-0 pl-[275px] w-full bg-[#f8f8f9] ">
          <div className="p-[32px] flex justify-between items-center">
            <div></div>
            <div className="flex items-center gap-6">
              <div className="bg-primary p-[6px] rounded-[6px]">
                <FaPlus className="text-[20px] text-white" />
              </div>
              <LuCalendar1 className="text-[24px] text-[#505766]" />
              <div className="relative">
                <TbMessage2 className="text-[24px] text-[#505766]" />
                <div className="absolute bg-[#FE5B65] -top-2 -right-3 py-[2px] px-[6px] text-white text-[10px] font-semibold rounded-[100px]">
                  99
                </div>
              </div>
              <div className="relative">
                <IoNotificationsOutline className="text-[24px] text-[#505766]" />
                <div className="absolute bg-[#FE5B65] -top-2 -right-3 py-[2px] px-[6px] text-white text-[10px] font-semibold rounded-[100px]">
                  99
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideBar type="Admin" />
        <div className="ml-[275px] px-[32px]">{children}</div>
      </div>
    </AuthGuard>
  );
}
