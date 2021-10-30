import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {MenuComponent} from "./menu.component";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    MenuComponent
  ],
  bootstrap: [MenuComponent]
})
export class MenuModule {

}
