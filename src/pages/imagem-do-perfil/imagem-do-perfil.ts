import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditarMeusDados } from '../editar-meus-dados/editar-meus-dados';

@Component({
  selector: 'page-imagem-do-perfil',
  templateUrl: 'imagem-do-perfil.html'
})
export class ImagemDoPerfil {

  constructor(public navCtrl: NavController) {
  }
  goToEditarMeusDados(params){
    if (!params) params = {};
    this.navCtrl.push(EditarMeusDados);
  }goToImagemDoPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(ImagemDoPerfil);
  }
}
