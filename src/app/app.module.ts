import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpModule } from '@angular/http';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RedefinirSenha } from '../pages/redefinir-senha/redefinir-senha';
import { IonicStorageModule } from '@ionic/storage';
import { ChatMalvino } from '../pages/chat-malvino/chat-malvino';
import { Clas } from '../pages/clas/cl-s';
import { CriarCla } from '../pages/criar-cla/criar-cl';
import { ConversaComJogador } from '../pages/conversa-com-jogador/conversa-com-jogador';
import { ConversaEmCla } from '../pages/conversa-em-cla/conversa-em-cl';
import { DetalhesDoCla } from '../pages/detalhes-do-cla/detalhes-do-cl';
import { EditarMeusDados } from '../pages/editar-meus-dados/editar-meus-dados';
import { ImagemDoClPage } from '../pages/imagem-do-cla/imagem-do-cl';
import { ImagemDoPerfil } from '../pages/imagem-do-perfil/imagem-do-perfil';
import { MeusDados } from '../pages/meus-dados/meus-dados';
import { NovaConversaPage } from '../pages/nova-conversa/nova-conversa';
import { PessoasPage } from '../pages/pessoas/pessoas';
import { Ranking } from '../pages/ranking/ranking';
import { RankingGlobal } from '../pages/ranking-global/ranking-global';
import { RankingPorCla } from '../pages/ranking-por-cla/ranking-por-cl';
import { RankingPorParticipantesDoCla } from '../pages/ranking-por-participantes-do-cla/ranking-por-participantes-do-cl';
import { SolicitaEs } from '../pages/solicita-es/solicita-es';
import { Amigos } from '../pages/amigos/amigos';
import { SplashPage } from '../pages/splash/splash';
import { PerfilJogadorPage } from '../pages/perfil-jogador/perfil-jogador';

@NgModule({
    declarations: [
        SplashPage,
        MyApp,
        Login,
        Signup,
        HomePage,
        Amigos,
        RedefinirSenha,
        Clas,
        ChatMalvino,
        CriarCla,
        ConversaComJogador,
        ConversaEmCla,
        DetalhesDoCla,
        EditarMeusDados,
        ImagemDoClPage,
        ImagemDoPerfil,
        MeusDados,
        NovaConversaPage,
        PessoasPage,
        Ranking,
        RankingGlobal,
        RankingPorCla,
        RankingPorParticipantesDoCla,
        SolicitaEs,
        PerfilJogadorPage

    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        IonicStorageModule.forRoot({
            name: '__mydb',
               driverOrder: ['indexeddb', 'sqlite', 'websql']
          })

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        SplashPage,
        MyApp,
        Login,
        Signup,
        HomePage,
        Amigos,
        RedefinirSenha,
        Clas,
        ChatMalvino,
        CriarCla,
        ConversaComJogador,
        ConversaEmCla,
        DetalhesDoCla,
        EditarMeusDados,
        ImagemDoClPage,
        ImagemDoPerfil,
        MeusDados,
        NovaConversaPage,
        PessoasPage,
        Ranking,
        RankingGlobal,
        RankingPorCla,
        RankingPorParticipantesDoCla,
        SolicitaEs,
        PerfilJogadorPage
    ],
    providers: [
        InAppBrowser,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        RestProvider,
    ]
})
export class AppModule { }
