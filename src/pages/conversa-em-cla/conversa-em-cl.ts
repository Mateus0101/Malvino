import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesDoCla } from '../detalhes-do-cla/detalhes-do-cl';
import { Clas} from '../clas/cl-s';
import { CriarCla } from '../criar-cla/criar-cl';
import { SolicitaEs } from '../solicita-es/solicita-es';

@Component({
  selector: 'page-conversa-em-cl',
  templateUrl: 'conversa-em-cl.html'
})
export class ConversaEmCla {

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
