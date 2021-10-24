import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchComponent } from './search.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    SearchComponent
  ],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
