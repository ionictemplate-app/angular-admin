import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NavigationModel} from '../navigation.model';
import {NavigationAnimation} from '../navigation.animation';
import {NavigationService} from '../navigation.service';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: NavigationAnimation,
  encapsulation: ViewEncapsulation.None
})

export class NavCollapseComponent implements OnInit {
  @Input() item: NavigationModel;
  @HostBinding('class') classes = 'nav-collapse nav-item';
  @HostBinding('class.toggle') isToggle = false;

  constructor(private router: Router,
              private service: NavigationService) {

    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        if (this.isChildrenUrl(this.item, ev.urlAfterRedirects)) {
          this.expand();
        } else {
          this.collapse();
        }
      }
    });

    this.service.onNavCollapseToggled.subscribe(item => {
      if (item.children) {
        if (this.item !== item) {
          this.collapse();
        }
      }
    });
  }

  ngOnInit() {
    if (this.isChildrenUrl(this.item, this.router.url)) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  onToggle(event) {
    event.preventDefault();
    this.isToggle = !this.isToggle;
    this.service.onNavCollapseToggled.emit(this.item);
    this.service.onNavCollapseToggle.emit();
  }

  expand() {
    if (!this.isToggle) {
      this.isToggle = true;
      this.service.onNavCollapseToggle.emit();
    }
  }

  collapse() {
    if (this.isToggle) {
      this.isToggle = false;
      this.service.onNavCollapseToggle.emit();
    }
  }

  isChildren(parent: NavigationModel, item) {
    return parent.children ? parent.children.includes(item) : false;
  }

  isChildrenUrl(parent: NavigationModel, url: string) {
    return parent.children ? parent.children.findIndex(c => c.url === url || url.includes(c.url)) > -1 : false;
  }

}
