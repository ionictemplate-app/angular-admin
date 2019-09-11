import {Id} from './common.model';

export class AddressModel implements Id {
  public id: string;
  public name: string;
  public address: string;
  public phone: string;
  public userId: number;
  public street: string;
  public docId: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.name = model.name;
    this.address = model.address;
    this.phone = model.phone;
    this.userId = model.userId;
    this.street = model.street;
    this.docId = model.docId;
  }
}
