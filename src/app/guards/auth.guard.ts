import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiTokenEntryService } from '../modules/api-token-entry/api-token-entry.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _apiTokenEntryService: ApiTokenEntryService =
    inject(ApiTokenEntryService);
  const _router: Router = inject(Router);

  if (_apiTokenEntryService.apiToken) {
    return true;
  }
  _router.navigate(['/']);
  return false;
};
