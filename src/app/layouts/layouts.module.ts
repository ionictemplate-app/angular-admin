import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material';
import {LayoutsComponent} from './layouts.component';
import {BrandModule} from '../components/brand/brand.module';
import {NavigationModule} from '../components/navigation/navigation.module';
import {HeaderModule} from '../components/header/header.module';
import {FooterComponent} from '../components/footer/footer.component';
import {NavigationService} from '../components/navigation/navigation.service';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [LayoutsComponent, FooterComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    BrandModule,
    NavigationModule,
    HeaderModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [LayoutsComponent, FooterComponent],
  providers: [NavigationService]
})
export class LayoutsModule {
}
