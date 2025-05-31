import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
  setAuthInfo: (token: string, user: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  clearAuthInfo: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: 'a57cca97ba782c239ad68491d677ea56110f16a6',
  user: {
    id: "a4849dce-d5f7-4feb-ad68-d44a18f67631",
    firstName: "Jane",
    lastName: "Smith",
    email: "hairsby@gmail.com",
    phone: "1234567890",
    role: "admin",
    photo: null,
    dob: null,
    address: "123 Main Street",
    businessName: null,
    businessAddress: null,
    country: "USA",
    city: "New York",
    postcode: "10001",
    latitude: null,
    longitude: null,
    rating: 0,
    totalReviews: 0,
    typeOfService: null,
    referralCode: "SMIT6049",
    referralCount: 0,
    referralRewards: "0.00",
    signupReward: "0.00",
    accentColor: "#F9A000",
    isEmailVerified: true,
    emailVerificationToken: null,
    emailVerificationExpiry: null,
    status: "active",
    isKycVerified: false,
    kycStatus: "pending",
    kycLevel: 0,
    kycRejectionReason: null,
    gallery: [],
    stripeCustomerId: null,
    googleId: null,
    googleAccessToken: null,
    googleRefreshToken: null,
    lastSeen: "2025-03-22T09:59:21.242Z",
    metadata: {},
    campaignId: null,
    cohortId: null,
  },
  setAuthInfo: (token, user) => set({ token, user }),
  clearAuthInfo: () => set({ token: null, user: null }),
}));
