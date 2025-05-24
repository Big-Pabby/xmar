import { useQuery } from "react-query";
import { fetchKYCData } from "@/services/apiService";
import { KYCResponse } from "@/types/kyc";

interface KYCQueryParams {
  page: number;
  limit: number;
  search?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
}

export const useKYC = ({
  page,
  limit,
  search,
  status,
  startDate,
  endDate,
}: KYCQueryParams) => {
  return useQuery<KYCResponse, Error>({
    queryKey: ["kyc", page, limit, search, status, startDate, endDate],
    queryFn: () =>
      fetchKYCData(page, limit, { search, status, startDate, endDate }),
    keepPreviousData: true,
  });
};
