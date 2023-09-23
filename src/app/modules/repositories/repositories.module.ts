import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepositoriesComponent } from './repositories.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HeaderModule } from 'src/app/common/header/header.module';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    RepositoriesComponent,
    ListItemComponent,

  ],
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    HeaderModule,
    MatPaginatorModule
   
  ]
})
export class RepositoriesModule { }
