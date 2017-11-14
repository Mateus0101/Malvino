import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CriarCla } from '../criar-cla/criar-cl';

@Component({
  selector: 'page-imagem-do-cl',
  templateUrl: 'imagem-do-cl.html'
})
export class ImagemDoClPage {

  constructor(public navCtrl: NavController) {
  }
  goToCriarCl(params){
    if (!params) params = {};
    this.navCtrl.push(CriarCla);
  }
}
