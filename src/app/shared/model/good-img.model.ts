import {Id} from './common.model';

export class GoodImgModel implements Id {
  public id: string;
  public goodId: number;
  public img: string;
  public docId: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.goodId = model.goodid;
    this.img = model.img;
    this.docId = model.docId;
  }

}
