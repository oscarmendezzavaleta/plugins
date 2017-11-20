import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DispositivoPage } from './dispositivo';

@NgModule({
  declarations: [
    DispositivoPage,
  ],
  imports: [
    IonicPageModule.forChild(DispositivoPage),
  ],
})
export class DispositivoPageModule {}
