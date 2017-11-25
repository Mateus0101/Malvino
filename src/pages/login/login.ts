import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { Signup } from '../signup/signup';
import { RedefinirSenha } from '../redefinir-senha/redefinir-senha';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  valor:any;
  teste:any;
  jogadoresTemp: string[];
  errorMessage: string;
  logar = { login: "", senha: "" };
  
  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, 
    public restProvider: RestProvider,  public toast: ToastController, public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, 'close');
  }


  Logar() {
    this.restProvider.logarJogador(this.logar)
    .then((result:any)=>{
      var id = result.login;
      this.storage.set('id', id);      

      this.navCtrl.setRoot(HomePage);
      this.toast.create({ message: 'Ususário logado com sucesso!', position: 'botton', duration: 3000 }).present();
    })
    .catch((error:any)=>{
      this.toast.create({ message: 'Erro ao Logar. Error: ', position: 'botton', duration: 3000 }).present();
    })
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad Login');
  }

  recuperarSenha(){
    this.navCtrl.push(RedefinirSenha);
  }

  signup(){
    this.navCtrl.push(Signup);
    }
}
