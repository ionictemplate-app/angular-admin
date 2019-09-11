import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {LayoutsModule} from '../layouts/layouts.module';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import {SubCateComponent} from './sub-cate/sub-cate.component';
import {NewSubCateComponent} from './sub-cate/new-sub-cate/new-sub-cate.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CouponComponent} from './coupon/coupon.component';
import {NewCouponComponent} from './coupon/new-coupon/new-coupon.component';
import {GoodsComponent} from './goods/goods.component';
import {NewGoodsComponent} from './goods/new-goods/new-goods.component';
import { PayComponent } from './pay/pay.component';
import { OrderComponent } from './order/order.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    PagesComponent,
    SubCateComponent,
    NewSubCateComponent,
    CouponComponent,
    NewCouponComponent,
    GoodsComponent,
    NewGoodsComponent,
    PayComponent,
    OrderComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    PagesRoutingModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    NewSubCateComponent,
    NewCouponComponent,
    NewGoodsComponent
  ]
})
export class PagesModule {
}
