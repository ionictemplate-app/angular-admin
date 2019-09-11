import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {BadgeModel, NavigationModel, NavItem} from '../components/navigation/navigation.model';
import {NavigationService} from '../components/navigation/navigation.service';
import {MediaObserver} from '@angular/flex-layout';
import {filter} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  sidenavAlign = 'start';
  sidenavMode = 'side';
  sidenavOpen = true;
  navList: Array<NavigationModel>;

  constructor(private navigationService: NavigationService,
              private mediaService: MediaObserver,
              private router: Router,
              // tslint:disable-next-line:ban-types
              @Inject(PLATFORM_ID) private platformId: Object) {
    this.navigation();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      if (isPlatformBrowser(this.platformId)) {
        window.scroll(0, 0);
      }
    });
  }

  ngOnInit() {
    this.mediaService.asObservable().subscribe(change => {
      change.forEach(c => {
        const isMobile = c.mqAlias === 'xs' || c.mqAlias === 'sm';
        this.sidenavMode = isMobile ? 'over' : 'side';
        this.sidenavOpen = !isMobile;
      });
    });
  }

  navigation() {
    const badge = new BadgeModel({title: '2', background: '#ff4081', foreground: '#fff'});
    const address = new NavigationModel({
      id: 'address',
      title: 'nav.address',
      type: 'item',
      icon: 'location_city',
      url: '/pages/address'
    });

    const banner = new NavigationModel({
      id: 'banner',
      title: 'nav.banner',
      type: 'item',
      icon: 'spa',
      url: '/pages/banner'
    });

    const good = new NavigationModel({
      id: 'goods',
      title: 'nav.goods',
      type: 'item',
      icon: 'storefront',
      url: '/pages/goods'
    });


    const cateChildren: Array<NavItem> = [
      {
        id: 'cate',
        title: 'nav.cate',
        type: 'item',
        icon: 'local_activity',
        url: '/pages/cate'
      },
      {
        id: 'subCate',
        title: 'nav.subCate',
        type: 'item',
        icon: 'local_offer',
        url: '/pages/sub-cate'
      }
    ];

    const cate = new NavigationModel({
      id: 'cate',
      title: 'nav.category',
      type: 'collapse',
      icon: 'brightness_high',
    }, badge, cateChildren);

    const pay = new NavigationModel({
      id: 'pay',
      title: 'nav.pay',
      type: 'item',
      icon: 'local_atm',
      url: '/pages/pay'
    });
    const order = new NavigationModel({
      id: 'order',
      title: 'nav.order',
      type: 'item',
      icon: 'menu_book',
      url: '/pages/order'
    });

    const users = new NavigationModel({
      id: 'users',
      title: 'nav.users',
      type: 'item',
      icon: 'person',
      url: '/pages/users'
    });
    this.navList = [address, banner, cate, good, pay, order, users];
  }
}
