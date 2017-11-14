import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Login } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class Signup {
  
  jogadores = { nome: "", login: "", senha: "", email: "", genero: "", perfis:{idPerfil:2} };
 
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public restProvider: RestProvider, public toast: ToastController) {
  }

  Salvar() {
        
      this.restProvider.addJogador(this.jogadores)
      .then((result:any)=>{
        
        this.toast.create({ 
        message: 'Usuário criado com sucesso.', position: 'top', duration: 3000 }).present();

        this.navCtrl.push(Login);

      })
      .catch((error: any) => {
        this.toast.create({ 
        message: 'Erro ao criar o usuário. Erro: Login ' + error.login + ' Email '+error.senha, 
        position: 'top', 
        duration: 5000 })
        .present();
      });
   }

  ionViewDidLoad(){
    console.log('ionViewDidLoad Signup');
  }
}

