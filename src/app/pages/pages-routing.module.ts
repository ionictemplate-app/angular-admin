import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutsComponent} from '../layouts/layouts.component';
import {SubCateComponent} from './sub-cate/sub-cate.component';
import {CouponComponent} from './coupon/coupon.component';
import {GoodsComponent} from './goods/goods.component';
import {PayComponent} from './pay/pay.component';
import {OrderComponent} from './order/order.component';
import {UsersComponent} from './users/users.component';


const routes: Routes = [
  {
    path: '', component: LayoutsComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'address', loadChildren: () => import('./address/address.module').then(m => m.AddressModule)},
      {path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)},
      {path: 'cate', loadChildren: () => import('./cate/cate.module').then(m => m.CateModule)},
      {path: 'sub-cate', component: SubCateComponent},
      {path: 'coupon', component: CouponComponent},
      {path: 'goods', component: GoodsComponent},
      {path: 'pay', component: PayComponent},
      {path: 'order', component: OrderComponent},
      {path: 'users', component: UsersComponent},
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
