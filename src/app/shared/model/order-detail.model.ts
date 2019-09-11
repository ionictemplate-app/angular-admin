import {Id} from './common.model';

export class OrderDetailModel implements Id {
  public id: string;
  public orderId: string;
  public goodId: number;
  public docId: string;

  constructor(model: any = {}) {
    this.orderId = model.orderId;
    this.goodId = model.goodId;
    this.docId = model.docId;
  }
}
