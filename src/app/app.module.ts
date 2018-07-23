import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConsumeApiProvider } from '../providers/consume-api/consume-api';
import { EventsManagerProvider } from '../providers/events-manager/events-manager';
import { MatProgressBarModule} from '@angular/material';

export const MATERIAL_COMPONENTS = [
  MatProgressBarModule
]

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsumeApiProvider,
    EventsManagerProvider
  ]
})
export class AppModule {}
