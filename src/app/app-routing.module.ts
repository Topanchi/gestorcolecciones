import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';

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
    path:'funko-overview', 
    loadChildren: () => import('./pages/funko-overview/funko-overview.module').then(m => m.FunkoOverviewModule),
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
    canActivate: [UserGuard],
    path:'funko-edit/:id', 
    loadChildren: () => import('./pages/funko-edit/funko-edit.module').then(m => m.FunkoEditModule),
  },
  {
    canActivate: [AuthGuard],
    path:'funko-add', 
    loadChildren: () => import('./pages/funko-add/funko-add.module').then(m => m.FunkoAddModule),
  },
  {
    canActivate: [AuthGuard],
    path:'llavero-overview', 
    loadChildren: () => import('./pages/llavero-overview/llavero-overview.module').then(m => m.LlaveroOverviewModule),
  },
  {
    //canActivate: [AuthGuard],
    path:'llavero-list', 
    loadChildren: () => import('./pages/llavero-list/llavero-list.module').then(m => m.LlaveroListModule),
  },
  {
    //canActivate: [AuthGuard],
    path:'llavero-gallery', 
    loadChildren: () => import('./pages/llavero-gallery/llavero-gallery.module').then(m => m.LlaveroGalleryModule),
  },
  {
    canActivate: [],
    path:'llavero-detail/:id', 
    loadChildren: () => import('./pages/llavero-detail/llavero-detail.module').then(m => m.LlaveroDetailModule),
  },
  {
    canActivate: [UserGuard],
    path:'llavero-edit/:id', 
    loadChildren: () => import('./pages/llavero-edit/llavero-edit.module').then(m => m.LlaveroEditModule),
  },
  {
    //canActivate: [AuthGuard],
    path:'llavero-add', 
    loadChildren: () => import('./pages/llavero-add/llavero-add.module').then(m => m.LlaveroAddModule),
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
