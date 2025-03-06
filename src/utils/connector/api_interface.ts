export interface ApiClientInterface {
  post: (url: string, data: any, config?: any) => any;
  get: (url: string, data: any) => any;
  put: (url: string, data: any) => any;
  delete: (url: string, data: any) => any;
}
