import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from './header.component';
import {MenuNotificationModule} from '../menu-notification/menu-notification.module';
import {MenuUsersModule} from '../menu-users/menu-users.module';
import {LoadingModule} from '../loading/loading.module';
import {LanguageModule} from '../language/language.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MenuNotificationModule,
    MenuUsersModule,
    LoadingModule,
    LanguageModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
