import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeiseplanPage } from './speiseplan.page';

const routes: Routes = [
  {
    path: '',
    component: SpeiseplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeiseplanPageRoutingModule {}
