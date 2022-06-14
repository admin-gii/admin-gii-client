import { api, BaseService } from './base.service';
import { ProfileResponse } from '@model';

class CommonService {
  constructor(public api: BaseService) {}

  getMe = () => this.api.get<ProfileResponse>("/auth/me")
}

export const commonService = new CommonService(api);
