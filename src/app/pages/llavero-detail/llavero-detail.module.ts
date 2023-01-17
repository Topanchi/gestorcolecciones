import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LlaveroDetailRoutingModule } from './llavero-detail-routing.module';
import { LlaveroDetailComponent } from './llavero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LlaveroDetailComponent
  ],
  imports: [
    CommonModule,
    LlaveroDetailRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class LlaveroDetailModule { }
