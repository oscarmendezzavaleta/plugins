import { LocalpushPage } from './../pages/localpush/localpush';
import { DialogosPage } from './../pages/dialogos/dialogos';
import { ToastPage } from '../pages/toast/toast';

import { DispositivoPage } from './../pages/dispositivo/dispositivo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BateryPage } from '../pages/batery/batery';
import { BatteryStatus } from '@ionic-native/battery-status'; 
import { Device } from '@ionic-native/device';
import { Toast } from '@ionic-native/toast'; 
import { Dialogs } from '@ionic-native/dialogs'; 
import { LocalNotificationPage } from '../pages/local-notification/local-notification';
import { LocalNotifications } from '@ionic-native/local-notifications'; 
import { GeolocalizacionPage } from '../pages/geolocalizacion/geolocalizacion'
import { Geolocation } from '@ionic-native/geolocation';
import { ContactoPage } from '../pages/contacto/contacto';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BateryPage,
    DispositivoPage,
    ToastPage,
    DialogosPage,
    LocalNotificationPage,
    LocalpushPage,
    GeolocalizacionPage,
    ContactoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BateryPage,
    DispositivoPage,
    ToastPage,
    DialogosPage,
    LocalNotificationPage,
    LocalpushPage,
    GeolocalizacionPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BatteryStatus,
    Device,
    Toast,
    Dialogs,
    LocalNotifications,
    Geolocation,
    Contacts,Contact, ContactField, ContactName,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
