import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagemDoPerfil } from '../imagem-do-perfil/imagem-do-perfil';

@Component({
  selector: 'page-editar-meus-dados',
  templateUrl: 'editar-meus-dados.html'
})
export class EditarMeusDados {

  constructor(public navCtrl: NavController) {
  }
  goToImagemDoPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(ImagemDoPerfil);
  }goToEditarMeusDados(params){
    if (!params) params = {};
    this.navCtrl.push(EditarMeusDados);
  }
}
