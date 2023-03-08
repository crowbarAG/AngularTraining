import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Basket } from "../model/Basket";
import { BasketItem } from "../model/BasketItem";
import { Product } from "../model/Product";

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private basket: Basket = {
        items: [],
        count: 0,
        total: 0
    };
    private stateBasket = new BehaviorSubject<Basket>(this.basket);

    constructor(){}

    addItem(product: Product): void{
        if(this.basketHasItem(product)){
            this.stateBasket.getValue().items.find(basketItem => basketItem.item.id == product.id)!.count++;
        }
        else{
            let newItem: BasketItem = {
                item: product,
                count: 1
            }
            this.basket.items?.push(newItem);
            this.stateBasket.next(this.basket);
        }
        this.stateBasket.getValue().count++;
        this.stateBasket.getValue().total += product.price;
        console.log(this.stateBasket);
    }

    getItemCount(): Observable<number>{
        return this.stateBasket.pipe(
            map(data => data.count)
        );
    }

    getTotal(): Observable<number>{
        return this.stateBasket.pipe(
            map(data => data.total)
        );
    }

    getItems(): Observable<BasketItem[]>{
        return this.stateBasket.pipe(
            map(data => data.items)
        );
    }

    basketHasItem(product: Product): boolean{
        let result = this.stateBasket.getValue().items?.find((basketItem) => 
            basketItem.item?.id == product.id);
        return result != null;
    }
}
