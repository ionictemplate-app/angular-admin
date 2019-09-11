import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddressRoutingModule} from './address-routing.module';
import {AddressComponent} from './address.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ]
})
export class AddressModule {
}
