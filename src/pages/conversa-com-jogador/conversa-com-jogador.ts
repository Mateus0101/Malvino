import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeusDados } from '../meus-dados/meus-dados';
import { HomePage } from '../home/home';
import { EditarMeusDados } from '../editar-meus-dados/editar-meus-dados';
import { ImagemDoPerfil } from '../imagem-do-perfil/imagem-do-perfil';

@Component({
  selector: 'page-conversa-com-jogador',
  templateUrl: 'conversa-com-jogador.html'
})
export class ConversaComJogador {

  constructor(public navCtrl: NavController) {
  }
  goToMeusDados(params){
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
  }
}
