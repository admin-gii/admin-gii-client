import { RoleResponse } from "@model";
import { api, BaseService } from "@services";

export class RolesService {
  constructor(public api: BaseService) {}

  getRoles = () => this.api.get<RoleResponse>('/roles')
}

export const rolesService = new RolesService(api);
