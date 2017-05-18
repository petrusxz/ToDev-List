import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public dataService: Data, public modalCtrl: ModalController) {
    // this.dataService.clearData();
    this.getList();
  }

  getList() {
    this.dataService.getData().then((todos) => {
      if (todos) {
        this.items = JSON.parse(todos);
      }
    });
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  itemDetail(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });        
  }

  delete(index: number) {
    this.items.splice(index, 1);
    this.dataService.save(this.items);
  }
}