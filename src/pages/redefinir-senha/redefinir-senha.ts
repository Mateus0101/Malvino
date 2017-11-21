import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-redefinir-senha',
  templateUrl: 'redefinir-senha.html'
})
export class RedefinirSenha {
 
  email = {email:""};
  
  constructor(public navCtrl: NavController, 
    public restProvider: RestProvider,  public toast: ToastController) {
    }
  
  enviarEmail() {
    this.restProvider.recuperarSenha(this.email)
    .then((result:any)=>{
      this.toast.create({ message: 'E-mail enviado com sucesso!', position: 'botton', duration: 3000 }).present();
    })
    .catch((error:any)=>{
      this.toast.create({ message: 'Erro ao enviar email. Error: '+error, position: 'botton', duration: 3000 }).present();
    })
  }
  
}
