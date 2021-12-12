import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunkoListComponent } from './funko-list.component';

const routes: Routes = [
  {
    path: '', component: FunkoListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunkoListRoutingModule { }
