import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VertretungsplanPageRoutingModule } from './vertretungsplan-routing.module';

import { VertretungsplanPage } from './vertretungsplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VertretungsplanPageRoutingModule
  ],
  declarations: [VertretungsplanPage]
})
export class VertretungsplanPageModule {}
