import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BateryPage } from './batery';

@NgModule({
  declarations: [
    BateryPage,
  ],
  imports: [
    IonicPageModule.forChild(BateryPage),
  ],
})
export class BateryPageModule {}
