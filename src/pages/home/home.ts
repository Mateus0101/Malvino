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
    id: string;
    Jogadores: string[];
    errorMessage: string;
    searchQuery: string = '';
    jogos1: string[];
    jogos2: string[];
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

        this.storage.get('id').then((data) => {
            console.log(data);
            this.id = data;
        })

        this.initializeJogos();
    }

    initializeJogos() {
        this.jogos1 = [
            'T-REX',
        ];
        this.jogos2 = [
            'JOGO DA VELHA'
        ];
    }

    getJogos(ev: any) {
        // Repor itens de volta para todos os itens
        this.initializeJogos();

        // ajuste val para o valor da barra de pesquisa
        let val = ev.target.value;

        // se o valor for uma string vazia, não filtre os itens
        if (val && val.trim() != '') {
            this.jogos1 = this.jogos1.filter((jogo) => {
                return (jogo.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
            this.jogos2 = this.jogos2.filter((jogo) => {
                return (jogo.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    ionViewDidLoad() {
    }

    logout() {
        this.navCtrl.setRoot(Login);
        this.storage.clear();
    }

    test() {
        console.log(this.id);
    }

    jogar_t_rex() {
        var url = "http://192.168.1.12:8080/Malvino/pages/T-Rex/index.html?id=" + this.id;
        const browser = this.theInAppBrowser.create(url, '_self', this.options);
        browser.show();
    }

    jogar_jogo_da_velha() {
        var url = "http://192.168.1.12:8080/Malvino/pages/JogoDaVelha/velha.html?id=" + this.id;
        const browser = this.theInAppBrowser.create(url, '_self', this.options);
        browser.show();
    }
}

