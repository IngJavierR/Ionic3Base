import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController, LoadingController, Loading } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { EventsManagerProvider } from "../providers/events-manager/events-manager";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loader: Loading;
  @ViewChild(Nav) nav: Nav

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              eventsManager: EventsManagerProvider,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      eventsManager
        .getGeneralNotificationMessage()
        .subscribe(msg => {
          const alert = this.alertCtrl.create({
            title: 'Notificación',
            subTitle: msg,
            buttons: ['OK']
          });
          alert.present();
        });

      eventsManager
        .getIsLoadingEvent()
        .subscribe(isLoading => {
          if(!this.loader) {
            this.loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
          }
          if(isLoading){
            this.loader.present();
          }else{
            this.loader.dismiss();
            this.loader = null;
          }
        });
    });
  }

  goHome() {
    this.nav.push(HomePage);
  }
}

