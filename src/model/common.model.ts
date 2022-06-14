export type ResponseTemplate<T> = {
  id: number;
  created_at: string;
  updated_at: string;
} & T

export type RoleResponse = ResponseTemplate<{
  name: string;
  slug: string;
}>

export type ProfileResponse = ResponseTemplate<{
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: RoleResponse;
}>