import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoadingController } from 'ionic-angular';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { MostrarAtpPipe } from '../pipes/mostrar-atp/mostrar-atp';
import { MostrarListaFuncionesPipe } from '../pipes/mostrar-lista-funciones/mostrar-lista-funciones';

import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { TabsPage, Tab1Page, Tab2Page, Tab3Page, PersonajePage, TallerPage } from '../pages/index.paginas';
import { RestProvider } from '../providers/rest/rest';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    PersonajePage,
    TallerPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
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
    TallerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoadingController,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
