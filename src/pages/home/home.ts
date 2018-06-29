import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  site = {
    url: 'fajarsuryanto.com',
    description: 'Fajar Suryanto - Kodenesia Komputer Solution'
  };

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    //this.db.list('site').push(this.site);
  }

}
