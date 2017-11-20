import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DialogosPage } from './dialogos';

@NgModule({
  declarations: [
    DialogosPage,
  ],
  imports: [
    IonicPageModule.forChild(DialogosPage),
  ],
})
export class DialogosPageModule {}
