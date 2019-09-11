// import {Injectable} from '@angular/core';
// import {BannerService} from './banner.service';
// import {
//     BannerModel,
//     CardModel,
//     CateModel,
//     CateRelationModel,
//     CouponModel,
//     FavoriteModel, FruitModel,
//     GoodsModel,
//     PayModel,
//     SubCateModel,
//     UserModel
// } from '../../model';
// import {CardService} from './card.service';
// import {CateService} from './cate.service';
// import {CouponsService} from './coupons.service';
// import {FavoriteService} from './favorite.service';
// import {GoodsService} from './goods.service';
// import {PayService} from './pay.service';
// import {UsersService} from './users.service';
// import {SubCateService} from './sub-cate.service';
// import {CateRelationService} from './cate-relation.service';
// import {FriutService} from './fruit.service';
//
// @Injectable({providedIn: 'root'})
// export class InitService {
//     constructor(private bannerService: BannerService,
//                 private cardService: CardService,
//                 private cateService: CateService,
//                 private couponService: CouponsService,
//                 private favoriteService: FavoriteService,
//                 private goodService: GoodsService,
//                 private payService: PayService,
//                 private userService: UsersService,
//                 private subCateService: SubCateService,
//                 private fService: FriutService,
//                 private cateRelationService: CateRelationService) {
//     }
//
//     public initData() {
//         this.addBanner();
//         this.addCard();
//         this.addCate();
//         this.addSubCate();
//         this.addCateRelation();
//         this.addFavorite();
//         this.addCoupon();
//         this.addPay();
//         this.addUser();
//         this.addGoods();
//     }
//
//     private addBanner() {
//         BannerList.map(b => {
//             this.bannerService.addModel(b);
//         });
//     }
//
//     private addCard() {
//         CardList.map(b => {
//             this.cardService.addModel(b);
//         });
//     }
//
//     private addCate() {
//         CateList.map(b => {
//             this.cateService.addModel(b);
//         });
//     }
//
//     private addSubCate() {
//         SubCateList.map(b => {
//             this.subCateService.addModel(b);
//         });
//     }
//
//     private addCateRelation() {
//         CateRelationList.map(b => {
//             this.cateRelationService.addModel(b);
//         });
//     }
//
//     private addCoupon() {
//         CouponList.map(b => {
//             this.couponService.addModel(b);
//         });
//     }
//
//     private addFavorite() {
//         FavoriteList.map(b => {
//             this.favoriteService.addModel(b);
//         });
//     }
//
//     private addPay() {
//         PayList.map(b => {
//             this.payService.addModel(b);
//         });
//     }
//
//     private addUser() {
//         UserList.map(b => {
//             this.userService.addModel(b);
//         });
//     }
//
//     private addGoods() {
//         GoodsList.map(b => {
//             this.fService.addModel(b);
//         });
//     }
// }
//
// export const BannerList: Array<BannerModel> = [
//     {id: 1, name: 'banner1', img: 'assets/img/banner/banner1.jpg', cateId: 1},
//     {id: 2, name: 'banner2', img: 'assets/img/banner/banner2.jpg', cateId: 3},
//     {id: 3, name: 'banner3', img: 'assets/img/banner/banner3.jpg', cateId: 2},
//     {id: 4, name: 'banner3', img: 'assets/img/banner/banner4.jpg', cateId: 12},
//     {id: 5, name: 'banner3', img: 'assets/img/banner/banner5.jpg', cateId: 11}
// ];
//
// export const CardList: Array<CardModel> = [
//     {id: 1, name: 'banner1', img: 'assets/img/card/card1.jpg'},
//     {id: 2, name: 'banner2', img: 'assets/img/card/card2.jpg'},
//     {id: 3, name: 'banner3', img: 'assets/img/card/card3.jpg'}
// ];
//
// export const CateList: Array<CateModel> = [
//     {id: 1, name: 'Recommend'},
//     {id: 2, name: 'Fresh'},
//     {id: 3, name: 'Tropical'},
//     {id: 4, name: 'Handpick'},
//     {id: 5, name: 'Nearby'},
//     {id: 6, name: 'Import'}
// ];
//
// export const SubCateList: Array<SubCateModel> = [
//     {id: 1, name: 'Apple', img: 'assets/img/subCate/apple.jpg'},
//     {id: 2, name: 'Banana', img: 'assets/img/subCate/banana.jpg'},
//     {id: 3, name: 'Watermelon', img: 'assets/img/subCate/watermelon.jpg'},
//     {id: 5, name: 'Lemon', img: 'assets/img/subCate/lemon.jpg'},
//     {id: 6, name: 'Mango', img: 'assets/img/subCate/mango.jpg'},
//     {id: 7, name: 'Strawberry', img: 'assets/img/subCate/strawberry.jpg'},
//     {id: 8, name: 'Pitaya', img: 'assets/img/subCate/pitaya.jpg'},
//     {id: 10, name: 'Durian', img: 'assets/img/subCate/durian.jpg'},
//     {id: 11, name: 'Cherry', img: 'assets/img/subCate/cherry.jpg'},
//     {id: 12, name: 'Grape', img: 'assets/img/subCate/grape.jpg'},
//     {id: 13, name: 'Orange', img: 'assets/img/subCate/orange.jpg'},
//     {id: 14, name: 'Coconut', img: 'assets/img/subCate/coconut.jpg'},
//     {id: 15, name: 'Kiwifruit', img: 'assets/img/subCate/kiwifruit.jpg'},
// ];
//
//
// export const CateRelationList: Array<CateRelationModel> = [
//     {id: 1, cateId: 1, subCateId: 1},
//     {id: 2, cateId: 1, subCateId: 2},
//     {id: 3, cateId: 1, subCateId: 3},
//     {id: 5, cateId: 1, subCateId: 5},
//     {id: 6, cateId: 1, subCateId: 6},
//     {id: 7, cateId: 1, subCateId: 7},
//     {id: 8, cateId: 1, subCateId: 8},
//     {id: 10, cateId: 1, subCateId: 10},
//
//     {id: 11, cateId: 2, subCateId: 11},
//     {id: 12, cateId: 2, subCateId: 12},
//     {id: 13, cateId: 2, subCateId: 13},
//     {id: 14, cateId: 2, subCateId: 14},
//     {id: 15, cateId: 2, subCateId: 15},
//     {id: 16, cateId: 2, subCateId: 10},
//
//     {id: 17, cateId: 3, subCateId: 2},
//     {id: 18, cateId: 3, subCateId: 5},
//     {id: 19, cateId: 3, subCateId: 6},
//     {id: 20, cateId: 3, subCateId: 7},
//     {id: 21, cateId: 3, subCateId: 15},
//     {id: 22, cateId: 3, subCateId: 13},
//     {id: 23, cateId: 3, subCateId: 12},
//     {id: 24, cateId: 3, subCateId: 11},
//
//     {id: 25, cateId: 4, subCateId: 7},
//     {id: 27, cateId: 4, subCateId: 12},
//     {id: 28, cateId: 4, subCateId: 3},
//     {id: 30, cateId: 4, subCateId: 5},
//     {id: 31, cateId: 4, subCateId: 10},
//     {id: 32, cateId: 4, subCateId: 11},
//     {id: 33, cateId: 4, subCateId: 13},
//
//     {id: 34, cateId: 5, subCateId: 11},
//     {id: 35, cateId: 5, subCateId: 5},
//     {id: 37, cateId: 5, subCateId: 13},
//     {id: 38, cateId: 5, subCateId: 1},
//     {id: 39, cateId: 5, subCateId: 12},
//     {id: 40, cateId: 5, subCateId: 11},
//     {id: 41, cateId: 5, subCateId: 7},
//     {id: 42, cateId: 5, subCateId: 8},
//
//     {id: 43, cateId: 6, subCateId: 13},
//     {id: 44, cateId: 6, subCateId: 12},
//     {id: 45, cateId: 6, subCateId: 1},
//     {id: 46, cateId: 6, subCateId: 3},
//     {id: 47, cateId: 6, subCateId: 2},
//     {id: 48, cateId: 6, subCateId: 6},
//     {id: 50, cateId: 6, subCateId: 14},
//     {id: 51, cateId: 6, subCateId: 11},
//
// ];
//
// export const CouponList: Array<CouponModel> = [
//     {
//         id: 1,
//         name: 'Coupon1',
//         img: 'assets/img/coupon/coupon1.jpg',
//         useTime: '2019-12-12',
//         condition: '10%off once purchase up to 199'
//     },
//     {
//         id: 2,
//         name: 'Coupon2',
//         img: 'assets/img/coupon/coupon2.jpg',
//         useTime: '2019-12-12',
//         condition: '20%off once purchase up to 299'
//     },
//     {
//         id: 3,
//         name: 'Coupon3',
//         img: 'assets/img/coupon/coupon3.jpg',
//         useTime: '2019-12-12',
//         condition: '30%off once purchase up to 399'
//     },
//     {
//         id: 4,
//         name: 'Coupon4',
//         img: 'assets/img/coupon/coupon4.jpg',
//         useTime: '2019-12-12',
//         condition: '40%off once purchase up to 499'
//     },
//     {
//         id: 5,
//         name: 'Coupon5',
//         img: 'assets/img/coupon/coupon5.jpg',
//         useTime: '2019-12-12',
//         condition: '50%off once purchase up to 599'
//     },
//     {
//         id: 6,
//         name: 'Coupon6',
//         img: 'assets/img/coupon/coupon6.jpg',
//         useTime: '2019-12-12',
//         condition: '60%off once purchase up to 699'
//     },
//     {
//         id: 7,
//         name: 'Coupon7',
//         img: 'assets/img/coupon/coupon7.jpg',
//         useTime: '2019-12-12',
//         condition: '70%off once purchase up to 799'
//     }
// ];
//
// export const FavoriteList: Array<FavoriteModel> = [
//     {userId: 1, goodId: 1},
//     {userId: 1, goodId: 2},
//     {userId: 1, goodId: 3},
//     {userId: 1, goodId: 4},
//     {userId: 1, goodId: 5},
//     {userId: 1, goodId: 6},
// ];
//
//
// export const PayList: Array<PayModel> = [
//     {id: 1, name: 'pay1', img: 'assets/img/pay/pay1.jpg'},
//     {id: 2, name: 'pay2', img: 'assets/img/pay/pay2.jpg'},
//     {id: 3, name: 'pay3', img: 'assets/img/pay/pay3.jpg'}
// ];
//
//
// export const UserList: Array<UserModel> = [
//     {id: 1, userName: 'Larissa', pwd: '123456'}
// ];
//
// export const GoodsList: Array<FruitModel> = [
//     {
//         id: 1,
//         name: 'Fresh apple in season',
//         img: 'assets/img/goods/good1.jpg',
//         price: 10.22,
//         saleNum: 30,
//         subCateId: 1,
//         inventory: 100,
//         place: 'From Tokyo'
//     },
//     {
//         id: 2,
//         name: 'New Zealand apple',
//         img: 'assets/img/goods/good2.jpg',
//         price: 7.88,
//         saleNum: 30,
//         subCateId: 1,
//         inventory: 100,
//         place: 'From New Zealand'
//     },
//     {
//         id: 3,
//         name: 'Red snake apple',
//         img: 'assets/img/goods/good3.jpg',
//         price: 3.15,
//         saleNum: 30,
//         subCateId: 1,
//         inventory: 100,
//         place: 'From American'
//     },
//     {
//         id: 4,
//         name: 'Fresh crisp green apples',
//         img: 'assets/img/goods/good4.jpg',
//         price: 9.99,
//         saleNum: 70,
//         subCateId: 1,
//         inventory: 300,
//         place: 'From American'
//     },
//     {
//         id: 5,
//         name: 'Fresh QUEEN imported sweet crisp apple',
//         img: 'assets/img/goods/good5.jpg',
//         price: 9.99,
//         saleNum: 70,
//         subCateId: 1,
//         inventory: 900,
//         place: 'From New Zealand'
//     },
//     {
//         id: 6,
//         name: 'sweet crisp apple',
//         img: 'assets/img/goods/good6.jpg',
//         price: 9.99,
//         saleNum: 70,
//         subCateId: 1,
//         inventory: 900,
//         place: 'From New Zealand'
//     },
//     {
//         id: 7,
//         name: 'sweet big apple',
//         img: 'assets/img/goods/good7.jpg',
//         price: 9.99,
//         saleNum: 70,
//         subCateId: 1,
//         inventory: 900,
//         place: 'From Indonesia'
//     },
//     {
//         id: 8,
//         name: 'Red rose apple',
//         img: 'assets/img/goods/good8.jpg',
//         price: 11.99,
//         saleNum: 69,
//         subCateId: 1,
//         inventory: 600,
//         place: 'From Indonesia'
//     },
//
//     {
//         id: 9,
//         name: 'High-quality bananas',
//         img: 'assets/img/goods/good9.jpg',
//         price: 2.99,
//         saleNum: 110,
//         subCateId: 2,
//         inventory: 600,
//         place: 'From Singapore'
//     },
//     {
//         id: 10,
//         name: 'Fruit fresh and sweet bananas',
//         img: 'assets/img/goods/good10.jpg',
//         price: 1.99,
//         saleNum: 10,
//         subCateId: 2,
//         inventory: 600,
//         place: 'From Russia'
//     },
//     {
//         id: 11,
//         name: 'Fresh  bananas',
//         img: 'assets/img/goods/good11.jpg',
//         price: 2.19,
//         saleNum: 300,
//         subCateId: 2,
//         inventory: 600,
//         place: 'From Singapore'
//     },
//     {
//         id: 12,
//         name: 'Fresh bananas',
//         img: 'assets/img/goods/good12.jpg',
//         price: 2.19,
//         saleNum: 300,
//         subCateId: 2,
//         inventory: 600,
//         place: 'From Canada'
//     },
//     {
//         id: 13,
//         name: 'Fresh fruit from millet',
//         img: 'assets/img/goods/good13.jpg',
//         price: 2.19,
//         saleNum: 300,
//         subCateId: 2,
//         inventory: 600,
//         place: 'From Canada'
//     },
//     {
//         id: 14,
//         name: 'Fresh millet bananas',
//         img: 'assets/img/goods/good14.jpg',
//         price: 2.19,
//         saleNum: 300,
//         subCateId: 2,
//         inventory: 600,
//         place: 'From Canada'
//     },
//
//     {
//         id: 15,
//         name: 'black beauty watermelon',
//         img: 'assets/img/goods/good15.jpg',
//         price: 1.19,
//         saleNum: 300,
//         subCateId: 3,
//         inventory: 600,
//         place: 'From Vietnam'
//     },
//     {
//         id: 16,
//         name: 'black  watermelon',
//         img: 'assets/img/goods/good16.jpg',
//         price: 1.09,
//         saleNum: 300,
//         subCateId: 3,
//         inventory: 600,
//         place: 'From Vietnam'
//     },
//     {
//         id: 17,
//         name: 'big watermelon',
//         img: 'assets/img/goods/good17.jpg',
//         price: 1.09,
//         saleNum: 300,
//         subCateId: 3,
//         inventory: 600,
//         place: 'From Vietnam'
//     },
//     {
//         id: 18,
//         name: 'Small yellow watermelon',
//         img: 'assets/img/goods/good18.jpg',
//         price: 1.09,
//         saleNum: 300,
//         subCateId: 3,
//         inventory: 600,
//         place: 'From Vietnam'
//     },
//
//     {
//         id: 20,
//         name: 'Seedless grape',
//         img: 'assets/img/goods/good20.jpg',
//         price: 5.09,
//         saleNum: 600,
//         subCateId: 12,
//         inventory: 600,
//         place: 'From China'
//     },
//     {
//         id: 21,
//         name: 'Black grapes',
//         img: 'assets/img/goods/good21.jpg',
//         price: 6.09,
//         saleNum: 600,
//         subCateId: 12,
//         inventory: 600,
//         place: 'From Australia'
//     },
//     {
//         id: 22,
//         name: 'Fresh red grape',
//         img: 'assets/img/goods/good22.jpg',
//         price: 5.09,
//         saleNum: 600,
//         subCateId: 12,
//         inventory: 600,
//         place: 'From Australia'
//     },
//     {
//         id: 23,
//         name: 'Red grape',
//         img: 'assets/img/goods/good23.jpg',
//         price: 9.09,
//         saleNum: 600,
//         subCateId: 12,
//         inventory: 600,
//         place: 'From Australia'
//     },
//
//
//     {
//         id: 25,
//         name: 'Egyptian oranges',
//         img: 'assets/img/goods/good25.jpg',
//         price: 6.09,
//         saleNum: 600,
//         subCateId: 13,
//         inventory: 600,
//         place: 'From Egyptian'
//     },
//     {
//         id: 26,
//         name: '12 navel oranges',
//         img: 'assets/img/goods/good26.jpg',
//         price: 9.09,
//         saleNum: 600,
//         subCateId: 13,
//         inventory: 600,
//         place: 'From Australia'
//     },
//     {
//         id: 27,
//         name: 'Fresh oranges',
//         img: 'assets/img/goods/good27.jpg',
//         price: 9.09,
//         saleNum: 600,
//         subCateId: 13,
//         inventory: 600,
//         place: 'From Australia'
//     },
//     {
//         id: 28,
//         name: 'Fresh fruit oranges',
//         img: 'assets/img/goods/good28.jpg',
//         price: 9.09,
//         saleNum: 600,
//         subCateId: 13,
//         inventory: 600,
//         place: 'From Australia'
//     },
//
//     {
//         id: 29,
//         name: 'Fresh Mango one',
//         img: 'assets/img/goods/good29.jpg',
//         price: 3.02,
//         saleNum: 600,
//         subCateId: 6,
//         inventory: 600,
//         place: 'From Thailand'
//     },
//     {
//         id: 30,
//         name: 'Fresh Mango two',
//         img: 'assets/img/goods/good30.jpg',
//         price: 3.02,
//         saleNum: 600,
//         subCateId: 6,
//         inventory: 600,
//         place: 'From Thailand'
//     },
//     {
//         id: 31,
//         name: 'Fresh Mango three',
//         img: 'assets/img/goods/good31.jpg',
//         price: 3.02,
//         saleNum: 600,
//         subCateId: 6,
//         inventory: 600,
//         place: 'From Thailand'
//     },
//     {
//         id: 32,
//         name: 'Fresh green Mango',
//         img: 'assets/img/goods/good32.jpg',
//         price: 3.06,
//         saleNum: 600,
//         subCateId: 6,
//         inventory: 600,
//         place: 'From Thailand'
//     },
//
//     {
//         id: 33,
//         name: 'Fresh strawberries',
//         img: 'assets/img/goods/good33.jpg',
//         price: 21.06,
//         saleNum: 600,
//         subCateId: 7,
//         inventory: 600,
//         place: 'From Thailand'
//     },
//     {
//         id: 34,
//         name: 'Fresh strawberries two',
//         img: 'assets/img/goods/good34.jpg',
//         price: 21.06,
//         saleNum: 600,
//         subCateId: 7,
//         inventory: 600,
//         place: 'From Thailand'
//     },
//     {
//         id: 35,
//         name: 'Fresh red strawberries',
//         img: 'assets/img/goods/good35.jpg',
//         price: 21.06,
//         saleNum: 600,
//         subCateId: 7,
//         inventory: 600,
//         place: 'From Thailand'
//     },
//     {
//         id: 104,
//         name: 'Fresh  strawberries',
//         img: 'assets/img/goods/good104.jpg',
//         price: 12.06,
//         saleNum: 620,
//         subCateId: 7,
//         inventory: 300,
//         place: 'From Thailand'
//     },
//
//     {
//         id: 36,
//         name: 'Fresh red Pitaya',
//         img: 'assets/img/goods/good36.jpg',
//         price: 3.01,
//         saleNum: 300,
//         subCateId: 8,
//         inventory: 200,
//         place: 'From Vietnam'
//     },
//     {
//         id: 37,
//         name: 'Red Pitaya',
//         img: 'assets/img/goods/good37.jpg',
//         price: 3.02,
//         saleNum: 300,
//         subCateId: 8,
//         inventory: 200,
//         place: 'From Vietnam'
//     },
//     {
//         id: 38,
//         name: 'Red Pitaya one',
//         img: 'assets/img/goods/good38.jpg',
//         price: 3.00,
//         saleNum: 300,
//         subCateId: 8,
//         inventory: 200,
//         place: 'From Vietnam'
//     },
//     {
//         id: 103,
//         name: 'Red Pitaya one',
//         img: 'assets/img/goods/good103.jpg',
//         price: 3.10,
//         saleNum: 200,
//         subCateId: 8,
//         inventory: 200,
//         place: 'From Vietnam'
//     },
//
//     {
//         id: 39,
//         name: 'Golden Pillow Durian',
//         img: 'assets/img/goods/good39.jpg',
//         price: 50.00,
//         saleNum: 5000,
//         subCateId: 10,
//         inventory: 900,
//         place: 'From Thailand'
//     },
//     {
//         id: 40,
//         name: 'Golden Pillow Durian',
//         img: 'assets/img/goods/good40.jpg',
//         price: 50.00,
//         saleNum: 5000,
//         subCateId: 10,
//         inventory: 900,
//         place: 'From Thailand'
//     },
//     {
//         id: 41,
//         name: 'Golden Pillow Durian',
//         img: 'assets/img/goods/good41.jpg',
//         price: 50.00,
//         saleNum: 5000,
//         subCateId: 10,
//         inventory: 900,
//         place: 'From Thailand'
//     },
//     {
//         id: 102,
//         name: 'Golden Pillow Durian',
//         img: 'assets/img/goods/good102.jpg',
//         price: 51.00,
//         saleNum: 1000,
//         subCateId: 10,
//         inventory: 100,
//         place: 'From Thailand'
//     },
//
//     {
//         id: 42,
//         name: 'Large Cherry Fruits',
//         img: 'assets/img/goods/good42.jpg',
//         price: 20.00,
//         saleNum: 2000,
//         subCateId: 11,
//         inventory: 600,
//         place: 'from the United States'
//     },
//     {
//         id: 43,
//         name: 'Large Cherry Fruits',
//         img: 'assets/img/goods/good43.jpg',
//         price: 23.00,
//         saleNum: 1000,
//         subCateId: 11,
//         inventory: 500,
//         place: 'from the United States'
//     },
//     {
//         id: 44,
//         name: 'Large Cherry Fruits',
//         img: 'assets/img/goods/good44.jpg',
//         price: 21.10,
//         saleNum: 2500,
//         subCateId: 11,
//         inventory: 300,
//         place: 'from the United States'
//     },
//     {
//         id: 101,
//         name: 'Cherry Fruits',
//         img: 'assets/img/goods/good101.jpg',
//         price: 21.10,
//         saleNum: 2500,
//         subCateId: 11,
//         inventory: 300,
//         place: 'from the United States'
//     },
//
//     {
//         id: 45,
//         name: 'Large coconut',
//         img: 'assets/img/goods/good45.jpg',
//         price: 5.23,
//         saleNum: 34,
//         subCateId: 14,
//         inventory: 566,
//         place: 'from the United States'
//     },
//     {
//         id: 46,
//         name: 'Green coconut',
//         img: 'assets/img/goods/good46.jpg',
//         price: 5.18,
//         saleNum: 67,
//         subCateId: 14,
//         inventory: 100,
//         place: 'from the United States'
//     },
//     {
//         id: 47,
//         name: 'Large coconut',
//         img: 'assets/img/goods/good47.jpg',
//         price: 6.23,
//         saleNum: 90,
//         subCateId: 14,
//         inventory: 930,
//         place: 'from the United States'
//     },
//     {
//         id: 100,
//         name: 'New coconut',
//         img: 'assets/img/goods/good100.jpg',
//         price: 9.13,
//         saleNum: 51,
//         subCateId: 14,
//         inventory: 200,
//         place: 'from the United States'
//     },
//
//
//     {
//         id: 49,
//         name: 'Kiwifruit',
//         img: 'assets/img/goods/good49.jpg',
//         price: 6.13,
//         saleNum: 5,
//         subCateId: 15,
//         inventory: 900,
//         place: 'from the United States'
//     },
//     {
//         id: 50,
//         name: 'Kiwifruit',
//         img: 'assets/img/goods/good50.jpg',
//         price: 6.13,
//         saleNum: 5,
//         subCateId: 15,
//         inventory: 900,
//         place: 'from the United States'
//     },
//     {
//         id: 51,
//         name: 'Kiwifruit',
//         img: 'assets/img/goods/good51.jpg',
//         price: 6.13,
//         saleNum: 5,
//         subCateId: 15,
//         inventory: 900,
//         place: 'from the United States'
//     },
//     {
//         id: 52,
//         name: 'Green Kiwifruit',
//         img: 'assets/img/goods/good52.jpg',
//         price: 6.13,
//         saleNum: 5,
//         subCateId: 15,
//         inventory: 900,
//         place: 'from the United States'
//     },
// ];
