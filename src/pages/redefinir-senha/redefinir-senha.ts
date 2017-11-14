import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';

@Component({
  selector: 'page-redefinir-senha',
  templateUrl: 'redefinir-senha.html'
})
export class RedefinirSenha {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(Login);
  }
}
