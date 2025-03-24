"use client";

const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-400 animate-pulse rounded-md ${className}`}
    />
  );
};

const SkeletonCard = () => {
  return (
    <div className="p-4 space-y-4 border h-full bg-secondary rounded-[12px] w-full">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export default SkeletonCard;
