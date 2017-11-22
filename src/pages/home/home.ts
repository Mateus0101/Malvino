import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Login } from '../login/login';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [InAppBrowser]

})
export class HomePage {
    Jogadores: string[];
    errorMessage: string;
    idJogador = 12;
    options: InAppBrowserOptions = {
        location: 'yes',//Or 'no' 
        hidden: 'no', //Or  'yes'
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'yes',//Android only ,shows browser zoom controls 
        hardwareback: 'yes',
        mediaPlaybackRequiresUserAction: 'no',
        shouldPauseOnSuspend: 'no', //Android only 
        closebuttoncaption: 'Close', //iOS only
        disallowoverscroll: 'no', //iOS only 
        toolbar: 'yes', //iOS only 
        enableViewportScale: 'no', //iOS only 
        allowInlineMediaPlayback: 'no',//iOS only 
        presentationstyle: 'pagesheet',//iOS only 
        fullscreen: 'yes',//Windows only    
    };

    constructor(private theInAppBrowser: InAppBrowser, public navCtrl: NavController, public rest: RestProvider, public app: App) {
    }


    ionViewDidLoad() {
        this.getJogadores();
    }

    getJogadores() {
        this.rest.getJogadores()
            .subscribe(
            Jogadores => this.Jogadores = Jogadores,
            error => this.errorMessage = <any>error);
    }

    logout() {
        this.navCtrl.setRoot(Login);
    }

    jogar_t_rex() {
        var url = "http://localhost:8080/Malvino/pages/T-Rex/index.html?id="+this.idJogador;
        const browser = this.theInAppBrowser.create(url, '_self', this.options);
        browser.show();
    }
    
    jogar_jogo_da_velha() {
        var url = "http://localhost:8080/Malvino/pages/JogoDaVelha/velha.html?id="+this.idJogador;
        const browser = this.theInAppBrowser.create(url, '_self', this.options);
        browser.show();
}
}

