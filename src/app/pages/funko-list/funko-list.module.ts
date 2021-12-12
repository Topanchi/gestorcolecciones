import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunkoListRoutingModule } from './funko-list-routing.module';
import { FunkoListComponent } from './funko-list.component';


@NgModule({
  declarations: [
    FunkoListComponent
  ],
  imports: [
    CommonModule,
    FunkoListRoutingModule
  ]
})
export class FunkoListModule { }
