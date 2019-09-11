import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UsersService extends BaseService<UserModel> {
  public isAuthenticated = false;

  constructor(public db: AngularFirestore,
              public myErr: MyError) {
    super(db, myErr, 'users');
  }

  login(name: string, pwd: string) {
    return this.baseCollection.snapshotChanges()
      .pipe(
        map((d) => {
          return d.map((action) => {
            const data = action.payload.doc.data();
            return new UserModel({docId: action.payload.doc.id, ...data});
          }).find(s => s.userName === name && s.pwd === pwd);
        }),
        catchError(this.myErr.handleError)
      );
  }
}
