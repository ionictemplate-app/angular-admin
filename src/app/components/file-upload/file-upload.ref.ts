import {Observable, Subject} from 'rxjs';

export class FileUploadRef {
  private readonly afterUploadSubject = new Subject<void>();

  constructor(files) {
    this.afterUploadSubject.next(files);
    this.afterUploadSubject.complete();
  }

  afterUpload(): Observable<void> {
    return this.afterUploadSubject.asObservable();
  }
}
