import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesNotFoundComponent } from './pages-not-found.component';

const routes: Routes = [
  {
    path: '**', component: PagesNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesNotFoundRoutingModule { }
