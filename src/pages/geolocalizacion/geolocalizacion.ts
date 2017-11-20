import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular'; 
import { Geolocation } from '@ionic-native/geolocation'; 
/**
 * Generated class for the GeolocalizacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocalizacion',
  templateUrl: 'geolocalizacion.html',
})
export class GeolocalizacionPage {
  latitude: Number = 0; 
  longitude: Number = 0; 
  accuracy: Number = 0; 
  constructor(public navCtrl: NavController, public navParams: NavParams,private platform: Platform,private geolocation: Geolocation) {
    platform.ready().then(() => { 
      geolocation.getCurrentPosition().then((position) => { 
        this.latitude = position.coords.latitude; 
        this.longitude = position.coords.longitude; 
        this.accuracy = position.coords.accuracy; 
      }); 
    }); 
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocalizacionPage');
  }

}
