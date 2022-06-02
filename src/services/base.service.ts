import { config } from 'src/config';

export type BaseServiceOptions = { baseURL?: string; headers?: Record<string, string>};

export type FetchJsonOptions = {
  parseResponse?: boolean
} & RequestInit

export type RequestConfig = Omit<RequestInit, 'method' | 'body' >;

export class BaseService {
  private _baseURL: string;
  private _headers: Record<string, string>;
  constructor(options: BaseServiceOptions) {
    this._baseURL = options.baseURL || '';
    this._headers = options.headers || {};
  }

  _fetchJSON = async (endpoint: string, options: FetchJsonOptions = {}) => {
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers
    });

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return undefined;
  };

  setBasicAuth = (token: string): BaseService => {
    this._headers.Authorization = `${token}`;
    return this;
  };

  setHeader = (key: string, value: string): BaseService => {
    this._headers[key] = value;
    return this;
  };

  get = <T>(endpoint: string, options: RequestConfig = {}): Promise<T> => {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'GET'
    });
  };

  post = <T>(endpoint: string, body: BodyInit, options: RequestConfig = {}): Promise<T> => {
    const isFormData = body instanceof FormData;
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'POST'
    });
  };

  patch = <T>(endpoint: string, body: BodyInit, options: RequestConfig = {}): Promise<T> => {
    const isFormData = body instanceof FormData;
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'PATCH'
    });
  };

  put = <T>(endpoint: string, body: BodyInit, options: RequestConfig = {}): Promise<T> => {
    const isFormData = body instanceof FormData;
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'PUT'
    });
  };

  delete = <T>(endpoint: string, body: BodyInit, options: RequestConfig = {}): Promise<T> => {
    const isFormData = body instanceof FormData;
    return this._fetchJSON(endpoint, {
      ...options,
      body: isFormData ? body : JSON.stringify(body),
      method: 'DELETE'
    });
  };
}

export const api = new BaseService({
  baseURL: `${config.apiUrl}/v1`,
  headers: {
    'client-id': config.clientId
  }
});
