import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Ranking } from '../ranking/ranking';
import { RankingPorCla } from '../ranking-por-cla/ranking-por-cl';
import { RankingPorParticipantesDoCla } from '../ranking-por-participantes-do-cla/ranking-por-participantes-do-cl';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-ranking-global',
  templateUrl: 'ranking-global.html'
})
export class RankingGlobal {

  Ranking: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider, public loadingCtrl: LoadingController) {

      this.rest.getRanking()
        .subscribe(
        Ranking => this.Ranking = Ranking,
        error => this.errorMessage = <any>error);
        this.presentLoading();

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "CARREGANDO...",
      duration: 5000
    });
    loader.present();
  }

  ionViewDidLoad() {
   
  }

  goToRanking(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(Ranking);
  }

  goToRankingPorCl(params) {
    if (!params) params = {};
    this.navCtrl.push(RankingPorCla);
  }

  goToRankingPorParticipantesDoCl(params) {
    if (!params) params = {};
    this.navCtrl.push(RankingPorParticipantesDoCla);
  }

  goToRankingGlobal(params) {
    if (!params) params = {};
    this.navCtrl.push(RankingGlobal);
  }
}
