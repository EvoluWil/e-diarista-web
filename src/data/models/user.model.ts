import { ApiRoute } from './api-route.model';

export interface User {
  id?: string;
  passwordConfirmation?: string;
  newPassword?: string;
  userType: UserType;
  password?: string;
  lastSignIn?: Date;
  fullName: string;
  document: string;
  birthDate: string | Date;
  email: string;
  picture?: string;
  documentPicture?: string;
  phone?: string;
  rating?: number;
  pixKey: string;
  token?: {
    access: string;
    refresh: string;
  };
  routes?: ApiRoute[];
}

export enum UserType {
  Cliente = 1,
  Diarista = 2
}
