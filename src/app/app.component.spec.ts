import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { EventsManagerProvider } from '../providers/events-manager/events-manager';
describe('MyApp Component', () => {
  let fixture;
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        StatusBar,
        SplashScreen,
        EventsManagerProvider
      ]
    })
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });
  it ('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });
});
