export const setAuthInfo = (data: any) => {
  if (typeof window !== "undefined") {
    const userInfo = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0ODQ5ZGNlLWQ1ZjctNGZlYi1hZDY4LWQ0NGExOGY2NzYzMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0MjY1NjE0OSwiZXhwIjoxNzU4MjA4MTQ5fQ.H2Dcjg-a7vZuEHBPuoG8Hur9S-tILk399e5SsDtKpNE",
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
    };
    localStorage.setItem("token", userInfo.token);
    localStorage.setItem("user", JSON.stringify(userInfo.user));
  }
};

export const getAuthInfo = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    console.log("user", user);
    return { token: token || "", user: user ? JSON.parse(user) : null };
  }
  return { token: "", user: null };
};

export const clearAuthInfo = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};
