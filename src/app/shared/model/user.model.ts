import {Id} from './common.model';

export class UserModel implements Id {
  public id: string;
  public userName: string;
  public pwd: string;
  public docId: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.userName = model.userName;
    this.pwd = model.pwd;
    this.docId = model.docId;
  }
}
