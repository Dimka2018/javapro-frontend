import {ElementRef, QueryList, ViewChildren} from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('search_window', {static: false})
  set content(content: ElementRef) {
    if(content) {
      content.nativeElement.focus();
    }
  }

  public expanded: Boolean = false;

  switchArrow() {
    this.expanded = !this.expanded
  }
}
