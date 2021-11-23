import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AskQuestionComponent} from "../page/ask-question/ask_question.component";
import {NewArticleComponent} from "../page/new-article/new-article.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "../wiget/search/search.component";
import {MenuComponent} from "../wiget/menu/menu.component";
import {NgxEditorModule} from "ngx-editor";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AskQuestionComponent,
    NewArticleComponent,
    SearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
