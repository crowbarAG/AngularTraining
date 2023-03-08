import { BasketItem } from "./BasketItem";

export interface Basket{
    items: BasketItem[];
    count: number;
    total: number;
}