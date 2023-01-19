import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

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
    FontAwesomeModule
  ]
})
export class LlaveroListModule { }
