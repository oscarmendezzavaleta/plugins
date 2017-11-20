import { LocalNotificationPage } from './../pages/local-notification/local-notification';
import { DialogosPage } from './../pages/dialogos/dialogos';

import { Component ,ViewChild } from '@angular/core';
import { Platform ,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BateryPage } from './../pages/batery/batery';
import { DispositivoPage } from '../pages/dispositivo/dispositivo';
import { ToastPage } from '../pages/toast/toast';
import { LocalpushPage } from '../pages/localpush/localpush';
import { GeolocalizacionPage } from '../pages/geolocalizacion/geolocalizacion';
import { ContactoPage } from '../pages/contacto/contacto'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages:Array<{title:string,component:any}>;


  constructor(platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages=[
      {title:'Home' , component:HomePage},
      {title:'Batery', component:BateryPage},
      {title:'Device', component:DispositivoPage},
      {title:'Toast', component:ToastPage},
      {title:'Dialogos', component:DialogosPage},
      {title:'Local Noti', component:LocalNotificationPage},
      {title:'PushLocal', component:LocalpushPage},
      {title:'Geo', component:GeolocalizacionPage},
      {title:'Contacto', component:ContactoPage},
    ];
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

