import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item'
import { ItemDetailPage } from '../pages/item-detail/item-detail';

import { FirebaseData } from '../providers/firebase-data';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCtrB2QUrDfWg2qcBOKI5WEJVoaeg-JVxE",
  authDomain: "todev-list.firebaseapp.com",
  databaseURL: "https://todev-list.firebaseio.com",
  projectId: "todev-list",
  storageBucket: "todev-list.appspot.com",
  messagingSenderId: "454850138447"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  providers: [FirebaseData, { provide: ErrorHandler, useClass: IonicErrorHandler }, DatePicker]
})
export class AppModule { }
