import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesDoCla } from '../detalhes-do-cla/detalhes-do-cl';
import { CriarCla} from '../criar-cla/criar-cl';
import { SolicitaEs } from '../solicita-es/solicita-es';

@Component({
  selector: 'page-cl-s',
  templateUrl: 'cl-s.html'
})
export class Clas {

  constructor(public navCtrl: NavController) {
  }
  goToDetalhesDoCl(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhesDoCla);
  }goToClS(params){
    if (!params) params = {};
    this.navCtrl.push(Clas);
  }goToCriarCl(params){
    if (!params) params = {};
    this.navCtrl.push(CriarCla);
  }goToSolicitaEs(params){
    if (!params) params = {};
    this.navCtrl.push(SolicitaEs);
  }
}
