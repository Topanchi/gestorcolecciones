import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LlaveroOverviewRoutingModule } from './llavero-overview-routing.module';
import { LlaveroOverviewComponent } from './llavero-overview.component';


@NgModule({
  declarations: [
    LlaveroOverviewComponent
  ],
  imports: [
    CommonModule,
    LlaveroOverviewRoutingModule,
    FontAwesomeModule
  ]
})
export class LlaveroOverviewModule { }
