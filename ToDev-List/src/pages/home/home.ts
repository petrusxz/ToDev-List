import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseData } from "../../providers/firebase-data";

import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public home: string = 'ideas';
  public items: FirebaseListObservable<any[]>;
  isEmpty: boolean = false;

  constructor(private fbService: FirebaseData, public navCtrl: NavController, public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    this.getData();
  }

  getData() {
    this.isEmpty = false;

    this.items = this.fbService.getItemsList({ orderByChild: 'type', equalTo: this.home });

    if (this.items._checkOperationCases.length == 0) {
      this.isEmpty = true;
    }
  }

  moveToLimbo(item) {
    this.fbService.updateItem(item.$key, { type: 'limbo' });
  }

  restoreItem(item) {
    if (item.startDate == null) {
      this.fbService.updateItem(item.$key, { type: 'ideas' });
    }
    else {
      this.fbService.updateItem(item.$key, { type: 'projects' });
    }
  }

  deleteItem(item) {
    let confirm = this.alertCtrl.create({
      title: 'Delete item',
      message: 'Are you sure that you want to delete this item permanently?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.fbService.deleteItem(item.$key);
          }
        }
      ]
    });
    confirm.present();
  }

  newItem() {
    this.navCtrl.push(AddItemPage, {
      pageTitle: this.home
    });
  }

  itemDetail(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}