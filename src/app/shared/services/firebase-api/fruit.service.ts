
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FruitModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';


@Injectable({providedIn: 'root'})
export class FruitService extends BaseService<FruitModel> {
    constructor(public db: AngularFirestore,
                public myErr: MyError) {
        super(db, myErr, 'goods');
    }
}
