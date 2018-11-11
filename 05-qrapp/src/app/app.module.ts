import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Mapas
import { AgmCoreModule } from '@agm/core';

// Plugins
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HTTP } from '@ionic-native/http';
import { Contacts } from '@ionic-native/contacts';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { GuardadosPage, HomePage, TabsPage, MapaPage } from '../pages/index.paginas';

// Providers o Servicios
import { HistorialProvider } from '../providers/historial/historial';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    GuardadosPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBPDKz4mDcrRnZloXwPlcdH5DYOb_kHGMk'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapaPage,
    GuardadosPage,
    TabsPage,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Contacts,
    EmailComposer,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}
