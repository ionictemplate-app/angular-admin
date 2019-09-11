import {Id} from './common.model';

export class FruitModel implements Id {
  public id: string;
  public name: string;
  public img: string;
  public price: number;
  public saleNum: number;
  public subCateId: number;
  public inventory: number;
  public place: string;
  public docId: string;

  constructor(good: any = {}) {
    this.subCateId = good.subCateId;
    this.id = good.id;
    this.img = good.img;
    this.inventory = good.inventory;
    this.name = good.name || '';
    this.price = good.price || 0;
    this.saleNum = good.likes || 0;
    this.place = good.place;
    this.docId = good.docId;
  }
}
