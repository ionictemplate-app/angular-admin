import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrderDetailModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';

@Injectable({providedIn: 'root'})
export class OrderDetailService extends BaseService<OrderDetailModel> {
    constructor(public db: AngularFirestore,
                public myErr: MyError) {
        super(db, myErr, 'orderdetail');
    }
}
