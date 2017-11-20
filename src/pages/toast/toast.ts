import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular'; 
import { Toast } from '@ionic-native/toast'; 

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,private platform: Platform, private toast: Toast) {
    platform.ready().then(() => { 
      toast.show("I'm a toast", '5000', 'center').subscribe( 
        (toast) => { 
          console.log(toast); 
        } 
      ); 
  }); 
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

}
