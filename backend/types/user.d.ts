import { Request } from 'express';

export interface IUserPayload {
  id: string;
  email: string;
  role: 'MEMBER' | 'ADMIN' | 'SUPER_ADMIN';
}

export interface IUserRequest extends Request {
  user?: IUserPayload;
}
