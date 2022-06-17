import { RoleModel, RoleResponse } from "@model";
import { CreateRoleForm } from "@roles/model";
import { api, BaseService } from "@services";

export class RolesService {
  constructor(public api: BaseService) {}

  getRoles = () => this.api.get<RoleResponse>('/roles')

  getRole = (id: string) => this.api.get<RoleResponse>(`/roles/${id}`)

  addRole = (data: CreateRoleForm) => this.api.post<CreateRoleForm, RoleResponse>('/roles', data)

  updateRole = ({id, ...data}: RoleModel) => this.api.put<CreateRoleForm, RoleResponse>(`/roles/${id}`, data)
}

export const rolesService = new RolesService(api);
