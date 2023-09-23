import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryDetailRoutingModule } from './repository-detail-routing.module';
import { RepositoryDetailComponent } from './repository-detail.component';
import { HeaderModule } from 'src/app/common/header/header.module';


@NgModule({
  declarations: [ RepositoryDetailComponent],
  imports: [
    CommonModule,
    RepositoryDetailRoutingModule,
    HeaderModule
  ]
})
export class RepositoryDetailModule { }
