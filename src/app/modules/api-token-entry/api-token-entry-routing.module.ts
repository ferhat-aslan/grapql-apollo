import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTokenEntryComponent } from './api-token-entry.component';

const routes: Routes = [
  {
    path: '',
    component: ApiTokenEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiTokenEntryRoutingModule {}
