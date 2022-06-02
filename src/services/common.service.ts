import { StorageService, storageService } from './storage.service';
import { api, BaseService } from './base.service';

export type ProfileResponse = {
  student: {
    firstName: string;
    lastName: string;
    phone: string;
  }
}

class CommonService {
  constructor(public api: BaseService, public storageService: StorageService) {}
}

export const commonService = new CommonService(api, storageService);
