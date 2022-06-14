import { LoginRequest, LoginResponse } from "@auth/model";
import { api, BaseService } from "@services";

export class AuthService {
  constructor(public api: BaseService) {}

  login = (data: LoginRequest) => {
    console.log({data});
    return this.api.post<LoginRequest, LoginResponse>("/auth/login", data)
  }

  log = () => {
    console.log('Log')
  }
}

export const authService = new AuthService(api);
