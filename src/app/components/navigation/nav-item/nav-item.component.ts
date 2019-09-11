import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NavItem} from '../navigation.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavItemComponent implements OnInit {
  @Input() item: NavItem;

  constructor() {
  }

  ngOnInit() {
  }

}
