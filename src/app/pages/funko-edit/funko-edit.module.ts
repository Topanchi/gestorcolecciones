import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunkoEditRoutingModule } from './funko-edit-routing.module';
import { FunkoEditComponent } from './funko-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FunkoEditComponent
  ],
  imports: [
    CommonModule,
    FunkoEditRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class FunkoEditModule { }
