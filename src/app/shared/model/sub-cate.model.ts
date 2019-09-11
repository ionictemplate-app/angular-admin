import {Id} from './common.model';

export class SubCateModel implements Id {
  public id: string;
  public name: string;
  public img: string;
  public state?: boolean;
  public docId: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.img = model.img;
    this.name = model.name;
    this.state = model.state;
    this.docId = model.docId;
  }
}
