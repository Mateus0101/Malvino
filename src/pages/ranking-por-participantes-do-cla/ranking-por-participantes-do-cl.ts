import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ranking } from '../ranking/ranking';
import { RankingPorCla } from '../ranking-por-cla/ranking-por-cl';
import { RankingGlobal } from '../ranking-global/ranking-global';

@Component({
  selector: 'page-ranking-por-participantes-do-cl',
  templateUrl: 'ranking-por-participantes-do-cl.html'
})
export class RankingPorParticipantesDoCla {

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
