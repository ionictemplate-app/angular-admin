import {Id} from './common.model';

export class OrderModel implements Id {
  public id: string;
  public num: number;
  public date: string;
  public total: number;
  public payId: number;
  public name: string;
  public img: string;
  public state: string;
  public docId: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.num = model.num;
    this.date = model.date;
    this.total = model.total;
    this.payId = model.payId;
    this.name = model.name;
    this.img = model.img;
    this.state = model.state;
    this.docId = model.docId;
  }
}
