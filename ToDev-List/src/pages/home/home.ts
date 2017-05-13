import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];
  public title;

  constructor(public navCtrl: NavController, public dataService: Data) {
    // this.dataService.clearData();
    this.dataService.getData().then((todos) => {
      if (todos) {
        this.items = JSON.parse(todos);
      }
    });
  }

  saveItem() {
    if(this.title) {
      this.items.push(this.title);
      this.dataService.save(this.items);
      this.title = "";
    }
  }
}
