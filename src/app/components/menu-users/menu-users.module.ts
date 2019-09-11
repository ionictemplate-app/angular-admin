import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuUsersComponent} from './menu-users.component';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';


@NgModule({
  declarations: [MenuUsersComponent],
  exports: [
    MenuUsersComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class MenuUsersModule {
}
