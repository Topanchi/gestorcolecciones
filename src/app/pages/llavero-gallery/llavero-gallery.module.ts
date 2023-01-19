import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LlaveroGalleryRoutingModule } from './llavero-gallery-routing.module';
import { LlaveroGalleryComponent } from './llavero-gallery.component';


@NgModule({
  declarations: [
    LlaveroGalleryComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    LlaveroGalleryRoutingModule,
    MatCardModule,
    NgxPaginationModule
  ]
})
export class LlaveroGalleryModule { }
