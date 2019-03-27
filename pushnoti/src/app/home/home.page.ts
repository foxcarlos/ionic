import { Component } from '@angular/core';
import { Geofence } from '@ionic-native/geofence/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat = -40.153625;
  lon =  -71.346496;
  private geofences: Geofence[];

  constructor(private geofence: Geofence, public toastController: ToastController) {

    // initialize the plugin
    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    );

  }

  otro() {
    this.presentToast('Un mensaje');
  }

  async presentToast(msg= 'nada') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  addGeofence() {
    // options describing geofence

    const fence = {
      id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', // any unique ID
      latitude: this.lat, // center of geofence radius
      longitude: this.lon,
      radius: 200, // radius to edge of geofence in meters
      transitionType: 3, // see 'Transition Types' below
      notification: { // notification settings
          id:             1, // any unique ID
          title:          'You crossed a fence', // notification title
          text:           'You just arrived to Gliwice city center.', // notification body
          openAppOnClick: true // open app when notification is tapped
      }
    };

    this.geofence.addOrUpdate(fence).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );
  }

  async findAll() {
    return this.geofence.getWatched()
      .then((geofencesJson) => {
        const geofences = JSON.parse(geofencesJson);

        this.geofences = geofences;
        console.log('Entrando a findAll', geofencesJson);
        this.presentToast(JSON.stringify(geofencesJson));
        return geofences;
      });
  }

}
