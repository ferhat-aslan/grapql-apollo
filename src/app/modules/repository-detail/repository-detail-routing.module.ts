import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryDetailComponent } from './repository-detail.component';
import { repositoryDetailResolver } from './repository-detail.resolver';

const routes: Routes = [{
  path:'',component:RepositoryDetailComponent,resolve:{data:repositoryDetailResolver}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryDetailRoutingModule { }
