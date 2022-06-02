import { api, BaseService } from "@services";

export class AuthService {
  constructor(public api: BaseService) {}
}

export const authService = new AuthService(api);
