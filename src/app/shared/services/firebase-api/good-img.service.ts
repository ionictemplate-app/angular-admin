import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {GoodImgModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';


@Injectable({providedIn: 'root'})
export class GoodImgService extends BaseService<GoodImgModel> {
    constructor(public db: AngularFirestore,
                public myErr: MyError) {
        super(db, myErr, 'cate');
    }
}
