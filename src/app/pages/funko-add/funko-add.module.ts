import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunkoAddRoutingModule } from './funko-add-routing.module';
import { FunkoAddComponent } from './funko-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FunkoAddComponent
  ],
  imports: [
    CommonModule,
    FunkoAddRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class FunkoAddModule { }
