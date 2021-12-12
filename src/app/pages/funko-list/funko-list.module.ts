import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunkoListRoutingModule } from './funko-list-routing.module';
import { FunkoListComponent } from './funko-list.component';
import { MatCardModule, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';

@NgModule({
  declarations: [
    FunkoListComponent
  ],
  imports: [
    CommonModule,
    FunkoListRoutingModule,
    MatCardModule,
  ]
})
export class FunkoListModule { }
