import { ResponseTemplate } from '@types';

export type ResponseDefaultFields = {
  id: number;
  created_at: string;
  updated_at: string;
};

export type RoleModel = {
  name: string;
  slug: string;
} & ResponseDefaultFields

export type RoleResponse = ResponseTemplate<RoleModel[]>;

export type ProfileModel = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: RoleResponse;
} & ResponseDefaultFields

export type ProfileResponse = ResponseTemplate<ProfileModel>;
