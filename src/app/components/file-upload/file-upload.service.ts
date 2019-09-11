import {Injectable} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {finalize, tap} from 'rxjs/operators';
import {FileUploadRef} from './file-upload.ref';

@Injectable({providedIn: 'root'})
export class FileUploadService {
  files = [];
  previewUrl: SafeUrl;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  downloadUrl: Observable<string>;
  private basePath = 'uploads';

  constructor(
    private sanitizer: DomSanitizer,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
  }

  startUpload(event) {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (const file of files) {
      if (this.isImage(file)) {
        this.previewUrl = this.createURL(file);
        this.files.push(file);
        this.upload(file);
      }
    }
    const ref = new FileUploadRef(files);
    return ref;
  }

  upload(file) {
    const path = `${this.basePath}/${new Date().getTime()}_${file.name}`;
    this.task = this.storage.upload(path, file);
    this.percentage = this.task.percentageChanges();
    return (this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // save database
        }
      }),
      finalize(() => {
        this.downloadUrl = this.storage.ref(path).getDownloadURL();
      })
    ));
  }

  isImage(file: File): boolean {
    return /^image\//.test(file.type);
  }

  private createURL(file: any): SafeUrl {
    const url = window.URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
