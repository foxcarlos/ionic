import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  leido: any;
  bd_addr = '2F:23:0C:1A:F1:40';

  constructor(public bluetoothSerial: BluetoothSerial) {
    this.leido = 'Sin inf';
   }

  conectarBT() {
    this.bluetoothSerial.connect(this.bd_addr).subscribe(
      connectSuccess => {
      console.log('Coneectado', connectSuccess);
      this.leido = 'Estado:' + connectSuccess;
      this.leerBT2();
    }, error => {
      console.log(error);
      this.leido = error;
    }
    );
  }

  estaDisponible() {
    this.bluetoothSerial.isEnabled().then(success => {
      return true;
    }, error => {
      return false;
    });
  }
  habilitarBT() {
    this.bluetoothSerial.enable().then(success => {
      this.leido = 'Bluetooh habilitado';
    });
  }

  leerBT2() {
    if (!this.estaDisponible) {
      this.leido = 'No estadisponible..Habilitando';
      this.habilitarBT();
    }

    this.bluetoothSerial.subscribe('\n').subscribe(data => {
      console.log(data);
      this.leido = data;
    },
    error => {
      this.leido = error;
    });
  }

  leerBT() {
    this.bluetoothSerial.read().then(data => {
      console.log(data);
      this.leido = data;
    }, error => {
      console.log(error);
      this.leido = error;
    });
  }
}
