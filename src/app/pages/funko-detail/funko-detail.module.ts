import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunkoDetailRoutingModule } from './funko-detail-routing.module';
import { FunkoDetailComponent } from './funko-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FunkoDetailComponent
  ],
  imports: [
    CommonModule,
    FunkoDetailRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class FunkoDetailModule { }
