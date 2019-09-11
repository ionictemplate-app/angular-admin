import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatBadgeModule, MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import {MenuNotificationComponent} from './menu-notification.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [MenuNotificationComponent],
  imports: [
    PerfectScrollbarModule,
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [MenuNotificationComponent]
})
export class MenuNotificationModule {
}
