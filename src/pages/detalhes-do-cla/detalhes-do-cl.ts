import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clas} from '../clas/cl-s';
import { CriarCla } from '../criar-cla/criar-cl';
import { SolicitaEs} from '../solicita-es/solicita-es';

@Component({
  selector: 'page-detalhes-do-cl',
  templateUrl: 'detalhes-do-cl.html'
})
export class DetalhesDoCla {

  constructor(public navCtrl: NavController) {
  }
  goToClS(params){
    if (!params) params = {};
    this.navCtrl.push(Clas);
  }goToDetalhesDoCl(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhesDoCla);
  }goToCriarCl(params){
    if (!params) params = {};
    this.navCtrl.push(CriarCla);
  }goToSolicitaEs(params){
    if (!params) params = {};
    this.navCtrl.push(SolicitaEs);
  }
}
