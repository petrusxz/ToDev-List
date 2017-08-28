import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToDevItem } from '../../models/todev-item';
import { FirebaseData } from "../../providers/firebase-data";

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  newItem = new ToDevItem;
  private pageTitle: string;
  private page: string;
  ideaForm: FormGroup;
  startDateFormatted: string;
  endDateFormatted: string;
  canSave: boolean = false;
  submitAttempt: boolean = false;

  constructor(public navParams: NavParams,
    public view: ViewController,
    public formBuilder: FormBuilder,
    public datePicker: DatePicker,
    private fbService: FirebaseData) {

    this.ideaForm = formBuilder.group({
      title: ['', Validators.compose([Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      description: ['', Validators.compose([Validators.minLength(4), Validators.required])],
    });
  }

  ionViewDidLoad() {
    this.page = this.navParams.get('pageTitle');
    if (this.page == 'ideas') {
      this.pageTitle = 'Idea';
    }
    else {
      this.pageTitle = 'Project';
    }

    this.newItem.type = this.page;
  }

  pickStartDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK
    }).then(
      date => this.newItem.startDate = date,
      err => console.log('Error occurred while getting date: ', err)
      );
    // if (this.newItem.startDate != null) {
    //   this.startDateFormatted = this.newItem.startDate.toLocaleDateString('pt-BR');
    // }
  }

  pickEndDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK
    }).then(
      date => this.newItem.endDate = date,
      err => console.log('Error occurred while getting date: ', err)
      );
    // if (this.newItem.endDate != null) {
    //   this.endDateFormatted = this.newItem.endDate.toLocaleDateString('pt-BR');
    // }
  }

  validateData() {
    if (this.page == 'ideas') {
      if (this.ideaForm.valid) {
        this.canSave = true;
      }
    }
    else {
      if (this.ideaForm.valid && this.newItem.startDate != null) {
        this.canSave = true;
      }
    }
    this.submitAttempt = true;
  }

  saveItem() {
    this.validateData();

    if (this.canSave) {
      this.fbService.createItem(this.newItem);
      this.newItem = new ToDevItem;
      this.close();
    }
  }

  close() {
    this.view.dismiss();
  }
}
