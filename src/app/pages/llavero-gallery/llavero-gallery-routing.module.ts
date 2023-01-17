import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlaveroGalleryComponent } from './llavero-gallery.component';

const routes: Routes = [
  {
    path: '', component: LlaveroGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlaveroGalleryRoutingModule { }
