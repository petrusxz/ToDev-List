import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

import { ToDevListModel } from '../../models/todevlist-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newItem: ToDevListModel = new ToDevListModel();
  public items = [];

  constructor(public navCtrl: NavController, public dataService: Data) {
    // this.dataService.clearData();
    this.dataService.getData().then((todos) => {
      if (todos) {
        this.items = JSON.parse(todos);
      }
    });
  }

  itemCompleted() {
      this.dataService.save(this.items);
  }

  saveItem() {
    if (this.newItem.title) {
      this.items.push(this.newItem);
      this.dataService.save(this.items);
      this.newItem = new ToDevListModel();
    }
  }

  delete(index: number) {
    this.items.splice(index, 1);
    this.dataService.save(this.items);
  }
}