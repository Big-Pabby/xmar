export interface UserStats {
  total_users: number;
  active_users: number;
  inactive_users: number;
  deleted_accounts: number;
}
export interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  profile_photo: string | null;
  date_joined: string;
  last_seen: string;
  no_of_trades: boolean;
  is_active: boolean;
}
export interface UserResponse {
  user_stats: UserStats;
  "users account details": UserData[];
}
export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}
