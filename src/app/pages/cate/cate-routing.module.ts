import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CateComponent} from './cate.component';


const routes: Routes = [
  {path: '', component: CateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CateRoutingModule {
}
