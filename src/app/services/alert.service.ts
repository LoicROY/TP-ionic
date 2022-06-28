import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from '../models/alert.model';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async openAlert(alert: Alert) {
    const popin = await this.alertController.create(
      {
        header : alert.header,
        message : alert.message,
        buttons: ['OK'],
      }
    );
   await popin.present();
  }
}
