import {Id} from './common.model';

export class NoticeModel implements Id {
  public id: string;
  public name: string;
  public date: string;
  public content: string;
  public docId: string;
}
