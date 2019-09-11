import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import * as screenfull from 'screenfull';
import {Screenfull} from 'screenfull';
import {MenuNotificationModel} from '../menu-notification/menu-notification.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFullscreen = false;
  isLoading: boolean;
  @Input() sidenav: any;
  list = [
    {id: '1', title: 'test1', date: '2019-01-01', state: ''},
    {id: '2', title: 'test1', date: '2019-01-01', state: ''},
    {id: '3', title: 'test1', date: '2019-01-01', state: ''}
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }

  ngOnInit() {
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    const sf = screenfull as Screenfull;
    if (sf.enabled) {
      sf.toggle();
    }
  }

  onDelete(notice) {
    this.list.splice(this.list.findIndex(n => n.id === notice.id), 1);
  }
}
