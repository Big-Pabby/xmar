"use client";
import React, { useState, Suspense } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useQuery } from "react-query";
import { get_admin_legals } from "@/services/apiService";
import { Blog } from "@/types/blog";
import { useLegalStore } from "@/store/useStore";
import { useSearchParams } from "next/navigation";
import SkeletonCard from "@/components/Skeleton";

const PageContent = () => {
  const formatSlug = (slug: string) => {
    const decoded = decodeURIComponent(slug);
    return decoded
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  const searchParams = useSearchParams();
  const slug = searchParams.get("legal");
  const formattedSlug = formatSlug(slug as string);
  const [currentNav, setCurrentNav] = useState<string>(
    formattedSlug || "Consent Agreement"
  );
  const nav: string[] = [
    "Consent Agreement",
    "Dispute Resolution",
    "Terms and Condition",
    "Privacy Policy",
    "Anti-money laundering",
  ];
  const { legals, setLegals } = useLegalStore();

  // Fetch legals using React Query
  const { data: fetchedLegals, isLoading } = useQuery<Blog[]>({
    queryKey: ["legals"],
    queryFn: get_admin_legals,
    // Only fetch if no cached data or cache is stale
    onSuccess: (data) => {
      setLegals(data); // Cache the fetched legals
    },
  });
  const legalsData = legals.length > 0 ? legals : fetchedLegals || [];

  // Filter legals by current navigation
  const filteredLegals =
    legalsData?.filter((legal) => legal.category === currentNav) || [];
  return (
    <>
      <NavBar />
      <div className="bg-[#FDFBF7] flex lg:flex-row flex-col gap-12 relative min-h-screen md:px-20 px-5 py-20">
        <div className="sticky lg:w-[272px] w-full flex-wrap lg:top-20 lg:left-20 bg-white lg:h-screen overflow-y-auto p-[16px] flex lg:flex-col gap-4">
          {nav.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentNav(item)}
              className={`${
                item === currentNav ? "bg-primary text-white" : "bg-white"
              } rounded-[10px] hover:bg-primary hover:text-white px-[10px] py-[8px] cursor-pointer h-[40px] transition-all duration-200 ease-in-out lg:w-full`}
            >
              {item}
            </div>
          ))}
        </div>
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center">
            <SkeletonCard />
          </div>
        ) : (
          filteredLegals.length && (
            <div
              dangerouslySetInnerHTML={{ __html: filteredLegals[0].message }}
              className=" flex-1 bg-white h-screen overflow-y-auto w-full p-12"
            />
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
