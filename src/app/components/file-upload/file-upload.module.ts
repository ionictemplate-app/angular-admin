import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadComponent} from './file-upload.component';
import {MatIconModule, MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [FileUploadComponent],
  exports: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
  ]
})
export class FileUploadModule {
}
