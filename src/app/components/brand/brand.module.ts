import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material';
import {BrandComponent} from './brand.component';


@NgModule({
  declarations: [BrandComponent],
  exports: [
    BrandComponent
  ],
  imports: [
    RouterModule,
    MatIconModule
  ]
})
export class BrandModule {
}
