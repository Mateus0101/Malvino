import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-perfil-jogador',
  templateUrl: 'perfil-jogador.html',
})

export class PerfilJogadorPage {
  id: any;
  jogadores = { idJogador: 0, nome: "", login: "", senha: "", email: "", genero: "", perfis: { idPerfil: 2 } };

  model: User;
  erros: any[];

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider, public toast: ToastController, public menuCtrl: MenuController) {

    this.model = new User();

    this.storage.get('id').then((data) => {
      console.log(data);
      this.id = data;

      this.preenchimento();
    })

  }

  preenchimento() {
    this.restProvider.getJogador(this.id)
      .then((result: any) => {
        this.model.id = result.idJogador;
        this.model.nome = result.nome;
        this.model.login = result.login;
        this.model.senha = result.senha;
        this.model.email = result.email;
        this.model.genero = result.genero;
        console.log(this.model.nome);
      })
      .catch((error: any) => {
      });
  }

  editarPerfil() {
    this.jogadores.idJogador = this.model.id;
    this.jogadores.nome = this.model.nome;
    this.jogadores.login = this.model.login;
    this.jogadores.email = this.model.email;
    this.jogadores.senha = this.model.senha;
    this.jogadores.genero = this.model.genero;


    this.restProvider.editarJogador(this.jogadores)
      .then((result: any) => {

        this.toast.create({
          message: 'Usuário editado com sucesso.', position: 'top', duration: 3000
        }).present();

        this.navCtrl.setRoot(PerfilJogadorPage);

      })
      .catch((error: any) => {
        this.toast.create({
          message: 'Erro ao editar o usuário. Erro: Login ' + error.login + ' Email ' + error.senha,
          position: 'top',
          duration: 5000
        })
          .present();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilJogadorPage');
  }
}
export class User {
  id: number;
  nome: string;
  login: string;
  senha: string;
  email: string;
  genero: string;
}
