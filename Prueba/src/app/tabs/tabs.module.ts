import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { Tab1PageModule } from '../hoy/tab1.module';
import { Tab2PageModule } from '../cine/tab2.module';
import { Tab3PageModule } from '../teatro/tab3.module';
import { PruebaPageModule } from '../taller/prueba.module';
import { EspectaculoPageModule } from '../espectaculo/espectaculo.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    Tab1PageModule,
    Tab2PageModule,
    Tab3PageModule,
    PruebaPageModule,
    EspectaculoPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
