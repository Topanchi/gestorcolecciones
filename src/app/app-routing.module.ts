import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    path:'funko-list', loadChildren: () => import('./pages/funko-list/funko-list.module').then(m => m.FunkoListModule),
  },
  {
    path:'funko-detail/:id', loadChildren: () => import('./pages/funko-detail/funko-detail.module').then(m => m.FunkoDetailModule),
  },
  {
    path:'funko-edit/:id', loadChildren: () => import('./pages/funko-edit/funko-edit.module').then(m => m.FunkoEditModule),
  },
  {
    path:'funko-add', loadChildren: () => import('./pages/funko-add/funko-add.module').then(m => m.FunkoAddModule),
  },
  {
    path: '**', loadChildren: () => import('./pages/pages-not-found/pages-not-found.module').then(m => m.PagesNotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
