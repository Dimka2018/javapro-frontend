import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {AllArticlesComponent} from "./all_articles.component";

@NgModule({
  declarations: [
    AllArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    AllArticlesComponent
  ],
  bootstrap: [AllArticlesComponent]
})
export class AllArticlesModule {

}
