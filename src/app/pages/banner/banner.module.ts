import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BannerRoutingModule} from './banner-routing.module';
import {BannerComponent} from './banner.component';
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
import {EditBannerComponent} from './edit-banner/edit-banner.component';
import {FileUploadModule} from '../../components/file-upload/file-upload.module';
import {NewBannerComponent} from './new-banner/new-banner.component';

@NgModule({
  declarations: [BannerComponent, EditBannerComponent, NewBannerComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FileUploadModule
  ],
  entryComponents: [EditBannerComponent, NewBannerComponent]
})
export class BannerModule {
}
