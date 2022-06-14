export type LoginFormState = {
  email: string;
  password: string;
}

export type LoginRequest = {
  username: string;
  password: string;
}

export type LoginResponse = {
  token: string;
}