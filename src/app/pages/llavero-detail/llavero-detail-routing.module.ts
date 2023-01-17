import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlaveroDetailComponent } from './llavero-detail.component';

const routes: Routes = [
  {
    path: '', component: LlaveroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlaveroDetailRoutingModule { }
