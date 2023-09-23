import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ApiTokenEntryRoutingModule } from './api-token-entry-routing.module';
import { ApiTokenEntryComponent } from './api-token-entry.component';


@NgModule({
  declarations: [ ApiTokenEntryComponent,],
  imports: [
    CommonModule,
    ApiTokenEntryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ApiTokenEntryModule {}
