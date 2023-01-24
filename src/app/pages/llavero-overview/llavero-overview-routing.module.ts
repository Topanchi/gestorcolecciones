import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlaveroOverviewComponent } from './llavero-overview.component';

const routes: Routes = [
  {
    path: '', component: LlaveroOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlaveroOverviewRoutingModule { }
