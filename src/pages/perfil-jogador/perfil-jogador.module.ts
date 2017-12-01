import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilJogadorPage } from './perfil-jogador';

@NgModule({
  declarations: [
    PerfilJogadorPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilJogadorPage),
  ],
})
export class PerfilJogadorPageModule {}
