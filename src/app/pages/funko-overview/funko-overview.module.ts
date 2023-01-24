import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunkoOverviewRoutingModule } from './funko-overview-routing.module';
import { FunkoOverviewComponent } from './funko-overview.component';


@NgModule({
  declarations: [FunkoOverviewComponent],
  imports: [
    CommonModule,
    FunkoOverviewRoutingModule
  ]
})
export class FunkoOverviewModule { }
