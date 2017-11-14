import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Amigos } from '../amigos/amigos';

@Component({
  selector: 'page-pessoas',
  templateUrl: 'pessoas.html'
})
export class PessoasPage {

  constructor(public navCtrl: NavController) {
  }
  goToAmigos(params){
    if (!params) params = {};
    this.navCtrl.push(Amigos);
  }
}
