import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversaComJogador } from '../conversa-com-jogador/conversa-com-jogador';
import { MeusDados} from '../meus-dados/meus-dados';
import { HomePage } from '../home/home';
import { EditarMeusDados } from '../editar-meus-dados/editar-meus-dados';
import { ImagemDoPerfil } from '../imagem-do-perfil/imagem-do-perfil';
import { ConversaEmCla } from '../conversa-em-cla/conversa-em-cl';
import { DetalhesDoCla } from '../detalhes-do-cla/detalhes-do-cl';
import { Clas } from '../clas/cl-s';
import { CriarCla } from '../criar-cla/criar-cl';
import { SolicitaEs } from '../solicita-es/solicita-es';

@Component({
  selector: 'page-nova-conversa',
  templateUrl: 'nova-conversa.html'
})
export class NovaConversaPage {

  constructor(public navCtrl: NavController) {
  }
  goToConversaComJogador(params){
    if (!params) params = {};
    this.navCtrl.push(ConversaComJogador);
  }goToMeusDados(params){
    if (!params) params = {};
    this.navCtrl.push(MeusDados);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToEditarMeusDados(params){
    if (!params) params = {};
    this.navCtrl.push(EditarMeusDados);
  }goToImagemDoPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(ImagemDoPerfil);
  }goToConversaEmCl(params){
    if (!params) params = {};
    this.navCtrl.push(ConversaEmCla);
  }goToDetalhesDoCl(params){
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
