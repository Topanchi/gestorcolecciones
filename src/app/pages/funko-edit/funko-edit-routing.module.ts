import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunkoEditComponent } from './funko-edit.component';

const routes: Routes = [
  {
    path: '', component: FunkoEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunkoEditRoutingModule { }
