import { ResponseTemplate } from '@types';

export type ResponseDefaultFields = {
  id: number;
  created_at: string;
  updated_at: string;
};

export type RoleResponse = ResponseTemplate<
  {
    name: string;
    slug: string;
  } & ResponseDefaultFields
>;

export type ProfileResponse = ResponseTemplate<
  {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    role: RoleResponse;
  } & ResponseDefaultFields
>;
