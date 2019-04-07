import { Component } from '@angular/core';
import { CardIO } from '@ionic-native/card-io/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private cardIO: CardIO) { }
  
  scanear(){
    this.cardIO.canScan()
    .then(
    (res: boolean) => {
      if(res){
        let options = {
          requireExpiry: true,
          requireCVV: false,
          requirePostalCode: false
        };
        this.cardIO.scan(options);
      }
    }
    );
    }
}







