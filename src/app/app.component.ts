import { LocalNotificationPage } from './../pages/local-notification/local-notification';
import { DialogosPage } from './../pages/dialogos/dialogos';

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BateryPage } from './../pages/batery/batery';
import { DispositivoPage } from '../pages/dispositivo/dispositivo';
import { ToastPage } from '../pages/toast/toast';
import { LocalpushPage } from '../pages/localpush/localpush';
import { GeolocalizacionPage } from '../pages/geolocalizacion/geolocalizacion';
import { ContactoPage } from '../pages/contacto/contacto';
import { FCM, NotificationData } from "@ionic-native/fcm";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;


  constructor(platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private fcm: FCM) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


    });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Batery', component: BateryPage },
      { title: 'Device', component: DispositivoPage },
      { title: 'Toast', component: ToastPage },
      { title: 'Dialogos', component: DialogosPage },
      { title: 'Local Noti', component: LocalNotificationPage },
      { title: 'PushLocal', component: LocalpushPage },
      { title: 'Geo', component: GeolocalizacionPage },
      { title: 'Contacto', component: ContactoPage },
    ];


    this.fcm.getToken()
      .then((token: string) => {
        //aquí se debe enviar el token al back-end para tenerlo registrado y de esta forma poder enviar mensajes
        // a esta  aplicación
        //o también copiar el token para usarlo con Postman :D
        console.log("The token to use is: ", token);
      })
      .catch(error => {
        //ocurrió un error al procesar el token
        console.error(error);
      });

    /**
     * No suscribimos para obtener el nuevo token cuando se realice un refresh y poder seguir procesando las notificaciones
     * */
    this.fcm.onTokenRefresh().subscribe(
      (token: string) => console.log("Nuevo token", token),
      error => console.error(error)
    );


    /**
        * cuando la configuración este lista, vamos a procesar los mensajes
        * */
    this.fcm.onNotification().subscribe(
      (data: NotificationData) => {
        if (data.wasTapped) {
          //ocurre cuando nuestra app está en segundo plano y hacemos tap en la notificación que se muestra en el dispositivo
          console.log("Received in background", JSON.stringify(data))
        } else {
          //ocurre cuando nuestra aplicación se encuentra en primer plano,
          //puedes mostrar una alerta o un modal con los datos del mensaje
          console.log("Received in foreground", JSON.stringify(data))
        }
      }, error => {
        console.error("Error in notification", error)
      }
    );


  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

