import { Error } from './error';
import { User } from './user';

export type Auth = {
  user?: User;
  error?: Error;
  isAuthenticated?: boolean;
  loading?: boolean;
  isAuthReady: boolean;
};
