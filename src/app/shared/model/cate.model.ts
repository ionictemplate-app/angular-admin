import {Id} from './common.model';

export class CateModel implements Id {
  public id: string;
  public name: string;
  public docId: string;

  constructor(model: any = {}) {
    this.id = model.id;
    this.name = model.name;
    this.docId = model.docId;
  }
}
