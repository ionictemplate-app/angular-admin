import {Id} from './common.model';

export class GoodsModel implements Id {
  public id: string;
  public name: string;
  public img: string;
  public price: number;
  public saleNum: number;
  public subCateId: string;
  public img1: string;
  public inventory: number;
  public isStart: boolean;
  public isCheck = true;
  public cNum = 1;
  public cate2: string;
  public rank: number;
  public docId: string;
  public cateName?: string;

  constructor(good: any = {}) {
    this.subCateId = good.subCateId;
    this.id = good.id;
    this.img = good.img;
    this.inventory = good.inventory;
    this.name = good.name || '';
    this.price = good.price || 0;
    this.saleNum = good.likes || 0;
    this.isStart = good.isStart || true;
    this.cNum = good.cNum || 0;
    this.cate2 = good.cate2;
    this.rank = good.rank;
    this.docId = good.docId;
    this.cateName = good.cateName;
  }
}
