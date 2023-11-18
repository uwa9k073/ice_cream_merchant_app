import { ICartProduct } from "../Cart";
import { Products } from "./Products";

export interface IProduct {
    name: string;
    img_src: string;
    img_alt: string;
    description: string;
    price: number;
}

export function addToCart(product?: IProduct) {
    if (!product) {
        return;
    }
    let cart: ICartProduct[] = JSON.parse(localStorage.getItem('cart') ?? '[]')
    const existingCartItem = cart.find((item) => item.product.name === product.name);
    if (existingCartItem) {
        console.log('ok')
        cart = cart.map((item) => item.product.name === existingCartItem.product.name ? { product: item.product, count: item.count + 1 } : item);
    } else {
        cart = [...cart, { product, count: 1 }]
    }
    localStorage.setItem('cart', JSON.stringify(cart));
};

export default Products;