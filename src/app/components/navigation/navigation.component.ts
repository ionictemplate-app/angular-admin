import {Component, Input, OnInit} from '@angular/core';
import {NavigationModel} from './navigation.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() navList: Array<NavigationModel>;

  constructor() {
  }

  ngOnInit() {
  }

}
