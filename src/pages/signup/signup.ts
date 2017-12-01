import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Login } from '../login/login';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class Signup {
  
  jogadores = { nome: "", login: "", senha: "", email: "", genero: "", perfis:{idPerfil:2} };
 
  private todo : FormGroup;
  model: User;
  erros:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public restProvider: RestProvider, public toast: ToastController, public menuCtrl: MenuController) {
      this.menuCtrl.enable(false, 'myMenu');
    
      this.model = new User();

    this.todo = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      login: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(8)]],
      email: [null, [Validators.required, Validators.email]],
      genero: [null, [Validators.required]]    
    });

  }

  cadastrar(){
    console.log(this.todo.value)
  }

  Salvar() {
        
    this.jogadores.nome = this.model.nome;
    this.jogadores.login = this.model.login;
    this.jogadores.email = this.model.email;
    this.jogadores.senha = this.model.senha;
    this.jogadores.genero = this.model.genero;


      this.restProvider.addJogador(this.jogadores)
      .then((result:any)=>{
        console.log(result.login);
        this.toast.create({ 
        message: 'Usuário criado com sucesso.', position: 'top', duration: 3000 }).present();

        this.navCtrl.setRoot(Login);

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
export class User{
  nome: string;
  login: string;
  senha: string;
  email: string;
  genero: string;
}
