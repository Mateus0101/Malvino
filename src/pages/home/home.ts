import { Component } from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Login } from '../login/login';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [InAppBrowser]

})
export class HomePage {
    id:string;
    Jogadores: string[];
    errorMessage: string;
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

    constructor(private storage: Storage, private theInAppBrowser: InAppBrowser, 
        public navCtrl: NavController, public rest: RestProvider, public app: App, public menuCtrl: MenuController) {
            
            this.menuCtrl.enable(true, 'close');

            this.storage.get('id').then((data)=>{
                console.log(data);
                this.id = data;
            })
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
        this.storage.clear();
    }

    test() {
        console.log(this.id);
    }

    jogar_t_rex() {
        var url = "http://localhost:8080/Malvino/pages/T-Rex/index.html?id=" + this.id;
        const browser = this.theInAppBrowser.create(url, '_self', this.options);
        browser.show();
    }

    jogar_jogo_da_velha() {
        var url = "http://localhost:8080/Malvino/pages/JogoDaVelha/velha.html?id=" + this.id;
        const browser = this.theInAppBrowser.create(url, '_self', this.options);
        browser.show();
    }
}

