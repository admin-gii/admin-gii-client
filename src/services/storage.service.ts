const REFRESH_TOKEN = 'refreshToken';
const ACCESS_TOKEN = 'accessToken';

export class StorageService {
  setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return window.localStorage.getItem(key);
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }

  getRefreshToken = (): string => this.getItem(REFRESH_TOKEN);

  setRefreshToken = (token: string): void => this.setItem(REFRESH_TOKEN, token);

  removeRefreshToken = (): void => this.removeItem(REFRESH_TOKEN);

  getAccessToken = (): string => this.getItem(ACCESS_TOKEN);

  setAccessToken = (token: string): void => this.setItem(ACCESS_TOKEN, token);

  removeAccessToken = (): void => this.removeItem(ACCESS_TOKEN);

  setCookie(name: string, value: string, days: number = 2, path: string = '/'): void {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }

    const domain = window.location.host.split('.').splice(-2).join('.');

    const dir = path;
    document.cookie = `${name}=${
      value + expires
    }; domain=.${domain}; path=${dir}`;
  }

  getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ')
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0)
        return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  }

  deleteCookie = (name: string): void => {
    this.setCookie(name, '', -1);
  };
}

export const storageService = new StorageService();
