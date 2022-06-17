import { ResponseTemplate } from "@types";

export type LoginFormState = {
  email: string;
  password: string;
}

export type LoginRequest = {
  username: string;
  password: string;
}

export type LoginResponse = ResponseTemplate<{
  token: string;
}>