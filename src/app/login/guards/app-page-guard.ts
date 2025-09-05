import { CanActivateFn } from '@angular/router';

export const appPageGuard: CanActivateFn = (route, state) => {
  return true;
};
