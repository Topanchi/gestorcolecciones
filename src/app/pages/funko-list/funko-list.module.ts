import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';  

import { FunkoListRoutingModule } from './funko-list-routing.module';
import { FunkoListComponent } from './funko-list.component';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrecioPipe } from '../../pipes/precio.pipe';
import { HeaderimgDirective } from '../../directives/headerimg.directive';

@NgModule({
  declarations: [
    FunkoListComponent,
    //PrecioPipe,
    HeaderimgDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FunkoListRoutingModule,
    MatCardModule,
    NgxPaginationModule,
    NgbTooltipModule
  ]
})
export class FunkoListModule { }
