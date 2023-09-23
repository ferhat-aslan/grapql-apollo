import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryDetailComponent } from './repository-detail.component';

const routes: Routes = [{
  path:'',component:RepositoryDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryDetailRoutingModule { }
