import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    canActivate: [AuthGuard],
    path:'funko-list', 
    loadChildren: () => import('./pages/funko-list/funko-list.module').then(m => m.FunkoListModule),
  },
  {
    canActivate: [],
    path:'funko-detail/:id', 
    loadChildren: () => import('./pages/funko-detail/funko-detail.module').then(m => m.FunkoDetailModule),
  },
  {
    canActivate: [],
    path:'funko-edit/:id', 
    loadChildren: () => import('./pages/funko-edit/funko-edit.module').then(m => m.FunkoEditModule),
  },
  {
    canActivate: [AuthGuard],
    path:'funko-add', 
    loadChildren: () => import('./pages/funko-add/funko-add.module').then(m => m.FunkoAddModule),
  },
  {
    canActivate: [],
    path: '**', 
    loadChildren: () => import('./pages/pages-not-found/pages-not-found.module').then(m => m.PagesNotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
