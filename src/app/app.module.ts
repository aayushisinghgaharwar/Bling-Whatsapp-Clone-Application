import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessagesAttachmentsComponent } from '../pages/messages/messages-attachments';
import { StatusBar } from '@ionic-native/status-bar';
import { NewLocationMessageComponent } from '../pages/messages/location-message';
import { AgmCoreModule } from '@agm/core';
import { ShowPictureComponent } from '../pages/messages/show-picture';

import { ImagePicker } from '@ionic-native/image-picker';
import { PictureService } from '../services/picture';
import { MomentModule } from 'angular2-moment';
import { MessagesPage } from '../pages/messages/messages';
import { PhoneService } from '../services/phone';
import { LoginPage } from '../pages/login/login';
import { VerificationPage } from '../pages/verification/verification';
import { ProfilePage } from '../pages/profile/profile';
import { ChatsOptionsComponent } from '../pages/chats/chats-options';
import { NewChatComponent } from '../pages/chats/new-chat';
import { MessagesOptionsComponent } from '../pages/messages/messages-options';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { ChatsPage } from '../pages/chats/chats';

@NgModule({
  declarations: [
    MyApp,
        ChatsPage,
        MessagesPage,
        LoginPage,
            VerificationPage,
                ProfilePage,
                    ChatsOptionsComponent,
                    NewChatComponent,
                          MessagesOptionsComponent,
    MessagesAttachmentsComponent,
  NewLocationMessageComponent,
    ShowPictureComponent




  ],
  imports: [
    BrowserModule,
 IonicModule.forRoot(MyApp),
     MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
    })
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
        ChatsPage,
        MessagesPage,
        LoginPage,
            VerificationPage,
                ProfilePage,
                    ChatsOptionsComponent,
                    NewChatComponent,
                         MessagesOptionsComponent,
     MessagesAttachmentsComponent,
    NewLocationMessageComponent,
    ShowPictureComponent



  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
 {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhoneService,
    ImagePicker,
    PictureService  ]
})
export class AppModule {}
