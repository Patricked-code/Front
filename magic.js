const disabledMagic = {
  auth: {
    loginWithCredential: async () => null,
    loginWithSMS: async () => null,
    logout: async () => true,
  },
  user: {
    getMetadata: async () => ({ email: null, issuer: null, publicAddress: null }),
    isLoggedIn: async () => false,
    logout: async () => true,
  },
};

export const magic = disabledMagic;
