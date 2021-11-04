import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {MenuComponent} from "./menu.component";
import {AppRoutingModule} from "../../app/app-routing.module";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    MenuComponent
  ],
  bootstrap: [MenuComponent]
})
export class MenuModule {

}
