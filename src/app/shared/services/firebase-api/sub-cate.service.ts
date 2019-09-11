import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {SubCateModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';


@Injectable({providedIn: 'root'})
export class SubCateService extends BaseService<SubCateModel> {
    constructor(public db: AngularFirestore,
                public myErr: MyError) {
        super(db, myErr, 'subcate');
    }
}

