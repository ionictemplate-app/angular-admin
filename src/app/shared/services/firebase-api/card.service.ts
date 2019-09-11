import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {CardModel} from '../../model';
import {MyError} from './my-error';
import {BaseService} from './base.service';

@Injectable({providedIn: 'root'})
export class CardService extends BaseService<CardModel> {
    constructor(public db: AngularFirestore,
                public myErr: MyError) {
        super(db, myErr, 'card');
    }
}
