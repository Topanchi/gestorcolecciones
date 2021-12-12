import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunkoDetailComponent } from './funko-detail.component';

const routes: Routes = [
  {
    path: '', component: FunkoDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunkoDetailRoutingModule { }
