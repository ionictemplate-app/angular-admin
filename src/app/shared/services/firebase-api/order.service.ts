import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrderModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';

@Injectable({providedIn: 'root'})
export class OrderService extends BaseService<OrderModel> {
    constructor(public db: AngularFirestore,
                public myErr: MyError) {
        super(db, myErr, 'orders');
    }
}
