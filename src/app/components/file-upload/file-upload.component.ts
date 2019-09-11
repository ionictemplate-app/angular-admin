import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {DialogService} from '..';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent {
  basePath = 'uploads';
  previewUrl;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  @Output() down = new EventEmitter<string>();

  constructor(private storage: AngularFireStorage,
              private sanitizer: DomSanitizer) {
  }


  uploadFile(event) {
    const file = event.target.files[0];
    if (!this.isImage(file)) {
      //  this.dialog.alert('only upload image');
      return;
    }
    this.previewUrl = this.previewImg(file);
    const path = `${this.basePath}/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const task = this.storage.upload(path, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => this.down.emit(url));
      })
    ).subscribe();
  }

  isImage(file: File): boolean {
    return /^image\//.test(file.type);
  }

  previewImg(file: any): SafeUrl {
    const url = window.URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
