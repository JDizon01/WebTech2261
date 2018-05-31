import { Ingredient } from './Ingredient.class';

export class ListBox {

    confirmedList: Ingredient[] = [];
    shopList: Ingredient[] = [];

    constructor(shopList: Array<Ingredient>, confirmedList: Array<Ingredient>) {
        this.shopList = shopList;
        this.confirmedList = confirmedList;
    }

    getShoplist() {
        return this.shopList;
    }

    getConflist() {
        return this.confirmedList;
    }

}
