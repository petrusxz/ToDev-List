import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { ToDevItem } from '../../models/todev-item';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  project = new ToDevItem;
  startDateFormatted: string;
  endDateFormatted: string;

  constructor(public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    this.project = this.navParams.get('item');
    this.startDateFormatted = this.project.startDate.toLocaleDateString('pt-BR');
    this.endDateFormatted = this.project.endDate.toLocaleDateString('pt-BR');
  }   

  close() {
    this.view.dismiss();
  } 
}
