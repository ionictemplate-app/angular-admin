import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-menu-users',
  templateUrl: './menu-users.component.html',
  styleUrls: ['./menu-users.component.scss']
})
export class MenuUsersComponent implements OnInit {
  isAuthenticated: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

  onLogin() {
  }

  onExit() {
  }
}
