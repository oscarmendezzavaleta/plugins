import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalpushPage } from './localpush';

@NgModule({
  declarations: [
    LocalpushPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalpushPage),
  ],
})
export class LocalpushPageModule {}
