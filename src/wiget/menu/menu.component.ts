import {Component} from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public expanded: Boolean = false;

  switchExpand() {
    this.expanded = !this.expanded
  }
}
