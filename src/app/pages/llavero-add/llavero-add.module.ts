import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LlaveroAddRoutingModule } from './llavero-add-routing.module';
import { LlaveroAddComponent } from './llavero-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LlaveroAddComponent
  ],
  imports: [
    CommonModule,
    LlaveroAddRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class LlaveroAddModule { }
