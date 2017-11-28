import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RankingPorCla } from '../ranking-por-cla/ranking-por-cl';
import { RankingPorParticipantesDoCla } from '../ranking-por-participantes-do-cla/ranking-por-participantes-do-cl';
import { RankingGlobal } from '../ranking-global/ranking-global';

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html'
})
export class Ranking {

  constructor(public navCtrl: NavController) {
  }

  goToRankingPorCl(params){
    if (!params) params = {};
    this.navCtrl.push(RankingPorCla);
  }
  
  goToRanking(params){
    if (!params) params = {};
    this.navCtrl.push(Ranking);
  }
  
  goToRankingPorParticipantesDoCl(params){
    if (!params) params = {};
    this.navCtrl.push(RankingPorParticipantesDoCla);
  }
  
  goToRankingGlobal(params){
    if (!params) params = {};
    this.navCtrl.push(RankingGlobal);
  }
}
