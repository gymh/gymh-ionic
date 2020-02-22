import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VertretungsplanPage } from './vertretungsplan.page';

const routes: Routes = [
  {
    path: '',
    component: VertretungsplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VertretungsplanPageRoutingModule {}
