import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome{
  
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad(){
  console.log('ionViewDidLoad Welcome');
  }

  login(){
  this.navCtrl.push(Login);
  }

  signup(){
  this.navCtrl.push(Signup);
  }

  teste(){
    this.navCtrl.push(HomePage);
  }
}
