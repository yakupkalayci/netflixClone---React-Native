export type User = {
  displayName: null;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: { creationTime: number; lastSignInTime: number };
  multiFactor: { enrolledFactors: [] };
  phoneNumber: null;
  photoURL: null;
  providerData: [[]];
  providerId: string;
  tenantId: null;
  uid: string;
};
