import { IProduct } from "../Products";
import { Cart } from "./Cart";

export interface ICartProduct {
    product: IProduct,
    count: number
}

export default Cart;