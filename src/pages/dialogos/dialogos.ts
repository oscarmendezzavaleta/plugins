import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs'; 
import { Platform } from 'ionic-angular'; 

/**
 * Generated class for the DialogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dialogos',
  templateUrl: 'dialogos.html',
})
export class DialogosPage {

  name: String; 

  constructor(public navCtrl: NavController, public navParams: NavParams,private dialogs: Dialogs, private platform: Platform) {
    platform.ready().then(() => { 
      dialogs.prompt('Nombre Porfavor?', 'Identity', ['Cancel', 'Ok'], 'John McClane').then((result) => { 
          if (result.buttonIndex == 2) { 
            this.name = result.input1; 
          } 
        }); 
      });     
  }

}
