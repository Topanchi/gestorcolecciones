import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesNotFoundRoutingModule } from './pages-not-found-routing.module';
import { PagesNotFoundComponent } from './pages-not-found.component';


@NgModule({
  declarations: [
    PagesNotFoundComponent
  ],
  imports: [
    CommonModule,
    PagesNotFoundRoutingModule
  ]
})
export class PagesNotFoundModule { }
