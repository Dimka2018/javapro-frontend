import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchModule} from "../wiget/search/search.module";
import {MenuModule} from "../wiget/menu/menu.module";
import {AllArticlesModule} from "../page/all_articles/all_articles.module";
import {AskQuestionModule} from "../page/ask_question/ask_question.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    MenuModule,
    AllArticlesModule,
    AskQuestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
