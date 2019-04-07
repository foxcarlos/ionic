import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PushnotificationService {

  constructor( private oneSignal: OneSignal,
                public platform: Platform ) {
    console.log('Hola Push Notifications');
  }

  init_notifications() {
    if (this.platform.is('cordova')) {

      this.oneSignal.startInit('755329fa-b45c-41f9-b393-4058ceda0ebd', '411268772737');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
       console.log('reibimos una notificacion');
      });
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('Se abrio una notificacion');
      });
      this.oneSignal.endInit();
    } else {
      console.log('Estamos desde el navegador web');
    }
  }
}
