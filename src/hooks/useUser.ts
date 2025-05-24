import { useQuery } from "react-query";
import { get_users } from "@/services/apiService";
import { UserResponse } from "@/types/users";

interface KYCQueryParams {
  page: number;
  limit: number;
  search?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
}

export const useUser = ({
  page,
  limit,
  search,
  status,
  startDate,
  endDate,
}: KYCQueryParams) => {
  return useQuery<UserResponse, Error>({
    queryKey: ["kyc", page, limit, search, status, startDate, endDate],
    queryFn: () =>
      get_users(page, limit, { search, status, startDate, endDate }),
    keepPreviousData: true,
  });
};
