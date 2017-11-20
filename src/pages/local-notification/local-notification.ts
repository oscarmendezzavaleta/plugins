import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications'; 
import { Platform } from 'ionic-angular';

/**
 * Generated class for the LocalNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-notification',
  templateUrl: 'local-notification.html',
})
export class LocalNotificationPage {

  defaultText: String = 'Hello World'; 

  constructor(public navCtrl: NavController, public navParams: NavParams,private localNotifications: LocalNotifications, private platform: Platform) {
  }

  triggerNotification(notifText) { 
    this.platform.ready().then(() => { 

      notifText = notifText || this.defaultText; 
      this.localNotifications.schedule({ 
        id: 1, 
        text: notifText, 
      }); 
    }); 
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationPage');
  }

}
