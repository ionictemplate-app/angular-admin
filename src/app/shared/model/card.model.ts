import {Id} from './common.model';

export class CardModel implements Id {
  public id: string;
  public name: string;
  public img: string;
  public docId: string;


  public constructor(model: any = {}) {
    this.id = model.id;
    this.name = model.name;
    this.img = model.img;
    this.docId = model.docId;
  }
}
