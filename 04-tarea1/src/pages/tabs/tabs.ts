import { Component } from '@angular/core';
import { Tab1Page, Tab2Page, Tab3Page, TallerPage } from "../index.paginas";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  taller: any;


  constructor() {

    this.tab1 = Tab1Page;
    this.tab2 = Tab2Page;
    this.tab3 = Tab3Page;
    this.taller = TallerPage;

  }
}

