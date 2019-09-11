export class FilterModel {
    public type: number;
    public name: string;
    public cate: number;
}

export const FILTERSMultiple: Array<FilterModel> = [
    {cate: 1, type: 1, name: 'Multiple'},
    {cate: 1, type: 2, name: 'Lowest price'},
    {cate: 1, type: 3, name: 'Highest price'},
    {cate: 1, type: 4, name: 'Latest'}
];
export const FILTERSService: Array<FilterModel> = [
    {cate: 2, type: 1, name: 'Cash on delivery'},
    {cate: 2, type: 2, name: 'Online pay'},
    {cate: 2, type: 3, name: 'Promotion'},
];


