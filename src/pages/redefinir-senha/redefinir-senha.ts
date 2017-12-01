import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-redefinir-senha',
  templateUrl: 'redefinir-senha.html'
})
export class RedefinirSenha {
 
  email = {email:""};
  
  constructor(public navCtrl: NavController, 
    public restProvider: RestProvider,  public toast: ToastController, public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Tentanto enviar Email...",
      duration: 1000
    });
    loader.present();
  }

  enviarEmail() {
    this.restProvider.recuperarSenha(this.email)
    .then((result:any)=>{
      this.presentLoading();
      this.toast.create({ message: 'Email enviado com sucesso!', position: 'botton', duration: 3000 }).present();
    })
    .catch((error:any)=>{
      this.presentLoading();
      this.toast.create({ message: 'Email não encontrado!', position: 'botton', duration: 3000 }).present();
    })
  }
  
}
