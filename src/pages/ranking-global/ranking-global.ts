import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ranking } from '../ranking/ranking';
import { RankingPorCla } from '../ranking-por-cla/ranking-por-cl';
import { RankingPorParticipantesDoCla } from '../ranking-por-participantes-do-cla/ranking-por-participantes-do-cl';

@Component({
  selector: 'page-ranking-global',
  templateUrl: 'ranking-global.html'
})
export class RankingGlobal {

  constructor(public navCtrl: NavController) {
  }
  goToRanking(params){
    if (!params) params = {};
    this.navCtrl.push(Ranking);
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
