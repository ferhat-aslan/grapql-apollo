import { ResolveFn } from '@angular/router';
import { RepositoryDetailService } from './repository-detail.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const repositoryDetailResolver: ResolveFn<Observable<any>> = (route, state) => {
 
  const _repositoryDetailService = inject(RepositoryDetailService)
  return _repositoryDetailService.getRepositoryDetail(String(route.params['repositoryOwner']),route.params['repository']);
};
