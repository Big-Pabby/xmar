export interface VerifiedAccounts {
  tier_one: number;
  tier_two: number;
}

export interface KYCStats {
  total_users: number;
  verified_accounts: VerifiedAccounts;
  pending_accounts: number;
}
export interface UserKYCData {
  first_name: string;
  last_name: string;
  email: string;
  profile_photo: string | null;
  date_joined: string;
  last_seen: string;
  is_kyc_tier_one_completed: boolean;
  is_kyc_tier_two_completed: boolean;
}
export interface KYCResponse {
  user_stats: KYCStats;
  "users account details": UserKYCData[];
}
export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}
