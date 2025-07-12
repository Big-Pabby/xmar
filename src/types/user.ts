export interface User {
  id: number;
  full_name: string;
  profile_photo: string;
  last_login: string;
  free_transactions: number;
  last_transaction_reset: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  dob: string | null;
  location: string | null;
  is_password_changed: boolean;
  kyc_status: "unverified" | "pending" | "verified" | "rejected";
  is_activated: boolean;
  wallet_balance: string;
  gender: "male" | "female" | "other";
  status: "pending" | "active" | "suspended" | "inactive";
  is_kyc_tier_one_completed: boolean;
  is_kyc_tier_two_completed: boolean;
  kyc_tier_one_verification_code: string | null;
  kyc_tier_two_verification_code: string | null;
  is_superadmin: boolean;
  is_admin: boolean;
  admin_role: string | null;
  is_active: boolean;
  date_joined: string;
  last_seen: string;
  no_of_trades: number;
  nin_verified: boolean;
  bvn_verified: boolean;
  voters_card_verified: boolean;
  international_id_card_verified: boolean;
  drivers_license_verified: boolean;
  fcm_token: string;
  virtual_account_name: string | null;
  virtual_account_fullname: string | null;
  virtual_account_number: string | null;
  virtual_account_unique_id: string | null;
  virtual_account_status: string | null;
  virtual_account_reference: string | null;
  admin_auth_code: string | null;
  admin_auth_code_expiry: string | null;
  notifications: number[];
  token: string;
}

// Optional: Create a type for user creation/registration (without server-generated fields)
export interface CreateUserRequest {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  phone_number?: string;
  dob?: string;
  location?: string;
  gender?: "male" | "female" | "other";
}

// Optional: Create a type for user updates
export interface UpdateUserRequest {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  dob?: string;
  location?: string;
  gender?: "male" | "female" | "other";
  profile_photo?: string;
}

// Optional: Create a type for KYC verification
export interface KYCVerification {
  nin_verified: boolean;
  bvn_verified: boolean;
  voters_card_verified: boolean;
  international_id_card_verified: boolean;
  drivers_license_verified: boolean;
  kyc_status: "unverified" | "pending" | "verified" | "rejected";
  is_kyc_tier_one_completed: boolean;
  is_kyc_tier_two_completed: boolean;
}

// Optional: Create a type for virtual account details
export interface VirtualAccount {
  virtual_account_name: string | null;
  virtual_account_fullname: string | null;
  virtual_account_number: string | null;
  virtual_account_unique_id: string | null;
  virtual_account_status: string | null;
  virtual_account_reference: string | null;
}
