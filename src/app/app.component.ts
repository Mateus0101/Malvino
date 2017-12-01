import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Clas } from '../pages/clas/cl-s';
import { Amigos } from '../pages/amigos/amigos';
import { ChatMalvino } from '../pages/chat-malvino/chat-malvino';
import { Ranking } from '../pages/ranking/ranking';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { SplashPage } from '../pages/splash/splash';
import { PerfilJogadorPage } from '../pages/perfil-jogador/perfil-jogador';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;

  pages: Array<{title: string, component: any}>;

  constructor(private storage: Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, modalCtrl: ModalController) {
    this.initializeApp();

    platform.ready().then(() => {
      statusBar.styleDefault();
      let splash = modalCtrl.create(SplashPage);
      splash.present();
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Visualizar tela inicial', component: HomePage },
      { title: 'Clãs', component: Clas },
      { title: 'Amigos', component: Amigos },
      { title: 'Chat', component: ChatMalvino },
      { title: 'Ranking', component: Ranking },
      { title: 'Encerrar sessão', component: Login },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // this.splashScreen.hide(); // Oculta Splash Screen.
    });
  }
  logout(){
  this.storage.clear();
  }
  openPage(page) {

    this.nav.setRoot(page.component);
    if (page.title === 'Encerrar sessão') {
      this.logout();
    }
  }

  openPagePerfil(){
    this.nav.setRoot(PerfilJogadorPage);
  }
  
}