import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device'; 
import { Platform } from 'ionic-angular'; 

/**
 * Generated class for the DispositivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dispositivo',
  templateUrl: 'dispositivo.html',
})
export class DispositivoPage {
  cordova: String; 
  model: String; 
  devicePlatform: String; 
  uuid: String; 
  version: String; 
  manufacturer: String; 
  isVirtual: Boolean; 
  serial: String; 

  constructor(public navCtrl: NavController, public navParams: NavParams ,private device: Device ,public plt: Platform) {
    this.plt.ready().then(() => { 
      let device = this.device; 
      this.cordova = device.cordova; 
      this.model = device.model; 
      this.devicePlatform = device.platform; 
      this.uuid = device.uuid; 
      this.version = device.version; 
      this.manufacturer = device.manufacturer; 
      this.isVirtual = device.isVirtual; 
      this.serial = device.serial;
      
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispositivoPage');
  }

}
