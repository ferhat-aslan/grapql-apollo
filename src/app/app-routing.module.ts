import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/api-token-entry/api-token-entry.module').then(
        (m) => m.ApiTokenEntryModule
      ),
  },
   {
    path: 'repositories',
    canActivate:[authGuard],
    loadChildren: () =>
      import('./modules/repositories/repositories.module').then(
        (m) => m.RepositoriesModule
      ),
  }, 
  {
    path: ':repositoryOwner/:repository',
    canActivate:[authGuard],
    loadChildren: () =>
      import('./modules/repository-detail/repository-detail.module').then(
        (m) => m.RepositoryDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
