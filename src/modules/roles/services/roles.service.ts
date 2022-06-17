import { RoleResponse } from "@model";
import { CreateRoleForm } from "@roles/model";
import { api, BaseService } from "@services";

export class RolesService {
  constructor(public api: BaseService) {}

  getRoles = () => this.api.get<RoleResponse>('/roles')

  addRole = (data: CreateRoleForm) => this.api.post<CreateRoleForm, RoleResponse>('/roles', data)
}

export const rolesService = new RolesService(api);
