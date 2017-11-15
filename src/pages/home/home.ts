import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { Login } from '../login/login';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'

})
export class HomePage {
    Jogadores: string[];
    errorMessage: string;

    constructor(public navCtrl: NavController, public rest: RestProvider, public app: App) {
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

    jogo_da_velha() {

    }

    t_rex() {

    }
}