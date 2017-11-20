import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

/**
 * Generated class for the BateryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batery',
  templateUrl: 'batery.html',
})
export class BateryPage {

  subscription : any;
  status:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private batteryStatus: BatteryStatus) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BatteryStatus');
    // watch change in battery status
    this.subscription = this.batteryStatus.onChange().subscribe(
    (status: BatteryStatusResponse) => {
    console.log(status.level, status.isPlugged );
    this.status=status;
    
    }
    );

    // stop watch

}
ionViewWillLeave() {
    this.subscription.unsubscribe();
}


}
