import {Injectable} from '@angular/core';
import {BaseService} from '../services/firebase-api/base.service';
import {combineLatest, forkJoin} from 'rxjs';
import {DialogService} from '../../components';
import {Id} from '../model';

@Injectable({providedIn: 'root'})
export class PageDataService {

  constructor(private dialog: DialogService) {
  }

  getList(serviceList: Array<any>): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      combineLatest(serviceList).subscribe(results => {
        if (results) {
          resolve(results);
        }
      }, error => this.dialog.alert(error));
    });
  }

  getSingleList<T extends Id>(service: BaseService<T>): Promise<Array<T>> {
    return new Promise<Array<T>>(async (resolve, reject) => {
      service.getList().subscribe(result => {
        resolve(result);
      }, error => this.dialog.alert(error));
    });
  }

  getModel<T extends Id>(service: BaseService<T>, id: number): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      service.getModel(id).subscribe(result => {
        resolve(result);
      }, error => this.dialog.alert(error));
    });
  }
}
