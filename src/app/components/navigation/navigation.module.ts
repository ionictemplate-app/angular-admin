import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule, MatRippleModule} from '@angular/material';
import {NavigationComponent} from './navigation.component';
import {NavCollapseComponent} from './nav-collapse/nav-collapse.component';
import {NavItemComponent} from './nav-item/nav-item.component';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {TranslateModule} from '@ngx-translate/core';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [NavigationComponent, NavCollapseComponent, NavItemComponent],
  exports: [
    NavigationComponent
  ],
  imports: [
    RouterModule,
    MatIconModule,
    MatRippleModule,
    PerfectScrollbarModule,
    TranslateModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class NavigationModule {
}
