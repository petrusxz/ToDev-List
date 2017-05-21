import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { ToDevListModel } from '../../models/todevlist-model';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  newItem = new ToDevListModel;

  constructor(public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    this.newItem = this.navParams.get('item');
  }   

  close() {
    this.view.dismiss();
  } 
}
