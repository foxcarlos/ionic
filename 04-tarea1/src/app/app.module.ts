import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { TabsPage, Tab1Page, Tab2Page, Tab3Page, PersonajePage } from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    PersonajePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        backButtonText: 'Atras',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    PersonajePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
