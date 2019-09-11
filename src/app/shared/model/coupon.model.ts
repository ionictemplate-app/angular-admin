import {Id} from './common.model';

export class CouponModel implements Id {
    public id: string;
    public name: string;
    public img: string;
    public useTime: string;
    public docId: string;
    public condition: string;

    constructor(model: any = {}) {
        this.condition = model.condition;
        this.id = model.id;
        this.docId = model.docId;
        this.img = model.img;
        this.useTime = model.useTime;
        this.name = model.name;
    }
}
