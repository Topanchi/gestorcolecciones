import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunkoListRoutingModule } from './funko-list-routing.module';
import { FunkoListComponent } from './funko-list.component';
import { MatCardModule, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    FunkoListComponent
  ],
  imports: [
    CommonModule,
    FunkoListRoutingModule,
    MatCardModule,
    NgxPaginationModule
  ]
})
export class FunkoListModule { }
