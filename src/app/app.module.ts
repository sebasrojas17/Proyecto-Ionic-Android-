import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SegmentsPage } from '../pages/segments/segments';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
* Services
*
*/

import { PostService } from "../pages/post-blog/post.service";



import { PostCreateComponent } from '../pages/post-blog/postblog-create/post-create';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SegmentsPage,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SegmentsPage,
    PostCreateComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
