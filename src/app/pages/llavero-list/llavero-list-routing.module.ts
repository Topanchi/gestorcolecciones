import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlaveroListComponent } from './llavero-list.component';

const routes: Routes = [
  {
    path: '', component: LlaveroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlaveroListRoutingModule { }
