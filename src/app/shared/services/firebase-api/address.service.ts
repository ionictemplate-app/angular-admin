import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AddressModel, Id} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';

@Injectable({providedIn: 'root'})
export class AddressService extends BaseService<AddressModel> {
  constructor(public db: AngularFirestore,
              public myErr: MyError) {
    super(db, myErr, 'address');
  }
}

