import {Id} from './common.model';

export class PayModel implements Id {
  public name: string;
  public img: string;
  public id: string;
  public docId: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.img = model.img;
    this.name = model.name;
    this.docId = model.docId;
  }
}
