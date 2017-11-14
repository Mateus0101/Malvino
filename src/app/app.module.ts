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

@NgModule({
 declarations: [
 MyApp,
 Login,
 Signup,
 HomePage
 ],
 imports: [
 BrowserModule,  
 IonicModule.forRoot(MyApp),
 HttpModule
 
 ],
 bootstrap: [IonicApp],
 entryComponents: [
 MyApp,
 Login,
 Signup,
 HomePage
 ],
 providers: [
 StatusBar,
 SplashScreen,
 {provide: ErrorHandler, useClass: IonicErrorHandler},
 RestProvider,
 ]
})
export class AppModule {}
