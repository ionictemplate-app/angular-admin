import {Id} from './common.model';

export class FavoriteModel implements Id {
  public id: string;
  public userId: number;
  public goodId: number;
  public docId: string;
  public constructor(model: any = {}) {
    this.goodId = model.goodId;
    this.userId = model.userId;
    this.docId = model.docId;
  }
}
