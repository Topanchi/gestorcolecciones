import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlaveroAddComponent } from './llavero-add.component';

const routes: Routes = [
  {
    path: '', component: LlaveroAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlaveroAddRoutingModule { }
