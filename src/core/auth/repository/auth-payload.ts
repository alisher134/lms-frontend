export type SignUpPayload = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};
