import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeiseplanPageRoutingModule } from './speiseplan-routing.module';

import { SpeiseplanPage } from './speiseplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeiseplanPageRoutingModule
  ],
  declarations: [SpeiseplanPage]
})
export class SpeiseplanPageModule {}
