import { create } from "zustand";

interface AuthState {
  user: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
  setAuthInfo: (user: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  clearAuthInfo: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: {
    id: 63,
    full_name: "John Doe",
    profile_photo:
      "https://www.shutterstock.com/image-vector/empty-photo-male-profile-gray-260nw-538707310.jpg",
    last_login: "Jun 18, 2025 - 10:57 AM",
    free_transactions: 3,
    last_transaction_reset: "Jun 18, 2025 - 10:50 AM",
    email: "victoradekunle312@gmail.com",
    first_name: "John",
    last_name: "Doe",
    phone_number: null,
    dob: null,
    location: null,
    is_password_changed: false,
    kyc_status: "unverified",
    is_activated: true,
    wallet_balance: "0.00",
    gender: "male",
    status: "pending",
    is_kyc_tier_one_completed: false,
    is_kyc_tier_two_completed: false,
    kyc_tier_one_verification_code: null,
    kyc_tier_two_verification_code: null,
    is_superadmin: false,
    is_admin: true,
    admin_role: "Frontend Developer",
    is_active: true,
    date_joined: "May 27, 2025 - 02:03 PM",
    last_seen: "May 27, 2025 - 02:04 PM",
    no_of_trades: 0,
    nin_verified: false,
    bvn_verified: false,
    voters_card_verified: false,
    international_id_card_verified: false,
    drivers_license_verified: false,
    fcm_token:
      "fndAFowfRyWcOEXgwt5E3S:APA91bFom4Bh3oOPxotINUcH1N0JeA4yi-on_wDRiIX9dORxDenqtY1APhTYpS6AdwStBgOk7du-E9vSE6CnxDRE8KhgYY0lS2ZLye7LjAlPnZX3QMfKpew",
    virtual_account_name: null,
    virtual_account_fullname: null,
    virtual_account_number: null,
    virtual_account_unique_id: null,
    virtual_account_status: null,
    virtual_account_reference: null,
    admin_auth_code: null,
    admin_auth_code_expiry: null,
    notifications: [305, 304, 285, 281],
    token: "a57cca97ba782c239ad68491d677ea56110f16a6",
  },
  setAuthInfo: (user) => set({ user }),
  clearAuthInfo: () => set({ user: null }),
}));
