import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {CouponModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';


@Injectable({providedIn: 'root'})
export class CouponsService extends BaseService<CouponModel> {
    constructor(public db: AngularFirestore,
                public myErr: MyError) {
        super(db, myErr, 'coupon');
    }
}

