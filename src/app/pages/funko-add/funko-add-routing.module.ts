import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunkoAddComponent } from './funko-add.component';

const routes: Routes = [
  {
    path: '', component: FunkoAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunkoAddRoutingModule { }
