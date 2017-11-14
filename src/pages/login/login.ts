import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { Signup } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {

  
  jogadoresTemp: string[];
  errorMessage: string;
  logar = { login: "", senha: "" };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public restProvider: RestProvider,  public toast: ToastController) {
    }
  
  Logar() {
    this.restProvider.logarJogador(this.logar)
    .then((result:any)=>{
      this.navCtrl.setRoot(HomePage);
      this.toast.create({ message: 'Ususário logado com sucesso!', position: 'botton', duration: 3000 }).present();
    })
    .catch((error:any)=>{
      this.toast.create({ message: 'Erro ao Logar. Error: '+error.login, position: 'botton', duration: 3000 }).present();
    })
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad Login');
  }

  signup(){
    this.navCtrl.push(Signup);
    }
}
