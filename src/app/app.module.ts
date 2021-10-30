import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchModule} from "../wiget/search/search.module";
import {MenuModule} from "../wiget/menu/menu.module";
import {AllArticlesModule} from "../page/all_articles/all_articles.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    MenuModule,
    AllArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
