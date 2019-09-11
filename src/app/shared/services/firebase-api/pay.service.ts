import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {PayModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';

@Injectable({providedIn: 'root'})
export class PayService extends BaseService<PayModel> {
    constructor(public db: AngularFirestore,
                public myErr: MyError) {
        super(db, myErr, 'pays');
    }
}

