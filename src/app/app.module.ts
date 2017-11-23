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

@NgModule({
    declarations: [
        MyApp,
        Login,
        Signup,
        HomePage,
        RedefinirSenha
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        IonicStorageModule.forRoot()

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Login,
        Signup,
        HomePage,
        RedefinirSenha
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
