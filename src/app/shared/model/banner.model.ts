import {Id} from './common.model';

export class BannerModel implements Id {
  public id: string;
  public name: string;
  public img: string;
  public cateId: string;
  public docId: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.name = model.name;
    this.img = model.img;
    this.cateId = model.cateId;
    this.docId = model.docId;

  }

}
