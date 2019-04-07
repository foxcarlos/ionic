import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushnotificationService } from './services/pushnotification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public _pushService: PushnotificationService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this._pushService.init_notifications();
    });
  }
}

/* 755329fa-b45c-41f9-b393-4058ceda0ebd
MTVhMjU4YzgtNjFlNi00NWQ3LWFlMTctNDE1MThlZDlkMmEx */