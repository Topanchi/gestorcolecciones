import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlaveroEditComponent } from './llavero-edit.component';

const routes: Routes = [
  {
    path: '', component: LlaveroEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlaveroEditRoutingModule { }
