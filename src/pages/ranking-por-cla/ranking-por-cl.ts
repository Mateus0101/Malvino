import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ranking } from '../ranking/ranking';
import { RankingPorParticipantesDoCla } from '../ranking-por-participantes-do-cla/ranking-por-participantes-do-cl';
import { RankingGlobal } from '../ranking-global/ranking-global';

@Component({
  selector: 'page-ranking-por-cl',
  templateUrl: 'ranking-por-cl.html'
})
export class RankingPorCla {

  constructor(public navCtrl: NavController) {
  }
  goToRanking(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Ranking);
  }goToRankingPorCl(params){
    if (!params) params = {};
    this.navCtrl.push(RankingPorCla);
  }goToRankingPorParticipantesDoCl(params){
    if (!params) params = {};
    this.navCtrl.push(RankingPorParticipantesDoCla);
  }goToRankingGlobal(params){
    if (!params) params = {};
    this.navCtrl.push(RankingGlobal);
  }
}
