"use client";
import Image from "next/image";
import Link from "next/link";
import { FiChevronsLeft, FiUsers } from "react-icons/fi";
import { LuLayoutGrid, LuWallet } from "react-icons/lu";
import { HiOutlineCreditCard, HiDotsVertical } from "react-icons/hi";
import { TbArrowsExchange2, TbReceipt } from "react-icons/tb";
import React from "react";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/useStore";

// Defined menu items with icons
const admin_side_menu = [
  { href: "/admin/dashboard", icon: <LuLayoutGrid />, label: "Dashboard" },
  { href: "/admin/kyc", icon: <FiUsers />, label: "KYC Verification" },
  { href: "/admin/users", icon: <FiUsers />, label: "User Logs" },
  {
    href: "/admin/escrow",
    icon: <FiUsers />,
    label: "Escrow Overview",
  },
  { href: "/admin/dispute", icon: <LuWallet />, label: "Dispute Resolution" },
  {
    href: "/admin/transactions",
    icon: <TbArrowsExchange2 />,
    label: "Transaction",
  },
  { href: "/admin/blogs", icon: <TbReceipt />, label: "Blogs" },
  { href: "/admin/admin-profile", icon: <FiUsers />, label: "Admin Profiles" },
  { href: "/admin/legals", icon: <FiUsers />, label: "Legals" },
];
const business_side_menu = [
  { href: "/business/dashboard", icon: <LuLayoutGrid />, label: "Dashboard" },

  {
    href: "/business/managements",
    icon: <HiOutlineCreditCard />,
    label: "Escrow Overview",
  },
  { href: "/business/subscription", icon: <LuWallet />, label: "Finance" },
  {
    href: "/business/products",
    icon: <TbArrowsExchange2 />,
    label: "Transaction",
  },
  {
    href: "/business/notification",
    icon: <TbReceipt />,
    label: "Notifications",
  },
  { href: "/business/chats", icon: <FiUsers />, label: "Chats & Support" },
];

const SideBar = ({ type }: { type: string }) => {
  const user = useAuthStore((state) => state.user);
  const get_which_menu = () =>
    type === "Admin" ? admin_side_menu : business_side_menu;
  const pathname = usePathname();

  return (
    <div className="fixed w-[275px] z-[120] top-0 h-[100vh] left-0 bg-white py-8 px-6">
      {/* Logo and Collapse Button */}
      <div className="flex justify-between items-center mb-8">
        <Image
          src="/images/Logo.svg"
          alt="Hairsby logo"
          width={200}
          height={32}
        />
        <div className="bg-[#F1F2F4] rounded-[6px] p-[6px] text-[20px]">
          <FiChevronsLeft />
        </div>
      </div>

      {/* Menu Items mapped from the SideMenu Array above */}
      <div className="flex flex-col gap-1">
        {get_which_menu().map(({ href, icon, label }, index) => (
          <Link
            key={index}
            href={`${href}`}
            className={` ${
              pathname === `${href}`
                ? "bg-primary text-white hover:bg-primary  hover:text-white  py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3 cursor-pointer"
                : "text-[#505766] hover:bg-primary  hover:text-white  py-[8px] md:font-bold font-medium px-[10px] rounded-[8px] flex items-center gap-3 cursor-pointer"
            }`}
          >
            {/* Applied class dynamically to icons */}
            {React.cloneElement(icon, { className: "text-[24px]" })}{" "}
            <h4>{label}</h4>
          </Link>
        ))}
      </div>

      {/* Profile Section */}
      <div className="absolute w-full bottom-0 left-0 border-t-[1px] border-[#E8E8E9] p-[16px]">
        <div className="w-full border-[1px] border-[#E8E8E9] rounded-[12px] p-[12px] flex justify-between gap-4 items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src={user.profile_photo || "/images/default-profile.png"}
                alt="Profile Image"
                className="rounded-full"
                width={34}
                height={34}
              />
              <div className="absolute right-0 bottom-0 w-[10px] h-[10px] rounded-full bg-[#15AC77]"></div>
            </div>
            <div>
              <h4 className="font-medium">{user.full_name}</h4>
              <h5 className="font-medium text-[#707A8F]">
                {user.is_superadmin ? "SuperAdmin" : "Admin"}
              </h5>
            </div>
          </div>
          <HiDotsVertical className="text-[16px] text-[#707A8F]" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
