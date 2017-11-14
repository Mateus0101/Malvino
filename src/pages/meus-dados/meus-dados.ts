import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EditarMeusDados } from '../editar-meus-dados/editar-meus-dados';
import { ImagemDoPerfil } from '../imagem-do-perfil/imagem-do-perfil';

@Component({
  selector: 'page-meus-dados',
  templateUrl: 'meus-dados.html'
})
export class MeusDados {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
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
