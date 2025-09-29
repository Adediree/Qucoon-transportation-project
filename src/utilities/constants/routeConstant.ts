export const RouteConstant = {
  auth: {
    login: {
      name: "",
      path: "/auth/login",
    },
    verifyOtp: {
      name: "",
      path: "/auth/verify-otp",
    },
    signup: {
      name: "",
      path: "/auth/signup",
    },
    completeSignup: {
      name: "",
      path: "/auth/complete-signup",
    },
    changePassword: {
      name: "",
      path: "/auth/change-password",
    },
    resetPassword: {
      name: "",
      path: "/auth/reset-password",
    },
    completeResetPassword: {
      name: "",
      path: "/auth/complete-reset-password",
    },
  },

  screens: {
    landingPage: {
      name: "",
      path: "/screens/landing-page",
    },
  },

  dashboard: {
    getStarted: {
      name: "",
      path: "/",
    },
    createDummy: {
      path: "/dashboard/create-dummy",
      name: "Dashboard Create Dummy",
      moduleName: "Dummy",
    },
    allDummies: {
      path: "/dashboard/all-dummies",
      name: "All Dummies",
      moduleName: "Dummy",
    },
    issue: {
      path: "/dashboard/issue",
      name: "Issue",
      moduleName: "Issue",
    },
    allLetterOfCredit: {
      path: "/dashboard/issue/all-letter-of-credit",
      name: "All letter of credit",
      moduleName: "Issue",
    },
    createLoanProducts: {
      path: "/dashboard/loan-products/create",
      name: "Create Loan Products",
      moduleName: "Loan Products",
    },
  },
};
