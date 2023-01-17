import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LlaveroEditRoutingModule } from './llavero-edit-routing.module';
import { LlaveroEditComponent } from './llavero-edit.component';


@NgModule({
  declarations: [
    LlaveroEditComponent
  ],
  imports: [
    CommonModule,
    LlaveroEditRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class LlaveroEditModule { }
