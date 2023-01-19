import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';  

import { LlaveroListRoutingModule } from './llavero-list-routing.module';
import { LlaveroListComponent } from './llavero-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LlaveroListComponent
  ],
  imports: [
    CommonModule,
    LlaveroListRoutingModule,
    NgxPaginationModule,
    FontAwesomeModule,
    NgbTooltipModule
  ]
})
export class LlaveroListModule { }
