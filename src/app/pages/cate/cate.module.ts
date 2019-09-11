import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CateRoutingModule} from './cate-routing.module';
import {CateComponent} from './cate.component';

import {NewCateComponent} from './new-cate/new-cate.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CateComponent, NewCateComponent],
  imports: [
    CommonModule,
    CateRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewCateComponent]
})
export class CateModule {
}
