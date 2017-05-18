import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { ToDevListModel } from '../../models/todevlist-model';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  newItem = new ToDevListModel;

  constructor(public navCtrl: NavController, public view: ViewController, public datePicker: DatePicker) {
  }

  ionViewDidLoad() {

  }

  openDatePicker(myDate) {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK
    }).then(
      date => myDate = date.toLocaleDateString('pt-BR'),
      err => console.log('Error occurred while getting date: ', err)
      );
  }

  pickStartDate() {
    this.openDatePicker(this.newItem.startDate);
  }

  pickEndDate() {
    this.openDatePicker(this.newItem.endDate);
  }

  saveItem() {
    let item = this.newItem;

    this.view.dismiss(item);
  }

  close() {
    this.view.dismiss();
  }

}
