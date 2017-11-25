import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SolicitaEs } from '../solicita-es/solicita-es';
import { PessoasPage } from '../pessoas/pessoas';

@Component({
  selector: 'page-amigos',
  templateUrl: 'amigos.html'
})
export class Amigos {

  constructor(public navCtrl: NavController) {
  }
  goToSolicitaEs(params){
    if (!params) params = {};
    this.navCtrl.push(SolicitaEs);
  }

  goToPessoasPage(params){
    if (!params) params = {};
    this.navCtrl.push(PessoasPage);
  }
  
}
