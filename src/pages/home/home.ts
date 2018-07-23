import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsManagerProvider } from '../../providers/events-manager/events-manager';
import { ConsumeApiProvider } from '../../providers/consume-api/consume-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tournamentList: any[];
  constructor(public navCtrl: NavController,
              public eventsManager: EventsManagerProvider,
              public consumeApi: ConsumeApiProvider) {
  }

  showAlert() {
    this.eventsManager
        .setGeneralNotificationMessage("Important rx notification");
  }

  showLoading() {
    this.eventsManager
        .setIsLoadingEvent(true);
    //timeout simula una operacion que espera un tiempo
    setTimeout(() => {
      this.eventsManager
          .setIsLoadingEvent(false);
    }, 3000);
  }

  getInfoApi() {
    this.eventsManager
        .setIsLoadingEvent(true);
    this.consumeApi
        .getTournaments()
        .subscribe(result => {
          this.tournamentList = result;
          this.eventsManager
              .setIsLoadingEvent(false);
        });
  }
}
