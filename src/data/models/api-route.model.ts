export interface ApiRoute {
  type: 'GET' | 'POST' | 'PUT' | 'DELETE';
  uri: string;
  rel: string;
}
