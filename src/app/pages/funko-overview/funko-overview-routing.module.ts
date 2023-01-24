import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunkoOverviewComponent } from './funko-overview.component';

const routes: Routes = [
  {
    path: '', component: FunkoOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunkoOverviewRoutingModule { }
