import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {AskQuestionComponent} from "./ask_question.component";

@NgModule({
  declarations: [
    AskQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    AskQuestionComponent
  ],
  bootstrap: [AskQuestionComponent]
})
export class AskQuestionModule {

}
